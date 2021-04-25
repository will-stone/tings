const typography = require('@tailwindcss/typography')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const tinycolor = require('tinycolor2')
const scrollbar = require('tailwind-scrollbar')

module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...colors,
        gray: {
          ...colors.coolGray,
          1000: tinycolor(colors.coolGray[900]).darken(5),
        },
        // Wild Strawberry
        primary: '#F92D8E',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              'color': theme('colors.gray.300'),
              'h2': {
                color: theme('colors.gray.400'),
                fontWeight: theme('fontWeight.light'),
                a: {
                  'color': theme('colors.gray.400'),
                  'fontWeight': 'inherit',
                  '&:hover': {
                    color: theme('colors.gray.50'),
                  },
                },
              },
              'h3': {
                color: theme('colors.gray.300'),
                fontWeight: theme('fontWeight.light'),
              },
              '.lead': {
                color: theme('colors.gray.400'),
              },
              'pre': {
                backgroundColor: `${theme('colors.gray.1000')} !important`,
              },
              'a': {
                'color': theme('colors.gray.400'),
                'fontWeight': 'inherit',
                '&:hover': {
                  color: theme('colors.gray.50'),
                },
              },
            },
          ],
        },
      }),
    },
  },
  variants: {},
  plugins: [typography, scrollbar],
}
