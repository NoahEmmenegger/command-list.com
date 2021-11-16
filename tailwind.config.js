const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#f57359",
        primaryDark: "#a84f3d",
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
