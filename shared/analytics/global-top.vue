<script setup lang="ts">
import { onMounted } from "vue";
import { useNav } from "@slidev/client";
import posthog from "posthog-js";
import {
  getConsentPreferences,
  initializeDefaultConsent,
  updatePostHogConsent,
} from "./consent";

// Get environment variables injected at build time
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST =
  import.meta.env.VITE_POSTHOG_HOST || "https://eu.i.posthog.com";

const { currentSlideNo } = useNav();

// Initialize analytics on mount
onMounted(() => {
  const consent = getConsentPreferences();
  const hasDecided = consent !== null;
  const hasAccepted = consent?.analytics === true;

  // Initialize Google Analytics
  if (GA_MEASUREMENT_ID) {
    // Load gtag.js
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(gtagScript);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag("js", new Date());

    // Initialize consent mode
    initializeDefaultConsent();

    // Configure GA4
    gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: false, // We'll send custom events for slide views
      anonymize_ip: true,
    });

    // Track slide changes
    currentSlideNo.value && trackSlideView(currentSlideNo.value);
  }

  // Initialize PostHog
  if (POSTHOG_KEY) {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      person_profiles: "identified_only",
      capture_pageview: false, // We'll capture slide views manually
      capture_pageleave: true,
      persistence: hasAccepted ? "localStorage" : "memory",
      opt_out_capturing_by_default: false,
    });

    // Apply consent decision if user has already decided
    if (hasDecided) {
      updatePostHogConsent(hasAccepted);
    }

    // Track initial slide
    currentSlideNo.value && trackSlideView(currentSlideNo.value);
  }
});

// Track slide views in both analytics platforms
function trackSlideView(slideNo: number) {
  const slideTitle = `Slide ${slideNo}`;
  const url = `${window.location.pathname}#${slideNo}`;

  // Google Analytics
  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag("event", "page_view", {
      page_title: slideTitle,
      page_location: url,
      page_path: url,
    });
  }

  // PostHog
  if (posthog && POSTHOG_KEY) {
    posthog.capture("$pageview", {
      $current_url: url,
      slide_number: slideNo,
      presentation: document.title,
    });
  }
}

// Watch for slide changes
if (typeof window !== "undefined") {
  let lastSlide = currentSlideNo.value;

  setInterval(() => {
    if (currentSlideNo.value !== lastSlide) {
      lastSlide = currentSlideNo.value;
      trackSlideView(lastSlide);
    }
  }, 500);
}
</script>

<template>
  <!-- Analytics initialization - no visible content -->
</template>

<style scoped>
/* No styles needed for analytics */
</style>
