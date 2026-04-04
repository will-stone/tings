import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  outDir: './dist-website',
  publicDir: './website/public',
  srcDir: './website/src',
  vite: {
    plugins: [tailwindcss()],
  },
})
