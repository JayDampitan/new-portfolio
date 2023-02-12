/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F5EFDF",
        darkGrey: "#111013",
        yellow: "#AE8F23",
      },
    },
  },
  plugins: [],
};
