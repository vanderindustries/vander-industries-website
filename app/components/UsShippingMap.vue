<template>
  <section class="shipping-map-section section">
    <div class="container">
      <div class="text-center mb-32">
        <div class="badge">Shipping Zones</div>
        <h2>Nationwide Delivery From Los Angeles</h2>
        <p class="mt-16">We ship to all 50 states. Freight rates are calculated by zone. Exact shipping quote provided at checkout.</p>
      </div>

      <div class="map-wrapper">
        <div class="tooltip" v-if="tooltip.visible" :style="{ top: tooltip.y + 'px', left: tooltip.x + 'px' }">
          <strong>{{ tooltip.state }}</strong>
          <span>{{ tooltip.zone }}</span>
          <span class="tip-price">{{ tooltip.price }}</span>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 960 600"
          class="us-map"
          @mouseleave="tooltip.visible = false"
        >
          <g v-for="s in states" :key="s.abbr">
            <path
              :d="s.d"
              :fill="zoneColor(s.zone)"
              stroke="#fff"
              stroke-width="1.5"
              class="state-path"
              @mouseenter="(e) => showTooltip(e, s)"
              @mousemove="(e) => moveTooltip(e)"
            />
          </g>

          <!-- Alaska & Hawaii labels -->
          <text x="68" y="530" font-size="9" fill="#fff" font-weight="700" text-anchor="middle">AK</text>
          <text x="158" y="530" font-size="9" fill="#fff" font-weight="700" text-anchor="middle">HI</text>
        </svg>
      </div>

      <!-- Legend -->
      <div class="map-legend">
        <div class="legend-item" v-for="z in zones" :key="z.label">
          <span class="legend-swatch" :style="{ background: z.color }"></span>
          <div>
            <strong>{{ z.label }}</strong>
            <span>{{ z.states }}</span>
            <span class="legend-price">{{ z.price }}</span>
          </div>
        </div>
      </div>

      <p class="map-note">📦 Exact freight quote calculated at checkout · Customer pays shipping · All shipments fully insured</p>
    </div>
  </section>
</template>

<script setup>
const tooltip = reactive({ visible: false, state: '', zone: '', price: '', x: 0, y: 0 })

const zones = [
  { label: 'Zone 1 — West', color: '#F5C300', states: 'CA, OR, WA, NV, AZ', price: '$200–$400' },
  { label: 'Zone 2 — Mountain', color: '#F59300', states: 'ID, MT, WY, CO, UT, NM, AK, HI', price: '$350–$550' },
  { label: 'Zone 3 — Midwest', color: '#5BA4CF', states: 'ND, SD, NE, KS, MN, IA, MO, WI, IL, MI, IN, OH', price: '$450–$650' },
  { label: 'Zone 4 — South', color: '#52B788', states: 'TX, OK, AR, LA, MS, AL, TN, KY, GA, FL, SC, NC, VA, WV', price: '$500–$700' },
  { label: 'Zone 5 — Northeast', color: '#9B72CF', states: 'ME, NH, VT, MA, RI, CT, NY, NJ, PA, DE, MD, DC', price: '$550–$750' },
]

const zoneData = {
  1: { label: 'Zone 1 — West', price: '$200–$400', color: '#F5C300' },
  2: { label: 'Zone 2 — Mountain', price: '$350–$550', color: '#F59300' },
  3: { label: 'Zone 3 — Midwest', price: '$450–$650', color: '#5BA4CF' },
  4: { label: 'Zone 4 — South', price: '$500–$700', color: '#52B788' },
  5: { label: 'Zone 5 — Northeast', price: '$550–$750', color: '#9B72CF' },
}

function zoneColor(z) {
  return zoneData[z]?.color ?? '#ccc'
}

function showTooltip(e, s) {
  tooltip.visible = true
  tooltip.state = s.name
  tooltip.zone = zoneData[s.zone]?.label ?? ''
  tooltip.price = zoneData[s.zone]?.price ?? ''
  moveTooltip(e)
}

function moveTooltip(e) {
  const rect = e.currentTarget.closest('.map-wrapper').getBoundingClientRect()
  tooltip.x = e.clientX - rect.left + 12
  tooltip.y = e.clientY - rect.top - 10
}

