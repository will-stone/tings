// @ts-check
import typography from '@tailwindcss/typography'
import scrollbar from 'tailwind-scrollbar'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./website/**/*.{html,js,jsx,astro,ts,tsx}'],

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
