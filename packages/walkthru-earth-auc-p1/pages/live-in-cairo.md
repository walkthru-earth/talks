---
layout: full
transition: view-transition
---

<Morph name="vt-sensor" class="morph-panel bg-green-50 border-solid border-4 border-green-500 !justify-start !px-10 !py-6">

<Reveal class="flex items-center gap-3">
  <div class="rounded-full w-11 h-11 flex items-center justify-center bg-green-100 border-2 border-green-400 shrink-0">
    <div i-carbon:iot-platform class="text-xl text-green-600"/>
  </div>
  <div>
    <div class="text-2xl font-bold text-green-700 leading-tight">OpenSensor.space, live in Cairo</div>
    <div class="text-sm text-gray-500 leading-tight">From sensor to cloud to screen, with no server in between</div>
  </div>
</Reveal>

<div class="mt-4 flex-grow flex items-stretch gap-2.5">

<!-- Zone 1, sensors and devices -->
<Reveal :delay="80" class="w-[286px] flex flex-col shrink-0">
  <div class="section-label">Sensors and devices</div>
  <div class="flex flex-col gap-2 flex-grow">
    <a href="https://github.com/walkthru-earth/opensensor-enviroplus" target="_blank" class="flow-card flex-grow">
      <div i-logos:raspberry-pi class="text-3xl shrink-0"/>
      <div class="min-w-0">
        <div class="text-sm font-semibold text-gray-800 leading-tight">Raspberry Pi and Enviro plus</div>
        <div class="text-[0.7rem] text-gray-500 leading-snug">PM2.5, PM10, temperature, humidity, light, noise</div>
        <div class="flow-gh text-green-600"><div i-carbon:logo-github/> opensensor-enviroplus</div>
      </div>
    </a>
    <a href="https://github.com/walkthru-earth/esp32s3-parquet-test" target="_blank" class="flow-card flex-grow">
      <div i-simple-icons:espressif class="text-2xl text-red-600 shrink-0"/>
      <div class="min-w-0">
        <div class="text-sm font-semibold text-gray-800 leading-tight">ESP32 S3 and PMS5003</div>
        <div class="text-[0.7rem] text-gray-500 leading-snug">Writes Parquet right on the chip</div>
        <div class="flow-gh text-green-600"><div i-carbon:logo-github/> esp32s3-parquet-test</div>
      </div>
    </a>
    <a href="https://github.com/walkthru-earth/react-native-duckdb" target="_blank" class="flow-card flex-grow">
      <div class="flex shrink-0 text-2xl text-green-600 gap-0.5"><div i-carbon:watch/><div i-carbon:mobile/></div>
      <div class="min-w-0">
        <div class="text-sm font-semibold text-gray-800 leading-tight">Phone and smartwatch</div>
        <div class="text-[0.7rem] text-gray-500 leading-snug">DuckDB running on the device itself</div>
        <div class="flow-gh text-green-600"><div i-carbon:logo-github/> react-native-duckdb</div>
      </div>
    </a>
  </div>
</Reveal>

<!-- Arrow, write -->
<Reveal :delay="150" class="w-14 shrink-0 flex flex-col items-center justify-center gap-1 text-center">
  <div i-carbon:arrow-right class="text-3xl text-amber-500"/>
  <div class="text-[0.6rem] uppercase tracking-wider text-amber-600 font-semibold leading-tight">Write Parquet</div>
</Reveal>

<!-- Zone 2, open storage -->
<Reveal :delay="190" class="w-[196px] flex flex-col shrink-0">
  <div class="section-label">Open storage</div>
  <a href="https://source.coop/walkthru-earth/opensensor-space" target="_blank" class="flex-grow rounded-xl !border-2 !border-solid !border-amber-400 bg-amber-50 p-4 flex flex-col items-center justify-center text-center gap-2 no-underline">
    <img src="/logos/source-coop.svg" alt="Source Cooperative" class="h-9" />
    <div class="text-sm font-bold text-gray-800 leading-tight">Source.coop object storage</div>
    <div class="text-[0.72rem] text-gray-600 leading-snug">Parquet, Hive partitioned, public, no lock in</div>
    <div class="flow-gh text-amber-700"><div i-carbon:launch/> walkthru-earth/opensensor-space</div>
  </a>
