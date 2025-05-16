/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F4F1EE",
        taupe: "#D6CBC1",
        espresso: "#3E3C38",
        mocha: "#5A4E3C",
        cream: "#FFF8F0",    
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
