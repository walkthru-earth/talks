---
layout: full
transition: view-transition
---

<Morph name="vt-brain" class="morph-panel bg-rose-50 border-solid border-4 border-rose-500 !justify-start !px-10 !py-6">

<Reveal class="flex items-center gap-3">
  <div class="rounded-full w-11 h-11 flex items-center justify-center bg-rose-100 border-2 border-rose-400 shrink-0">
    <div i-carbon:face-satisfied class="text-xl text-rose-600"/>
  </div>
  <div>
    <div class="text-2xl font-bold text-rose-700 leading-tight">We turn a street into brain signals</div>
    <div class="text-sm text-gray-500 leading-tight">Open street images become predicted brain response, written as open GeoParquet with no keys</div>
  </div>
</Reveal>

<div class="mt-4 flex-grow flex items-center">

<div class="w-full flex items-stretch gap-1.5">

<!-- Zone 1, street imagery from Mapillary -->
<Reveal :delay="80" class="flex-1 flex flex-col min-w-0">
  <div class="section-label">Street imagery, Mapillary</div>
  <div class="flex-grow rounded-xl border-2 border-solid border-slate-300 bg-slate-50 p-3.5 flex flex-col">
    <div class="rounded-lg bg-white border border-solid border-slate-300 px-3 py-2 mb-2 flex items-center justify-center h-12">
      <img src="/logos/mapillary.svg" alt="Mapillary" class="h-5" />
    </div>
    <div class="text-sm text-gray-700 leading-snug mb-2">Street level images from a small London area, Camden Town and Borough Market.</div>
    <div class="flex flex-col gap-1 text-[0.78rem] text-gray-700">
      <div class="flex items-center gap-1.5"><div i-carbon:location class="text-base text-slate-500 shrink-0"/> GPS point, lon and lat</div>
      <div class="flex items-center gap-1.5"><div i-carbon:compass class="text-base text-slate-500 shrink-0"/> Compass heading</div>
      <div class="flex items-center gap-1.5"><div i-carbon:time class="text-base text-slate-500 shrink-0"/> Capture time</div>
    </div>
    <div class="mt-auto pt-3 text-[0.72rem] text-slate-500 leading-snug">Crowdsourced, open, and it already covers the city.</div>
  </div>
</Reveal>

<!-- Arrow, cache -->
<Reveal :delay="140" class="w-12 shrink-0 flex flex-col items-center justify-center gap-1 text-center">
  <div i-carbon:arrow-right class="text-3xl text-amber-500"/>
  <div class="text-[0.6rem] uppercase tracking-wider text-amber-600 font-semibold leading-tight">Cache</div>
</Reveal>

<!-- Zone 2, cached as Parquet shards -->
<Reveal :delay="190" class="flex-1 flex flex-col min-w-0">
  <div class="section-label">Cached as Parquet</div>
  <div class="flex-grow rounded-xl border-2 border-solid border-green-400 bg-green-50 p-3.5 flex flex-col">
    <div class="rounded-lg bg-white border border-solid border-green-300 px-3 py-2 mb-2 flex items-center justify-center h-12">
      <img src="/logos/parquet.svg" alt="Apache Parquet" class="h-5" />
    </div>
    <div class="text-sm text-gray-700 leading-snug mb-2">Each image is stored once as a Parquet shard, the JPEG kept inline with its metadata.</div>
    <div class="flex flex-col gap-1 text-[0.78rem] text-gray-700">
      <div class="flex items-center gap-1.5"><div i-carbon:checkmark-filled class="text-green-500 shrink-0"/> Anti join on image id</div>
      <div class="flex items-center gap-1.5"><div i-carbon:checkmark-filled class="text-green-500 shrink-0"/> New images only</div>
    </div>
    <div class="mt-auto pt-3 text-[0.72rem] text-green-700 leading-snug">Hit the API once per image, so re runs stay cheap.</div>
  </div>
</Reveal>

<!-- Arrow, encode -->
<Reveal :delay="250" class="w-12 shrink-0 flex flex-col items-center justify-center gap-1 text-center">
  <div i-carbon:arrow-right class="text-3xl text-amber-500"/>
  <div class="text-[0.6rem] uppercase tracking-wider text-amber-600 font-semibold leading-tight">Encode</div>
</Reveal>

<!-- Zone 3, the Meta TRIBE v2 model -->
<Reveal :delay="300" class="flex-1 flex flex-col min-w-0">
  <div class="section-label">Meta TRIBE v2</div>
  <div class="flex-grow rounded-xl border-2 border-solid border-rose-400 bg-rose-50 p-3.5 flex flex-col">
    <div class="rounded-lg bg-white border border-solid border-rose-300 px-3 py-2 mb-2 flex items-center justify-center gap-2 h-12">
      <img src="/logos/meta.svg" alt="Meta" class="h-4" />
      <span class="font-bold text-rose-700 text-base">TRIBE v2</span>
    </div>
    <div class="text-sm text-gray-700 leading-snug mb-2">Each still becomes a short clip, then the V-JEPA2 vision tower predicts brain response.</div>
    <div class="flex flex-col gap-1 text-[0.78rem] text-gray-700">
      <div class="flex items-center gap-1.5"><div i-carbon:view class="text-base text-rose-500 shrink-0"/> Vision only, no language gate</div>
      <div class="flex items-center gap-1.5"><div i-carbon:chart-radar class="text-base text-rose-500 shrink-0"/> 360 HCP MMP1 brain parcels</div>
    </div>
    <div class="mt-auto pt-3 text-[0.72rem] text-rose-700 leading-snug">Open model from Meta FAIR, runs on a single GPU.</div>
  </div>
