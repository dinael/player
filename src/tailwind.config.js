/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Quicksand', 'sans-serif']
    },
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'positive': 'rgba(255, 255, 255, 1)',
      'negative': 'rgba(0, 0, 0, 1)',
      'alt': 'rgba(255, 255, 255, 0.3)',
      'accent': 'rgba(92, 103, 222, 1)',
      'accent-dark': 'rgba(60, 80, 194, 1)',
      'verification': '#138BD7',
      'test': 'deeppink',
      'dark': {
        DEFAULT: 'rgba(26, 26, 26, 1)',
        'alt': 'rgba(26, 26, 26, 0.3)',
      },
      'app': {
        'text': 'rgba(255, 255, 255, 1)',
        'bg': 'rgba(1, 1, 1, 1)'
      }
    }
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        body: {
          color: theme("colors.app.text"),
          backgroundColor: theme("colors.app.bg"),
          lineHeight: 1.5,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          scrollSnapType: 'y mandatory',
        },
        code: {
          fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace"
        },
        '#root': {
          display: 'grid',
          gridAutoFlow: 'row dense',
          gridTemplateRows: '1fr 6.875rem',
          height: '100vh',
        },
        '*:focus': {
          outline: '0'
        }
      });
    }),
    require('@tailwindcss/line-clamp'),
  ],
}
