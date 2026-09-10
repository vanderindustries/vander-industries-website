<template>
  <section class="why-vander section">
    <div class="container">
      <div class="text-center mb-32">
        <div class="badge">Why Choose Us</div>
        <h2>The Vander Advantage</h2>
        <p class="mt-16">We cut out the middleman so you pay wholesale. Every product ships direct from our Los Angeles warehouse — fast, insured, and covered by a 2-year warranty.</p>
      </div>

      <div class="reasons-grid">
        <div class="reason-card" v-for="r in reasons" :key="r.title">
          <div class="reason-icon">{{ r.icon }}</div>
          <h4>{{ r.title }}</h4>
          <p>{{ r.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reasons = [
  {
    icon: '💰',
    title: 'Wholesale Pricing',
    desc: 'Buy factory-direct at wholesale prices. No dealer markup, no inflated MSRP — just honest pricing on industrial-grade equipment.',
  },
  {
    icon: '🚚',
    title: '1–2 Day Ship Time',
    desc: 'All equipment ships from our Los Angeles warehouse within 1–2 business days. Real-time tracking on every order.',
  },
  {
    icon: '🗺️',
    title: 'Nationwide Delivery',
    desc: 'We ship to all 50 states. Zone-based freight rates are calculated transparently at checkout — no surprise fees.',
  },
  {
    icon: '🛡️',
    title: '2-Year Warranty',
    desc: 'Every unit includes a comprehensive 2-year manufacturer warranty. Extended parts coverage also available.',
  },
  {
    icon: '🏭',
    title: 'Industrial Grade',
    desc: 'Commercial and industrial-spec equipment rated for heavy daily use. The same machines used by distribution centers and warehouses nationwide.',
  },
  {
    icon: '📞',
    title: 'Expert Support',
    desc: 'Our team has decades of hands-on experience. We help you spec the right equipment before you buy and support you after delivery.',
  },
]
</script>

<style scoped>
.why-vander {
  background: var(--gray-50);
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.reason-card {
  background: var(--white);
  border-radius: 10px;
  padding: 32px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  transition: transform 0.18s, box-shadow 0.18s;
}

.reason-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.reason-icon {
  font-size: 2rem;
  margin-bottom: 16px;
}

.reason-card h4 {
  margin-bottom: 10px;
  font-size: 1.05rem;
}

.reason-card p {
  color: var(--gray-700);
  font-size: 0.9rem;
  line-height: 1.65;
  max-width: 100%;
}

@media (max-width: 1024px) {
  .reasons-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .reasons-grid { grid-template-columns: 1fr; }
}
</style>
