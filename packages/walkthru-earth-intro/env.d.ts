/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID: string;
  readonly VITE_POSTHOG_KEY: string;
  readonly VITE_POSTHOG_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Extend Window for analytics globals
interface Window {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
  posthog?: {
    init: (key: string, options: Record<string, unknown>) => void;
    capture: (event: string, properties?: Record<string, unknown>) => void;
    opt_in_capturing: () => void;
    opt_out_capturing: () => void;
    set_config: (config: Record<string, unknown>) => void;
    persistence?: {
      save: () => void;
    };
  };
}