</Reveal>

<!-- Arrow, query -->
<Reveal :delay="240" class="w-14 shrink-0 flex flex-col items-center justify-center gap-1 text-center">
  <div i-carbon:arrow-right class="text-3xl text-amber-500"/>
  <div class="text-[0.6rem] uppercase tracking-wider text-amber-600 font-semibold leading-tight">Query in place</div>
</Reveal>

<!-- Zone 3, outputs that read storage directly, no server -->
<div class="flex-grow flex flex-col min-w-0">
  <Reveal :delay="280" class="section-label">Read it anywhere, no server</Reveal>
  <Reveal :delay="320" class="flex items-center justify-between mb-1.5">
    <div class="flex items-center gap-1.5 text-sm font-semibold text-gray-800">
      <img src="/logos/duckdb.svg" alt="DuckDB" class="h-5 w-5" />
      Live browser dashboard, DuckDB-WASM
    </div>
    <a href="https://github.com/walkthru-earth/opensensor-space" target="_blank" class="flow-gh text-green-600"><div i-carbon:logo-github/> opensensor-space</a>
  </Reveal>
  <Reveal :delay="380" class="rounded-xl overflow-hidden border-2 border-solid border-green-400 relative bg-black w-full h-[352px]">
    <iframe
      src="https://opensensor.space/"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
      style="position: absolute; top: 0; left: 0; width: 1280px; height: 800px; border: 0; transform: scale(0.44); transform-origin: top left;"
    ></iframe>
  </Reveal>
  <div class="mt-2 grid grid-cols-2 gap-2.5">
    <Reveal :delay="420">
      <a href="https://github.com/walkthru-earth/opensensor-space-edge" target="_blank" class="flow-card">
        <div i-carbon:edge-node class="text-2xl text-green-600 shrink-0"/>
        <div class="min-w-0">
          <div class="text-sm font-semibold text-gray-800 leading-tight">Edge computer</div>
          <div class="flow-gh text-green-600"><div i-carbon:logo-github/> opensensor-space-edge</div>
        </div>
      </a>
    </Reveal>
    <Reveal :delay="460">
      <a href="https://github.com/walkthru-earth/react-native-duckdb" target="_blank" class="flow-card">
        <div i-carbon:mobile class="text-2xl text-green-600 shrink-0"/>
        <div class="min-w-0">
          <div class="text-sm font-semibold text-gray-800 leading-tight">Mobile app</div>
          <div class="flow-gh text-green-600"><div i-carbon:logo-github/> react-native-duckdb</div>
        </div>
      </a>
    </Reveal>
  </div>
</div>

</div>

<Reveal :delay="500" class="mt-3 flex justify-between items-center">
  <div class="flex gap-5 text-sm">
    <div class="flex items-center gap-1.5 text-green-600">
      <div i-carbon:checkmark-filled />
      <span>No server in between</span>
    </div>
    <div class="flex items-center gap-1.5 text-green-600">
      <div i-carbon:checkmark-filled />
      <span>Very low energy</span>
    </div>
    <div class="flex items-center gap-1.5 text-green-600">
      <div i-carbon:checkmark-filled />
      <span>Open and optimized</span>
    </div>
  </div>
  <a href="https://opensensor.space" target="_blank" class="btn btn-link text-sm">
    Open the live dashboard <span i-carbon:launch class="inline-block ml-1" />
  </a>
</Reveal>

</Morph>

<!--
The sensor card opens into how OpenSensor.space actually works, left to right.
- Left, the devices, a Raspberry Pi with Enviro plus, an ESP32 S3 with a PMS5003, even a phone or a watch. Each one writes Parquet.
- Middle, the data lands straight in open object storage on Source.coop, public and partitioned, no lock in.
- Right, anything reads that storage in place, the live browser dashboard runs DuckDB-WASM, the same data opens on the edge or on mobile.
- The point, there is no server in the middle, so it is cheap, low energy, and you could run it on a university campus.
- Every box is a real open repo, all under github.com/walkthru-earth.
- Then back out to the three parts.
-->
