<template>
  <div>
    <ProductHero
      badge="Industrial Cleaning Equipment"
      title="Commercial Floor Cleaners"
      description="Professional walk-behind warehouse floor scrubbers built for efficiency, durability, and daily industrial use. Battery-powered with long runtime. Direct wholesale pricing from LA."
      starting-price="Request a Quote"
      emoji="🧹"
      image-bg="#1a1a3a"
      @reserve="reserveOpen = true"
      @inquire="inquireOpen = true"
    />

    <!-- Product 1: M55 -->
    <section class="section">
      <div class="container">
        <div class="product-card">
          <div class="product-images">
            <img :src="m55ActiveImg" alt="Vander V33MS Commercial Floor Scrubber" class="main-img" />
            <div class="thumbs">
              <img
                v-for="(img, i) in m55Images"
                :key="i"
                :src="img"
                :class="['thumb', { active: m55ActiveImg === img }]"
                @click="m55ActiveImg = img"
                alt="V33MS view"
              />
            </div>
          </div>
          <div class="product-details">
            <div class="badge">Walk-Behind Manual</div>
            <h2 class="product-name">Vander V33MS Commercial Floor Cleaning Machine</h2>
            <p class="product-subtitle">Industrial Scrubber Washer Dryer — Manual Walk-Behind</p>
            <p class="product-desc">{{ m55Desc }}</p>
            <div class="spec-table mt-24">
              <div class="spec-row" v-for="s in m55Specs" :key="s.label">
                <span class="spec-label">{{ s.label }}</span>
                <span class="spec-val">{{ s.val }}</span>
              </div>
            </div>
            <div class="product-actions mt-32">
              <button class="btn btn-primary" @click="openReserve('Vander V33MS Floor Scrubber')">Reserve This Product</button>
              <button class="btn btn-outline" @click="openInquire('Vander V33MS Floor Scrubber')">Request More Info</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product 2: M55A -->
    <section class="section" style="background: var(--gray-50)">
      <div class="container">
        <div class="product-card">
          <div class="product-images">
            <img :src="m55aActiveImg" alt="Vander V33AS Commercial Floor Scrubber" class="main-img" />
            <div class="thumbs">
              <img
                v-for="(img, i) in m55aImages"
                :key="i"
                :src="img"
                :class="['thumb', { active: m55aActiveImg === img }]"
                @click="m55aActiveImg = img"
                alt="V33AS view"
              />
            </div>
          </div>
          <div class="product-details">
            <div class="badge">Electric Drive — Self-Propelled</div>
            <h2 class="product-name">Vander V33AS Commercial Floor Cleaning Machine</h2>
            <p class="product-subtitle">High-Efficiency Industrial Scrubber — Electronic Drive</p>
            <p class="product-desc">{{ m55aDesc }}</p>
            <div class="spec-table mt-24">
              <div class="spec-row" v-for="s in m55aSpecs" :key="s.label">
                <span class="spec-label">{{ s.label }}</span>
                <span class="spec-val">{{ s.val }}</span>
              </div>
            </div>
            <div class="product-actions mt-32">
              <button class="btn btn-primary" @click="openReserve('Vander V33AS Floor Scrubber')">Reserve This Product</button>
              <button class="btn btn-outline" @click="openInquire('Vander V33AS Floor Scrubber')">Request More Info</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <UsShippingMap />

    <section class="sticky-cta-band">
      <div class="container sticky-cta-inner">
        <div>
          <strong>Commercial Floor Cleaners — Wholesale Direct</strong>
          <span>24-Month Warranty Included · Ships Nationwide</span>
        </div>
        <div class="sticky-cta-btns">
          <button class="btn btn-primary" @click="reserveOpen = true">Reserve This Product</button>
          <button class="btn btn-outline" @click="inquireOpen = true">Request More Info</button>
        </div>
      </div>
    </section>

    <ReserveModal v-model="reserveOpen" :product-name="selectedProduct || 'Commercial Floor Cleaner'" />
    <InquiryModal v-model="inquireOpen" :product-name="selectedProduct || 'Commercial Floor Cleaner'" />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Commercial Floor Cleaners — Wholesale | Vander Industries',
  description: 'Industrial walk-behind floor scrubbers at wholesale prices. V33MS manual and V33AS electric drive models. 24-month warranty. Ships from LA.',
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

