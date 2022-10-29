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
          // 50: '#fdf8f6',
          // 100: '#f2e8e5',
          // 200: '#eaddd7',
          300: '#8756E3',
          400: '#613EA3',
          // 500: '#bfa094',
          600: '#3B2663',
          700: '#342157',
          // 800: '#846358',
          900:'#342157'
      },
    },
    // screens: {
    //   'xs': {'max': '766px'},
    //   // => @media (min-width: 370px and max-width: 639px) { ... }

    //   'sm': {'min': '767px'},
    //   // => @media (min-width: 640px and max-width: 767px) { ... }

    //   'md': {'min': '1023px'},
    //   // => @media (min-width: 768px and max-width: 1023px) { ... }

    //   'lg': {'min': '1279px'},
    //   // => @media (min-width: 1024px and max-width: 1279px) { ... }

    //   'xl': {'min': '1535px'},
    //   // => @media (min-width: 1280px and max-width: 1535px) { ... }

    //   '2xl': {'min':'1920px'},
    //   // => @media (min-width: 1536px and max-width: 1920px) { ... }
    // },


  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
