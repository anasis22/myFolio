/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        fromColor: "#c2e59c",
        endColor: "#64b3f4",
        baseColor: "#2E86C1"
      },
      fontFamily : {
        baseFamily : "'Gabarito', sans-serif;"
      }
    },
  },
  plugins: [],
}