---
layout: full
transition: view-transition
---

<Morph name="vt-globe" class="morph-panel bg-blue-50 border-solid border-4 border-blue-500 !justify-start !px-10 !py-6">

<Reveal class="flex items-center gap-3">
  <div class="rounded-full w-11 h-11 flex items-center justify-center bg-blue-100 border-2 border-blue-400 shrink-0">
    <div i-carbon:data-base class="text-xl text-blue-600"/>
  </div>
  <div>
    <div class="text-2xl font-bold text-blue-700 leading-tight">We make open data usable</div>
    <div class="text-sm text-gray-500 leading-tight">Hard formats become one open table, joinable and AI ready, public with no keys</div>
  </div>
</Reveal>

<div class="mt-4 flex-grow flex items-center">

<div class="w-full flex items-stretch gap-1.5">

<!-- Zone 1, open data as it ships, hard to use -->
<Reveal :delay="80" class="flex-1 flex flex-col min-w-0">
  <div class="section-label">Open data, hard to use</div>
  <div class="flex-grow rounded-xl border-2 border-solid border-slate-300 bg-slate-50 p-3.5 flex flex-col">
    <div class="grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm text-gray-700">
      <div class="flex items-center gap-1.5"><div i-carbon:mountain class="text-lg text-slate-500 shrink-0"/> Terrain and DEM</div>
      <div class="flex items-center gap-1.5"><div i-carbon:partly-cloudy class="text-lg text-slate-500 shrink-0"/> Weather forecast</div>
      <div class="flex items-center gap-1.5"><div i-carbon:building class="text-lg text-slate-500 shrink-0"/> Buildings</div>
      <div class="flex items-center gap-1.5"><div i-carbon:road class="text-lg text-slate-500 shrink-0"/> Road networks</div>
      <div class="flex items-center gap-1.5"><div i-carbon:store class="text-lg text-slate-500 shrink-0"/> Commercial places</div>
      <div class="flex items-center gap-1.5"><div i-carbon:group class="text-lg text-slate-500 shrink-0"/> Population</div>
      <div class="flex items-center gap-1.5"><div i-carbon:tree class="text-lg text-slate-500 shrink-0"/> Land cover</div>
      <div class="flex items-center gap-1.5"><div i-carbon:satellite class="text-lg text-slate-500 shrink-0"/> Satellite imagery</div>
    </div>
    <div class="mt-auto pt-3 flex flex-wrap gap-1">
      <span class="text-[0.66rem] rounded bg-white border border-solid border-slate-300 px-1.5 py-0.5 text-slate-600">NetCDF</span>
      <span class="text-[0.66rem] rounded bg-white border border-solid border-slate-300 px-1.5 py-0.5 text-slate-600">GeoTIFF</span>
      <span class="text-[0.66rem] rounded bg-white border border-solid border-slate-300 px-1.5 py-0.5 text-slate-600">COG</span>
      <span class="text-[0.66rem] rounded bg-white border border-solid border-slate-300 px-1.5 py-0.5 text-slate-600">Zarr</span>
      <span class="text-[0.66rem] rounded bg-white border border-solid border-slate-300 px-1.5 py-0.5 text-slate-600">GRIB</span>
      <span class="text-[0.66rem] rounded bg-white border border-solid border-slate-300 px-1.5 py-0.5 text-slate-600">Shapefile</span>
      <span class="text-[0.66rem] rounded bg-white border border-solid border-slate-300 px-1.5 py-0.5 text-slate-600">File geodatabase</span>
      <span class="text-[0.66rem] rounded bg-white border border-solid border-slate-300 px-1.5 py-0.5 text-slate-600">GeoPackage</span>
      <span class="text-[0.66rem] rounded bg-white border border-solid border-slate-300 px-1.5 py-0.5 text-slate-600">GeoJSON</span>
      <span class="text-[0.66rem] rounded bg-white border border-solid border-slate-300 px-1.5 py-0.5 text-slate-600">KML</span>
    </div>
    <div class="mt-2 text-[0.72rem] text-slate-500 leading-snug">Scattered, heavy, hard to join for a researcher or an end user.</div>
  </div>
</Reveal>

<!-- Arrow, convert -->
<Reveal :delay="140" class="w-12 shrink-0 flex flex-col items-center justify-center gap-1 text-center">
  <div i-carbon:arrow-right class="text-3xl text-amber-500"/>
  <div class="text-[0.6rem] uppercase tracking-wider text-amber-600 font-semibold leading-tight">Convert</div>
</Reveal>

