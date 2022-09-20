const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: colors.white,
      black: colors.black,
      app: '#211f1f',
      green: colors.green,
      gray: colors.gray,
      emerald: colors.emerald,
    },
    extend: {
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover", "hover"],
      height: ["group-hover", "hover"],
      overflow: ["group-hover", "hover"],
      whitespace: ["group-hover"],
      lineClamp: ["group-hover"],
      transition: ["group-hover"],
      opacity: ["group-hover"],
      borderRadius: ["group-hover", "hover"],
      // rounded: ["group-hover", "hover"]
      // display: ["group-hover", "hover"],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
