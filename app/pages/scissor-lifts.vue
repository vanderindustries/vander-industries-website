<template>
  <div>
    <ProductHero
      badge="Aerial Work Platforms"
      title="Electric Scissor Lifts"
      description="Choose your model below. 20FT platform height, up to 507 lb capacity. Brand new 2026, 0 hours. Wholesale direct from Los Angeles."
      :list-price="currentVariant.listPrice"
      :sale-price="currentVariant.salePrice"
      :savings="currentVariant.savings"
      reserve-label="Reserve This Unit Now"
      image-src="/images/products/scissor-lift/scissor-lift-01.webp"
      @reserve="reserveOpen = true"
      @inquire="inquireOpen = true"
    />

    <!-- Variant Selector Banner -->
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
              <p class="product-subtitle">Vander Industries · Model Year 2026 · {{ currentVariant.subtitle }}</p>
              <p class="product-desc">{{ currentVariant.desc }}</p>

              <!-- Inline price display -->
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
          <strong>20FT Slim Electric Scissor Lift — 20 ft Platform</strong>
          <span>500 lb Capacity · 2026 Model · Ships Nationwide from Los Angeles</span>
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
  title: 'Electric Scissor Lifts — Wholesale Pricing | Vander Industries',
  description: 'Vander Industries 20FT Slim Electric Scissor Lift. 20 ft working height, 500 lb capacity, 2026 model. Wholesale direct pricing. Ships nationwide from Los Angeles in 1–2 business days.',
})

const reserveOpen = ref(false)
const inquireOpen = ref(false)
const selectedVariant = ref('slim-20')

const slimPhotos = [1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27].map(
  n => `/images/products/scissor-lift/scissor-lift-${String(n).padStart(2, '0')}.webp`
)
// Wide model uses same photos until dedicated photos are available
const widePhotos = slimPhotos

