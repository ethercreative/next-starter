module.exports = {
  mode: 'jit',
  purge: {
    content: ['./components/**/*.tsx', './pages/**/*.tsx'],
    options: {
      keyframes: true,
    },
  },
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
    },
    extend: {
      screens: {
        xl: '1480px',
      },
    },
  },
  variants: {},
  plugins: [],
};
