<template>
  <div class="gallery-wrap">
    <!-- Large Featured Image -->
    <div class="gallery-featured" @click="openLightbox(featuredIndex)">
      <img :src="images[featuredIndex]" :alt="`${label} photo ${featuredIndex + 1}`" class="featured-img" />
      <div class="featured-overlay">🔍 Click to enlarge</div>
    </div>

    <!-- Thumbnail Strip -->
    <div class="gallery-thumbs">
      <div
        v-for="(img, i) in images"
        :key="i"
        :class="['gallery-thumb', { active: i === featuredIndex }]"
        @click="featuredIndex = i"
      >
        <img :src="img" :alt="`${label} photo ${i + 1}`" loading="lazy" />
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div v-if="lightboxOpen" class="lightbox" @click.self="closeLightbox" @keydown="onKey">
        <button class="lb-close" @click="closeLightbox">✕</button>
        <button class="lb-arrow lb-prev" @click="prev" :disabled="current === 0">‹</button>
        <div class="lb-content">
          <img :src="images[current]" :alt="`${label} photo ${current + 1}`" class="lb-img" />
          <div class="lb-counter">{{ current + 1 }} / {{ images.length }}</div>
        </div>
        <button class="lb-arrow lb-next" @click="next" :disabled="current === images.length - 1">›</button>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
const props = defineProps({
  images: { type: Array, required: true },
  label: { type: String, default: 'Product' },
  startIndex: { type: Number, default: 0 }
})

const lightboxOpen = ref(false)
const current = ref(0)
const featuredIndex = ref(props.startIndex)

function openLightbox(i) {
  current.value = i
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', onKey)
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKey)
}

function prev() { if (current.value > 0) current.value-- }
function next() { if (current.value < props.images.length - 1) current.value++ }

function onKey(e) {
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.gallery-wrap { width: 100%; display: flex; flex-direction: column; gap: 10px; }

/* Featured large image */
.gallery-featured {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  cursor: zoom-in;
  border: 2px solid #eee;
}
.featured-img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}
.gallery-featured:hover .featured-img { transform: scale(1.02); }
.featured-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.55));
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 16px 12px 10px;
  opacity: 0;
  transition: opacity 0.2s;
}
.gallery-featured:hover .featured-overlay { opacity: 1; }

/* Thumbnail strip */
.gallery-thumbs {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}
@media (max-width: 600px) { .gallery-thumbs { grid-template-columns: repeat(4, 1fr); } }

.gallery-thumb {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.15s;
}
.gallery-thumb.active { border-color: #F5C300; }
.gallery-thumb:hover { border-color: #F5C300; }
.gallery-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }

/* Lightbox */
.lightbox {
  position: fixed; inset: 0; z-index: 9999;
  background: rgba(0,0,0,0.95);
  display: flex; align-items: center; justify-content: center;
  gap: 0;
}
.lb-close {
  position: absolute; top: 20px; right: 24px;
  background: none; border: none; color: #fff;
  font-size: 2rem; cursor: pointer; line-height: 1;
  z-index: 10000;
}
.lb-close:hover { color: #F5C300; }

.lb-content {
  display: flex; flex-direction: column; align-items: center;
  max-width: calc(100vw - 160px);
  max-height: 100vh;
}
.lb-img {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 4px;
  display: block;
}
.lb-counter {
  margin-top: 12px;
  color: rgba(255,255,255,0.6);
  font-size: 0.9rem;
}

.lb-arrow {
  background: rgba(255,255,255,0.1);
  border: none; color: #fff;
  font-size: 3rem; line-height: 1;
  width: 64px; height: 64px;
  border-radius: 50%;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s, color 0.2s;
  display: flex; align-items: center; justify-content: center;
  margin: 0 12px;
}
.lb-arrow:hover:not(:disabled) { background: #F5C300; color: #000; }
.lb-arrow:disabled { opacity: 0.2; cursor: default; }

@media (max-width: 600px) {
  .lb-content { max-width: calc(100vw - 100px); }
  .lb-arrow { width: 44px; height: 44px; font-size: 2rem; margin: 0 4px; }
}
</style>
