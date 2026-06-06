/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2997ff',
          deep: '#0066cc',
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
        }
      },
      fontFamily: {
        sans: ['Inter', '"SF Pro Text"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['Inter', '"SF Pro Display"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        appleDisplay: '-0.022em',
        appleHeading: '-0.015em',
        appleSubheading: '-0.011em',
        appleBody: '-0.003em',
      }
    },
  },
  plugins: [],
};