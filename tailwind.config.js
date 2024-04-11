/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'main-bg': '#121213',
        'correct-place-color': '#34D399',
        'correct-letter-color': '#FBBF24',
        'incorrect-color': '#F87171',
      }
    },
  },
  plugins: [],
}