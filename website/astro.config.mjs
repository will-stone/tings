import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://tings.wstone.uk/',
  srcDir: '.',
  publicDir: './public',
  outDir: '../docs',
  integrations: [tailwind(), react()],
})
