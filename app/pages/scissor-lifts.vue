<template>
  <div>
    <ProductHero
      badge="Electric Forklifts"
      title="Electric Forklifts"
      description="Vander 3-wheel electric forklifts with lithium battery technology, multi-stage masts, side shifters, and adjustable forks. Built for warehouses, distribution centers, and manufacturing facilities."
      starting-price="Request a Quote"
      emoji="🏗️"
      image-bg="#1a1a2e"
      @reserve="reserveOpen = true"
      @inquire="inquireOpen = true"
    />

    <!-- Product 1: 5000 lb Forklift -->
    <section class="section">
      <div class="container">
        <div class="product-card">
          <div class="product-images">
            <img :src="fl5kActiveImg" alt="Vander 3-Wheel Electric Forklift 5000 lb" class="main-img" />
            <div class="thumbs">
              <img
                v-for="(img, i) in fl5kImages"
                :key="i"
                :src="img"
                :class="['thumb', { active: fl5kActiveImg === img }]"
                @click="fl5kActiveImg = img"
                alt="5000 lb Forklift view"
              />
            </div>
          </div>
          <div class="product-details">
            <div class="badge">5,000 lb Capacity — 3-Wheel Design</div>
            <h2 class="product-name">Vander 3-Wheel Electric Forklift</h2>
            <p class="product-subtitle">5,000 lb Capacity · 16 ft 3-Stage Mast · 80V 380Ah Lithium · Side Shift</p>
            <p class="product-desc">{{ fl5kDesc }}</p>
            <div class="spec-table mt-24">
              <div class="spec-row" v-for="s in fl5kSpecs" :key="s.label">
                <span class="spec-label">{{ s.label }}</span>
                <span class="spec-val">{{ s.val }}</span>
              </div>
            </div>
            <div class="product-actions mt-32">
              <button class="btn btn-primary" @click="openReserve('Vander 3-Wheel Electric Forklift 5,000 lb')">Reserve This Product</button>
              <button class="btn btn-outline" @click="openInquire('Vander 3-Wheel Electric Forklift 5,000 lb')">Request More Info</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product 2: 3000 lb Forklift -->
    <section class="section" style="background: var(--gray-50)">
      <div class="container">
        <div class="product-card">
          <div class="product-images">
            <img :src="fl3kActiveImg" alt="Vander Electric Forklift 3000 lb" class="main-img" />
            <div class="thumbs">
              <img
                v-for="(img, i) in fl3kImages"
                :key="i"
                :src="img"
                :class="['thumb', { active: fl3kActiveImg === img }]"
                @click="fl3kActiveImg = img"
                alt="3000 lb Forklift view"
              />
            </div>
          </div>
          <div class="product-details">
            <div class="badge">3,000 lb Capacity — Compact Design</div>
            <h2 class="product-name">Vander Electric Forklift</h2>
            <p class="product-subtitle">3,000 lb Capacity · 15 ft 3-Stage Mast · 80V 300Ah Lithium · Side Shift</p>
            <p class="product-desc">{{ fl3kDesc }}</p>
            <div class="spec-table mt-24">
              <div class="spec-row" v-for="s in fl3kSpecs" :key="s.label">
                <span class="spec-label">{{ s.label }}</span>
                <span class="spec-val">{{ s.val }}</span>
              </div>
            </div>
            <div class="product-actions mt-32">
              <button class="btn btn-primary" @click="openReserve('Vander Electric Forklift 3,000 lb')">Reserve This Product</button>
              <button class="btn btn-outline" @click="openInquire('Vander Electric Forklift 3,000 lb')">Request More Info</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="section">
      <div class="container">
        <div class="text-center mb-32">
          <div class="badge">Why Vander Forklifts</div>
          <h2>Performance. Reliability. Warranty.</h2>
        </div>
        <div class="features-grid">
          <div class="feature-item" v-for="f in features" :key="f.title">
            <div class="feature-icon">{{ f.icon }}</div>
            <h4>{{ f.title }}</h4>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <UsShippingMap />

    <section class="sticky-cta-band">
      <div class="container sticky-cta-inner">
        <div>
          <strong>Vander Electric Forklifts — Wholesale Direct</strong>
          <span>24-Month Full Warranty · Lithium Battery · Ships Nationwide</span>
        </div>
        <div class="sticky-cta-btns">
          <button class="btn btn-primary" @click="reserveOpen = true">Reserve This Product</button>
          <button class="btn btn-outline" @click="inquireOpen = true">Request More Info</button>
        </div>
      </div>
    </section>

    <ReserveModal v-model="reserveOpen" :product-name="selectedProduct || 'Vander Electric Forklift'" />
    <InquiryModal v-model="inquireOpen" :product-name="selectedProduct || 'Vander Electric Forklift'" />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Electric Forklifts — Wholesale Pricing | Vander Industries',
  description: 'Vander 3-wheel electric forklifts. 3,000 lb and 5,000 lb capacity. 80V lithium battery, 3-stage mast, side shift. 24-month warranty. Wholesale direct.',
})

