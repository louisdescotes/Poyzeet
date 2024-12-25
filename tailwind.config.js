/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        50: "#FAFAFA",
        100: "#EFEFEF",
        200: "#DCDCDC",
        300: "#BDBDBD",
        400: "#989898",
        500: "#7C7C7C",
        600: "#656565",
        700: "#525252",
        800: "#464646",
        900: "#3D3D3D",
        950: "#292929",
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        euclid: ['Euclid Circular B', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}