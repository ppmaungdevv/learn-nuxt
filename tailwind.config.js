const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      app: '#211f1f',
      green: colors.green,
      gray: colors.gray
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
