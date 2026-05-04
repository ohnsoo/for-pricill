/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        lavender: '0 24px 70px rgba(167, 139, 250, 0.24)',
        glow: '0 0 36px rgba(196, 181, 253, 0.55)',
      },
    },
  },
  plugins: [],
}
