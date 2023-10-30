const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,content,components}/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
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
        // Based on #c64100 (700) generated on https://uicolors.app/create
        terracotta: {
          50: "oklch(98.13% 0.02 81.33 / <alpha-value>)",
          100: "oklch(95.74% 0.04 82.49 / <alpha-value>)",
          200: "oklch(90.70% 0.08 76.84 / <alpha-value>)",
          300: "oklch(84.67% 0.13 72.21 / <alpha-value>)",
          400: "oklch(77.34% 0.16 60.89 / <alpha-value>)",
          500: "oklch(72.17% 0.19 49.81 / <alpha-value>)",
          600: "oklch(67.43% 0.21 41.26 / <alpha-value>)",
          700: "oklch(0.56 0.19 38.97 / <alpha-value>)",
          800: "oklch(48.74% 0.15 38.60 / <alpha-value>)",
          900: "oklch(42.15% 0.12 39.57 / <alpha-value>)",
          950: "oklch(27.47% 0.08 39.46 / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-atkinson)"],
        mono: ["var(--font-geist-mono)"],
        marker: ["var(--font-marker)"],
      },
      lineHeight: {
        normal: 1.6,
        relaxed: 1.7,
      },
      spacing: {
        sm: defaultTheme.spacing[4],
        md: defaultTheme.spacing[8],
        lg: defaultTheme.spacing[16],
        xl: defaultTheme.spacing[20],
        "2xl": defaultTheme.spacing[24],
        /* Golden ratio */
        "golden-small": "38.2%",
        "golden-large": "61.8%",
      },
    },
  },
  plugins: [],
};
