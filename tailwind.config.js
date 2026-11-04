/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f3f5f4',
          100: '#e2e7e5',
          200: '#c3cbc8',
          300: '#9aa5a1',
          400: '#717d79',
          500: '#56625e',
          600: '#414b48',
          700: '#2c3432',
          800: '#1b2120',
          900: '#161b1a',
          950: '#101413',
        },
        brand: {
          50: '#f5fde9',
          100: '#e9fbd2',
          200: '#d6f8ac',
          300: '#c6f48c',
          400: '#B6F36B',
          500: '#9fe04a',
          600: '#7cb92f',
          700: '#5c8a25',
          800: '#466a22',
          900: '#3b5820',
        },
        secondary: {
          400: '#7FD8E8',
          500: '#4fc3d9',
          600: '#2f9fb5',
        },
        accent: {
          400: '#F3C77A',
          500: '#e9ad52',
          600: '#c98d33',
        },
        success: '#4ade80',
        warning: '#facc15',
        error: '#f87171',
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(182,243,107,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(182,243,107,0.6) 1px, transparent 1px)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        'grid-drift': {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(48px, 48px, 0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'grid-drift': 'grid-drift 18s linear infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
