/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorBg: {
          "0%": { background: "#33CCCC" },
          "20%": { background: "#33CC36" },
          "40%": { background: "#B8CC33" },
          "60%": { background: "#FCCA00" },
          "80%": { background: "#33CC36" },
          "100%": { background: "#33CCCC" },
         
        },
      },
      animation: {
        colorBg: "colorBg 9s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  extend: {
    fontFamily: {
      organetto: ["Organetto", "sans-serif"],
    },
  },
};
