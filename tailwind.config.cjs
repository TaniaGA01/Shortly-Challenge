/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.green,
      teal: colors.teal,
      rose: colors.rose,
      indigo:colors.indigo,
      rose: colors.rose,
      slate: colors.slate,
      purple: {
          300: '#8756E3',
          400: '#613EA3',
          600: '#3B2663',
          700: '#342157',
          900:'#342157'
      },
      fontFamily: {
      'sans': ['Poppins',],
      'serif': ['Poppins',],
      'mono': ['Poppins',],
      'display': ['Poppins'],
      'body': ['Poppins'],
    }
    },


  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
