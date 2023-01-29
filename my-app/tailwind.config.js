/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0073fa",
        white: "#EAEBDB",
        darkGrey: "#0d0d0d",
        maroon: "#BB2626",
        "light-brown": "#d9c9ba",
      },
    },
  },
  plugins: [],
};
