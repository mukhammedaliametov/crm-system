/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat': ['Montserrat'],
      'open-sans': ['Open Sans'],
      'poppins': ['Poppins'],
    }
  },
  plugins: [],
}