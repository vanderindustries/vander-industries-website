<template>
  <div>
    <section class="contact-hero">
      <div class="container">
        <div class="badge">Get In Touch</div>
        <h1>Request a Free Quote</h1>
        <p>Tell us what you need and we'll respond within 1 business day with pricing, availability, and a freight estimate to your location.</p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-layout">
        <div class="contact-form-wrap">
          <div v-if="submitted" class="success-card">
            <div class="success-icon">📬</div>
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. A Vander Industries equipment specialist will contact you within 1 business day.</p>
            <NuxtLink to="/" class="btn btn-primary mt-24">Back to Home</NuxtLink>
          </div>

          <form v-else @submit.prevent="submit">
            <h3>Get a Free Quote</h3>
            <p class="form-intro">No commitment required. Just tell us what you're looking for.</p>

            <div class="grid-2">
              <div class="form-group">
                <label>First Name *</label>
                <input v-model="form.firstName" type="text" placeholder="John" required />
              </div>
              <div class="form-group">
                <label>Last Name *</label>
                <input v-model="form.lastName" type="text" placeholder="Smith" required />
              </div>
            </div>

            <div class="form-group">
              <label>Company Name</label>
              <input v-model="form.company" type="text" placeholder="Acme Distribution LLC" />
            </div>

            <div class="grid-2">
              <div class="form-group">
                <label>Email *</label>
                <input v-model="form.email" type="email" placeholder="john@company.com" required />
              </div>
              <div class="form-group">
                <label>Phone *</label>
                <input v-model="form.phone" type="tel" placeholder="(555) 000-0000" required />
              </div>
            </div>

            <div class="form-group">
              <label>Product Interest *</label>
              <select v-model="form.product" required>
                <option value="">Select a product category…</option>
                <option>Scissor Lifts</option>
                <option>Dock Ramps</option>
                <option>Commercial Floor Cleaners</option>
                <option>Pallet Wrapping Machines</option>
                <option>Multiple Products</option>
              </select>
            </div>

            <div class="form-group">
              <label>Shipping State *</label>
              <input v-model="form.state" type="text" placeholder="e.g. Texas" required />
            </div>

            <div class="form-group">
              <label>Message / Questions</label>
              <textarea v-model="form.message" placeholder="Tell us more about your needs — quantity, specs, timeline, etc."></textarea>
            </div>

            <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>

            <button type="submit" class="btn btn-primary btn-lg w-full" :disabled="loading">
              <span v-if="loading">Sending…</span>
              <span v-else>Send My Request →</span>
            </button>
          </form>
        </div>

        <div class="contact-sidebar">
          <div class="sidebar-card">
            <h4>📍 Our Warehouse</h4>
            <p>Los Angeles, California<br />All orders ship within 1–2 business days</p>
          </div>

          <div class="sidebar-card">
            <h4>📞 Call or Text</h4>
            <p><a href="tel:18008263371">1-800-VANDER-1</a></p>
            <p class="text-sm text-muted mt-8">Mon–Fri · 7am–5pm PT</p>
          </div>

          <div class="sidebar-card">
            <h4>📧 Email Us</h4>
            <p><a href="mailto:sales@vanderindustries.com">sales@vanderindustries.com</a></p>
          </div>

          <div class="sidebar-card highlight-card">
            <h4>🛡️ Why Buy From Vander?</h4>
            <ul>
              <li>✅ Wholesale prices — no dealer markup</li>
              <li>✅ 2-year warranty on all equipment</li>
              <li>✅ Ships in 1–2 business days</li>
              <li>✅ Nation-wide freight to all 50 states</li>
              <li>✅ Real humans — not a chatbot</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Contact — Get a Free Quote | Vander Industries',
  description: 'Request a free equipment quote from Vander Industries. We respond within 1 business day with pricing and freight estimates.',
})

const form = reactive({
  firstName: '', lastName: '', company: '', email: '',
  phone: '', product: '', state: '', message: '',
})
const loading = ref(false)
const submitted = ref(false)
const errorMsg = ref('')

async function submit() {
  loading.value = true
  errorMsg.value = ''
  await new Promise(r => setTimeout(r, 1200))
  submitted.value = true
  loading.value = false
}
</script>

<style scoped>
.contact-hero {
  background: var(--black);
  color: var(--white);
  padding: 72px 0;
}

.contact-hero h1 { color: var(--white); margin-bottom: 16px; }
.contact-hero p { color: #ccc; font-size: 1.05rem; }

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 48px;
  align-items: flex-start;
}

.contact-form-wrap {
  background: var(--white);
  border-radius: 12px;
  padding: 40px;
  box-shadow: var(--shadow);
}

.contact-form-wrap h3 { margin-bottom: 8px; }
.form-intro { color: var(--gray-500); font-size: 0.9rem; margin-bottom: 28px; }

.contact-form-wrap .grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.contact-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 100px;
}

.sidebar-card {
  background: var(--white);
  border-radius: 10px;
  padding: 24px;
  box-shadow: var(--shadow);
}

.sidebar-card h4 { margin-bottom: 10px; font-size: 1rem; }
.sidebar-card p { color: var(--gray-700); font-size: 0.9rem; max-width: 100%; }
.sidebar-card a { color: var(--black); font-weight: 700; }
.sidebar-card a:hover { color: var(--yellow); }

.highlight-card {
  background: var(--black);
  color: var(--white);
}

.highlight-card h4 { color: var(--yellow); }

.highlight-card ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.highlight-card li { font-size: 0.88rem; color: #ddd; }

.error-msg { color: #c0392b; font-size: 0.9rem; margin-bottom: 12px; max-width: 100%; }

.success-card { text-align: center; padding: 24px 0; }
.success-icon { font-size: 3rem; margin-bottom: 16px; }
.success-card h3 { margin-bottom: 12px; }
.success-card p { color: var(--gray-700); margin: 0 auto; }

@media (max-width: 900px) {
  .contact-layout { grid-template-columns: 1fr; }
  .contact-sidebar { position: static; }
  .contact-form-wrap .grid-2 { grid-template-columns: 1fr; }
}

@media (max-width: 600px) {
  .contact-form-wrap { padding: 24px; }
}
</style>
