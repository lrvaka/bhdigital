/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
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
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        colorBg: "colorBg 9s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      transitionTimingFunction: {
        "ease-in-expo": "cubic-bezier(0.7, 0, 0.84, 0)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  extend: {
    fontFamily: {
      organetto: ["Organetto", "sans-serif"],
    },
  },
};
