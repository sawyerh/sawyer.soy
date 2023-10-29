module.exports = {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},
    "@csstools/postcss-oklab-function": { preserve: true },
    "postcss-preset-env": {
      browsers: "last 4 versions",
    },
  },
};
