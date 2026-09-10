<template>
  <section class="product-hero">
    <div class="container">
      <div class="hero-content">
        <div class="badge">{{ badge }}</div>
        <h1>{{ title }}</h1>
        <p class="hero-desc">{{ description }}</p>
        <div class="hero-meta">
          <span class="meta-pill">✅ Wholesale Price</span>
          <span class="meta-pill">🛡️ 2-Year Warranty</span>
          <span class="meta-pill">🚚 Ships in 1–2 Days</span>
        </div>
        <div class="hero-actions">
          <button class="btn btn-primary btn-lg" @click="$emit('reserve')">
            Reserve — $500 Deposit
          </button>
          <button class="btn btn-outline-white btn-lg" @click="$emit('inquire')">
            Request More Info
          </button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="product-image-box" :style="{ background: imageBg }">
          <span class="product-emoji">{{ emoji }}</span>
        </div>
        <div class="price-badge">
          Starting at<br/>
          <strong>{{ startingPrice }}</strong>
          <span class="price-note">Wholesale Direct</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  badge: { type: String, default: 'Industrial Equipment' },
  title: String,
  description: String,
  startingPrice: { type: String, default: 'Call for Price' },
  emoji: { type: String, default: '🏭' },
  imageBg: { type: String, default: '#1a1a1a' },
})
defineEmits(['reserve', 'inquire'])
</script>

<style scoped>
.product-hero {
  background: var(--black);
  color: var(--white);
  padding: 80px 0;
  overflow: hidden;
  position: relative;
}

.product-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 40px,
    rgba(245,195,0,0.02) 40px,
    rgba(245,195,0,0.02) 80px
  );
}

.container {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content .badge {
  background: var(--yellow);
  color: var(--black);
}

.hero-content h1 {
  color: var(--white);
  margin-bottom: 20px;
}

.hero-desc {
  color: #ccc;
  font-size: 1.1rem;
  margin-bottom: 24px;
  max-width: 520px;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32px;
}

.meta-pill {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #eee;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.product-image-box {
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid rgba(245,195,0,0.2);
}

.product-emoji {
  font-size: 6rem;
  opacity: 0.7;
}

.hero-visual {
  position: relative;
}

.price-badge {
  position: absolute;
  bottom: -16px;
  right: -8px;
  background: var(--yellow);
  color: var(--black);
  padding: 16px 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 0.85rem;
  line-height: 1.4;
  box-shadow: 0 8px 24px rgba(245,195,0,0.4);
}

.price-badge strong {
  display: block;
  font-size: 1.3rem;
  font-weight: 900;
  margin: 2px 0;
}

.price-note {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.7;
}

@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-visual {
    order: -1;
  }

  .product-image-box {
    max-height: 280px;
  }
}
</style>
