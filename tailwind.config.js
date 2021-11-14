const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#55aeed",
        darkgray: "#212529",
        lightgray: "#909090"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
