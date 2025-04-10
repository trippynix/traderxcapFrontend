module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        traderviolet: {
          100: "#8577ff",
          200: "#6e60ec",
          300: "#3a20c9",
        }, // Custom name with hex value
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
