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
        darkBrown: "#444037",
        "darkPurple": "#aa03ac2f",
        "lightPurple": "#9305ffeb",

      },
    },
  },
  plugins: [],
};
