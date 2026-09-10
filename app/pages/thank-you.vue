<template>
  <section class="ty-page">
    <div class="container ty-content">
      <div class="ty-icon">✅</div>
      <div class="badge">Order Confirmed</div>
      <h1>Thank You for Your Deposit!</h1>
      <p class="ty-lead">Your $500 deposit has been received. A Vander Industries equipment specialist will contact you within <strong>1 business day</strong> to confirm your order and arrange delivery.</p>

      <div class="ty-steps">
        <h3>What Happens Next</h3>
        <div class="steps">
          <div class="step" v-for="(s, i) in steps" :key="i">
            <div class="step-num">{{ i + 1 }}</div>
            <div class="step-body">
              <strong>{{ s.title }}</strong>
              <p>{{ s.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="ty-contact">
        <p>Questions? We're here.</p>
        <div class="ty-contact-row">
          <a href="tel:18008263371" class="btn btn-primary">📞 1-800-VANDER-1</a>
          <a href="mailto:sales@vanderindustries.com" class="btn btn-outline">✉️ Email Us</a>
        </div>
      </div>

      <NuxtLink to="/" class="back-home">← Back to Vander Industries</NuxtLink>
    </div>
  </section>
</template>

<script setup>
useSeoMeta({
  title: 'Thank You — Vander Industries',
  description: 'Your deposit has been received. A Vander Industries specialist will contact you within 1 business day.',
  robots: 'noindex',
})

const steps = [
  {
    title: 'Sales Rep Reaches Out',
    desc: 'Within 1 business day, one of our equipment specialists will call or email to confirm your order details, specifications, and delivery address.',
  },
  {
    title: 'Freight Quote Calculated',
    desc: 'We\'ll calculate the exact freight cost to your location based on your shipping zone and provide a final invoice.',
  },
  {
    title: 'Balance Due Before Ship',
    desc: 'Once you approve the freight quote, the remaining balance is due. We accept ACH, wire transfer, or credit card.',
  },
  {
    title: 'Ships in 1–2 Business Days',
    desc: 'Your equipment ships from our Los Angeles warehouse. Full tracking information is provided upon dispatch.',
  },
]
</script>

<style scoped>
.ty-page {
  background: var(--gray-50);
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 80px 0;
}

.ty-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.ty-icon { font-size: 4rem; margin-bottom: 16px; }

.ty-content h1 {
  margin-bottom: 20px;
}

.ty-lead {
  font-size: 1.1rem;
  color: var(--gray-700);
  margin: 0 auto 40px;
}

.ty-steps {
  background: var(--white);
  border-radius: 12px;
  padding: 36px;
  box-shadow: var(--shadow);
  text-align: left;
  margin-bottom: 40px;
}

.ty-steps h3 {
  text-align: center;
  margin-bottom: 28px;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.step {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.step-num {
  width: 36px;
  height: 36px;
  background: var(--yellow);
  color: var(--black);
  font-weight: 900;
  font-size: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-body strong {
  display: block;
  margin-bottom: 4px;
  font-size: 1rem;
}

.step-body p {
  color: var(--gray-700);
  font-size: 0.9rem;
  max-width: 100%;
}

.ty-contact {
  margin-bottom: 32px;
}

.ty-contact p {
  margin: 0 auto 16px;
  color: var(--gray-500);
}

.ty-contact-row {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.back-home {
  display: inline-block;
  color: var(--gray-500);
  font-size: 0.9rem;
  text-decoration: underline;
}

.back-home:hover { color: var(--black); }
</style>
