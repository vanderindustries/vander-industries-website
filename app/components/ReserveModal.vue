<template>
  <Teleport to="body">
    <div v-if="modelValue" class="modal-overlay" @click.self="$emit('update:modelValue', false)">
      <div class="modal-box">
        <button class="modal-close" @click="$emit('update:modelValue', false)">✕</button>

        <!-- Success state -->
        <div v-if="success" class="success-state">
          <div class="success-icon">✅</div>
          <h3>Deposit Received!</h3>
          <p>Your $500 deposit has been processed. A Vander Industries sales rep will contact you within 1 business day to confirm your order details and arrange delivery.</p>
          <div class="success-meta">
            <strong>What happens next:</strong>
            <ul>
              <li>Sales rep contacts you to finalize specs</li>
              <li>Shipping quote calculated by zone</li>
              <li>Balance due before shipment</li>
              <li>Ships within 1–2 business days of balance</li>
            </ul>
          </div>
          <button class="btn btn-primary w-full mt-24" @click="$emit('update:modelValue', false)">Close</button>
        </div>

        <!-- Payment form -->
        <div v-else>
          <div class="badge">Reserve Your Unit</div>
          <h3>{{ productName }}</h3>
          <p class="modal-sub">Secure your unit with a <strong>$500 refundable deposit</strong>. We'll contact you within 1 business day to finalize your order.</p>

          <div class="deposit-amount">
            <span class="deposit-label">Deposit Amount</span>
            <span class="deposit-value">$500.00</span>
          </div>

          <div class="form-group">
            <label>Full Name</label>
            <input v-model="form.name" type="text" placeholder="John Smith" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input v-model="form.email" type="email" placeholder="john@company.com" />
          </div>

          <div class="form-group">
            <label>Card Details</label>
            <div id="reserve-payment-element" class="stripe-element-wrap"></div>
          </div>

          <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>

          <button
            class="btn btn-primary w-full"
            :disabled="loading || !stripeReady"
            @click="submitPayment"
          >
            <span v-if="loading">Processing…</span>
            <span v-else>Pay $500 Deposit</span>
          </button>

          <p class="secure-note">🔒 Secured by Stripe. Your card data never touches our servers.</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
  productName: { type: String, default: 'Industrial Equipment' },
})
const emit = defineEmits(['update:modelValue'])

const config = useRuntimeConfig()
const form = reactive({ name: '', email: '' })
const loading = ref(false)
const success = ref(false)
const errorMsg = ref('')
const stripeReady = ref(false)

let stripe = null
let elements = null
let paymentElement = null

watch(() => props.modelValue, async (val) => {
  if (val) {
    await nextTick()
    await initStripe()
  } else {
    // reset
    success.value = false
    errorMsg.value = ''
    form.name = ''
    form.email = ''
  }
})

async function initStripe() {
  if (typeof window === 'undefined' || !window.Stripe) {
    errorMsg.value = 'Stripe failed to load. Please refresh.'
    return
  }

  try {
    stripe = window.Stripe(config.public.stripePublishableKey)

    // Create a PaymentIntent on the server
    const res = await $fetch('/api/create-payment-intent', { method: 'POST' })
    const { clientSecret } = res

    elements = stripe.elements({ clientSecret })
    paymentElement = elements.create('payment')
    paymentElement.mount('#reserve-payment-element')

    paymentElement.on('ready', () => {
      stripeReady.value = true
    })
  } catch (e) {
    errorMsg.value = 'Could not initialize payment. Please try again.'
    console.error(e)
  }
}

async function submitPayment() {
  if (!form.name || !form.email) {
    errorMsg.value = 'Please fill in your name and email.'
    return
  }

  loading.value = true
  errorMsg.value = ''

  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      payment_method_data: {
        billing_details: {
          name: form.name,
          email: form.email,
        },
      },
      return_url: `${window.location.origin}/thank-you`,
    },
    redirect: 'if_required',
  })

  if (error) {
    errorMsg.value = error.message
    loading.value = false
  } else {
    success.value = true
    loading.value = false
  }
}
</script>

<style scoped>
.modal-sub {
  color: var(--gray-700);
  font-size: 0.9rem;
  margin: 8px 0 20px;
  max-width: 100%;
}

.deposit-amount {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--gray-50);
  border: 2px solid var(--yellow);
  border-radius: var(--radius);
  padding: 14px 18px;
  margin-bottom: 20px;
}

.deposit-label {
  font-weight: 600;
  font-size: 0.9rem;
}

.deposit-value {
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--black);
}

.stripe-element-wrap {
  border: 2px solid var(--gray-300);
  border-radius: var(--radius);
  padding: 12px;
  min-height: 44px;
  transition: border-color 0.15s;
}

.stripe-element-wrap:focus-within {
  border-color: var(--yellow);
}

.error-msg {
  color: #c0392b;
  font-size: 0.9rem;
  margin-bottom: 12px;
  max-width: 100%;
}

.secure-note {
  text-align: center;
  color: var(--gray-500);
  font-size: 0.78rem;
  margin-top: 12px;
  max-width: 100%;
}

.success-state {
  text-align: center;
}

.success-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.success-state h3 {
  margin-bottom: 12px;
}

.success-state p {
  color: var(--gray-700);
  margin: 0 auto 20px;
  font-size: 0.95rem;
}

.success-meta {
  background: var(--gray-50);
  border-radius: var(--radius);
  padding: 18px 20px;
  text-align: left;
  margin-top: 16px;
}

.success-meta strong {
  display: block;
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.success-meta ul {
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.success-meta li {
  font-size: 0.88rem;
  color: var(--gray-700);
}

h3 {
  font-size: 1.3rem;
}
</style>
