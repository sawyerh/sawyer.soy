/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{mdx}"],
  theme: {
    extend: {
      colors: {
        "intl-orange": "#ff4f00",
        terracotta: "oklch(0.56 0.19 38.97)",
        peach: "#fdc0a6",
        yellow: "oklch(0.71 0.18 64.51)",
        "yellow-light": "#ffbc7d",
        forrest: "#213623",
        slate: "#9cb0b7",
        "slate-light": "#ced9dd",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        marker: ["var(--font-marker)"],
      },
      spacing: {
        lg: "var(--spacing-lg)",
        "lg-half": "var(--spacing-lg-half)",
        md: "var(--spacing-md)",
        "md-half": "var(--spacing-mobile-half)",
      },
    },
  },
  plugins: [],
};
