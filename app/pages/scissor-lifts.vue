<template>
  <div>
    <ProductHero
      badge="Aerial Work Platforms"
      title="Electric Scissor Lifts"
      description="Vander Industries 6M Slim Electric Scissor Lift — 20 ft working height, 500 lb capacity. Compact, powerful, and built for indoor and outdoor use. Wholesale direct."
      list-price="$11,999.00"
      sale-price="$9,999.00"
      savings="$2,000.00"
      reserve-label="Reserve This Unit Now"
      image-src="/images/products/scissor-lift/scissor-lift-01.webp"
      @reserve="reserveOpen = true"
      @inquire="inquireOpen = true"
    />

    <!-- Product Section -->
    <section class="section">
      <div class="container">
        <div class="product-card">
          <div class="product-card-inner">
            <div class="product-images">
              <ImageGallery :images="liftImages" label="Electric Scissor Lift" :start-index="1" />
            </div>
            <div class="product-details">
              <div class="badge">2026 Model — Brand New, 0 Hours</div>
              <h2 class="product-name">6M Slim Electric Scissor Lift</h2>
              <p class="product-subtitle">Vander Industries · Model Year 2026 · Platform Height 20–21 ft</p>
              <p class="product-desc">{{ liftDesc }}</p>

              <div class="spec-group mt-24">
                <h4 class="spec-group-title">Technical Specifications</h4>
                <div class="spec-table">
                  <div class="spec-row" v-for="s in techSpecs" :key="s.label">
                    <span class="spec-label">{{ s.label }}</span>
                    <span class="spec-val">{{ s.val }}</span>
                  </div>
                </div>
              </div>

              <div class="spec-group mt-16">
                <h4 class="spec-group-title">Key Features</h4>
                <ul class="features-list">
                  <li v-for="f in keyFeatures" :key="f">✅ {{ f }}</li>
                </ul>
              </div>

              <div class="product-actions mt-32">
                <button class="btn btn-primary" @click="reserveOpen = true">Reserve This Unit Now</button>
                <button class="btn btn-outline" @click="inquireOpen = true">Request More Info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ideal Applications -->
    <section class="section" style="background: var(--gray-50)">
      <div class="container">
        <div class="text-center mb-32">
          <div class="badge">Ideal Applications</div>
          <h2>Built for the Job Site</h2>
        </div>
        <div class="features-grid">
          <div class="feature-item" v-for="f in applications" :key="f.title">
            <div class="feature-icon">{{ f.icon }}</div>
            <h4>{{ f.title }}</h4>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <UsShippingMap
      :zone-prices="{ 1: 700, 2: 1000, 3: 1300, 4: 1600, 5: 2000 }"
    />

    <section class="sticky-cta-band">
      <div class="container sticky-cta-inner">
        <div>
          <strong>6M Slim Electric Scissor Lift — 20 ft Platform</strong>
          <span>500 lb Capacity · 2026 Model · Ships Nationwide from Los Angeles</span>
        </div>
        <div class="sticky-cta-btns">
          <button class="btn btn-primary" @click="reserveOpen = true">Reserve This Unit Now</button>
          <button class="btn btn-outline" @click="inquireOpen = true">Request More Info</button>
        </div>
      </div>
    </section>

    <ReserveModal v-model="reserveOpen" product-name="6M Electric Scissor Lift" />
    <InquiryModal v-model="inquireOpen" product-name="6M Electric Scissor Lift" />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Electric Scissor Lifts — Wholesale Pricing | Vander Industries',
  description: 'Vander Industries 6M Slim Electric Scissor Lift. 20 ft working height, 500 lb capacity, 2026 model. Wholesale direct pricing. Ships nationwide from Los Angeles in 1–2 business days.',
})

const reserveOpen = ref(false)
const inquireOpen = ref(false)

