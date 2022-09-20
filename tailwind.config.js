/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kirmizi1: "#ed1c24",
        kirmizi2: "#be1e2d",
        kirmizi3: "#e51c26",
        mavi1: "#1f9dd9",
        mavi2: "#336079",
        mavi3: "#325c74"

      },
      animation: {
        'don': 'don',
      },
      transitionDelay: {
        '3': '-3000ms',
      },
      keyframes: {
        don: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}