</Reveal>

<!-- Model output is written to an open file, then used directly for the live result -->
<div class="flex-[1.35] flex flex-col gap-4 min-w-0">

  <!-- Step one, write the deliverable, open for anyone -->
  <div class="shrink-0 flex items-stretch gap-1.5">
    <Reveal :delay="360" class="w-12 shrink-0 flex flex-col items-center justify-center gap-0.5 text-center">
      <div i-carbon:arrow-right class="text-3xl text-amber-500"/>
      <div class="text-[0.6rem] uppercase tracking-wider text-amber-600 font-semibold leading-tight">Write</div>
    </Reveal>
    <Reveal :delay="410" class="flex-1 rounded-xl border-2 border-solid border-green-400 bg-white p-2.5 flex flex-col min-w-0 min-h-0">
      <div class="flex items-center gap-2 mb-1.5 shrink-0">
        <img src="/logos/duckdb.svg" alt="DuckDB" class="h-5 shrink-0" />
        <div class="font-bold text-green-700 text-base leading-tight">GeoParquet 2.0</div>
      </div>
      <div class="flex flex-col gap-1 text-[0.78rem] text-gray-700">
        <div class="flex items-center gap-1.5"><div i-carbon:checkmark-filled class="text-green-500 shrink-0"/> Brain response per street point</div>
        <div class="flex items-center gap-1.5"><div i-carbon:checkmark-filled class="text-green-500 shrink-0"/> Native geometry on OGC CRS84</div>
        <div class="flex items-center gap-1.5"><div i-carbon:checkmark-filled class="text-green-500 shrink-0"/> Open, no lock in</div>
      </div>
    </Reveal>
  </div>

  <!-- Step two, use the open file directly, down to the live result -->
  <Reveal :delay="440" class="shrink-0 flex items-center justify-center gap-1.5 pl-12 py-1.5">
    <div i-carbon:arrow-down class="text-2xl text-amber-500"/>
    <div class="text-[0.6rem] uppercase tracking-wider text-amber-600 font-semibold">Use directly</div>
  </Reveal>

  <!-- The result, the HNC Explorer you just saw -->
  <Reveal :delay="470" class="flex-grow min-h-[210px] ml-12 rounded-xl border-2 border-solid border-rose-400 bg-white p-2 flex flex-col">
    <div class="flex items-center gap-1.5 mb-1.5 px-0.5 shrink-0">
      <div i-carbon:face-satisfied class="text-lg text-rose-600 shrink-0"/>
      <div class="text-[0.82rem] font-bold text-rose-700 leading-tight">HNC Explorer, results like this</div>
    </div>
    <Reveal :delay="540" class="flex-grow rounded-lg overflow-hidden border border-solid border-rose-300 bg-white min-h-0 relative">
      <img src="/images/hnc-result.png" alt="HNC Explorer, predicted brain activity mapped along a London street" class="absolute inset-0 w-full h-full object-cover object-top" />
    </Reveal>
  </Reveal>

</div>

</div>

</div>

<Reveal :delay="500" class="mt-3 flex justify-between items-center">
  <div class="flex gap-5 text-sm">
    <div class="flex items-center gap-1.5 text-green-600"><div i-carbon:checkmark-filled /><span>Reproducible pipeline</span></div>
    <div class="flex items-center gap-1.5 text-green-600"><div i-carbon:checkmark-filled /><span>Open model and data</span></div>
    <div class="flex items-center gap-1.5 text-green-600"><div i-carbon:checkmark-filled /><span>Runs in the browser</span></div>
  </div>
  <a href="https://github.com/walkthru-earth/hnc" target="_blank" class="btn btn-link text-sm">
    See the open pipeline <span i-carbon:launch class="inline-block ml-1" />
  </a>
</Reveal>

</Morph>

<!--
How the brain layer is built, left to right, and it ends on the result you just saw.
- Mapillary gives us open street level images for a small London area, each one carries a GPS point, a compass heading, and a capture time.
- We cache every image once as a Parquet shard, the JPEG kept inline with its metadata, an anti join on image id means we hit the API only for new images, so re runs stay cheap.
- Each still becomes a short clip, then Meta FAIR's TRIBE v2, the V-JEPA2 vision tower, predicts the brain response, vision only, summarized to 360 HCP MMP1 brain parcels.
- DuckDB writes one open GeoParquet 2.0 file, native geometry on OGC CRS84, with the brain response attached to each street point, open and free to read.
- Then we use that open file directly in the HNC Explorer, the live demo you just saw, results like this right in the browser.
- All of it is open at github.com/walkthru-earth/hnc, exactly where brain encoding experts here could test and improve the model.
- Then back out to the three parts.
-->
