<template>
  <section class="shipping-section">
    <div class="container">
      <div class="text-center mb-8">
        <div class="badge">Nationwide Delivery from Los Angeles, CA</div>
        <h2>Shipping Zones &amp; Estimated Delivery</h2>
        <p class="shipping-subtitle">Approximate shipping cost and transit time from day payment is received.<br/>Hover over any state to see details.</p>
      </div>

      <div class="map-wrap">
        <svg
          viewBox="0 0 959 593"
          xmlns="http://www.w3.org/2000/svg"
          class="us-map"
          aria-label="US Shipping Zones"
        >
          <g v-for="state in states" :key="state.abbr">
            <path
              :d="state.d"
              :fill="zoneColor(state.zone)"
              stroke="#fff"
              stroke-width="1.5"
              class="state-path"
              @mouseenter="showTooltip($event, state)"
              @mouseleave="hideTooltip"
            />
            <text
              v-if="state.lx"
              :x="state.lx"
              :y="state.ly"
              class="state-label"
              text-anchor="middle"
              dominant-baseline="central"
            >{{ state.abbr }}</text>
          </g>
        </svg>

        <!-- Tooltip -->
        <div v-if="tooltip.visible" class="map-tooltip" :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }">
          <div class="tt-state">{{ tooltip.name }}</div>
          <div class="tt-zone">Zone {{ tooltip.zone }}</div>
          <div class="tt-price">${{ tooltip.price.toLocaleString() }}</div>
          <div class="tt-transit">Est. {{ tooltip.transit }} business days</div>
        </div>
      </div>

      <!-- Legend -->
      <div class="zone-legend">
        <div v-for="z in zoneDefs" :key="z.zone" class="legend-item">
          <span class="legend-swatch" :style="{ background: z.color }"></span>
          <div class="legend-info">
            <strong>Zone {{ z.zone }}</strong>
            <span>${{ z.price.toLocaleString() }} &middot; {{ z.transit }} days</span>
          </div>
        </div>
      </div>

      <p class="shipping-note">* Shipping fees are estimates. Final quote confirmed before order completion. Customer responsible for shipping costs.</p>
    </div>
  </section>
</template>

<script setup>
const tooltip = reactive({ visible: false, x: 0, y: 0, name: '', zone: 0, price: 0, transit: '' })

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

function showTooltip(e, state) {
  const def = zoneDefs.find(d => d.zone === state.zone)
  const rect = e.target.closest('svg').getBoundingClientRect()
  const mapWrap = e.target.closest('.map-wrap').getBoundingClientRect()
  tooltip.visible = true
  tooltip.x = e.clientX - mapWrap.left + 12
  tooltip.y = e.clientY - mapWrap.top - 10
  tooltip.name = state.name
  tooltip.zone = state.zone
  tooltip.price = def.price
  tooltip.transit = def.transit
}

function hideTooltip() { tooltip.visible = false }

