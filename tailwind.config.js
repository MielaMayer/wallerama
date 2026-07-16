/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#15311f",
        "forest-2": "#1d3f28",
        "forest-3": "#0f2417",
        cream: "#f4ecd2",
        "cream-2": "#efe4c4",
        gold: "#c9a24b",
        ink: "#2b2415",
        purple: "#7b6ca6",
        olive: "#71803f",
        sky: "#6f8ca0",
        tan: "#d9c48d",
        rust: "#b06a53",
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', "serif"],
        title: ['"Cinzel"', "serif"],
        body: ['"EB Garamond"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
