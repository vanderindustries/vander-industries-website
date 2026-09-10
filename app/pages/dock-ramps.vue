<template>
  <div>
    <ProductHero
      badge="Loading Dock Equipment"
      title="Dock Ramps"
      description="Premium heavy-duty portable loading ramps for warehouses, truck docks, and forklift operations. 20,000 lb rated capacity. Modular foldable design for easy setup and relocation."
      starting-price="Request a Quote"
      image-src="/images/products/ebay-dock-ramp/dock-ramp-01.webp"
      @reserve="reserveOpen = true"
      @inquire="inquireOpen = true"
    />

    <!-- Product: 38-Foot Modular Yard Ramp -->
    <section class="section">
      <div class="container">
        <div class="product-card">
          <div class="product-card-inner">
          <div class="product-images">
            <ImageGallery :images="rampImages" label="Dock Ramp" />
          </div>
          <div class="product-details">
            <div class="badge">38-Foot Modular — 20,000 lb Capacity</div>
            <h2 class="product-name">Premium Heavy-Duty Portable Loading Ramp</h2>
            <p class="product-subtitle">Model HL-YD-10T — For Warehouses, Truck Docks &amp; Forklift Operations</p>
            <p class="product-desc">{{ rampDesc }}</p>
            <div class="spec-group mt-24">
              <h4 class="spec-group-title">Overall Dimensions</h4>
              <div class="spec-table">
                <div class="spec-row" v-for="s in overallSpecs" :key="s.label">
                  <span class="spec-label">{{ s.label }}</span>
                  <span class="spec-val">{{ s.val }}</span>
                </div>
              </div>
            </div>
            <div class="spec-group mt-16">
              <h4 class="spec-group-title">Platform &amp; Slope Configuration</h4>
              <div class="spec-table">
                <div class="spec-row" v-for="s in platformSpecs" :key="s.label">
                  <span class="spec-label">{{ s.label }}</span>
                  <span class="spec-val">{{ s.val }}</span>
                </div>
              </div>
            </div>
            <div class="spec-group mt-16">
              <h4 class="spec-group-title">Power &amp; Adjustment</h4>
              <div class="spec-table">
                <div class="spec-row" v-for="s in powerSpecs" :key="s.label">
                  <span class="spec-label">{{ s.label }}</span>
                  <span class="spec-val">{{ s.val }}</span>
                </div>
              </div>
            </div>
            <div class="product-actions mt-32">
              <button class="btn btn-primary" @click="reserveOpen = true">Reserve This Product</button>
              <button class="btn btn-outline" @click="inquireOpen = true">Request More Info</button>
            </div>
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
          <h2>Built for Demanding Environments</h2>
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
          <strong>38-Foot Modular Yard Ramp — Model HL-YD-10T</strong>
          <span>20,000 lb Capacity · Anti-Corrosion Treated · Ships Nationwide</span>
        </div>
        <div class="sticky-cta-btns">
          <button class="btn btn-primary" @click="reserveOpen = true">Reserve This Product</button>
          <button class="btn btn-outline" @click="inquireOpen = true">Request More Info</button>
        </div>
      </div>
    </section>

    <ReserveModal v-model="reserveOpen" product-name="Dock Ramp — Model HL-YD-10T" />
    <InquiryModal v-model="inquireOpen" product-name="Dock Ramp — Model HL-YD-10T" />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Dock Ramps — Wholesale Pricing | Vander Industries',
  description: '38-foot modular yard ramp, 20,000 lb capacity. Model HL-YD-10T. Premium portable loading ramp for warehouses, truck docks, and forklift operations. Wholesale direct.',
})

const reserveOpen = ref(false)
const inquireOpen = ref(false)

// Removed photos 02-08 (unrelated parts/logos) and 28 (watermark) — 20 clean product photos
const rampImages = [1, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27].map(
  n => `/images/products/ebay-dock-ramp/dock-ramp-${String(n).padStart(2, '0')}.webp`
)

const rampDesc = `The 38-Foot Modular Yard Ramp (Model HL-YD-10T) is a premium heavy-duty, portable loading solution designed for demanding warehouse, dock, and forklift operations. Built to handle up to 20,000 lbs (10 tons), this ramp delivers strength, stability, and flexibility where permanent docks aren't available. Its modular foldable design allows for quick setup, easy relocation, and efficient space utilization. The long 23.5-ft slope ensures smooth, safe forklift transitions, while the spacious upper platform improves maneuverability. A reinforced steel plate deck with expanded mesh provides superior traction and durability in all working conditions.`

const overallSpecs = [
  { label: 'Length', val: '37.1 ft (444.9 in)' },
  { label: 'Width', val: '6.9 ft (82.7 in)' },
  { label: 'Height (min)', val: '3.6 ft (43.3 in)' },
  { label: 'Load Rating', val: '20,000 lbs (10 Ton)' },
]

const platformSpecs = [
  { label: 'Slope Length', val: '23.5 ft (281.5 in)' },
  { label: 'Upper Platform Length', val: '9.8 ft (118.1 in)' },
  { label: 'Rear Pedal Section', val: '2.46 ft (29.5 in)' },
  { label: 'Front Pedal Section', val: '1.31 ft (15.7 in)' },
  { label: 'Internal Usable Width', val: '6.56 ft (78.7 in)' },
  { label: 'Deck', val: '0.157 in steel plate + 0.315 in expanded steel mesh' },
  { label: 'Guardrails', val: '7.87 in height' },
]

const powerSpecs = [
  { label: 'Power', val: 'Manual hydraulic pump' },
  { label: 'Legs', val: 'Two hand-crank legs (15.75 in stroke)' },
  { label: 'Height Range', val: '43.3 – 70.9 in' },
  { label: 'Tires', val: '600-9 solid (~23.6 in diameter)' },
  { label: 'Finish', val: 'Medium blue, shot-blasted, anti-corrosion coating' },
  { label: 'Included', val: 'Drawbar, tire block, trailer chain' },
]

const features = [
  { icon: '⚙️', title: 'Modular Foldable Design', desc: 'Quick setup, easy relocation, and efficient space utilization. No permanent installation required.' },
  { icon: '🔩', title: 'Reinforced Steel Deck', desc: 'Heavy-gauge steel plate with expanded mesh for superior traction and long-term durability.' },
  { icon: '🛢️', title: 'Manual Hydraulic Pump', desc: 'Simple and precise height adjustment via hydraulic pump and dual hand-crank legs — no electricity required.' },
  { icon: '🏗️', title: '20,000 lb Rated Capacity', desc: 'Handles up to 10 tons of forklift load. Built for the most demanding warehouse and logistics operations.' },
  { icon: '🚛', title: '600-9 Solid Tires', desc: 'Effortless towing and positioning across yard surfaces with heavy-duty solid tires.' },
  { icon: '🛡️', title: 'Anti-Corrosion Treated', desc: 'Shot-blasted and coated for excellent resistance to wear, rust, and outdoor conditions.' },
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
