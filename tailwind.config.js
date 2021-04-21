const typography = require('@tailwindcss/typography')

module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        peep: '#F3CDDF',
        persian: '#F48CBC',
        charm: '#DA6FA2',
        cerise: '#C92271',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              h1: {
                color: theme('colors.cerise'),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {},
  plugins: [typography],
}
