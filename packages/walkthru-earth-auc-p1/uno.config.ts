// @ts-expect-error - Ignoring the error of missing types for the uno config
import config from '@slidev/client/uno.config'
import { mergeConfigs, presetAttributify, presetIcons, presetWind3 } from 'unocss'

export default mergeConfigs([
  config,
  {
    theme: {
      colors: {
        // Walkthru Earth Design System (matches website globals.css)
        background: 'hsl(60 20% 99%)',
        foreground: 'hsl(0 0% 9%)',

        // Card colors
        card: {
          DEFAULT: 'hsl(60 10% 98%)',
          foreground: 'hsl(0 0% 9%)',
        },

        // Primary - Earth Green
        primary: {
          DEFAULT: 'hsl(158 64% 52%)',
          foreground: 'hsl(0 0% 100%)',
        },

        // Secondary - Warm Amber
        secondary: {
          DEFAULT: 'hsl(37 91% 55%)',
          foreground: 'hsl(0 0% 9%)',
        },

        // Muted
        muted: {
          DEFAULT: 'hsl(60 5% 96%)',
          foreground: 'hsl(0 0% 45%)',
        },

        // Border & Ring
        border: 'hsl(60 5% 90%)',
        ring: 'hsl(158 64% 52%)',

        // Accent (same as primary)
        accent: {
          DEFAULT: 'hsl(158 64% 52%)',
          foreground: 'hsl(0 0% 100%)',
        },

        // Destructive
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: 'hsl(0 0% 98%)',
        },
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        serif: ['Noto Serif SC', 'serif'],
        hand: ['Playwrite IT Moderna', 'cursive'],
        brand: ['Quicksand', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.75rem',
      },
    },
    shortcuts: {
      'gradient-text': 'bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent',
      // Small uppercase label above a grid section
      'section-label': 'text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2',
      // White tile that holds a single logo, fixed height for an even grid.
      // Borders are !important so all four sides survive Slidev's link underline reset, see style.css.
      'logo-tile': 'rounded-xl !border !border-solid !border-gray-200 bg-white p-3 flex items-center justify-center h-24 no-underline',
      // Full slide panel a Morph card grows into, see components/Morph.vue
      'morph-panel': 'absolute inset-0 flex flex-col justify-center px-20 py-14',
      // Framed stand-in for a result map, swap for a real screenshot per persona
      'map-placeholder': 'rounded-xl border-2 border-dashed bg-white/50 flex flex-col items-center justify-center text-center gap-1 h-full',
      // One node in a left to right flow diagram, a white card with an icon and label.
      // Borders are !important so all four sides survive Slidev's link underline reset, see style.css.
      'flow-card': 'rounded-xl !border-2 !border-solid !border-green-400 bg-white px-3 py-2 flex items-center gap-2.5 no-underline',
      // Small github repo pill under a flow node, an icon plus the repo name
      'flow-gh': 'inline-flex items-center gap-1 text-[0.7rem] leading-tight text-gray-500 no-underline mt-0.5',
    },
    rules: [
      ['font-math', { 'font-family': 'Latin Modern Roman, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }],
    ],
    presets: [
      presetWind3({
        dark: 'class',
      }),
      presetAttributify(),
      presetIcons({
        prefix: 'i-',
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
        warn: true,
      }),
      // presetWebFonts removed to prevent online fetching
    ],
  },
])