// State data: zone assignment + label position (lx/ly) for abbreviation
const states = [
  // Zone 1 — West Coast
  { abbr: 'WA', name: 'Washington', zone: 1, lx: 105, ly: 66, d: 'M 155,51 L 68,61 L 60,71 L 66,85 L 108,91 L 132,80 Z' },
  { abbr: 'OR', name: 'Oregon', zone: 1, lx: 95, ly: 120, d: 'M 66,85 L 60,71 L 28,84 L 18,115 L 35,135 L 108,130 L 108,91 Z' },
  { abbr: 'CA', name: 'California', zone: 1, lx: 68, ly: 210, d: 'M 35,135 L 18,115 L 8,160 L 22,240 L 54,290 L 80,285 L 100,250 L 108,200 L 108,130 Z' },
  { abbr: 'NV', name: 'Nevada', zone: 1, lx: 130, ly: 190, d: 'M 108,130 L 108,200 L 100,250 L 145,260 L 175,200 L 162,130 Z' },
  { abbr: 'AZ', name: 'Arizona', zone: 1, lx: 148, ly: 255, d: 'M 100,250 L 80,285 L 96,305 L 160,310 L 175,270 L 175,200 L 145,260 Z' },

  // Zone 2 — Mountain
  { abbr: 'ID', name: 'Idaho', zone: 2, lx: 162, ly: 115, d: 'M 108,91 L 108,130 L 162,130 L 185,105 L 175,72 L 155,51 L 132,80 Z' },
  { abbr: 'MT', name: 'Montana', zone: 2, lx: 218, ly: 65, d: 'M 155,51 L 175,72 L 185,105 L 270,105 L 292,60 L 232,45 Z' },
  { abbr: 'WY', name: 'Wyoming', zone: 2, lx: 220, ly: 140, d: 'M 185,105 L 162,130 L 175,200 L 270,200 L 292,165 L 270,105 Z' },
  { abbr: 'CO', name: 'Colorado', zone: 2, lx: 230, ly: 220, d: 'M 175,200 L 175,270 L 292,270 L 292,200 L 270,200 Z' },
  { abbr: 'UT', name: 'Utah', zone: 2, lx: 163, ly: 200, d: 'M 162,130 L 175,200 L 175,270 L 145,260 L 130,200 L 148,130 Z' },
  { abbr: 'NM', name: 'New Mexico', zone: 2, lx: 210, ly: 295, d: 'M 175,270 L 160,310 L 175,320 L 292,320 L 292,270 Z' },
  { abbr: 'AK', name: 'Alaska', zone: 2, lx: 55, ly: 450, d: 'M 25,420 L 25,490 L 120,490 L 120,420 Z' },
  { abbr: 'HI', name: 'Hawaii', zone: 2, lx: 190, ly: 475, d: 'M 155,460 L 155,490 L 240,490 L 240,460 Z' },

  // Zone 3 — Midwest
  { abbr: 'ND', name: 'North Dakota', zone: 3, lx: 330, ly: 70, d: 'M 292,60 L 292,105 L 388,105 L 400,70 L 365,52 Z' },
  { abbr: 'SD', name: 'South Dakota', zone: 3, lx: 333, ly: 120, d: 'M 292,105 L 292,165 L 388,165 L 388,105 Z' },
  { abbr: 'NE', name: 'Nebraska', zone: 3, lx: 333, ly: 190, d: 'M 292,165 L 292,200 L 388,200 L 388,165 Z' },
  { abbr: 'KS', name: 'Kansas', zone: 3, lx: 333, ly: 230, d: 'M 292,200 L 292,255 L 400,255 L 400,200 L 388,200 Z' },
  { abbr: 'MN', name: 'Minnesota', zone: 3, lx: 410, ly: 85, d: 'M 388,52 L 388,165 L 450,165 L 460,120 L 445,52 Z' },
  { abbr: 'IA', name: 'Iowa', zone: 3, lx: 420, ly: 185, d: 'M 388,165 L 388,200 L 460,200 L 460,165 L 450,165 Z' },
  { abbr: 'MO', name: 'Missouri', zone: 3, lx: 420, ly: 230, d: 'M 388,200 L 400,255 L 465,255 L 465,200 L 460,200 Z' },
  { abbr: 'WI', name: 'Wisconsin', zone: 3, lx: 468, ly: 130, d: 'M 450,100 L 450,165 L 490,165 L 490,130 L 480,100 Z' },
  { abbr: 'IL', name: 'Illinois', zone: 3, lx: 472, ly: 200, d: 'M 460,165 L 460,240 L 490,240 L 490,165 Z' },
  { abbr: 'MI', name: 'Michigan', zone: 3, lx: 520, ly: 110, d: 'M 490,80 L 490,130 L 540,130 L 555,105 L 535,80 Z' },
  { abbr: 'IN', name: 'Indiana', zone: 3, lx: 505, ly: 190, d: 'M 490,165 L 490,235 L 525,235 L 525,165 Z' },
  { abbr: 'OH', name: 'Ohio', zone: 3, lx: 540, ly: 185, d: 'M 525,160 L 525,235 L 570,235 L 572,175 L 555,155 Z' },

  // Zone 4 — South
  { abbr: 'TX', name: 'Texas', zone: 4, lx: 335, ly: 320, d: 'M 292,255 L 292,320 L 175,320 L 200,380 L 290,420 L 370,400 L 400,340 L 400,255 Z' },
  { abbr: 'OK', name: 'Oklahoma', zone: 4, lx: 362, ly: 278, d: 'M 292,255 L 400,255 L 400,300 L 292,300 Z' },
  { abbr: 'AR', name: 'Arkansas', zone: 4, lx: 435, ly: 270, d: 'M 400,255 L 465,255 L 465,305 L 400,305 Z' },
  { abbr: 'LA', name: 'Louisiana', zone: 4, lx: 430, ly: 335, d: 'M 400,305 L 465,305 L 455,360 L 400,355 Z' },
  { abbr: 'MS', name: 'Mississippi', zone: 4, lx: 475, ly: 310, d: 'M 465,255 L 465,355 L 495,355 L 495,255 Z' },
  { abbr: 'AL', name: 'Alabama', zone: 4, lx: 507, ly: 305, d: 'M 495,255 L 495,360 L 530,360 L 530,255 Z' },
  { abbr: 'TN', name: 'Tennessee', zone: 4, lx: 525, ly: 257, d: 'M 465,245 L 465,265 L 580,265 L 580,245 L 530,238 Z' },
  { abbr: 'KY', name: 'Kentucky', zone: 4, lx: 530, ly: 235, d: 'M 465,220 L 465,247 L 580,247 L 572,220 L 525,215 Z' },
  { abbr: 'GA', name: 'Georgia', zone: 4, lx: 545, ly: 315, d: 'M 530,265 L 530,370 L 575,370 L 585,320 L 580,265 Z' },
  { abbr: 'FL', name: 'Florida', zone: 4, lx: 567, ly: 395, d: 'M 530,370 L 540,430 L 600,430 L 615,385 L 585,360 L 575,370 Z' },
  { abbr: 'SC', name: 'South Carolina', zone: 4, lx: 590, ly: 295, d: 'M 580,265 L 580,320 L 620,310 L 615,270 Z' },
  { abbr: 'NC', name: 'North Carolina', zone: 4, lx: 602, ly: 255, d: 'M 572,240 L 580,265 L 615,270 L 640,250 L 625,235 L 585,235 Z' },
  { abbr: 'VA', name: 'Virginia', zone: 4, lx: 600, ly: 218, d: 'M 572,205 L 572,240 L 640,250 L 645,220 L 620,200 Z' },
  { abbr: 'WV', name: 'West Virginia', zone: 4, lx: 572, ly: 210, d: 'M 545,195 L 545,230 L 572,240 L 572,205 Z' },

  // Zone 5 — Northeast
  { abbr: 'ME', name: 'Maine', zone: 5, lx: 720, ly: 68, d: 'M 695,45 L 695,100 L 740,100 L 745,60 Z' },
  { abbr: 'NH', name: 'New Hampshire', zone: 5, lx: 700, ly: 110, d: 'M 695,100 L 695,135 L 715,135 L 718,100 Z' },
  { abbr: 'VT', name: 'Vermont', zone: 5, lx: 682, ly: 108, d: 'M 672,95 L 672,135 L 695,135 L 695,100 Z' },
  { abbr: 'MA', name: 'Massachusetts', zone: 5, lx: 700, ly: 145, d: 'M 672,138 L 672,152 L 720,155 L 730,145 L 715,137 Z' },
  { abbr: 'RI', name: 'Rhode Island', zone: 5, lx: 720, ly: 155, d: 'M 718,150 L 720,155 L 730,160 L 730,145 Z' },
  { abbr: 'CT', name: 'Connecticut', zone: 5, lx: 700, ly: 158, d: 'M 690,152 L 690,165 L 715,165 L 715,155 Z' },
  { abbr: 'NY', name: 'New York', zone: 5, lx: 648, ly: 130, d: 'M 620,100 L 620,160 L 672,160 L 672,95 L 645,90 Z' },
  { abbr: 'NJ', name: 'New Jersey', zone: 5, lx: 665, ly: 168, d: 'M 648,158 L 648,182 L 668,182 L 672,162 Z' },
  { abbr: 'PA', name: 'Pennsylvania', zone: 5, lx: 635, ly: 165, d: 'M 572,155 L 572,185 L 648,185 L 648,155 Z' },
  { abbr: 'DE', name: 'Delaware', zone: 5, lx: 662, ly: 188, d: 'M 648,182 L 648,200 L 668,200 L 668,182 Z' },
  { abbr: 'MD', name: 'Maryland', zone: 5, lx: 630, ly: 192, d: 'M 572,185 L 572,205 L 645,205 L 648,190 L 648,185 Z' },
  { abbr: 'DC', name: 'Washington DC', zone: 5, lx: null, ly: null, d: 'M 620,195 L 620,205 L 630,205 L 630,195 Z' },
]
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
  margin: 32px 0 24px;
}
.us-map {
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.1));
}
.state-path {
  cursor: pointer;
  transition: opacity 0.15s, filter 0.15s;
}
.state-path:hover {
  opacity: 0.8;
  filter: brightness(1.1);
}
.state-label {
  font-size: 7px;
  font-weight: 700;
  fill: rgba(0,0,0,0.65);
  pointer-events: none;
  user-select: none;
}

/* Tooltip */
.map-tooltip {
  position: absolute;
  background: #0D0D0D;
  color: #fff;
  padding: 10px 14px;
  border-radius: 8px;
  pointer-events: none;
  white-space: nowrap;
  z-index: 100;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  border-left: 3px solid #F5C300;
}
.tt-state { font-size: 0.9rem; font-weight: 800; margin-bottom: 2px; }
.tt-zone { font-size: 0.72rem; color: #aaa; text-transform: uppercase; letter-spacing: 0.05em; }
.tt-price { font-size: 1.2rem; font-weight: 900; color: #F5C300; margin: 4px 0 2px; }
.tt-transit { font-size: 0.78rem; color: #ccc; }

/* Legend */
.zone-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
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
  width: 18px;
  height: 18px;
  border-radius: 4px;
  flex-shrink: 0;
}
.legend-info { display: flex; flex-direction: column; line-height: 1.3; }
.legend-info strong { font-size: 0.85rem; font-weight: 800; }
.legend-info span { font-size: 0.78rem; color: #555; }

.shipping-note {
  text-align: center;
  font-size: 0.78rem;
  color: #999;
  margin-top: 8px;
}
</style>
