/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts,html}",
    "./layouts/**/*.{vue,html}",
    "./pages/**/*.{vue,html}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        app: '#211f1f',
      },
    },
    fontFamily: {
      'sans': ['Ubuntu', ...defaultTheme.fontFamily.sans],
      'serif': ['Ubuntu', ...defaultTheme.fontFamily.serif],
      'mono': ['Ubuntu', ...defaultTheme.fontFamily.mono]
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
      // display: ["group-hover", "hover"],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