// Simplified but recognizable US state paths (viewBox 960x600)
const states = [
  // Zone 1 — West
  { abbr: 'WA', name: 'Washington', zone: 1, d: 'M120,60 L240,60 L245,90 L230,110 L200,120 L155,115 L130,95 Z' },
  { abbr: 'OR', name: 'Oregon', zone: 1, d: 'M120,120 L200,120 L230,110 L240,150 L220,190 L155,195 L120,185 Z' },
  { abbr: 'CA', name: 'California', zone: 1, d: 'M100,200 L155,195 L220,190 L230,250 L215,320 L195,390 L155,430 L115,415 L95,360 L85,300 L90,250 Z' },
  { abbr: 'NV', name: 'Nevada', zone: 1, d: 'M155,195 L240,150 L265,195 L255,295 L220,310 L195,390 L155,430 L195,390 L215,320 L230,250 L220,190 Z' },
  { abbr: 'AZ', name: 'Arizona', zone: 1, d: 'M195,390 L255,295 L310,295 L315,355 L310,430 L245,430 L195,430 Z' },

  // Zone 2 — Mountain
  { abbr: 'ID', name: 'Idaho', zone: 2, d: 'M240,60 L310,55 L315,120 L295,160 L265,195 L240,150 L245,90 Z' },
  { abbr: 'MT', name: 'Montana', zone: 2, d: 'M240,20 L420,20 L425,90 L315,90 L310,55 L240,60 Z' },
  { abbr: 'WY', name: 'Wyoming', zone: 2, d: 'M315,90 L425,90 L430,180 L315,180 Z' },
  { abbr: 'CO', name: 'Colorado', zone: 2, d: 'M315,180 L430,180 L432,265 L315,265 Z' },
  { abbr: 'UT', name: 'Utah', zone: 2, d: 'M265,195 L315,180 L315,265 L310,295 L255,295 Z' },
  { abbr: 'NM', name: 'New Mexico', zone: 2, d: 'M315,265 L432,265 L435,355 L385,360 L310,355 L310,295 Z' },
  { abbr: 'AK', name: 'Alaska', zone: 2, d: 'M30,480 L110,475 L115,510 L100,540 L60,545 L25,530 Z' },
  { abbr: 'HI', name: 'Hawaii', zone: 2, d: 'M120,490 L145,485 L160,490 L165,510 L155,520 L120,515 Z' },

  // Zone 3 — Midwest
  { abbr: 'ND', name: 'North Dakota', zone: 3, d: 'M420,20 L565,20 L565,95 L425,90 Z' },
  { abbr: 'SD', name: 'South Dakota', zone: 3, d: 'M425,90 L565,95 L565,170 L430,180 Z' },
  { abbr: 'NE', name: 'Nebraska', zone: 3, d: 'M430,180 L565,170 L568,240 L432,265 Z' },
  { abbr: 'KS', name: 'Kansas', zone: 3, d: 'M432,265 L568,240 L570,310 L433,310 Z' },
  { abbr: 'MN', name: 'Minnesota', zone: 3, d: 'M565,20 L660,20 L660,60 L640,100 L620,120 L590,125 L565,95 Z' },
  { abbr: 'IA', name: 'Iowa', zone: 3, d: 'M565,170 L640,165 L645,225 L568,240 Z' },
  { abbr: 'MO', name: 'Missouri', zone: 3, d: 'M568,240 L645,225 L650,300 L620,330 L580,335 L545,310 L433,310 L570,310 Z' },
  { abbr: 'WI', name: 'Wisconsin', zone: 3, d: 'M620,120 L660,115 L670,160 L645,175 L640,165 L590,125 Z' },
  { abbr: 'IL', name: 'Illinois', zone: 3, d: 'M640,165 L670,160 L675,240 L650,260 L645,225 Z' },
  { abbr: 'MI', name: 'Michigan', zone: 3, d: 'M660,60 L720,55 L730,100 L700,115 L670,110 L660,115 L660,60 Z' },
  { abbr: 'IN', name: 'Indiana', zone: 3, d: 'M670,160 L710,155 L715,235 L675,240 Z' },
  { abbr: 'OH', name: 'Ohio', zone: 3, d: 'M710,155 L755,150 L758,230 L715,235 Z' },

  // Zone 4 — South
  { abbr: 'TX', name: 'Texas', zone: 4, d: 'M433,310 L570,310 L580,335 L590,390 L565,435 L515,470 L450,475 L390,450 L360,400 L355,360 L385,360 L435,355 Z' },
  { abbr: 'OK', name: 'Oklahoma', zone: 4, d: 'M433,310 L570,310 L575,355 L433,355 Z' },
  { abbr: 'AR', name: 'Arkansas', zone: 4, d: 'M580,335 L650,330 L652,390 L590,390 Z' },
  { abbr: 'LA', name: 'Louisiana', zone: 4, d: 'M565,435 L590,390 L652,390 L658,430 L625,455 L590,460 Z' },
  { abbr: 'MS', name: 'Mississippi', zone: 4, d: 'M652,390 L690,385 L695,445 L658,450 Z' },
  { abbr: 'AL', name: 'Alabama', zone: 4, d: 'M690,385 L730,380 L735,445 L695,445 Z' },
  { abbr: 'TN', name: 'Tennessee', zone: 4, d: 'M650,300 L780,295 L782,340 L652,345 Z' },
  { abbr: 'KY', name: 'Kentucky', zone: 4, d: 'M650,260 L780,255 L782,295 L650,300 Z' },
  { abbr: 'GA', name: 'Georgia', zone: 4, d: 'M730,380 L785,375 L790,440 L760,470 L735,465 Z' },
  { abbr: 'FL', name: 'Florida', zone: 4, d: 'M735,445 L790,440 L810,460 L820,490 L790,520 L760,510 L740,480 Z' },
  { abbr: 'SC', name: 'South Carolina', zone: 4, d: 'M785,340 L825,335 L828,375 L785,375 Z' },
  { abbr: 'NC', name: 'North Carolina', zone: 4, d: 'M782,295 L860,290 L858,335 L785,340 Z' },
  { abbr: 'VA', name: 'Virginia', zone: 4, d: 'M782,255 L855,248 L860,290 L782,295 Z' },
  { abbr: 'WV', name: 'West Virginia', zone: 4, d: 'M755,230 L790,225 L792,255 L758,260 Z' },

  // Zone 5 — Northeast
  { abbr: 'PA', name: 'Pennsylvania', zone: 5, d: 'M758,180 L840,175 L842,225 L755,230 Z' },
  { abbr: 'NY', name: 'New York', zone: 5, d: 'M755,120 L855,115 L857,175 L758,180 Z' },
  { abbr: 'NJ', name: 'New Jersey', zone: 5, d: 'M845,185 L868,182 L870,215 L845,218 Z' },
  { abbr: 'DE', name: 'Delaware', zone: 5, d: 'M855,220 L872,218 L873,238 L855,238 Z' },
  { abbr: 'MD', name: 'Maryland', zone: 5, d: 'M790,225 L855,220 L855,238 L842,248 L790,242 Z' },
  { abbr: 'CT', name: 'Connecticut', zone: 5, d: 'M865,148 L888,146 L889,165 L865,165 Z' },
  { abbr: 'RI', name: 'Rhode Island', zone: 5, d: 'M892,145 L905,144 L906,158 L892,159 Z' },
  { abbr: 'MA', name: 'Massachusetts', zone: 5, d: 'M855,115 L920,112 L922,145 L855,148 Z' },
  { abbr: 'VT', name: 'Vermont', zone: 5, d: 'M840,75 L860,73 L862,115 L840,115 Z' },
  { abbr: 'NH', name: 'New Hampshire', zone: 5, d: 'M862,55 L882,53 L884,112 L862,115 Z' },
  { abbr: 'ME', name: 'Maine', zone: 5, d: 'M882,20 L930,22 L928,80 L882,75 Z' },
  { abbr: 'DC', name: 'Washington D.C.', zone: 5, d: 'M822,238 L835,236 L836,246 L822,246 Z' },
]
</script>

