import prettierConfig from '@will-stone/prettier-config'

export default {
  ...prettierConfig,
  plugins: [...prettierConfig.plugins, 'prettier-plugin-astro'],
}
