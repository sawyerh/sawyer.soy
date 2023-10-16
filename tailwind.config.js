const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{mdx}"],
  theme: {
    extend: {
      colors: {
        "intl-orange": "#ff4f00",
        terracotta: "oklch(0.56 0.19 38.97 / <alpha-value>)",
        peach: "#fdc0a6",
        yellow: "oklch(0.71 0.18 64.51 / <alpha-value>)",
        "yellow-light": "#ffbc7d",
        // Based on #213623 (900) generated on https://uicolors.app/create
        moss: {
          50: "oklch(95.98% 0.01 106.52 / <alpha-value>)",
          100: "oklch(93.46% 0.01 106.63 / <alpha-value>)",
          200: "oklch(88.03% 0.02 117.09 / <alpha-value>)",
          300: "oklch(79.26% 0.04 123.84 / <alpha-value>)",
          400: "oklch(67.20% 0.05 128.12 / <alpha-value>)",
          500: "oklch(55.84% 0.05 132.91 / <alpha-value>)",
          600: "oklch(47.14% 0.05 136.90 / <alpha-value>)",
          700: "oklch(39.83% 0.04 141.04 / <alpha-value>)",
          800: "oklch(34.01% 0.03 144.92 / <alpha-value>)",
          900: "oklch(30.89% 0.04 146.76 / <alpha-value>)",
          950: "oklch(26.44% 0.04 150.43 / <alpha-value>)",
        },
        // Based on #ced9dd (200) generated on https://uicolors.app/create
        slate: {
          50: "oklch(97.79% 0.00 228.78 / <alpha-value>)",
          100: "oklch(95.27% 0.01 228.82 / <alpha-value>)",
          200: "oklch(87.81% 0.01 221.44 / <alpha-value>)",
          300: "oklch(80.46% 0.02 218.66 / <alpha-value>)",
          400: "oklch(69.36% 0.03 216.96 / <alpha-value>)",
          500: "oklch(59.99% 0.04 219.57 / <alpha-value>)",
          600: "oklch(51.96% 0.04 219.59 / <alpha-value>)",
          700: "oklch(44.65% 0.03 226.00 / <alpha-value>)",
          800: "oklch(40.36% 0.02 220.21 / <alpha-value>)",
          900: "oklch(36.31% 0.02 229.56 / <alpha-value>)",
          950: "oklch(28.22% 0.01 226.59 / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        marker: ["var(--font-marker)"],
      },
      spacing: {
        lg: defaultTheme.spacing[16],
        md: defaultTheme.spacing[8],
      },
    },
  },
  plugins: [],
};
