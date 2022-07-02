const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: `var(--c-primary)`,
        secondary: "var(--c-secondary)",
        accent: `var(--c-accent)`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
