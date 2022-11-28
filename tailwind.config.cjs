const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
      mono: ["IBM Plex Mono", "monospace"],
    },
    grayscale: {
      0: "0%",
      DEFAULT: "90%",
    },
    extend: {
      colors: {
        dark: "#12141B",
        primary: "#7297E6",
        secondary: "#989FC3",
        accent: "#1F2335",
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" },
      )
    },
  ],
}
