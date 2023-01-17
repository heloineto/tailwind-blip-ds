const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./demo/pages/**/*.{js,jsx}', './demo/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require('../src/index.js')],
}
