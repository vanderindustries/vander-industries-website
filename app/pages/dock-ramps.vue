<template>
  <div>
    <ProductHero
      badge="Loading Dock Equipment"
      title="Dock Ramps"
      description="Heavy-duty steel dock ramps, edge-of-dock levelers, and yard ramps for seamless loading and unloading. Rated for forklift use. Wholesale pricing direct from LA."
      starting-price="$3,200"
      emoji="🏭"
      image-bg="#1a2a1a"
      @reserve="reserveOpen = true"
      @inquire="inquireOpen = true"
    />

    <section class="section">
      <div class="container">
        <div class="grid-2">
          <div>
            <div class="badge">Specifications</div>
            <h2>Industrial-Grade Dock Solutions</h2>
            <p class="mt-16">Our dock ramps are constructed from heavy-gauge structural steel with non-slip grating and reinforced lip assemblies. Suitable for light duty through heavy industrial applications.</p>
            <div class="spec-table mt-32">
              <div class="spec-row" v-for="s in specs" :key="s.label">
                <span class="spec-label">{{ s.label }}</span>
                <span class="spec-val">{{ s.val }}</span>
              </div>
            </div>
          </div>
          <div>
            <div class="badge">Applications</div>
            <h2>Where Our Dock Ramps Work</h2>
            <div class="use-cases mt-16">
              <div class="use-case" v-for="u in useCases" :key="u">
                <span class="uc-check">✔</span>
                <span>{{ u }}</span>
              </div>
            </div>
            <div class="mt-32 feature-highlight">
              <h4>🏆 Vander Direct Advantage</h4>
              <p>Structural steel dock ramps with rated capacities up to 30,000 lbs — all at wholesale cost. No dealer, no inflated pricing, full documentation and warranty included.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--gray-50)">
      <div class="container">
        <div class="text-center mb-32">
          <div class="badge">Product Lineup</div>
          <h2>Dock Ramp Models</h2>
        </div>
        <div class="grid-3">
          <div class="model-card card" v-for="m in models" :key="m.name">
            <div class="model-thumb" :style="{ background: m.bg }">
              <span style="font-size:3rem">🏭</span>
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
        <div class="text-center mb-32"><h2>Every Dock Ramp Includes</h2></div>
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
          <strong>Dock Ramps — Wholesale Direct</strong>
          <span>Starting at $3,200 · 2-Year Warranty Included</span>
        </div>
        <div class="sticky-cta-btns">
          <button class="btn btn-primary" @click="reserveOpen = true">Reserve — $500 Deposit</button>
          <button class="btn btn-outline" @click="inquireOpen = true">Request More Info</button>
        </div>
      </div>
    </section>

    <ReserveModal v-model="reserveOpen" product-name="Dock Ramp" />
    <InquiryModal v-model="inquireOpen" product-name="Dock Ramp" />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Dock Ramps — Wholesale Pricing | Vander Industries',
  description: 'Heavy-duty dock ramps and yard ramps at wholesale prices. Ships from Los Angeles in 1–2 days. Rated up to 30,000 lbs. 2-year warranty.',
})

const reserveOpen = ref(false)
const inquireOpen = ref(false)

const specs = [
  { label: 'Capacity Range', val: '6,000 – 30,000 lbs' },
  { label: 'Width Options', val: '60" – 84"' },
  { label: 'Length Options', val: '16 ft – 30 ft' },
  { label: 'Dock Height Range', val: '24" – 64"' },
  { label: 'Material', val: 'Structural Steel' },
  { label: 'Surface', val: 'Non-Slip Grating / Checker Plate' },
  { label: 'Lip Type', val: 'Fixed / Adjustable' },
  { label: 'Certifications', val: 'OSHA Compliant, ANSI MH30' },
]

const useCases = [
  'Distribution center loading docks',
  'Cold storage and refrigerated warehouse access',
  'Retail chain receiving bays',
  'Manufacturing plant logistics',
  'Freight terminal operations',
  'Portable yard ramp for ground-level loading',
  'Multi-trailer interchange facilities',
  'Government and military logistics',
]

const models = [
  {
    name: 'VI-DR6 Yard Ramp',
    desc: 'Portable 6,000 lb rated yard ramp with hydraulic height adjustment. Ideal for ground-level trailer loading without a permanent dock.',
    tags: ['6,000 lb', 'Portable', 'Hydraulic', '16 ft'],
    price: 'From $3,200',
    bg: '#1a2a1a',
  },
  {
    name: 'VI-DR15 Edge-of-Dock',
    desc: '15,000 lb edge-of-dock leveler for permanent dock installation. Heavy-gauge steel with mechanical or hydraulic actuation.',
    tags: ['15,000 lb', 'Fixed', 'Mechanical', '72" wide'],
    price: 'From $5,800',
    bg: '#0d1a0d',
  },
  {
    name: 'VI-DR30 Heavy Duty',
    desc: 'Full 30,000 lb capacity heavy-duty dock ramp for high-volume forklift operations. Welded steel construction, certified for the most demanding logistics environments.',
    tags: ['30,000 lb', 'Heavy Duty', '84" wide', '24 ft'],
    price: 'From $9,400',
    bg: '#1a1a0d',
  },
]

const benefits = [
  { icon: '⚙️', title: 'Welded Steel Build', desc: 'Heavy-gauge structural steel rated for daily forklift traffic.' },
  { icon: '🛡️', title: '2-Year Warranty', desc: 'Full parts and structural warranty from purchase date.' },
  { icon: '🚚', title: 'Ships in 1–2 Days', desc: 'From our LA warehouse direct to your dock.' },
  { icon: '📐', title: 'Custom Sizing', desc: 'Contact us for non-standard width or capacity requirements.' },
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
