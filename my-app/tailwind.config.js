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
        yellow: "#C5A639",
        darkBrown: "#444037"
      },
    },
  },
  plugins: [],
};
