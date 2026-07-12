/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'folder-flap-open': {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(-120deg)' }
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
        'search-slide-up': {
          '0%': { transform: 'translateY(15vh)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'folder-flap-open': 'folder-flap-open 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'typing': 'typing 1s steps(40, end) forwards, blink-caret .75s step-end infinite',
        'search-slide-up': 'search-slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }
    },
  },
  plugins: [],
}