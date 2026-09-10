<template>
  <div>
    <ProductHero
      badge="Commercial Floor Equipment"
      title="Industrial Floor Scrubbers"
      description="Professional-grade walk-behind floor scrubbers for warehouses, retail, and commercial facilities. Wholesale direct. Ships nationwide from Los Angeles."
      :list-price="currentVariant.listPrice"
      :sale-price="currentVariant.salePrice"
      :savings="currentVariant.savings"
      reserve-label="Reserve This Unit Now"
      :image-src="currentVariant.images[0]"
      @reserve="reserveOpen = true"
      @inquire="inquireOpen = true"
    />

    <!-- Variant Selector -->
    <section class="variant-section">
      <div class="container">
        <p class="variant-label">Select Your Model</p>
        <div class="variant-selector">
          <button
            v-for="v in variants"
            :key="v.id"
            :class="['variant-btn', { active: selectedVariant === v.id }]"
            @click="selectedVariant = v.id"
          >
            <span class="vb-name">{{ v.name }}</span>
            <span class="vb-price">{{ v.salePrice }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Product Section -->
    <section class="section">
      <div class="container">
        <div class="product-card">
          <div class="product-card-inner">
            <div class="product-images">
              <ImageGallery :images="currentVariant.images" :label="currentVariant.name" :start-index="1" />
            </div>
            <div class="product-details">
              <div class="badge">2026 Model — Brand New, 0 Hours</div>
              <h2 class="product-name">{{ currentVariant.name }}</h2>
              <p class="product-subtitle">Vander Industries · Model {{ currentVariant.model }} · Walk-Behind</p>
              <p class="product-desc">{{ currentVariant.desc }}</p>

              <div class="variant-price-block">
                <span class="vp-list"><s>{{ currentVariant.listPrice }}</s></span>
                <span class="vp-sale">{{ currentVariant.salePrice }}</span>
                <span class="vp-save">You Save {{ currentVariant.savings }}</span>
              </div>

              <div class="spec-group mt-16">
                <h4 class="spec-group-title">Technical Specifications</h4>
                <div class="spec-table">
                  <div class="spec-row" v-for="s in currentVariant.specs" :key="s.label">
                    <span class="spec-label">{{ s.label }}</span>
                    <span class="spec-val">{{ s.val }}</span>
                  </div>
                </div>
              </div>

              <div class="spec-group mt-16">
                <h4 class="spec-group-title">Key Features</h4>
                <ul class="features-list">
                  <li v-for="f in currentVariant.features" :key="f">✅ {{ f }}</li>
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

    <!-- Applications -->
    <section class="section" style="background: var(--gray-50)">
      <div class="container">
        <div class="text-center mb-32">
          <div class="badge">Where It Works</div>
          <h2>Built for Commercial Environments</h2>
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

    <UsShippingMap :zone-prices="{ 1: 250, 2: 350, 3: 450, 4: 550, 5: 650 }" />

    <section class="sticky-cta-band">
      <div class="container sticky-cta-inner">
        <div>
          <strong>{{ currentVariant.name }}</strong>
          <span>Model {{ currentVariant.model }} · 37,000 sq/ft per hour · Ships Nationwide from Los Angeles</span>
        </div>
        <div class="sticky-cta-btns">
          <button class="btn btn-primary" @click="reserveOpen = true">Reserve This Unit Now</button>
          <button class="btn btn-outline" @click="inquireOpen = true">Request More Info</button>
        </div>
      </div>
    </section>

    <ReserveModal v-model="reserveOpen" :product-name="currentVariant.name" />
    <InquiryModal v-model="inquireOpen" :product-name="currentVariant.name" />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Commercial Floor Scrubbers — Wholesale Pricing | Vander Industries',
  description: 'Vander Industries V33AS & V33MS commercial floor scrubbers. 37,000 sq/ft per hour, 20" disc brush, self-propelled or manual. Wholesale direct pricing. Ships nationwide from Los Angeles.',
})

const reserveOpen = ref(false)
const inquireOpen = ref(false)
const selectedVariant = ref('v33as')

