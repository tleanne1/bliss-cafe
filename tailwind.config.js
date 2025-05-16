module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: "#4B3832",
        cream: "#F3EFE0",
        caramel: "#D9A066",
        dark: "#2E1C17"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"]
      }
    },
  },
  plugins: [],
}
