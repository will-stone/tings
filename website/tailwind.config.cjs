const typography = require('@tailwindcss/typography')
const scrollbar = require('tailwind-scrollbar')

module.exports = {
  content: ['./app/**/*.{html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      lg: '1024px',
      md: '768px',
      sm: '640px',
    },

    container: {
      center: true,
      padding: '1.5rem',
    },

    extend: {
      colors: {
        // Wild Strawberry
        primary: '#F92D8E',
      },
    },
  },

  plugins: [typography, scrollbar],
}
