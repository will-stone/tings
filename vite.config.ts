import { defineConfig } from 'vite-plus'

export default defineConfig({
  staged: {
    '*.{css,json,md,js,jsx,ts,tsx,cjs,mjs}': ['prettier --write'],
    '*.{js,jsx,ts,tsx,cjs,mjs,json}': ['eslint --fix'],
  },
})
