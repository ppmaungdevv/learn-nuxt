const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      app: '#211f1f',
      green: colors.green,
      gray: colors.gray,
      white: colors.white,
    },
    extend: {
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover", "hover"],
      height: ["group-hover", "hover"]
    },
  },
  plugins: [],
}
