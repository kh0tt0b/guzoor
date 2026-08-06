/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A301D',
          50: '#F7F1EA',
          100: '#EADCD0',
          200: '#C9A98C',
          300: '#A87C57',
          400: '#7A5636',
          500: '#5F3F26',
          600: '#4A301D',
          700: '#3B2617',
          800: '#2C1C11',
          900: '#1E130C',
          950: '#120B07',
        },
        cream: {
          DEFAULT: '#EFECE3',
          50: '#FBFAF7',
          100: '#F5F3EC',
          200: '#EFECE3',
          300: '#E3DFD1',
          400: '#D3CEBB',
          500: '#B8B19A',
          600: '#948C74',
          700: '#6F6856',
          800: '#4B4639',
          900: '#26231C',
        },
        accent: {
          DEFAULT: '#683A1D',
          50: '#FBF0E7',
          100: '#F0DCC9',
          200: '#D3A884',
          300: '#B57E54',
          400: '#8D5A33',
          500: '#683A1D',
          600: '#5A3218',
          700: '#4B2A14',
          800: '#3B2110',
          900: '#2A170B',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: [
          'Fraunces',
          'Georgia',
          'ui-serif',
          'serif',
        ],
      },
      maxWidth: {
        page: '80rem',
      },
      boxShadow: {
        card: '0 1px 3px rgba(18, 11, 7, 0.12), 0 8px 24px -12px rgba(18, 11, 7, 0.25)',
        'card-hover':
          '0 2px 6px rgba(18, 11, 7, 0.14), 0 18px 40px -16px rgba(18, 11, 7, 0.35)',
        'glow-accent': '0 0 0 1px rgba(104, 58, 29, 0.35), 0 12px 32px -12px rgba(74, 48, 29, 0.5)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'subtle-pan': {
          '0%': { transform: 'scale(1) translate3d(0, 0, 0)' },
          '100%': { transform: 'scale(1.08) translate3d(-1.5%, 1%, 0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.9s ease-out both',
        'subtle-pan': 'subtle-pan 18s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
