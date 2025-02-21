/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#21201E",
        secondary: "#FDFDFD",
        tertiary: "#FBA408",
        paraColor: "#9B968B",
        cardColor: "#2D2829",
      },
      screens: {
        xsm: "320px",
      },
    },
  },
  variants: {},
  plugins: [],
};
