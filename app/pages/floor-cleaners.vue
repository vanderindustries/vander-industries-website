<template>
  <div>
    <ProductHero
      badge="Industrial Cleaning Equipment"
      title="Commercial Floor Cleaners"
      description="Industrial-grade ride-on and walk-behind scrubbers and sweepers for warehouses, factories, airports, and large commercial facilities. Wholesale pricing direct from LA."
      starting-price="$4,800"
      emoji="🧹"
      image-bg="#1a1a3a"
      @reserve="reserveOpen = true"
      @inquire="inquireOpen = true"
    />

    <section class="section">
      <div class="container">
        <div class="grid-2">
          <div>
            <div class="badge">Specifications</div>
            <h2>Professional Cleaning Power</h2>
            <p class="mt-16">Our commercial floor cleaning equipment handles everything from 10,000 sq ft warehouses to multi-million square foot distribution centers. Battery-powered, LPG, and diesel options available.</p>
            <div class="spec-table mt-32">
              <div class="spec-row" v-for="s in specs" :key="s.label">
                <span class="spec-label">{{ s.label }}</span>
                <span class="spec-val">{{ s.val }}</span>
              </div>
            </div>
          </div>
          <div>
            <div class="badge">Applications</div>
            <h2>Designed for Demanding Environments</h2>
            <div class="use-cases mt-16">
              <div class="use-case" v-for="u in useCases" :key="u">
                <span class="uc-check">✔</span>
                <span>{{ u }}</span>
              </div>
            </div>
            <div class="mt-32 feature-highlight">
              <h4>🏆 Vander Direct Advantage</h4>
              <p>Commercial scrubbers that cleaning service contractors and facility managers pay $8,000–$18,000+ for at retail — available at wholesale cost through Vander Industries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--gray-50)">
      <div class="container">
        <div class="text-center mb-32">
          <div class="badge">Product Lineup</div>
          <h2>Floor Cleaner Models</h2>
        </div>
        <div class="grid-3">
          <div class="model-card card" v-for="m in models" :key="m.name">
            <div class="model-thumb" :style="{ background: m.bg }">
              <span style="font-size:3rem">🧹</span>
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
        <div class="text-center mb-32"><h2>Every Floor Cleaner Includes</h2></div>
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
          <strong>Commercial Floor Cleaners — Wholesale Direct</strong>
          <span>Starting at $4,800 · 2-Year Warranty Included</span>
        </div>
        <div class="sticky-cta-btns">
          <button class="btn btn-primary" @click="reserveOpen = true">Reserve — $500 Deposit</button>
          <button class="btn btn-outline" @click="inquireOpen = true">Request More Info</button>
        </div>
      </div>
    </section>

    <ReserveModal v-model="reserveOpen" product-name="Commercial Floor Cleaner" />
    <InquiryModal v-model="inquireOpen" product-name="Commercial Floor Cleaner" />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Commercial Floor Cleaners — Wholesale | Vander Industries',
  description: 'Industrial scrubbers and sweepers at wholesale prices. Ride-on and walk-behind models. Ships from Los Angeles in 1–2 days. 2-year warranty.',
})

const reserveOpen = ref(false)
const inquireOpen = ref(false)

const specs = [
  { label: 'Cleaning Width', val: '20" – 72"' },
  { label: 'Tank Capacity', val: '16 – 95 gallons' },
  { label: 'Coverage Rate', val: 'Up to 60,000 sq ft/hr' },
  { label: 'Power Options', val: 'Battery, LPG, Diesel' },
  { label: 'Machine Types', val: 'Walk-Behind, Ride-On, Sweeper-Scrubber' },
  { label: 'Brush Pressure', val: 'Up to 180 lbs' },
  { label: 'Run Time', val: 'Up to 8 hours (battery)' },
  { label: 'Certifications', val: 'ISSA, CE, UL Listed' },
]

const useCases = [
  'Large warehouse and distribution center floors',
  'Manufacturing plant maintenance',
  'Airport terminal and hangar cleaning',
  'Big-box retail overnight floor care',
  'Food processing and cold storage facilities',
  'Parking garage maintenance',
  'Hospital and healthcare facility floors',
  'School and university campuses',
]

const models = [
  {
    name: 'VI-WB20 Walk-Behind',
    desc: 'Compact 20-inch walk-behind scrubber for tight aisles, restrooms, and smaller commercial spaces. Battery powered, easy to operate.',
    tags: ['20" wide', 'Battery', '16-gal tank', 'Walk-Behind'],
    price: 'From $4,800',
    bg: '#1a1a3a',
  },
  {
    name: 'VI-RO36 Ride-On',
    desc: 'Efficient 36-inch ride-on scrubber for mid-size warehouses and facilities. Covers up to 30,000 sq ft per hour.',
    tags: ['36" wide', 'Battery', '45-gal tank', 'Ride-On'],
    price: 'From $9,200',
    bg: '#0d0d2a',
  },
  {
    name: 'VI-SWP72 Sweeper-Scrubber',
    desc: 'Industrial-grade combination sweeper-scrubber for maximum productivity. 72-inch cleaning path with 95-gallon dual tank system.',
    tags: ['72" wide', 'LPG/Diesel', '95-gal tank', 'Combo Unit'],
    price: 'From $18,500',
    bg: '#1a0d2a',
  },
]

const benefits = [
  { icon: '🔋', title: 'Long Run Time', desc: 'Up to 8-hour battery runtime. LPG and diesel options for continuous operation.' },
  { icon: '🛡️', title: '2-Year Warranty', desc: 'Full parts and labor warranty on every unit.' },
  { icon: '🚚', title: 'Ships in 1–2 Days', desc: 'From our LA warehouse directly to your facility.' },
  { icon: '🔧', title: 'Easy Maintenance', desc: 'Tool-free brush and squeegee access. Designed for minimal downtime.' },
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
