<template>
  <Teleport to="body">
    <div v-if="modelValue" class="modal-overlay" @click.self="$emit('update:modelValue', false)">
      <div class="modal-box">
        <button class="modal-close" @click="$emit('update:modelValue', false)">✕</button>

        <div v-if="submitted" class="success-state">
          <div class="success-icon">📬</div>
          <h3>Message Received!</h3>
          <p>We'll be in touch within 1 business day. Check your inbox for a confirmation from our team.</p>
          <button class="btn btn-primary w-full mt-24" @click="$emit('update:modelValue', false)">Close</button>
        </div>

        <div v-else>
          <div class="badge">Request More Info</div>
          <h3>{{ productName }}</h3>
          <p class="modal-sub">Have questions? Fill out the form below and one of our equipment specialists will get back to you within 1 business day.</p>

          <div class="form-group">
            <label>Full Name *</label>
            <input v-model="form.name" type="text" placeholder="Jane Doe" />
          </div>
          <div class="form-group">
            <label>Email *</label>
            <input v-model="form.email" type="email" placeholder="jane@company.com" />
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input v-model="form.phone" type="tel" placeholder="(555) 000-0000" />
          </div>
          <div class="form-group">
            <label>Question / Message *</label>
            <textarea v-model="form.message" placeholder="e.g. Do you have this in a 4,000 lb capacity? How does freight work to Texas?"></textarea>
          </div>

          <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>

          <button class="btn btn-primary w-full" :disabled="loading" @click="submit">
            <span v-if="loading">Sending…</span>
            <span v-else>Send My Question</span>
          </button>
          <p class="response-note">📞 Prefer to talk? Call us at <strong>1-800-VANDER-1</strong></p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
  productName: { type: String, default: 'Equipment' },
})
defineEmits(['update:modelValue'])

const form = reactive({ name: '', email: '', phone: '', message: '' })
const loading = ref(false)
const submitted = ref(false)
const errorMsg = ref('')

watch(() => props.modelValue, (val) => {
  if (!val) {
    submitted.value = false
    errorMsg.value = ''
    Object.assign(form, { name: '', email: '', phone: '', message: '' })
  }
})

async function submit() {
  if (!form.name || !form.email || !form.message) {
    errorMsg.value = 'Please fill in your name, email, and message.'
    return
  }
  loading.value = true
  errorMsg.value = ''
  // Simulate submission (wire to real endpoint / email service later)
  await new Promise(r => setTimeout(r, 1200))
  submitted.value = true
  loading.value = false
}
</script>

<style scoped>
.modal-sub {
  color: var(--gray-700);
  font-size: 0.9rem;
  margin: 8px 0 20px;
  max-width: 100%;
}

.error-msg {
  color: #c0392b;
  font-size: 0.9rem;
  margin-bottom: 12px;
  max-width: 100%;
}

.response-note {
  text-align: center;
  color: var(--gray-500);
  font-size: 0.8rem;
  margin-top: 12px;
  max-width: 100%;
}

.success-state { text-align: center; }
.success-icon { font-size: 3rem; margin-bottom: 16px; }
.success-state h3 { margin-bottom: 12px; }
.success-state p { color: var(--gray-700); margin: 0 auto; font-size: 0.95rem; }

h3 { font-size: 1.3rem; }
</style>
