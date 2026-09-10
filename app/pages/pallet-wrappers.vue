<template>
  <div>
    <ProductHero
      badge="Stretch Wrap Automation"
      title="Pallet Wrapping Machines"
      description="Automated and semi-automatic stretch wrap systems that reduce labor costs, improve load security, and increase throughput in high-volume shipping and distribution operations."
      starting-price="$2,100"
      emoji="📦"
      image-bg="#2a1a1a"
      @reserve="reserveOpen = true"
      @inquire="inquireOpen = true"
    />

    <section class="section">
      <div class="container">
        <div class="grid-2">
          <div>
            <div class="badge">Specifications</div>
            <h2>Precision Stretch Wrap Engineering</h2>
            <p class="mt-16">From entry-level semi-automatic turntable wrappers to fully automated inline systems, our pallet wrapping machines handle loads from 500 to 4,000 lbs with programmable wrap cycles.</p>
            <div class="spec-table mt-32">
              <div class="spec-row" v-for="s in specs" :key="s.label">
                <span class="spec-label">{{ s.label }}</span>
                <span class="spec-val">{{ s.val }}</span>
              </div>
            </div>
          </div>
          <div>
            <div class="badge">Applications</div>
            <h2>Built for High-Volume Operations</h2>
            <div class="use-cases mt-16">
              <div class="use-case" v-for="u in useCases" :key="u">
                <span class="uc-check">✔</span>
                <span>{{ u }}</span>
              </div>
            </div>
            <div class="mt-32 feature-highlight">
              <h4>🏆 ROI In Months, Not Years</h4>
              <p>Manual pallet wrapping costs $2–4 per pallet in labor. Our automated systems bring that under $0.50 per pallet. At 100 pallets/day, that's $50,000+ saved annually.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--gray-50)">
      <div class="container">
        <div class="text-center mb-32">
          <div class="badge">Product Lineup</div>
          <h2>Pallet Wrapper Models</h2>
        </div>
        <div class="grid-3">
          <div class="model-card card" v-for="m in models" :key="m.name">
            <div class="model-thumb" :style="{ background: m.bg }">
              <span style="font-size:3rem">📦</span>
            </div>
            <div class="model-info">
              <h4>{{ m.name }}</h4>
              <p>{{ m.desc }}</p>
              <div class="model-specs">
                <span v-for="tag in m.tags" :key="tag" class="spec-tag">{{ tag }}</span>
              </div>
              <div class="model-price">{{ m.price }}</div>
              <button class="btn btn-primary w-full mt-16" @click="reserveOpen = true">Reserve — $500 Deposit</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <UsShippingMap />

    <section class="benefits-band section">
      <div class="container">
        <div class="text-center mb-32"><h2>Every Pallet Wrapper Includes</h2></div>
        <div class="grid-4">
          <div class="benefit-item" v-for="b in benefits" :key="b.title">
            <div class="benefit-icon">{{ b.icon }}</div>
            <h4>{{ b.title }}</h4>
            <p>{{ b.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sticky-cta-band">
      <div class="container sticky-cta-inner">
        <div>
          <strong>Pallet Wrapping Machines — Wholesale Direct</strong>
          <span>Starting at $2,100 · 2-Year Warranty Included</span>
        </div>
        <div class="sticky-cta-btns">
          <button class="btn btn-primary" @click="reserveOpen = true">Reserve — $500 Deposit</button>
          <button class="btn btn-outline" @click="inquireOpen = true">Request More Info</button>
        </div>
      </div>
    </section>

    <ReserveModal v-model="reserveOpen" product-name="Pallet Wrapping Machine" />
    <InquiryModal v-model="inquireOpen" product-name="Pallet Wrapping Machine" />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Pallet Wrapping Machines — Wholesale | Vander Industries',
  description: 'Automated and semi-automatic pallet wrappers at wholesale prices. Ships from Los Angeles in 1–2 days. Reduce labor costs. 2-year warranty.',
})

const reserveOpen = ref(false)
const inquireOpen = ref(false)

const specs = [
  { label: 'Load Capacity', val: '500 – 4,000 lbs' },
  { label: 'Turntable Diameter', val: '59" – 71"' },
  { label: 'Wrap Speed', val: '10 – 40 RPM' },
  { label: 'Film Carriage Travel', val: 'Up to 110"' },
  { label: 'Throughput', val: 'Up to 60 pallets/hr (automated)' },
  { label: 'Film Compatibility', val: 'Standard & Pre-Stretch' },
  { label: 'Control System', val: 'PLC / Touchscreen HMI' },
  { label: 'Power', val: '110V / 220V / 3-Phase options' },
]