const variants = [
  {
    id: 'slim-20',
    name: '20FT Slim Electric Scissor Lift',
    subtitle: 'Lift Height 20 ft · Working Height ~26 ft · Slim Profile',
    listPrice: '$11,999.00',
    salePrice: '$9,499.99',
    savings: '$2,500.01',
    images: slimPhotos,
    desc: 'The Vander Industries 20FT Slim Electric Scissor Lift delivers professional-grade elevation in a compact, maneuverable package. The slim profile allows access through standard doorways, making it ideal for warehouses, retail buildouts, facility maintenance, and construction work. Zero emissions, 110V–240V single-phase input, ready to plug in anywhere.',
    specs: [
      { label: 'Model', val: 'VAN-003' },
      { label: 'Lift Height', val: "19' 8\"" },
      { label: 'Working Height', val: "26' 3\"" },
      { label: 'Platform Size', val: "7' 7\" × 2' 8\" × 3' 8\"" },
      { label: 'Overall Size', val: "8' 2\" × 2' 8\" × 7' 2\"" },
      { label: 'Load Capacity', val: '500 lbs' },
      { label: 'Batteries', val: '4x Lithium Ion' },
      { label: 'Controller', val: 'Curtis USA' },
      { label: 'Condition', val: 'New — 0 Hours' },
    ],
    features: [
      'Slim profile — fits through standard doorways',
      'Overload Alarm — prevents unsafe loading',
      'Tilted Alarm — alerts on uneven surfaces',
      'Non-Marking Tires — safe for finished floors',
      'Pothole Protection System',
      'Curtis USA Controller',
      '4x Lithium Ion Batteries',
      '2-Year Manufacturer Warranty included',
    ]
  },
  {
    id: 'wide-20',
    name: '20FT Wide Electric Scissor Lift',
    subtitle: 'Lift Height 20 ft · Working Height ~26 ft · Wide Platform',
    listPrice: '$12,400.00',
    salePrice: '$9,999.00',
    savings: '$2,401.00',
    images: widePhotos,
    desc: 'The Vander Industries 20FT Wide Electric Scissor Lift offers a larger platform for jobs requiring more working space. With a 507 lb capacity, Curtis USA controller, 4x Lithium Ion batteries, and a full suite of safety systems, this unit is built for demanding commercial and industrial environments.',
    specs: [
      { label: 'Model', val: 'VAN-004' },
      { label: 'Lift Height', val: "19' 8\"" },
      { label: 'Working Height', val: "26' 3\"" },
      { label: 'Platform Size', val: "7' 7\" × 2' 8\" × 3' 8\"" },
      { label: 'Overall Size', val: "8' 2\" × 2' 8\" × 7' 2\"" },
      { label: 'Load Capacity', val: '507 lbs' },
      { label: 'Machine Weight', val: '4,145 lbs' },
      { label: 'Batteries', val: '4x Lithium Ion' },
      { label: 'Controller', val: 'Curtis USA' },
      { label: 'Condition', val: 'New — 0 Hours' },
    ],
    features: [
      'Wide platform — more room for tools and crew',
      'Overload Alarm — prevents unsafe loading',
      'Tilted Alarm — alerts on uneven surfaces',
      'Non-Marking Tires — safe for finished floors',
      'Pothole Protection System',
      'Curtis USA Controller',
      '4x Lithium Ion Batteries',
      '2-Year Manufacturer Warranty included',
    ]
  },
  {
    id: 'slim-26',
    name: '26FT Slim Electric Scissor Lift',
    subtitle: 'Lift Height 26 ft · Working Height ~33 ft · Slim Profile',
    listPrice: '$12,599.00',
    salePrice: '$10,499.00',
    savings: '$2,100.00',
    images: slimPhotos,
    desc: 'The Vander Industries 26FT Slim Electric Scissor Lift reaches where most lifts cannot. With a 26 ft lift height and 32\' 10\" working height, it handles the tallest interior tasks with ease. Slim footprint, 507 lb capacity, and Curtis USA controller make it the go-to for high-bay warehouses, industrial facilities, and large commercial builds.',
    specs: [
      { label: 'Model', val: 'VAN-005' },
      { label: 'Lift Height', val: "26' 3\"" },
      { label: 'Working Height', val: "32' 10\"" },
      { label: 'Platform Size', val: "7' 6\" × 2' 8\" × 3' 8\"" },
      { label: 'Overall Size', val: "8' 2\" × 2' 9\" × 7' 7\"" },
      { label: 'Load Capacity', val: '507 lbs' },
      { label: 'Machine Weight', val: '4,475 lbs' },
      { label: 'Batteries', val: '4x Lithium Ion' },
      { label: 'Controller', val: 'Curtis USA' },
      { label: 'Condition', val: 'New — 0 Hours' },
    ],
    features: [
      'Reaches 32\' 10\" working height — ideal for high-bay facilities',
      'Slim profile — navigates tight aisles and doorways',
      'Overload Alarm — prevents unsafe loading',
      'Tilted Alarm — alerts on uneven surfaces',
      'Non-Marking Tires — safe for finished floors',
      'Pothole Protection System',
      'Curtis USA Controller',
      '2-Year Manufacturer Warranty included',
    ]
  },
  {
    id: 'wide-26',
    name: '26FT Wide Electric Scissor Lift',
    subtitle: 'Lift Height 26 ft · Working Height ~33 ft · Wide Platform · 992 lb Capacity',
    listPrice: '$12,999.00',
    salePrice: '$10,799.00',
    savings: '$2,200.00',
    images: widePhotos,
    desc: 'The Vander Industries 26FT Wide Electric Scissor Lift is the most capable unit in our lineup. A massive 992 lb load capacity, 32 ft 10 in working height, and wide 7\'5" × 3\'8" platform make it the right choice for heavy industrial work, large crews, and demanding high-bay environments. 110V, 60hz, 2-Phase power input.',
    specs: [
      { label: 'Model', val: 'VAN-006' },
      { label: 'Lift Height', val: "26' 3\"" },
      { label: 'Working Height', val: "32' 10\"" },
      { label: 'Platform Size', val: "7' 5\" × 3' 8\" × 3' 8\"" },
      { label: 'Overall Size', val: "8' 0\" × 4' 0\" × 7' 11\"" },
      { label: 'Load Capacity', val: '992 lbs' },
      { label: 'Machine Weight', val: '4,982 lbs' },
      { label: 'Batteries', val: '4x Lithium Ion' },
      { label: 'Controller', val: 'Curtis USA' },
      { label: 'Voltage', val: '110V, 60hz, 2 Phase' },
      { label: 'Condition', val: 'New — 0 Hours' },
    ],
    features: [
      '992 lb capacity — nearly double the standard load rating',
      'Wide platform 7\'5" × 3\'8" — fits full crew and equipment',
      'Reaches 32\' 10\" working height',
      'Overload Alarm — prevents unsafe loading',
      'Tilted Alarm — alerts on uneven surfaces',
      'Non-Marking Tires — safe for finished floors',
      'Pothole Protection System',
      '2-Year Manufacturer Warranty included',
    ]
  },
  {
    id: 'wide-33',
    name: '33FT Wide Electric Scissor Lift',
    subtitle: 'Lift Height 33 ft · Working Height ~39 ft · Wide Platform · 705 lb Capacity',
    listPrice: '$16,499.00',
    salePrice: '$12,999.00',
    savings: '$3,500.00',
    images: widePhotos,
    desc: 'The Vander Industries 33FT Wide Electric Scissor Lift is our tallest and most powerful model. Reaching a 39\' 4\" working height with a 705 lb capacity and wide 7\'5" × 3\'8" platform, it handles the most demanding high-bay industrial tasks. Hydraulic legs for added stability, Curtis USA controller, and 110V 60hz 2-Phase power input.',
    specs: [
      { label: 'Model', val: 'VAN-007' },
      { label: 'Lift Height', val: "32' 10\"" },
      { label: 'Working Height', val: "39' 4\"" },
      { label: 'Platform Size', val: "7' 5\" × 3' 8\" × 3' 8\"" },
      { label: 'Overall Size', val: "8' 9\" × 5' 5\" × 8' 4\"" },
      { label: 'Load Capacity', val: '705 lbs' },
      { label: 'Machine Weight', val: '3,415 lbs' },
      { label: 'Batteries', val: '4x Lithium Ion' },
      { label: 'Controller', val: 'Curtis USA' },
      { label: 'Voltage', val: '110V, 60hz, 2 Phase' },
      { label: 'Condition', val: 'New — 0 Hours' },
    ],
    features: [
      'Tallest model — reaches 39\' 4\" working height',
      'Wide platform 7\'5" × 3\'8" — room for crew and equipment',
      'Hydraulic Legs — enhanced stability at max height',
      'Overload Alarm — prevents unsafe loading',
      'Tilted Alarm — alerts on uneven surfaces',
      'Non-Marking Tires — safe for finished floors',
      'Pothole Protection System',
      '2-Year Manufacturer Warranty included',
    ]
  },
]

const currentVariant = computed(() => variants.find(v => v.id === selectedVariant.value))

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
/* Variant selector bar */
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
  flex-wrap: wrap;
}
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
  min-width: 160px;
}
.variant-btn:hover {
  border-color: #F5C300;
  background: rgba(245,195,0,0.08);
}
.variant-btn.active {
  border-color: #F5C300;
  background: rgba(245,195,0,0.12);
}
.vb-name {
  font-size: 0.8rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
}
.variant-btn.active .vb-name { color: #F5C300; }
.vb-price {
  font-size: 1rem;
  font-weight: 900;
  color: #F5C300;
  margin-top: 3px;
}

/* Inline price block */
.variant-price-block {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
  margin: 16px 0;
}
.vp-list { font-size: 0.9rem; color: #999; text-decoration: line-through; }
.vp-sale { font-size: 1.8rem; font-weight: 900; color: var(--black); }
.vp-save {
  font-size: 0.75rem;
  font-weight: 700;
  background: rgba(245,195,0,0.2);
  border: 1px solid rgba(245,195,0,0.5);
  color: #7a5c00;
  padding: 3px 10px;
  border-radius: 20px;
}

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