const asImages = Array.from({ length: 16 }, (_, i) =>
  `/images/products/floor-cleaner-as/floor-as-${String(i + 1).padStart(2, '0')}.webp`
)
// Removed 02-07 (competitor machines + logo) — 17 clean Vander product shots remain
const msImages = [1, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map(
  n => `/images/products/floor-cleaner-ms/floor-ms-${String(n).padStart(2, '0')}.webp`
)

const variants = [
  {
    id: 'v33as',
    name: 'V33AS Self-Propelled Floor Scrubber',
    model: 'V33AS',
    listPrice: '$3,999.00',
    salePrice: '$2,799.00',
    savings: '$1,200.00',
    images: asImages,
    desc: 'The Vander V33AS is our top-of-the-line self-propelled commercial floor scrubber. It drives itself forward so your operator can focus on guiding, not pushing — dramatically reducing fatigue on large floor areas. With a 20" disc brush, 37,000 sq/ft per hour cleaning rate, built-in solution tank, and rear squeegee, it scrubs and dries in a single pass.',
    specs: [
      { label: 'Model', val: 'V33AS' },
      { label: 'Style', val: 'Walk-Behind, Self-Propelled' },
      { label: 'Cleaning Width', val: '20"' },
      { label: 'Water Sucker Width', val: '33"' },
      { label: 'Cleaning Rate', val: '37,000 sq/ft per hour' },
      { label: 'Brush Diameter', val: '20" Disc' },
      { label: 'Brush Rotation Speed', val: '160 RPM' },
      { label: 'Suction Power', val: '180 mbar' },
      { label: 'Floor Motor', val: '110V / 550W' },
      { label: 'Suction Motor', val: '110V / 500W' },
      { label: 'Power', val: 'Cordless (Battery)' },
      { label: 'Application', val: 'Concrete & Stone' },
      { label: 'Condition', val: 'New — 0 Hours' },
    ],
    features: [
      'Self-Propelled — reduces operator fatigue on large areas',
      'Scrubs and dries in a single pass',
      '37,000 sq/ft per hour cleaning rate',
      '20" disc brush at 160 RPM',
      'Built-in solution tank and rear squeegee',
      '33" suction width — leaves floors dry',
      'Cordless operation — no trip hazards',
      '2-Year Manufacturer Warranty included',
    ]
  },
  {
    id: 'v33ms',
    name: 'V33MS Manual Floor Scrubber',
    model: 'V33MS',
    listPrice: '$2,999.00',
    salePrice: '$2,099.00',
    savings: '$900.00',
    images: msImages,
    desc: 'The Vander V33MS is a professional walk-behind manual floor scrubber offering the same powerful cleaning performance as the V33AS at a more accessible price point. Ideal for smaller facilities, targeted cleaning zones, or operators who prefer manual control. Same 20" disc brush, 37,000 sq/ft cleaning rate, solution tank, and rear squeegee system.',
    specs: [
      { label: 'Model', val: 'V33MS' },
      { label: 'Style', val: 'Walk-Behind, Manual' },
      { label: 'Cleaning Width', val: '20"' },
      { label: 'Water Sucker Width', val: '33"' },
      { label: 'Cleaning Rate', val: '37,000 sq/ft per hour' },
      { label: 'Brush Diameter', val: '20" Disc' },
      { label: 'Brush Rotation Speed', val: '160 RPM' },
      { label: 'Suction Power', val: '180 mbar' },
      { label: 'Floor Motor', val: '110V / 550W' },
      { label: 'Suction Motor', val: '110V / 500W' },
      { label: 'Power', val: 'Cordless (Battery)' },
      { label: 'Application', val: 'Concrete & Stone' },
      { label: 'Condition', val: 'New — 0 Hours' },
    ],
    features: [
      'Manual walk-behind — precise operator control',
      'Scrubs and dries in a single pass',
      '37,000 sq/ft per hour cleaning rate',
      '20" disc brush at 160 RPM',
      'Built-in solution tank and rear squeegee',
      '33" suction width — leaves floors dry',
      'Cordless operation — no trip hazards',
      '2-Year Manufacturer Warranty included',
    ]
  }
]

const currentVariant = computed(() => variants.find(v => v.id === selectedVariant.value))

const applications = [
  { icon: '🏭', title: 'Warehouses', desc: 'Keep large warehouse floors clean, dry, and safe for forklift operations and foot traffic.' },
  { icon: '🏬', title: 'Retail Stores', desc: 'Maintain spotless showroom and retail floor surfaces with a single efficient pass.' },
  { icon: '🏥', title: 'Healthcare Facilities', desc: 'Hospital-grade cleanliness on hard floors — scrubs, rinses, and dries in one operation.' },
  { icon: '🍽️', title: 'Food & Beverage', desc: 'Approved for use on concrete and stone surfaces in food production and commercial kitchens.' },
  { icon: '🏢', title: 'Commercial Buildings', desc: 'Lobbies, corridors, and parking garages cleaned efficiently with minimal downtime.' },
  { icon: '✈️', title: 'Airports & Logistics', desc: 'Handle high-traffic terminal and logistics floor maintenance at scale.' },
]
</script>

<style scoped>
.variant-section {
  background: #111;
  padding: 20px 0;
  border-bottom: 3px solid #F5C300;
}
.variant-label {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #F5C300;
  margin: 0 0 12px;
}
.variant-selector {
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
}
.variant-selector::-webkit-scrollbar { display: none; }
.variant-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 18px;
  border: 2px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  background: rgba(255,255,255,0.05);
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
  flex-shrink: 0;
  white-space: nowrap;
}
.variant-btn:hover { border-color: #F5C300; background: rgba(245,195,0,0.08); }
.variant-btn.active { border-color: #F5C300; background: rgba(245,195,0,0.12); }
.vb-name { font-size: 0.8rem; font-weight: 700; color: #fff; }
.variant-btn.active .vb-name { color: #F5C300; }
.vb-price { font-size: 1rem; font-weight: 900; color: #F5C300; margin-top: 3px; }

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
.product-name { font-size: 1.5rem; font-weight: 900; margin: 12px 0 4px; color: var(--black); }
.product-subtitle { color: var(--gray-700); font-size: 0.9rem; margin-bottom: 16px; }
.product-desc { color: var(--gray-700); font-size: 0.95rem; line-height: 1.7; }
.variant-price-block {
  display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; margin: 16px 0;
}
.vp-list { font-size: 0.9rem; color: #999; text-decoration: line-through; }
.vp-sale { font-size: 1.8rem; font-weight: 900; color: var(--black); }
.vp-save {
  font-size: 0.75rem; font-weight: 700;
  background: rgba(245,195,0,0.2); border: 1px solid rgba(245,195,0,0.5);
  color: #7a5c00; padding: 3px 10px; border-radius: 20px;
}
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