const useCases = [
  'E-commerce and fulfillment center shipping',
  'Food and beverage distribution',
  'Manufacturing end-of-line packaging',
  'Pharmaceutical and medical supply logistics',
  'Building materials and lumber palletizing',
  'Third-party logistics (3PL) providers',
  'Grocery distribution and cold chain',
  'Agricultural product export packaging',
]

const models = [
  {
    name: 'VI-SA1500 Semi-Auto',
    desc: 'Entry-level semi-automatic turntable wrapper. Operator attaches film, machine handles the wrap cycle. Ideal for 10–40 pallets per day.',
    tags: ['Semi-Auto', '1,500 lb', '10 RPM', '110V'],
    price: 'From $2,100',
    bg: '#2a1a1a',
  },
  {
    name: 'VI-SA3000 Pro',
    desc: 'Mid-range semi-automatic with pre-stretch film carriage and programmable wrap patterns. Handles up to 50 pallets per shift.',
    tags: ['Semi-Auto', '3,000 lb', '20 RPM', 'Pre-Stretch'],
    price: 'From $3,800',
    bg: '#1a0d0d',
  },
  {
    name: 'VI-AUTO60 Fully Automatic',
    desc: 'Fully automated inline stretch wrapper with conveyor integration. Wraps up to 60 pallets per hour with zero operator intervention.',
    tags: ['Fully Auto', '4,000 lb', '40 RPM', 'Conveyor-Ready'],
    price: 'From $12,500',
    bg: '#2a0d0d',
  },
]

const benefits = [
  { icon: '💸', title: 'Fast ROI', desc: 'Reduce per-pallet labor cost from $3+ to under $0.50 with automation.' },
  { icon: '🛡️', title: '2-Year Warranty', desc: 'Covers mechanical, electrical, and structural components.' },
  { icon: '🚚', title: 'Ships in 1–2 Days', desc: 'Ready to integrate into your line fast.' },
  { icon: '🔁', title: 'Consistent Wraps', desc: 'Programmable cycles eliminate under or over-wrapping.' },
]
</script>

<style scoped>
.spec-table { display: flex; flex-direction: column; border: 1px solid var(--gray-100); border-radius: 8px; overflow: hidden; }
.spec-row { display: flex; justify-content: space-between; padding: 12px 16px; font-size: 0.9rem; }
.spec-row:nth-child(even) { background: var(--gray-50); }
.spec-label { font-weight: 600; color: var(--gray-700); }
.spec-val { font-weight: 700; }
.use-cases { display: flex; flex-direction: column; gap: 12px; }
.use-case { display: flex; gap: 10px; align-items: flex-start; font-size: 0.92rem; }
.uc-check { color: var(--yellow); background: var(--black); width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 0.7rem; flex-shrink: 0; margin-top: 1px; }
.feature-highlight { background: var(--black); color: var(--white); border-radius: 10px; padding: 24px; }
.feature-highlight h4 { color: var(--yellow); margin-bottom: 10px; }
.feature-highlight p { color: #ccc; font-size: 0.9rem; max-width: 100%; }
.model-thumb { height: 140px; display: flex; align-items: center; justify-content: center; }
.model-info { padding: 24px; }
.model-info h4 { margin-bottom: 8px; }
.model-info p { color: var(--gray-700); font-size: 0.875rem; margin-bottom: 12px; }
.model-specs { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
.spec-tag { background: var(--gray-100); font-size: 0.75rem; font-weight: 600; padding: 3px 10px; border-radius: 20px; }
.model-price { font-size: 1.2rem; font-weight: 900; }
.benefits-band { background: var(--gray-50); }
.benefit-item { text-align: center; padding: 24px; }
.benefit-icon { font-size: 2.2rem; margin-bottom: 12px; }
.benefit-item h4 { margin-bottom: 8px; }
.benefit-item p { color: var(--gray-700); font-size: 0.875rem; margin: 0 auto; }
.sticky-cta-band { background: var(--yellow); padding: 20px 0; }
.sticky-cta-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
.sticky-cta-inner > div:first-child { display: flex; flex-direction: column; gap: 2px; }
.sticky-cta-inner strong { font-size: 1rem; font-weight: 900; }
.sticky-cta-inner span { font-size: 0.85rem; color: #333; }
.sticky-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; }
</style>
