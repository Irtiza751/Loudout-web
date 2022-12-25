const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'sans': ['Quicksand', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary': '#307DB8',
        'secondary': '#FACD66',
        'dark': '#1D2123',
        'dark-alt': '#1A1E1F',
        'light': '#EFEEE0',
        'alt': '#A4C7C6',
      }
    },
  },
  plugins: [],
}