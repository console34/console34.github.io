/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
        harabara: ["Harabara Rounded", "sans-serif"], // Add Harabara font
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
