<template>
  <div>
    <ProductHero
      badge="Stretch Wrap Automation"
      title="Pallet Wrapping Machines"
      description="Automatic robot pallet wrappers with Siemens PLC control, touch screen interface, and up to 300% pre-stretch film carriage. Built for warehouses, distribution centers, and manufacturing facilities."
      starting-price="Request a Quote"
      emoji="📦"
      image-bg="#2a1a1a"
      @reserve="reserveOpen = true"
      @inquire="inquireOpen = true"
    />

    <!-- Product: XT-4510 -->
    <section class="section">
      <div class="container">
        <div class="product-card">
          <div class="product-images">
            <img :src="activeImg" alt="XT-4510 Automatic Robot Pallet Wrapper" class="main-img" />
            <div class="thumbs">
              <img
                v-for="(img, i) in palletImages"
                :key="i"
                :src="img"
                :class="['thumb', { active: activeImg === img }]"
                @click="activeImg = img"
                alt="XT-4510 view"
              />
            </div>
          </div>
          <div class="product-details">
            <div class="badge">Automatic Robot Wrapper</div>
            <h2 class="product-name">XT-4510 Automatic Robot Pallet Wrapper</h2>
            <p class="product-subtitle">Mobile Stretch Wrapping Machine — Siemens PLC + Touch Screen</p>
            <p class="product-desc">{{ palletDesc }}</p>
            <div class="spec-table mt-24">
              <div class="spec-row" v-for="s in palletSpecs" :key="s.label">
                <span class="spec-label">{{ s.label }}</span>
                <span class="spec-val">{{ s.val }}</span>
              </div>
            </div>
            <div class="product-actions mt-32">
              <button class="btn btn-primary" @click="reserveOpen = true">Reserve This Product</button>
              <button class="btn btn-outline" @click="inquireOpen = true">Request More Info</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section class="section" style="background: var(--gray-50)">
      <div class="container">
        <div class="text-center mb-32">
          <div class="badge">Key Features</div>
          <h2>Advanced Automation. Consistent Results.</h2>
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
          <strong>XT-4510 Automatic Robot Pallet Wrapper — Wholesale Direct</strong>
          <span>Siemens PLC · Auto Film Cut · 300% Pre-Stretch · Ships Nationwide</span>
        </div>
        <div class="sticky-cta-btns">
          <button class="btn btn-primary" @click="reserveOpen = true">Reserve This Product</button>
          <button class="btn btn-outline" @click="inquireOpen = true">Request More Info</button>
        </div>
      </div>
    </section>

    <ReserveModal v-model="reserveOpen" product-name="XT-4510 Pallet Wrapper" />
    <InquiryModal v-model="inquireOpen" product-name="XT-4510 Pallet Wrapper" />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Pallet Wrapping Machines — Wholesale | Vander Industries',
  description: 'XT-4510 Automatic Robot Pallet Wrapper with Siemens PLC control. Mobile stretch wrapping machine. Auto film cut, 300% pre-stretch. Wholesale direct pricing.',
})

const reserveOpen = ref(false)
const inquireOpen = ref(false)

const palletImages = [
  '/images/products/pallet-1.png',
  '/images/products/pallet-2.png',
  '/images/products/pallet-3.png',
]
const activeImg = ref(palletImages[0])

const palletDesc = `The XT-4510 Automatic Robot Pallet Wrapper is a powerful and flexible mobile stretch wrapping solution designed to streamline pallet packaging operations. Built with advanced automation and a Siemens PLC control system with touch screen interface, this machine delivers consistent, high-quality wrapping results while reducing labor and film waste. Its automatic film cut function ensures a clean finish after each wrapping cycle, making it ideal for warehouses, distribution centers, and manufacturing facilities seeking efficiency and reliability. The system automatically detects goods height for precise wrapping performance every time.`

const palletSpecs = [
  { label: 'Model', val: 'XT-4510' },
  { label: 'Battery Quantity', val: '2 Pcs' },
  { label: 'Cut Film Method', val: 'Automatic cut after wrapping' },
  { label: 'Turntable Diameter', val: '2000 mm' },
  { label: 'Max Wrapping Height', val: '2400 mm' },
  { label: 'Min Wrapping Height', val: '500 mm' },
  { label: 'Min Pallet Size', val: '600 × 600 mm' },
  { label: 'Turntable Speed', val: '0–12 rpm (adjustable)' },
  { label: 'Control System', val: 'Siemens PLC + Touch Screen' },
  { label: 'Film Carriage', val: 'Pre-stretch up to 300%' },
  { label: 'Voltage', val: '110–240V, 1 Phase, 50–60Hz' },
  { label: 'Machine Size', val: '1200 × 1020 × 2600 mm' },
  { label: 'Machine Weight', val: '420 kg' },
]

const features = [
  { icon: '🤖', title: 'Siemens PLC Control', desc: 'Industrial-grade Siemens PLC with intuitive touch screen interface for precise, programmable wrap cycles.' },
  { icon: '✂️', title: 'Automatic Film Cut', desc: 'Automatically cuts film after each wrapping cycle for a clean, hands-free finish every time.' },
  { icon: '📏', title: 'Auto Height Detection', desc: 'Automatically detects goods height for consistent, precise wrapping performance on every pallet.' },
  { icon: '🎬', title: '300% Pre-Stretch', desc: 'Film carriage pre-stretches up to 300%, optimizing film usage and maintaining secure load stability.' },
  { icon: '🔋', title: 'Dual Battery System', desc: 'Two-battery setup with 8-hour charge time provides reliable mobile operation throughout your facility.' },
  { icon: '📦', title: 'Wide Load Range', desc: 'Handles pallet heights from 500mm to 2400mm, accommodating a wide variety of load configurations.' },
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
  object-fit: contain;
  border-radius: 12px;
  border: 1px solid var(--gray-100);
  background: var(--gray-50);
}
.thumbs { display: flex; gap: 8px; flex-wrap: wrap; }
.thumb {
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 6px;
  border: 2px solid var(--gray-100);
  cursor: pointer;
  background: var(--gray-50);
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