// Keep only real scissor lift product shots — removed logos, forklifts, ads, unrelated items
const keepPhotos = [1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
const liftImages = keepPhotos.map(n => `/images/products/scissor-lift/scissor-lift-${String(n).padStart(2, '0')}.webp`)

const liftDesc = `The Vander Industries 6M Slim Electric Scissor Lift delivers professional-grade elevation in a compact, maneuverable package. Designed for indoor and outdoor use, this 2026 model features a 20-foot working platform height, a 500 lb rated capacity, and a whisper-quiet electric drive system. The slim profile allows access through standard doorways, making it ideal for warehouses, retail buildouts, facility maintenance, and construction finishing work. Zero emissions, low noise, and 110V–240V single-phase input make it ready to plug in anywhere.`

const techSpecs = [
  { label: 'Equipment Type', val: 'Electric Scissor Lift' },
  { label: 'Make', val: 'Vander Industries' },
  { label: 'Model Year', val: '2026' },
  { label: 'Condition', val: 'New — 0 Hours' },
  { label: 'Platform Height', val: "20–21 ft (6M)" },
  { label: 'Maximum Working Height', val: "~25.6 ft (6M + 1.8M)" },
  { label: 'Platform Capacity', val: '500 lb (227 kg)' },
  { label: 'Power Source', val: 'Electric — 110V–240V, Single Phase' },
  { label: 'Drive Type', val: 'Electric Hydraulic' },
  { label: 'Towable / Drivable', val: 'Towable / Trailer Mounted' },
  { label: 'Certifications', val: 'CE, ANSI' },
  { label: 'Country of Origin', val: 'China' },
]

const keyFeatures = [
  'Fully Compact Profile — fits through standard doorways',
  '3-Year Lithium Battery — long runtime, fast charge',
  'Flexible Side Guardrail — easy loading and safe operation',
  '2-in-1 Working Rate — variable speed control',
  'Enhanced Non-Slip Deck — maximum grip on elevated platform',
  'Hydraulic Overload Protection System',
  'Zero emissions — safe for indoor environments',
  '2-Year Manufacturer Warranty included',
]

const applications = [
  { icon: '🏭', title: 'Warehouse & Storage', desc: 'Access high shelving, lighting, and overhead systems in warehouses and distribution centers.' },
  { icon: '🏗️', title: 'Construction Finishing', desc: 'Drywall, painting, electrical, and HVAC installations on commercial construction sites.' },
  { icon: '🏬', title: 'Retail Buildouts', desc: 'Slim profile fits through standard doors — ideal for retail store setups and signage installation.' },
  { icon: '🔧', title: 'Facility Maintenance', desc: 'Routine maintenance of lights, HVAC, ceilings, and infrastructure in commercial facilities.' },
  { icon: '🎪', title: 'Event & Stage Production', desc: 'Lighting rigs, stage rigging, and AV system installation for events and entertainment venues.' },
  { icon: '🏢', title: 'Commercial Buildings', desc: 'Ideal for office buildouts, window cleaning, and overhead work in multi-story commercial spaces.' },
]
</script>

<style scoped>
.product-card {
  background: #fff;
  border: 1px solid var(--gray-100);
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.product-card-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}
@media (max-width: 900px) {
  .product-card { padding: 24px; gap: 32px; }
  .product-card-inner { grid-template-columns: 1fr; gap: 32px; }
}
.product-images { width: 100%; }
.product-name { font-size: 1.6rem; font-weight: 900; margin: 12px 0 4px; color: var(--black); }
.product-subtitle { color: var(--gray-700); font-size: 0.9rem; margin-bottom: 16px; }
.product-desc { color: var(--gray-700); font-size: 0.95rem; line-height: 1.7; }
.spec-group-title { font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--gray-700); margin-bottom: 8px; }
.spec-table { display: flex; flex-direction: column; border: 1px solid var(--gray-100); border-radius: 8px; overflow: hidden; }
.spec-row { display: flex; justify-content: space-between; padding: 9px 14px; font-size: 0.85rem; gap: 16px; }
.spec-row:nth-child(even) { background: var(--gray-50); }
.spec-label { font-weight: 600; color: var(--gray-700); flex-shrink: 0; }
.spec-val { font-weight: 700; color: var(--black); text-align: right; }
.features-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; }
.features-list li { font-size: 0.875rem; color: var(--gray-700); padding: 4px 0; }
.product-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
@media (max-width: 768px) { .features-grid { grid-template-columns: 1fr; } }
.feature-item { background: #fff; border: 1px solid var(--gray-100); border-radius: 12px; padding: 24px; }
.feature-icon { font-size: 2rem; margin-bottom: 12px; }
.feature-item h4 { margin-bottom: 8px; font-size: 1rem; }
.feature-item p { color: var(--gray-700); font-size: 0.875rem; margin: 0; }
.sticky-cta-band { background: #F5C300; padding: 20px 0; }
.sticky-cta-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
.sticky-cta-inner > div:first-child { display: flex; flex-direction: column; gap: 2px; }
.sticky-cta-inner strong { font-size: 1rem; font-weight: 900; }
.sticky-cta-inner span { font-size: 0.85rem; color: #333; }
.sticky-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; }
</style>
