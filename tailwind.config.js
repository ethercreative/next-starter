module.exports = {
  purge: {
    content: [
      './out/**/*.html',
      './components/**/*.tsx',
      './pages/**/*.tsx',
      './node_modules/ether-ui/**/*.tsx',
    ],
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
    purgeLayersByDefault: true,
  },
};
