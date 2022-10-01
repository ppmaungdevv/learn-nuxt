/** @type {import('tailwindcss').Config} */
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