<!-- Zone 2, open tables and DGGS -->
<Reveal :delay="190" class="flex-1 flex flex-col min-w-0">
  <div class="section-label">Open tables and DGGS</div>
  <div class="flex-grow rounded-xl border-2 border-solid border-green-400 bg-green-50 p-3.5 flex flex-col">
    <div class="rounded-lg bg-white border border-solid border-green-300 px-3 py-2 mb-2 flex items-center justify-center h-12">
      <img src="/logos/parquet.svg" alt="Apache Parquet" class="h-5" />
    </div>
    <div class="text-sm text-gray-700 leading-snug mb-2">Parquet and GeoParquet, one open column format indexed by a global grid.</div>
    <div class="flex items-center gap-1.5 mb-1.5">
      <div i-carbon:hexagon-vertical-solid class="text-base text-green-600 shrink-0"/>
      <span class="text-[0.72rem] uppercase tracking-wide text-green-700 font-semibold">DGGS index, many grid types</span>
    </div>
    <div class="grid grid-cols-3 gap-1.5">
      <div class="rounded-lg bg-white border border-solid border-green-400 p-1.5 flex flex-col items-center gap-1">
        <img src="/logos/h3.svg" alt="H3 hexagonal grid" class="h-8" />
        <span class="text-[0.66rem] text-green-700 font-semibold">H3</span>
      </div>
      <div class="rounded-lg bg-white border border-solid border-green-400 p-1.5 flex flex-col items-center gap-1">
        <div i-carbon:grid class="text-2xl text-green-600"/>
        <span class="text-[0.66rem] text-green-700 font-semibold">S2</span>
      </div>
      <div class="rounded-lg bg-white border border-solid border-green-400 p-1.5 flex flex-col items-center gap-1">
        <img src="/logos/a5.svg" alt="A5 pentagonal grid" class="h-8" />
        <span class="text-[0.66rem] text-green-700 font-semibold">A5</span>
      </div>
    </div>
    <div class="mt-auto pt-3 text-[0.72rem] text-green-700 leading-snug">Easy to use, joinable, and AI ready for geospatial embeddings.</div>
  </div>
</Reveal>

<!-- Arrow, catalog -->
<Reveal :delay="250" class="w-12 shrink-0 flex flex-col items-center justify-center gap-1 text-center">
  <div i-carbon:arrow-right class="text-3xl text-amber-500"/>
  <div class="text-[0.6rem] uppercase tracking-wider text-amber-600 font-semibold leading-tight">Catalog</div>
</Reveal>

<!-- Zone 3, the catalog -->
<Reveal :delay="300" class="flex-1 flex flex-col min-w-0">
  <div class="section-label">Portolan catalog</div>
  <div class="flex-grow rounded-xl border-2 border-solid border-amber-400 bg-amber-50 p-3.5 flex flex-col">
    <div class="flex items-center gap-2 mb-2">
      <svg viewBox="0 0 32 32" class="w-7 h-7 shrink-0 text-amber-600" aria-hidden="true"><g fill="currentColor"><path d="M2.83 18.247l26.34-9.124L2.83 0z"/><path d="M29.17 32V13.753L2.83 22.877z"/></g></svg>
      <div class="font-bold text-amber-700 text-lg leading-tight">Portolan</div>
    </div>
    <div class="flex flex-col gap-1.5">
      <div class="rounded-lg bg-white border border-solid border-amber-300 px-2.5 py-1.5 flex items-center gap-2.5">
        <img src="/logos/stac.png" alt="STAC" class="h-7 shrink-0" />
        <div class="text-[0.7rem] text-gray-500 leading-snug">Search every layer in space and time</div>
      </div>
      <div class="rounded-lg bg-white border border-solid border-amber-300 px-2.5 py-1.5 flex items-center gap-2.5">
        <img src="/logos/iceberg.svg" alt="Apache Iceberg" class="h-7 shrink-0" />
        <div class="text-[0.7rem] text-gray-500 leading-snug">Open table catalog, versioned and fast</div>
      </div>
    </div>
    <div class="mt-auto pt-3 text-[0.72rem] text-amber-700 leading-snug">One front door to find and read every layer.</div>
  </div>
</Reveal>

