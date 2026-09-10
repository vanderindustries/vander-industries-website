<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <div class="container header-inner">
      <NuxtLink to="/" class="logo">
        <span class="logo-icon">⚙</span>
        <span class="logo-text">VANDER <span class="logo-accent">INDUSTRIES</span></span>
      </NuxtLink>

      <nav class="nav-desktop">
        <NuxtLink to="/scissor-lifts">Scissor Lifts</NuxtLink>
        <NuxtLink to="/dock-ramps">Dock Ramps</NuxtLink>
        <NuxtLink to="/floor-cleaners">Floor Cleaners</NuxtLink>
        <NuxtLink to="/pallet-wrappers">Pallet Wrappers</NuxtLink>
        <NuxtLink to="/contact" class="nav-cta btn btn-primary">Get a Quote</NuxtLink>
      </nav>

      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <div class="mobile-menu" :class="{ open: menuOpen }">
      <NuxtLink to="/scissor-lifts" @click="menuOpen = false">Scissor Lifts</NuxtLink>
      <NuxtLink to="/dock-ramps" @click="menuOpen = false">Dock Ramps</NuxtLink>
      <NuxtLink to="/floor-cleaners" @click="menuOpen = false">Floor Cleaners</NuxtLink>
      <NuxtLink to="/pallet-wrappers" @click="menuOpen = false">Pallet Wrappers</NuxtLink>
      <NuxtLink to="/contact" @click="menuOpen = false">Contact / Quote</NuxtLink>
    </div>
  </header>
</template>

<script setup>
const isScrolled = ref(false)
const menuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 40
  })
})
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 500;
  background: var(--black);
  border-bottom: 3px solid var(--yellow);
  transition: box-shadow 0.2s;
}

.site-header.scrolled {
  box-shadow: 0 4px 24px rgba(0,0,0,0.3);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--white);
  font-weight: 900;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  text-decoration: none;
}

.logo-icon {
  font-size: 1.4rem;
  color: var(--yellow);
}

.logo-accent {
  color: var(--yellow);
}

.nav-desktop {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-desktop a {
  color: var(--white);
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: color 0.15s;
  text-decoration: none;
}

.nav-desktop a:hover {
  color: var(--yellow);
}

.nav-desktop a.router-link-active:not(.nav-cta) {
  color: var(--yellow);
}

.nav-cta {
  padding: 10px 20px !important;
  font-size: 0.85rem !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  background: #1a1a1a;
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.mobile-menu.open {
  max-height: 400px;
}

.mobile-menu a {
  padding: 14px 24px;
  color: var(--white);
  font-weight: 600;
  font-size: 0.95rem;
  border-bottom: 1px solid #2a2a2a;
  text-decoration: none;
}

.mobile-menu a:hover {
  background: #222;
  color: var(--yellow);
}

@media (max-width: 900px) {
  .nav-desktop { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: flex; }
}
</style>
