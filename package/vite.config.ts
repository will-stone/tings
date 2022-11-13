import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vitest/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const entry = {}

for (const file of fs.readdirSync(path.resolve(__dirname, './source'))) {
  entry[path.parse(file).name] = `./source/${file}`
}

export default defineConfig({
  build: {
    emptyOutDir: true,

    lib: {
      entry,
      formats: ['es', 'cjs'],
    },

    minify: false,
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    includeSource: ['source/**/*.{js,ts}'],
    watch: false,
  },
})
