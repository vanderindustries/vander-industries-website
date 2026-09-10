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
            {{ reserveLabel }}
          </button>
          <button class="btn btn-outline-white btn-lg" @click="$emit('inquire')">
            Request More Info
          </button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="product-image-box" :style="imageSrc ? {} : { background: imageBg }">
          <img v-if="imageSrc" :src="imageSrc" :alt="title" class="hero-product-img" />
          <span v-else class="product-emoji">{{ emoji }}</span>
        </div>
        <div class="price-badge" :class="{ 'has-prices': listPrice }">
          <template v-if="listPrice">
            <span class="pb-label">Wholesale Direct</span>
            <span class="pb-list"><s>{{ listPrice }}</s></span>
            <span class="pb-sale">{{ salePrice }}</span>
            <span class="pb-save" v-if="savings">Save {{ savings }}</span>
          </template>
          <template v-else>
            Starting at<br/>
            <strong>{{ startingPrice }}</strong>
            <span class="price-note">Wholesale Direct</span>
          </template>
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
  listPrice: { type: String, default: '' },
  salePrice: { type: String, default: '' },
  savings: { type: String, default: '' },
  reserveLabel: { type: String, default: 'Reserve This Unit Now' },
  emoji: { type: String, default: '🏭' },
  imageBg: { type: String, default: '#1a1a1a' },
  imageSrc: { type: String, default: '' },
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
.hero-product-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 10px;
  display: block;
  background: #f5f5f5;
}

.hero-visual {
  position: relative;
}

.price-badge {
  position: absolute;
  bottom: -20px;
  right: -12px;
  width: 148px;
  height: 148px;
  border-radius: 50%;
  background: var(--yellow);
  color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 8px 32px rgba(245,195,0,0.5), 0 0 0 6px rgba(245,195,0,0.15);
  padding: 8px;
  gap: 2px;
}

/* Default (no prices) */
.price-badge strong {
  display: block;
  font-size: 1.1rem;
  font-weight: 900;
  line-height: 1.1;
}
.price-note {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.7;
}

/* With prices */
.price-badge.has-prices {
  width: 160px;
  height: 160px;
}
.pb-label {
  font-size: 0.6rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(0,0,0,0.6);
  line-height: 1;
}
.pb-list {
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(0,0,0,0.45);
  text-decoration: line-through;
  text-decoration-color: #000;
  line-height: 1;
}
.pb-sale {
  font-size: 1.6rem;
  font-weight: 900;
  color: #000;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
.pb-save {
  font-size: 0.6rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  background: rgba(0,0,0,0.12);
  padding: 2px 8px;
  border-radius: 20px;
  margin-top: 2px;
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