const reserveOpen = ref(false)
const inquireOpen = ref(false)
const selectedProduct = ref('')

function openReserve(name) {
  selectedProduct.value = name
  reserveOpen.value = true
}
function openInquire(name) {
  selectedProduct.value = name
  inquireOpen.value = true
}

const fl5kImages = [
  '/images/products/scissor-lift-1.webp',
  '/images/products/scissor-lift-2.webp',
]
const fl5kActiveImg = ref(fl5kImages[0])

const fl3kImages = [
  '/images/products/scissor-lift-3.webp',
  '/images/products/scissor-lift-4.webp',
]
const fl3kActiveImg = ref(fl3kImages[0])

const sharedDesc = `This Vander electric forklift is engineered to deliver dependable performance, efficiency, and long-term durability for warehouse, logistics, and industrial material-handling environments. Its robust construction and multi-stage mast allow for safe and stable lifting at higher stacking heights, while the electric AC drive system ensures smooth, quiet operation. The lithium battery technology provides consistent power output, faster charging times, and reduced maintenance requirements compared to traditional batteries. Standard features such as a side shifter, adjustable forks, and solid tires enhance operator control, productivity, and safety.`

const fl5kDesc = sharedDesc
const fl3kDesc = sharedDesc

const fl5kSpecs = [
  { label: 'Load Capacity', val: '5,000 lb' },
  { label: 'Mast', val: '16 ft 3-Stage' },
  { label: 'Battery', val: '80V 380Ah Lithium' },
  { label: 'Drive', val: '3-Wheel Electric (AC Drive)' },
  { label: 'Attachments', val: 'Side Shifter + Adjustable Forks' },
  { label: 'Tires', val: 'Solid' },
  { label: 'Warranty', val: '24-Month Full Warranty' },
]

const fl3kSpecs = [
  { label: 'Load Capacity', val: '3,000 lb' },
  { label: 'Mast', val: '15 ft 3-Stage' },
  { label: 'Battery', val: '80V 300Ah Lithium' },
  { label: 'Drive', val: 'Compact Electric (AC Drive)' },
  { label: 'Attachments', val: 'Side Shifter + Adjustable Forks' },
  { label: 'Tires', val: 'Solid' },
  { label: 'Warranty', val: '24-Month Full Warranty' },
]

const features = [
  { icon: '⚡', title: 'Lithium Battery', desc: 'Consistent power output, faster charging times, and reduced maintenance compared to traditional lead-acid batteries.' },
  { icon: '🔄', title: '3-Wheel Design', desc: 'Tight turning radius for navigating narrow warehouse aisles and confined spaces with precision.' },
  { icon: '↕️', title: '3-Stage Mast', desc: 'Multi-stage mast for safe and stable lifting at high stacking heights in warehouse environments.' },
  { icon: '↔️', title: 'Side Shifter', desc: 'Standard side shifter with adjustable forks for enhanced load positioning and operator productivity.' },
  { icon: '🤫', title: 'Quiet AC Drive', desc: 'Electric AC drive system ensures smooth, quiet operation — ideal for indoor warehouse environments.' },
  { icon: '🛡️', title: '24-Month Warranty', desc: 'Full 24-month warranty included on every unit. Distribution centers, manufacturing, and commercial use.' },
]
</script>

<style scoped>
.product-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
  background: #fff;
  border: 1px solid var(--gray-100);
  border-radius: 16px;
  padding: 40px;
}
@media (max-width: 768px) {
  .product-card { grid-template-columns: 1fr; padding: 24px; gap: 32px; }
}
.product-images { display: flex; flex-direction: column; gap: 12px; }
.main-img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid var(--gray-100);
}
.thumbs { display: flex; gap: 8px; flex-wrap: wrap; }
.thumb {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 6px;
  border: 2px solid var(--gray-100);
  cursor: pointer;
  transition: border-color 0.2s;
}
.thumb.active, .thumb:hover { border-color: #F5C300; }
.product-name { font-size: 1.6rem; font-weight: 900; margin: 12px 0 4px; color: var(--black); }
.product-subtitle { color: var(--gray-700); font-size: 0.9rem; margin-bottom: 16px; }
.product-desc { color: var(--gray-700); font-size: 0.95rem; line-height: 1.7; }
.spec-table { display: flex; flex-direction: column; border: 1px solid var(--gray-100); border-radius: 8px; overflow: hidden; }
.spec-row { display: flex; justify-content: space-between; padding: 10px 16px; font-size: 0.875rem; gap: 16px; }
.spec-row:nth-child(even) { background: var(--gray-50); }
.spec-label { font-weight: 600; color: var(--gray-700); flex-shrink: 0; }
.spec-val { font-weight: 700; color: var(--black); text-align: right; }
.product-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
@media (max-width: 768px) { .features-grid { grid-template-columns: 1fr; } }
.feature-item { background: var(--gray-50); border: 1px solid var(--gray-100); border-radius: 12px; padding: 24px; }
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