const m55Images = [
  '/images/products/floor-m55-1.jpg',
  '/images/products/floor-m55-2.jpg',
  '/images/products/floor-m55-3.jpg',
  '/images/products/floor-m55-4.jpg',
  '/images/products/floor-m55-5.jpg',
  '/images/products/floor-m55-6.jpg',
]
const m55ActiveImg = ref(m55Images[0])

const m55aImages = [
  '/images/products/floor-m55a-1.jpg',
  '/images/products/floor-m55a-2.jpg',
  '/images/products/floor-m55a-3.jpg',
  '/images/products/floor-m55a-4.jpg',
  '/images/products/floor-m55a-5.jpg',
  '/images/products/floor-m55a-6.jpg',
]
const m55aActiveImg = ref(m55aImages[0])

const m55Desc = `The M55 is a reliable walk-behind floor cleaning machine designed for efficient daily warehouse maintenance. Its manual push operation gives operators full control, making it ideal for facilities that prefer a simple, mechanical feel without powered drive assistance. With a working efficiency of up to 3000㎡ per hour and an 850mm cleaning width, the M55 covers large areas quickly while remaining easy to maneuver in aisles and open spaces. Powered by a 24V battery system, the M55 delivers 3–4 hours of continuous runtime. The 60L solution tank and 70L recovery tank allow for longer cleaning cycles with fewer stops to refill or empty.`

const m55aDesc = `The M55A is a high-performance warehouse floor scrubber designed for maximum productivity and operator comfort. Featuring an electronic drive system, this model moves forward automatically, eliminating the need to push and significantly reducing operator fatigue. With an impressive cleaning efficiency of up to 3500㎡ per hour and the same wide 850mm cleaning width, the M55A is ideal for large facilities and high-traffic environments. The machine is powered by a 24V battery, providing 3–4 hours of operating time, and can reach speeds of up to 7 km/h for faster cleaning coverage.`

const m55Specs = [
  { label: 'Working Efficiency', val: '3000 ㎡/h' },
  { label: 'Cleaning Width', val: '850 mm' },
  { label: 'Working Time', val: '3–4 h' },
  { label: 'Solution Tank', val: '60 L' },
  { label: 'Recovery Tank', val: '70 L' },
  { label: 'Power', val: 'Battery 24V' },
  { label: 'Traction', val: 'Disk brush driving' },
  { label: 'Dimension', val: '1390 × 800 × 1000 mm' },
  { label: 'Weight', val: '190 kg' },
  { label: 'Vacuum Motor', val: '500 W' },
  { label: 'Brush Motor', val: '550 W' },
]

const m55aSpecs = [
  { label: 'Working Efficiency', val: '3500 ㎡/h' },
  { label: 'Cleaning Width', val: '33"' },
  { label: 'Working Time', val: '3–4 h' },
  { label: 'Solution Tank', val: '16 Gallon / 60 L' },
  { label: 'Recovery Tank', val: '18.5 Gallon / 70 L' },
  { label: 'Power', val: 'Battery 24V' },
  { label: 'Traction', val: 'Self-Propelled / Electronic Drive' },
  { label: 'Maximum Speed', val: '4.4 mph' },
  { label: 'Dimension', val: '60" (L) × 46" (H) × 38" (W)' },
  { label: 'Weight', val: '441 lbs' },
  { label: 'Vacuum Motor', val: '500 W' },
  { label: 'Brush Motor', val: '550 W' },
  { label: 'Drive Motor', val: '300 W' },
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
.spec-row { display: flex; justify-content: space-between; padding: 10px 16px; font-size: 0.875rem; }
.spec-row:nth-child(even) { background: var(--gray-50); }
.spec-label { font-weight: 600; color: var(--gray-700); }
.spec-val { font-weight: 700; color: var(--black); text-align: right; }
.product-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.sticky-cta-band { background: #F5C300; padding: 20px 0; }
.sticky-cta-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
.sticky-cta-inner > div:first-child { display: flex; flex-direction: column; gap: 2px; }
.sticky-cta-inner strong { font-size: 1rem; font-weight: 900; }
.sticky-cta-inner span { font-size: 0.85rem; color: #333; }
.sticky-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; }
</style>
