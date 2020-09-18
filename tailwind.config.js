module.exports = {
  purge: {
    content: ['./out/**/*.html', './components/**/*.tsx', './pages/**/*.tsx'],
    preserveHtmlElements: false,
    options: {
      keyframes: true,
    },
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
