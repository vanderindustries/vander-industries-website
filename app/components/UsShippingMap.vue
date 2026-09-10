<template>
  <section class="shipping-section">
    <div class="container">
      <div class="text-center mb-8">
        <div class="badge">Nationwide Delivery from Los Angeles, CA</div>
        <h2>Shipping Zones &amp; Estimated Delivery</h2>
        <p class="shipping-subtitle">Approximate shipping cost and transit time from day payment is received.<br/>Hover over any state to see details.</p>
      </div>

      <div class="map-wrap" ref="mapRef">
        <svg viewBox="0 0 975 610" xmlns="http://www.w3.org/2000/svg" class="us-map">
          <g v-for="s in states" :key="s.id">
            <path
              :d="s.d"
              :fill="zoneColor(s.zone)"
              stroke="#fff"
              stroke-width="1"
              stroke-linejoin="round"
              class="state-path"
              @mouseenter="onEnter($event, s)"
              @mouseleave="onLeave"
            />
            <text
              v-if="s.lx && s.ly"
              :x="s.lx"
              :y="s.ly"
              class="state-label"
              text-anchor="middle"
              dominant-baseline="central"
            >{{ s.abbr }}</text>
          </g>
        </svg>

        <!-- Tooltip -->
        <Transition name="tt">
          <div v-if="tt.visible" class="map-tooltip" :style="{ left: tt.x + 'px', top: tt.y + 'px' }">
            <div class="tt-state">{{ tt.name }}</div>
            <div class="tt-zone">Zone {{ tt.zone }} · {{ zoneDefs[tt.zone - 1]?.label }}</div>
            <div class="tt-price">${{ tt.price.toLocaleString() }}</div>
            <div class="tt-dates">
              <span class="tt-label">Est. Delivery</span>
              <span class="tt-range">{{ tt.dateFrom }} – {{ tt.dateTo }}</span>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Legend -->
      <div class="zone-legend">
        <div v-for="z in zoneDefs" :key="z.zone" class="legend-item">
          <span class="legend-swatch" :style="{ background: z.color }"></span>
          <div class="legend-info">
            <strong>Zone {{ z.zone }} — {{ z.label }}</strong>
            <span>${{ z.price.toLocaleString() }} · {{ z.transit }} business days</span>
          </div>
        </div>
      </div>

      <p class="shipping-note">* Shipping fees are estimates based on freight zone. Exact quote confirmed before order completion. Customer is responsible for shipping costs.</p>
    </div>
  </section>
</template>

<script setup>
import statesData from '~/data/us-states.json';

const mapRef = ref(null)
const states = statesData

const zoneDefs = [
  { zone: 1, color: '#F5C300', price: 1500, transit: '3–5', label: 'West Coast' },
  { zone: 2, color: '#F59300', price: 2000, transit: '4–6', label: 'Mountain' },
  { zone: 3, color: '#5BA4CF', price: 2500, transit: '5–7', label: 'Midwest' },
  { zone: 4, color: '#52B788', price: 3000, transit: '6–8', label: 'South' },
  { zone: 5, color: '#9B72CF', price: 3500, transit: '7–9', label: 'Northeast' },
]

function zoneColor(z) {
  return zoneDefs.find(d => d.zone === z)?.color || '#ccc'
}

const tt = reactive({ visible: false, x: 0, y: 0, name: '', zone: 0, price: 0, dateFrom: '', dateTo: '' })

function addBusinessDays(from, days) {
  const d = new Date(from)
  let added = 0
  while (added < days) {
    d.setDate(d.getDate() + 1)
    const dow = d.getDay()
    if (dow !== 0 && dow !== 6) added++
  }
  return d
}

function fmtDate(d) {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function onEnter(e, s) {
  const def = zoneDefs.find(d => d.zone === s.zone)
  const wrapRect = mapRef.value.getBoundingClientRect()
  const [minDays, maxDays] = def.transit.split('–').map(Number)
  const today = new Date()
  tt.visible = true
  tt.x = e.clientX - wrapRect.left + 14
  tt.y = e.clientY - wrapRect.top - 60
  tt.name = s.name
  tt.zone = s.zone
  tt.price = def.price
  tt.dateFrom = fmtDate(addBusinessDays(today, minDays))
  tt.dateTo = fmtDate(addBusinessDays(today, maxDays))
}

function onLeave() { tt.visible = false }
</script>

<style scoped>
.shipping-section {
  padding: 80px 0;
  background: var(--gray-50);
}
.shipping-subtitle {
  color: var(--gray-700);
  font-size: 0.95rem;
  margin-top: 8px;
  line-height: 1.6;
}

.map-wrap {
  position: relative;
  margin: 32px 0 28px;
  border-radius: 16px;
  overflow: visible;
}
.us-map {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  filter: drop-shadow(0 4px 16px rgba(0,0,0,0.12));
}
.state-path {
  cursor: pointer;
  transition: filter 0.12s;
}
.state-path:hover {
  filter: brightness(0.88);
}
.state-label {
  font-size: 8px;
  font-weight: 700;
  fill: rgba(0,0,0,0.6);
  pointer-events: none;
  user-select: none;
}

/* Tooltip */
.map-tooltip {
  position: absolute;
  background: #0D0D0D;
  color: #fff;
  padding: 12px 16px;
  border-radius: 10px;
  pointer-events: none;
  white-space: nowrap;
  z-index: 200;
  box-shadow: 0 6px 24px rgba(0,0,0,0.35);
  border-left: 4px solid #F5C300;
  min-width: 180px;
}
.tt-state { font-size: 1rem; font-weight: 800; }
.tt-zone { font-size: 0.72rem; color: #aaa; text-transform: uppercase; letter-spacing: 0.05em; margin: 2px 0 6px; }
.tt-price { font-size: 1.4rem; font-weight: 900; color: #F5C300; margin-bottom: 6px; }
.tt-dates { display: flex; flex-direction: column; gap: 1px; }
.tt-label { font-size: 0.7rem; color: #999; text-transform: uppercase; letter-spacing: 0.05em; }
.tt-range { font-size: 0.9rem; font-weight: 700; color: #fff; }

.tt-enter-active, .tt-leave-active { transition: opacity 0.1s; }
.tt-enter-from, .tt-leave-to { opacity: 0; }

/* Legend */
.zone-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border: 1px solid #eee;
  padding: 10px 16px;
  border-radius: 10px;
}
.legend-swatch {
  width: 16px; height: 16px;
  border-radius: 4px;
  flex-shrink: 0;
}
.legend-info { display: flex; flex-direction: column; line-height: 1.3; }
.legend-info strong { font-size: 0.82rem; font-weight: 800; }
.legend-info span { font-size: 0.75rem; color: #666; }

.shipping-note {
  text-align: center;
  font-size: 0.78rem;
  color: #999;
  margin-top: 8px;
}
</style>
