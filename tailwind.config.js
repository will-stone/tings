const typography = require('@tailwindcss/typography')
const defaultTheme = require('tailwindcss/defaultTheme')
const scrollbar = require('tailwind-scrollbar')

module.exports = {
  content: ['./website/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
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
        // Wild Strawberry
        primary: '#F92D8E',
      },
    },
  },
  plugins: [typography, scrollbar],
}
