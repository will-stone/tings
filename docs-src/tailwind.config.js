const typography = require('@tailwindcss/typography')

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ['./components/**/*.jsx', './pages/**/*.jsx'],
  },
  theme: {
    extend: {
      colors: {
        peep: '#F3CDDF',
        persian: '#F48CBC',
        charm: '#DA6FA2',
        cerise: '#C92271',
      },
    },
  },
  variants: {},
  plugins: [typography],
}
