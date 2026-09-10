<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <div class="logo">
          <span class="logo-icon">⚙</span>
          <span class="logo-text">VANDER <span class="logo-accent">INDUSTRIES</span></span>
        </div>
        <p class="tagline">Wholesale Industrial Equipment. Delivered Nationwide.</p>
        <p class="footer-addr">📍 Ships from Los Angeles, CA · 1–2 Business Days</p>
      </div>

      <div class="footer-links">
        <h4>Products</h4>
        <ul>
          <li><NuxtLink to="/scissor-lifts">Scissor Lifts</NuxtLink></li>
          <li><NuxtLink to="/dock-ramps">Dock Ramps</NuxtLink></li>
          <li><NuxtLink to="/floor-cleaners">Commercial Floor Cleaners</NuxtLink></li>
          <li><NuxtLink to="/pallet-wrappers">Pallet Wrapping Machines</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-links">
        <h4>Company</h4>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h4>Contact</h4>
        <p>sales@vanderindustries.com</p>
        <p>1-800-VANDER-1</p>
        <p class="mt-16 text-sm">Mon–Fri 7am–5pm PT</p>
        <div class="footer-badges">
          <span class="badge-pill">🔒 Secure Checkout</span>
          <span class="badge-pill">🏭 Factory Direct</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>© {{ year }} Vander Industries LLC. All rights reserved. · Wholesale prices direct to consumer.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  background: var(--black);
  color: var(--white);
  padding-top: 64px;
}

.footer-inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid #222;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.logo-icon { color: var(--yellow); font-size: 1.3rem; }
.logo-accent { color: var(--yellow); }

.tagline {
  color: var(--gray-300);
  font-size: 0.95rem;
  margin-bottom: 8px;
  max-width: 280px;
}

.footer-addr {
  color: var(--gray-500);
  font-size: 0.85rem;
  max-width: 280px;
}

.footer-links h4,
.footer-contact h4 {
  color: var(--yellow);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.footer-links ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  color: var(--gray-300);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.15s;
}

.footer-links a:hover { color: var(--yellow); }

.footer-contact p {
  color: var(--gray-300);
  font-size: 0.9rem;
  margin-bottom: 4px;
  max-width: 100%;
}

.footer-badges {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  flex-wrap: wrap;
}

.badge-pill {
  background: #1a1a1a;
  color: var(--gray-300);
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid #333;
}

.footer-bottom {
  padding: 20px 0;
}

.footer-bottom p {
  color: var(--gray-500);
  font-size: 0.8rem;
  text-align: center;
  max-width: 100%;
}

@media (max-width: 1024px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  .footer-brand { grid-column: 1 / -1; }
}

@media (max-width: 600px) {
  .footer-inner { grid-template-columns: 1fr; gap: 28px; }
  .footer-brand { grid-column: auto; }
}
</style>
