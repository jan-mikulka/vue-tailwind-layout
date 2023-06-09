/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    colors: {
      //primary
      "primary-100": "#E7F0FF",
      "primary-300": "#7387AC",
      "primary-400": "#5F7AFF",
      "primary-500": "#264AFB",
      "primary-900": "#00065B",

      //conversion
      "conversion-400": "#06EB83",
      "conversion-500": "#01D684",
      "conversion-600": "#009E61",
      
      // white
      "white": "#FFF"
    },
    extend: {
    },
    variants: {
      extend: {
        border: ["hover", "active"],
      },
    },
  },
  plugins: [],
}
