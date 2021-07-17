const colors = require('tailwindcss/colors')

export default {
  purge: {
    enabled: true,
    content: [
      '../layout/*.vue',
      '../pages/*.vue',
      '../components/*.vue',
    ],
  },
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        blue: colors.blue,
        teal: colors.teal,
        purple: colors.purple,
        green: colors.green,
        orange: colors.orange,
        red: colors.red,
        white: colors.white,
        gray: colors.gray,
        black: colors.black,
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
}
