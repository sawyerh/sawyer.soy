/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.{mdx}"],
  theme: {
    extend: {
      colors: {
        // International Orange
        "intl-orange": "var(--color-intl-orange)",
        terracotta: "var(--color-terracotta)",
        yellow: "var(--color-yellow)",
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
