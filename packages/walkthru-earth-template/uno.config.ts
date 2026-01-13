// @ts-expect-error - Ignoring the error of missing types for the uno config
import config from '@slidev/client/uno.config'
import { mergeConfigs, presetAttributify, presetIcons, presetWind3 } from 'unocss'

export default mergeConfigs([
  config,
  {
    theme: {
      colors: {
        background: 'hsl(60 20% 99%)',
        foreground: 'hsl(0 0% 9%)',
        primary: {
          DEFAULT: 'hsl(158 64% 52%)', // Earth Green
          foreground: 'hsl(0 0% 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(37 91% 55%)', // Warm Amber
          foreground: 'hsl(0 0% 9%)',
        },
        muted: {
          DEFAULT: 'hsl(60 5% 96%)',
          foreground: 'hsl(0 0% 45%)',
        },
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        serif: ['Noto Serif SC', 'serif'],
        hand: ['Playwrite IT Moderna', 'cursive'],
        brand: ['Quicksand', 'sans-serif'],
      },
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
