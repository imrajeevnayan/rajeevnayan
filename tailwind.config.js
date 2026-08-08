/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0071e3', // Electric Blue
          deep: '#0066cc', // Link Blue
          btn: '#0071e3',
        },
        apple: {
          blue: '#2997ff',
          deepBlue: '#0066cc',
          btnBlue: '#0071e3',
          graphite: '#1d1d1f',
          slate: '#333333',
          steel: '#474747',
          fog: '#707070',
          ash: '#858585',
          cloud: '#f5f5f7',
          bone: '#e2e2e5',
          paper: '#ffffff',
          ink: '#000000',
          ember: '#b64400',
          coolWash: '#e8e8ed',
          fadedSurface: '#fafafc',
          quietDot: '#777779',
          sky: '#c8d8e0',
          citrus: '#dddc8c',
          starlight: '#f0e4d3',
          silver: '#e3e4e5',
          blush: '#e8d0d0',
          indigo: '#596680',
          midnight: '#2e3642',
        }
      },
      fontFamily: {
        sans: ['"SF Pro Text"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"SF Pro Display"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        appleDisplay: '-0.022em',
        appleHeading: '-0.015em',
        appleSubheading: '-0.011em',
        appleBody: '-0.022em',
        appleDisplayHuge: '-1.44px',
      }
    },
  },
  plugins: [],
};