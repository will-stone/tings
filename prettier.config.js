import { readFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const prettierConfig = JSON.parse(
  readFileSync(
    `${__dirname}/node_modules/@will-stone/prettier-config/index.json`,
  ),
)

export default {
  ...prettierConfig,
  plugins: [...prettierConfig.plugins, 'prettier-plugin-astro'],
}
