<template>
  <div>
    <!-- Hero -->
    <section class="home-hero">
      <div class="container hero-inner">
        <div class="hero-text">
          <div class="badge">Los Angeles · Ships Nationwide</div>
          <h1>Wholesale Industrial Equipment. <span class="accent">Delivered Nationwide.</span></h1>
          <p class="hero-sub">Buy commercial and industrial equipment direct from the source. Scissor lifts, dock ramps, floor cleaners, pallet wrappers — all at wholesale prices with a 2-year warranty included.</p>
          <div class="hero-trust">
            <span>✅ No Dealer Markup</span>
            <span>🚚 Ships in 1–2 Days</span>
            <span>🛡️ 2-Year Warranty</span>
            <span>🗺️ All 50 States</span>
          </div>
          <div class="hero-ctas">
            <NuxtLink to="/contact" class="btn btn-primary btn-lg">Get a Free Quote</NuxtLink>
            <a href="#products" class="btn btn-outline-white btn-lg">Browse Products</a>
          </div>
        </div>
        <div class="hero-stats">
          <div class="stat-card" v-for="s in stats" :key="s.val">
            <div class="stat-val">{{ s.val }}</div>
            <div class="stat-label">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section id="products" class="section">
      <div class="container">
        <div class="text-center mb-32">
          <div class="badge">Our Products</div>
          <h2>Industrial Equipment Categories</h2>
          <p class="mt-16">Every category features top-tier commercial-grade equipment at wholesale prices. Built for demanding daily use.</p>
        </div>

        <div class="products-grid">
          <NuxtLink v-for="p in products" :key="p.slug" :to="p.slug" class="product-card">
            <div class="product-thumb" :style="{ background: p.bg }">
              <span class="product-emoji">{{ p.emoji }}</span>
            </div>
            <div class="product-info">
              <h3>{{ p.name }}</h3>
              <p>{{ p.desc }}</p>
              <div class="product-meta">
                <span class="price-from">From {{ p.price }}</span>
                <span class="product-cta">View Products →</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Vander -->
    <WhyVander />

    <!-- CTA Band -->
    <section class="cta-band">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Order at Wholesale?</h2>
          <p>Talk to an equipment specialist today. We'll help you pick the right unit, calculate freight to your location, and get you a firm price — no surprises.</p>
          <div class="cta-actions">
            <NuxtLink to="/contact" class="btn btn-primary btn-lg">Get a Free Quote</NuxtLink>
            <a href="tel:18008263371" class="btn btn-outline-white btn-lg">📞 1-800-VANDER-1</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Vander Industries — Wholesale Industrial Equipment Nationwide',
  description: 'Buy scissor lifts, dock ramps, floor cleaners, and pallet wrappers at wholesale prices. Ships from LA in 1–2 days. 2-year warranty included.',
})

const stats = [
  { val: '4+', label: 'Equipment Categories' },
  { val: '1–2', label: 'Day Ship Time' },
  { val: '2yr', label: 'Warranty Included' },
  { val: '50', label: 'States Served' },
]

const products = [
  {
    slug: '/scissor-lifts',
    name: 'Scissor Lifts',
    desc: 'Electric and rough-terrain aerial work platforms for warehouses, construction sites, and maintenance operations.',
    price: '$8,500',
    emoji: '🏗️',
    bg: '#1a1a2e',
  },
  {
    slug: '/dock-ramps',
    name: 'Dock Ramps',
    desc: 'Heavy-duty loading dock equipment for seamless truck-to-warehouse transitions. Rated for forklifts and heavy pallet loads.',
    price: '$3,200',
    emoji: '🏭',
    bg: '#1a2a1a',
  },
  {
    slug: '/floor-cleaners',
    name: 'Commercial Floor Cleaners',
    desc: 'Industrial ride-on and walk-behind scrubbers and sweepers for warehouses, factories, and large commercial spaces.',
    price: '$4,800',
    emoji: '🧹',
    bg: '#1a1a3a',
  },
  {
    slug: '/pallet-wrappers',
    name: 'Pallet Wrapping Machines',
    desc: 'Automated stretch wrap systems that cut labor costs and improve load stability for high-volume shipping operations.',
    price: '$2,100',
    emoji: '📦',
    bg: '#2a1a1a',
  },
]
</script>

<style scoped>
.home-hero {
  background: var(--black);
  color: var(--white);
  padding: 100px 0 80px;
  position: relative;
  overflow: hidden;
}

.home-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 60px,
    rgba(245,195,0,0.025) 60px,
    rgba(245,195,0,0.025) 120px
  );
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 64px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.accent { color: var(--yellow); }

.hero-text h1 {
  color: var(--white);
  margin-bottom: 20px;
}

.hero-sub {
  color: #ccc;
  font-size: 1.1rem;
  margin-bottom: 28px;
  max-width: 560px;
}

.hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
}

.hero-trust span {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #eee;
}

.hero-ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.stat-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(245,195,0,0.2);
  border-radius: 10px;
  padding: 24px;
  text-align: center;
  min-width: 110px;
}

.stat-val {
  font-size: 2rem;
  font-weight: 900;
  color: var(--yellow);
  line-height: 1;
  margin-bottom: 6px;
}

.stat-label {
  font-size: 0.8rem;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Products Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.product-card {
  background: var(--white);
  border-radius: 12px;
  box-shadow: var(--shadow);
  overflow: hidden;
  text-decoration: none;
  color: var(--black);
  display: block;
  transition: transform 0.18s, box-shadow 0.18s;
  border: 2px solid transparent;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--yellow);
}

.product-thumb {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-emoji { font-size: 4rem; }

.product-info {
  padding: 24px;
}

.product-info h3 {
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.product-info p {
  color: var(--gray-700);
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-from {
  font-weight: 900;
  color: var(--black);
  font-size: 1rem;
}

.product-cta {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--yellow);
  background: var(--black);
  padding: 6px 12px;
  border-radius: 4px;
}

/* CTA Band */
.cta-band {
  background: var(--black);
  color: var(--white);
  padding: 80px 0;
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 { color: var(--white); margin-bottom: 16px; }
.cta-content p { color: #ccc; font-size: 1.05rem; margin: 0 auto 32px; }
.cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

@media (max-width: 1100px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-stats { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 600px) {
  .hero-stats { grid-template-columns: repeat(2, 1fr); }
  .products-grid { grid-template-columns: 1fr; }
  .home-hero { padding: 64px 0 56px; }
}
</style>