<style scoped>
.shipping-map-section {
  background: var(--white);
}

.map-wrapper {
  position: relative;
  background: #1a2a3a;
  border-radius: 12px;
  overflow: hidden;
  padding: 20px;
  box-shadow: var(--shadow-lg);
}

.us-map {
  width: 100%;
  height: auto;
  display: block;
}

.state-path {
  cursor: pointer;
  transition: opacity 0.12s, filter 0.12s;
}

.state-path:hover {
  opacity: 0.82;
  filter: brightness(1.15);
}

.tooltip {
  position: absolute;
  background: rgba(0,0,0,0.92);
  color: #fff;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.82rem;
  pointer-events: none;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 2px;
  white-space: nowrap;
  border: 1px solid rgba(245,195,0,0.4);
  box-shadow: 0 4px 16px rgba(0,0,0,0.5);
}

.tooltip strong {
  font-size: 0.95rem;
  color: var(--yellow);
}

.tip-price {
  font-weight: 700;
  color: #aaffaa;
}

.map-legend {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-top: 28px;
}

.legend-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.legend-swatch {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  flex-shrink: 0;
  margin-top: 2px;
}

.legend-item div {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.legend-item strong {
  font-size: 0.8rem;
  font-weight: 700;
}

.legend-item span {
  font-size: 0.72rem;
  color: var(--gray-700);
}

.legend-price {
  font-weight: 700 !important;
  color: var(--black) !important;
}

.map-note {
  text-align: center;
  color: var(--gray-500);
  font-size: 0.82rem;
  margin-top: 20px;
  max-width: 100%;
}

@media (max-width: 900px) {
  .map-legend { grid-template-columns: repeat(2, 1fr); gap: 14px; }
}

@media (max-width: 500px) {
  .map-legend { grid-template-columns: 1fr; }
}
</style>