<!-- Catalog publishes to the public card, then it is used directly to get results -->
<div class="flex-[1.35] flex flex-col gap-4 min-w-0">

  <!-- Step one, publish, the catalog becomes public for anyone -->
  <div class="shrink-0 flex items-stretch gap-1.5">
    <Reveal :delay="360" class="w-12 shrink-0 flex flex-col items-center justify-center gap-0.5 text-center">
      <div i-carbon:arrow-right class="text-3xl text-amber-500"/>
      <div class="text-[0.6rem] uppercase tracking-wider text-amber-600 font-semibold leading-tight">Publish</div>
    </Reveal>
    <Reveal :delay="410" class="flex-1 rounded-xl border-2 border-solid border-blue-400 bg-white p-2.5 flex flex-col min-w-0 min-h-0">
      <div class="flex items-center gap-2 mb-1.5 shrink-0">
        <div i-carbon:earth-filled class="text-2xl text-blue-600 shrink-0"/>
        <div class="font-bold text-blue-700 text-base leading-tight">Open to all</div>
      </div>
      <div class="flex flex-col gap-1 text-[0.78rem] text-gray-700">
        <div class="flex items-center gap-1.5"><div i-carbon:checkmark-filled class="text-blue-500 shrink-0"/> No API keys</div>
        <div class="flex items-center gap-1.5"><div i-carbon:checkmark-filled class="text-blue-500 shrink-0"/> Free for anyone to use</div>
        <div class="flex items-center gap-1.5"><div i-carbon:checkmark-filled class="text-blue-500 shrink-0"/> Joins other open catalogs</div>
      </div>
      <div class="mt-2 flex items-center gap-1.5 text-[0.68rem] text-blue-700">
        <img src="/logos/source-coop.svg" alt="Source Cooperative" class="h-3.5" />
        <span>Public on Source.coop</span>
      </div>
    </Reveal>
  </div>

  <!-- Step two, use the public data directly, down to the live result -->
  <Reveal :delay="440" class="shrink-0 flex items-center justify-center gap-1.5 pl-12 py-1.5">
    <div i-carbon:arrow-down class="text-2xl text-amber-500"/>
    <div class="text-[0.6rem] uppercase tracking-wider text-amber-600 font-semibold">Use directly</div>
  </Reveal>

  <!-- The result, the live Globe Explorer -->
  <Reveal :delay="470" class="flex-grow min-h-[210px] ml-12 rounded-xl border-2 border-solid border-blue-400 bg-white p-2 flex flex-col">
    <div class="flex items-center gap-1.5 mb-1.5 px-0.5 shrink-0">
      <div i-carbon:earth class="text-lg text-blue-600 shrink-0"/>
      <div class="text-[0.82rem] font-bold text-blue-700 leading-tight">Globe Explorer, results like this</div>
    </div>
    <Reveal :delay="540" class="flex-grow rounded-lg overflow-hidden border border-solid border-blue-300 bg-black min-h-0 relative">
      <iframe
        src="https://walkthru.earth/indices?section=weather-temperature&z=1.5&y=20.0&x=30.0&h3=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen"
        class="absolute top-0 left-0"
        style="width: 1280px; height: 800px; transform: scale(0.22); transform-origin: top left; border: 0;"
      ></iframe>
    </Reveal>
  </Reveal>

</div>

</div>

</div>

<Reveal :delay="500" class="mt-3 flex justify-between items-center">
  <div class="flex gap-5 text-sm">
    <div class="flex items-center gap-1.5 text-green-600"><div i-carbon:checkmark-filled /><span>Joinable by design</span></div>
    <div class="flex items-center gap-1.5 text-green-600"><div i-carbon:checkmark-filled /><span>AI ready</span></div>
    <div class="flex items-center gap-1.5 text-green-600"><div i-carbon:checkmark-filled /><span>Open, no lock in</span></div>
  </div>
  <a href="https://walkthru.earth/indices?section=weather-temperature&z=1.5&y=20.0&x=30.0&h3=1" target="_blank" class="btn btn-link text-sm">
    Explore the open data <span i-carbon:launch class="inline-block ml-1" />
  </a>
</Reveal>

</Morph>

<!--
The data layer behind the Globe Explorer, left to right.
- Open data ships in hard formats, NetCDF, GeoTIFF, COG, Zarr, GRIB, Shapefile, file geodatabase, GeoPackage, GeoJSON, KML, covering terrain, weather, buildings, roads, places, population, land cover, and imagery. Heavy and hard to join.
- We convert it to Parquet and GeoParquet and index it with a global grid, H3 today, plus S2 and A5, so any layer joins to any other and it is ready for AI and geospatial embeddings.
- We catalog it with Portolan, STAC for search and Apache Iceberg for open tables, one front door for every layer.
- We publish that catalog, public on Source.coop, no API keys, free to use, and it joins other open catalogs.
- Then anyone uses that open data directly in the Globe Explorer, the live map you just saw, results like this right in the browser.
- So all of these layers become public, and then a result you can see.
- Then back out to the three parts.
-->
