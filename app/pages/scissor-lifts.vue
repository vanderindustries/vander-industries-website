<template>
  <div>
    <ProductHero
      badge="Aerial Work Platforms"
      title="Scissor Lifts"
      description="Industrial-grade electric and rough-terrain scissor lifts for warehouses, distribution centers, construction sites, and facility maintenance. Wholesale pricing direct — no dealer middleman."
      starting-price="$8,500"
      emoji="🏗️"
      image-bg="#1a1a2e"
      @reserve="reserveOpen = true"
      @inquire="inquireOpen = true"
    />

    <!-- Product Details -->
    <section class="section">
      <div class="container">
        <div class="grid-2">
          <div>
            <div class="badge">Specifications</div>
            <h2>Built for the Job Site</h2>
            <p class="mt-16">Our scissor lifts meet or exceed ANSI/SAIA standards and are sourced directly from certified manufacturers. Available in electric slab, rough terrain, and narrow aisle configurations.</p>

            <div class="spec-table mt-32">
              <div class="spec-row" v-for="s in specs" :key="s.label">
                <span class="spec-label">{{ s.label }}</span>
                <span class="spec-val">{{ s.val }}</span>
              </div>
            </div>
          </div>
          <div>
            <div class="badge">Use Cases</div>
            <h2>Who Uses Scissor Lifts</h2>
            <div class="use-cases mt-16">
              <div class="use-case" v-for="u in useCases" :key="u">
                <span class="uc-check">✔</span>
                <span>{{ u }}</span>
              </div>
            </div>

            <div class="mt-32 feature-highlight">
              <h4>🏆 Vander Direct Advantage</h4>
              <p>Same units sold by dealers at 30–50% markup — you buy at our wholesale cost. Full 2-year warranty, factory documentation, and pre-delivery inspection included.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Models / Lineup -->
    <section class="section" style="background: var(--gray-50)">
      <div class="container">
        <div class="text-center mb-32">
          <div class="badge">Product Lineup</div>
          <h2>Scissor Lift Models</h2>
        </div>
        <div class="grid-3">
          <div class="model-card card" v-for="m in models" :key="m.name">
            <div class="model-thumb" :style="{ background: m.bg }">
              <span style="font-size:3rem">🏗️</span>
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

    <!-- Benefits Band -->
    <section class="benefits-band section">
      <div class="container">
        <div class="text-center mb-32">
          <h2>Every Scissor Lift Includes</h2>
        </div>
        <div class="grid-4">
          <div class="benefit-item" v-for="b in benefits" :key="b.title">
            <div class="benefit-icon">{{ b.icon }}</div>
            <h4>{{ b.title }}</h4>
            <p>{{ b.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sticky CTA -->
    <section class="sticky-cta-band">
      <div class="container sticky-cta-inner">
        <div>
          <strong>Scissor Lifts — Wholesale Direct</strong>
          <span>Starting at $8,500 · 2-Year Warranty Included</span>
        </div>
        <div class="sticky-cta-btns">
          <button class="btn btn-primary" @click="reserveOpen = true">Reserve — $500 Deposit</button>
          <button class="btn btn-outline" @click="inquireOpen = true">Request More Info</button>
        </div>
      </div>
    </section>

    <ReserveModal v-model="reserveOpen" product-name="Scissor Lift" />
    <InquiryModal v-model="inquireOpen" product-name="Scissor Lift" />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Scissor Lifts — Wholesale Pricing | Vander Industries',
  description: 'Buy electric and rough-terrain scissor lifts at wholesale prices. Ships from Los Angeles in 1–2 days. 2-year warranty. All 50 states.',
})

const reserveOpen = ref(false)
const inquireOpen = ref(false)

const specs = [
  { label: 'Platform Height Range', val: '19 ft – 50 ft' },
  { label: 'Weight Capacity', val: '500 – 2,500 lbs' },
  { label: 'Power Options', val: 'Electric, Diesel, Hybrid' },
  { label: 'Terrain Types', val: 'Slab, Rough Terrain, Indoor' },
  { label: 'Platform Width', val: '30" – 72"' },
  { label: 'Drive Speed', val: 'Up to 4.5 mph' },
  { label: 'Gradeability', val: 'Up to 45% (RT models)' },
  { label: 'Certifications', val: 'ANSI/SAIA A92, CE' },
]

const useCases = [
  'Warehouse racking installation and maintenance',
  'Commercial HVAC and electrical work',
  'Construction interior finishing',
  'Airport and hangar maintenance',
  'Retail distribution centers',
  'Manufacturing facility upkeep',
  'Events and large venue setup',
  'Film and production sets',
]

const models = [
  {
    name: 'VI-E19 Electric Slab',
    desc: 'Compact 19-ft electric scissor for indoor warehouse and commercial use. Zero emissions, quiet operation, tight turning radius.',
    tags: ['19 ft', 'Electric', '800 lb cap', 'Indoor'],
    price: 'From $8,500',
    bg: '#1a1a2e',
  },
  {
    name: 'VI-E32 Mid-Range',
    desc: '32-ft platform electric scissor lift. Ideal for high-bay warehouses, distribution centers, and commercial construction.',
    tags: ['32 ft', 'Electric', '1,200 lb cap', 'Slab'],
    price: 'From $14,200',
    bg: '#0d1a2e',
  },
  {
    name: 'VI-RT40 Rough Terrain',
    desc: 'Diesel-powered 40-ft rough terrain scissor built for outdoor job sites, construction, and uneven ground.',
    tags: ['40 ft', 'Diesel', '2,500 lb cap', 'Outdoor'],
    price: 'From $22,800',
    bg: '#1a2a0d',
  },
]

const benefits = [
  { icon: '💰', title: 'Wholesale Price', desc: 'Buy direct at factory cost. Save 30–50% vs. dealer pricing.' },
  { icon: '🛡️', title: '2-Year Warranty', desc: 'Comprehensive parts and labor coverage from day one.' },
  { icon: '🚚', title: 'Fast Shipping', desc: 'Ships from Los Angeles in 1–2 business days nationwide.' },
  { icon: '📋', title: 'Full Documentation', desc: 'Operators manual, maintenance schedule, and compliance docs included.' },
]
</script>

<style scoped>
.spec-table { display: flex; flex-direction: column; gap: 0; border: 1px solid var(--gray-100); border-radius: 8px; overflow: hidden; }
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
