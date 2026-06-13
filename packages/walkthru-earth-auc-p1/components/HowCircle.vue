<script setup lang="ts">
// How we do it, the open geospatial stack drawn as a bullseye.
// Each ring is a layer of the stack with its name and logos inside.
// The leader line out of each layer states OUR role at that layer.
// Logical order, core to edge, open standards at the foundation, people at the surface.
const CX = 590
const CY = 292
const BASE = import.meta.env.BASE_URL
const rad = (d: number) => (d * Math.PI) / 180
const on = (r: number, a: number) => ({ x: CX + r * Math.cos(rad(a)), y: CY - r * Math.sin(rad(a)) })

// Ring outer radii, core first
const R = [72, 116, 158, 198, 236, 274]
const RING_OUT = R[5] + 16

// Concentric bands, drawn outer first so inner paints on top. Core is its own disk.
const disks = [
  { size: R[5] * 2, bg: 'bg-amber-100', border: 'border-amber-300', delay: 400 },
  { size: R[4] * 2, bg: 'bg-violet-100', border: 'border-violet-300', delay: 320 },
  { size: R[3] * 2, bg: 'bg-indigo-100', border: 'border-indigo-300', delay: 240 },
  { size: R[2] * 2, bg: 'bg-sky-100', border: 'border-sky-300', delay: 160 },
  { size: R[1] * 2, bg: 'bg-teal-100', border: 'border-teal-300', delay: 80 },
].map(d => ({ ...d, left: CX - d.size / 2, top: CY - d.size / 2, shadow: 'shadow-[inset_0_0_18px_rgba(0,0,0,0.04)]' }))

const L = (p: string) => BASE + p

// Layers, core to edge. chip holds name and logos, card holds our role.
const layers = [
  {
    key: 'formats', angle: 213, side: 'L', midR: 94, delay: 560,
    name: 'Cloud-native formats', logos: [L('logos/parquet.svg')], extra: 'Zarr, COG, PMTiles',
    tag: 'Formats', role: 'Early adopters. Everything we publish is open and cloud-native by default.',
    chipBorder: 'border-teal-300', chipText: 'text-teal-700', cardBorder: 'border-teal-300', cardTag: 'bg-teal-100 text-teal-700', hex: '#14b8a6', textHex: '#0f766e',
  },
  {
    key: 'grid', angle: 180, side: 'L', midR: 137, delay: 620,
    name: 'Global grid index', logos: [L('logos/h3.svg'), L('logos/a5.svg')], extra: 'DGGS, S2',
    tag: 'Global grid', role: 'We index every layer to a grid, so any layer joins any other.',
    chipBorder: 'border-sky-300', chipText: 'text-sky-700', cardBorder: 'border-sky-300', cardTag: 'bg-sky-100 text-sky-700', hex: '#0ea5e9', textHex: '#0369a1',
  },
  {
    key: 'catalogs', angle: 0, side: 'R', midR: 178, delay: 680,
    name: 'Catalogs and providers', logos: [L('logos/stac.png'), L('logos/iceberg.svg'), L('logos/duckdb.svg')], extra: 'STAC, Iceberg, DuckLake',
    tag: 'Catalogs', role: 'We help build Portolan, our open catalog, public on Source.coop with no keys.',
    chipBorder: 'border-indigo-300', chipText: 'text-indigo-700', cardBorder: 'border-indigo-300', cardTag: 'bg-indigo-100 text-indigo-700', hex: '#6366f1', textHex: '#4338ca',
  },
  {
    key: 'apps', angle: 34, side: 'R', midR: 217, delay: 740,
    name: 'Apps and initiatives', icons: ['i-carbon:earth', 'i-carbon:iot-platform', 'i-carbon:face-satisfied'], extra: 'Globe, OpenSensor, Hormones',
    tag: 'Apps', role: 'We build the products on top, the map, the sensors, the brain layer.',
    chipBorder: 'border-violet-300', chipText: 'text-violet-700', cardBorder: 'border-violet-300', cardTag: 'bg-violet-100 text-violet-700', hex: '#8b5cf6', textHex: '#6d28d9',
  },
  {
    key: 'people', angle: 146, side: 'L', midR: 255, delay: 800,
    name: 'People and AI agents', icons: ['i-carbon:user-multiple', 'i-carbon:bot'], extra: 'students, researchers, companies',
    tag: 'For everyone', role: 'Open to all, students, researchers, companies, and AI agents build on it.',
    chipBorder: 'border-amber-300', chipText: 'text-amber-700', cardBorder: 'border-amber-300', cardTag: 'bg-amber-100 text-amber-700', hex: '#f59e0b', textHex: '#b45309',
  },
  {
    key: 'standards', angle: 327, side: 'R', midR: 0, core: true, delay: 500,
    name: 'Open standards', logos: [L('logos/ogc.svg')], extra: '',
    tag: 'Standards', role: 'We help shape them with the community. OGC and Cloud-Native Geo, working groups and testbeds.',
    chipBorder: 'border-green-400', chipText: 'text-green-700', cardBorder: 'border-green-400', cardTag: 'bg-green-100 text-green-700', hex: '#16a34a',
  },
].map((c) => {
  const startR = c.core ? R[0] : c.midR
  const s = on(startR, c.angle)
  const e = on(RING_OUT, c.angle)
  const ax = c.side === 'L' ? 286 : 894
  // Curved title hugging the top of this band, upright and centered at 90 degrees.
  // Inner bands need a wider arc to fit the same text, so derive the half span from radius.
  const fs = 13
  const approxLen = c.name.length * fs * 0.56 * 1.12
  const hspan = Math.min(74, (approxLen / c.midR) * 90 / Math.PI)
  const sp = on(c.midR, 90 + hspan)
  const ep = on(c.midR, 90 - hspan)
  const labelPath = c.core ? '' : `M ${sp.x.toFixed(1)} ${sp.y.toFixed(1)} A ${c.midR} ${c.midR} 0 0 1 ${ep.x.toFixed(1)} ${ep.y.toFixed(1)}`
  // Logos sit on the bottom of the same band, mirroring the title at the top.
  const bottom = on(c.midR, 270)
  return { ...c, points: `${s.x},${s.y} ${e.x},${e.y} ${ax},${e.y}`, dot: s, ax, cardY: e.y, labelPath, fs, bottom }
})
</script>

