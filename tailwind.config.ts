import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          50: '#f5f1eb',
          100: '#e7ded2',
          300: '#b8a794',
          500: '#736354',
          700: '#2c2824',
          800: '#1d1a17',
          900: '#151210',
          950: '#0b0908'
        },
        timber: {
          300: '#d5a46f',
          500: '#9a6032',
          700: '#5b341d'
        },
        concrete: {
          100: '#e9e5dd',
          300: '#b9b1a5',
          500: '#74706a',
          700: '#3d3a36'
        },
        amberline: {
          300: '#f2c978',
          400: '#d59b45',
          600: '#9f6824'
        },
        warm: {
          50: '#fff8ee',
          100: '#f4eadc'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgb(213 155 69 / 0.2)',
        architectural: '0 24px 90px rgb(0 0 0 / 0.42)'
      },
      backgroundImage: {
        'fine-grid':
          'linear-gradient(rgb(255 255 255 / 0.035) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.035) 1px, transparent 1px)'
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  }
}
