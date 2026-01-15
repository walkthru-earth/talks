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
