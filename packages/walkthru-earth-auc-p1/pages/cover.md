<div class="text-center">

<Reveal :delay="0" :y="0">
  <img src="/icon.svg" class="h-32 mx-auto mb-8" />
</Reveal>

<Reveal :delay="120">

# Walkthru.earth

<div class="text-2xl mt-4 text-gray-600">
We measure what the city does to our health
</div>

</Reveal>

<Reveal :delay="260" class="mt-8 text-lg italic" style="color: hsl(158 64% 42%)">
A friendly idea to work together with your institute of global health and human ecology
</Reveal>

<Reveal :delay="380" class="mt-12 flex justify-center gap-4">
  <a href="https://walkthru.earth" target="_blank" class="btn btn-primary btn-pill btn-sm">
    walkthru.earth
  </a>
  <a href="https://opensensor.space" target="_blank" class="btn btn-outline btn-pill btn-sm">
    opensensor.space
  </a>
</Reveal>

<Reveal :delay="480" class="mt-10 text-sm text-gray-500">
Open source, started in Cairo, built to work anywhere
</Reveal>

<div class="mt-8 flex flex-col items-center gap-1 swipe-hint">
  <div class="text-xs uppercase tracking-widest" style="color: hsl(158 30% 45%)">Swipe to begin</div>
  <div class="flex items-center gap-1 text-2xl">
    <div i-carbon:chevron-right class="chev chev-1"/>
    <div i-carbon:chevron-right class="chev chev-2"/>
    <div i-carbon:chevron-right class="chev chev-3"/>
  </div>
</div>

</div>

<style scoped>
.chev {
  color: hsl(158 64% 42%);
  opacity: 0.2;
  animation: chev-pulse 1.6s ease-in-out infinite;
}
.chev-2 { animation-delay: 0.2s; }
.chev-3 { animation-delay: 0.4s; }
@keyframes chev-pulse {
  0%, 100% { opacity: 0.2; transform: translateX(-4px); }
  50%      { opacity: 1;   transform: translateX(4px); }
}
.swipe-hint {
  pointer-events: none;
}
</style>

<!--
Open warm and short.
- Thank you, this builds on our recent conversation.
- One line, we measure how the city affects human health.
- We are open source and we started in Cairo.
- The plan today, who we are, what we do, and how we could work together.
-->