<template>
  <div class="relative mx-auto" style="width: 1180px; height: 584px;">

    <!-- concentric bands -->
    <div
      v-for="(d, i) in disks" :key="'d' + i"
      v-motion
      :initial="{ scale: 0.55, opacity: 0 }"
      :enter="{ scale: 1, opacity: 1, transition: { delay: d.delay, duration: 480, ease: 'easeOut' } }"
      class="absolute rounded-full border-2 border-solid"
      :class="[d.bg, d.border, d.shadow]"
      :style="{ left: d.left + 'px', top: d.top + 'px', width: d.size + 'px', height: d.size + 'px', transformOrigin: 'center' }"
    />

    <!-- core, open standards -->
    <div
      v-motion
      :initial="{ scale: 0.55, opacity: 0 }"
      :enter="{ scale: 1, opacity: 1, transition: { delay: 0, duration: 480, ease: 'easeOut' } }"
      class="absolute rounded-full bg-green-600 border-2 border-solid border-green-700 shadow-lg flex flex-col items-center justify-center text-center"
      :style="{ left: (CX - R[0]) + 'px', top: (CY - R[0]) + 'px', width: (R[0] * 2) + 'px', height: (R[0] * 2) + 'px', transformOrigin: 'center' }"
    >
      <div class="rounded-md bg-white px-1.5 py-1 flex items-center justify-center gap-1.5">
        <img :src="L('logos/ogc.svg')" class="h-5"/>
        <img :src="L('logos/cloud-native-geo.png')" class="h-5"/>
      </div>
      <div class="text-white font-bold text-[0.82rem] leading-tight mt-1.5">Open<br>standards</div>
    </div>

    <!-- leader spokes and curved band titles -->
    <svg class="absolute inset-0 pointer-events-none" width="1180" height="584" style="z-index: 6;">
      <defs>
        <path v-for="(c, i) in layers.filter(l => !l.core)" :key="'lp' + i" :id="'lbl-' + c.key" :d="c.labelPath" fill="none"/>
      </defs>
      <g v-for="(c, i) in layers" :key="'s' + i">
        <polyline :points="c.points" fill="none" :stroke="c.hex" stroke-width="1.5" stroke-dasharray="1 4" stroke-linecap="round" opacity="0.85"/>
        <circle :cx="c.dot.x" :cy="c.dot.y" r="4.5" :fill="c.hex" stroke="white" stroke-width="1.5"/>
      </g>
      <template v-for="(c, i) in layers" :key="'t' + i">
        <text
          v-if="!c.core"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: c.delay, duration: 420 } }"
          :fill="c.textHex" :font-size="c.fs" font-weight="700"
          dominant-baseline="central" letter-spacing="0.3"
          style="font-family: Quicksand, sans-serif; text-transform: uppercase;"
        >
          <textPath :href="'#lbl-' + c.key" startOffset="50%" text-anchor="middle">{{ c.name }}</textPath>
        </text>
      </template>
    </svg>

    <!-- our role cards -->
    <Reveal
      v-for="(c, i) in layers" :key="'card' + i"
      :delay="c.delay + 60"
      class="absolute"
      :style="c.side === 'L' ? { left: '36px', top: (c.cardY - 36) + 'px' } : { right: '36px', top: (c.cardY - 36) + 'px' }"
    >
      <div class="w-[250px] rounded-xl border-2 border-solid bg-white/95 px-3.5 py-2 shadow-sm" :class="c.cardBorder">
        <div class="flex items-center gap-1.5 mb-1">
          <span class="rounded px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide" :class="c.cardTag">{{ c.tag }}</span>
          <span v-if="c.extra" class="text-[0.62rem] text-gray-400 leading-none truncate">{{ c.extra }}</span>
        </div>
        <div class="text-[0.8rem] text-gray-700 leading-snug">{{ c.role }}</div>
      </div>
    </Reveal>

    <!-- brand logos on the bottom of each band, mirroring the title on top -->
    <template v-for="(c, i) in layers" :key="'logo' + i">
      <div v-if="!c.core" class="absolute" :style="{ left: c.bottom.x + 'px', top: c.bottom.y + 'px', transform: 'translate(-50%, -50%)', zIndex: 9 }">
        <Reveal :delay="c.delay + 120" :y="-6">
          <div class="rounded-full bg-white/85 border border-solid shadow-sm px-2 py-1 flex items-center gap-1.5" :class="c.chipBorder">
            <template v-if="c.logos">
              <img v-for="(g, j) in c.logos" :key="j" :src="g" class="h-4 w-4 object-contain"/>
            </template>
            <template v-else-if="c.icons">
              <div v-for="(ic, j) in c.icons" :key="'i' + j" class="text-base" :class="[ic, c.chipText]"/>
            </template>
          </div>
        </Reveal>
      </div>
    </template>

  </div>
</template>
