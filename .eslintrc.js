// This patch is a workaround for a longstanding ESLint feature request that
// would allow a shared ESLint config to bring along its own plugins, rather
// than imposing peer dependencies on every consumer of the config.
// https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution')

// Add your "extends" boilerplate here, for example:
module.exports = {
  extends: [
    '@will-stone/eslint-config-base',
    '@will-stone/eslint-config-typescript',
    '@will-stone/eslint-config-react',
    '@will-stone/eslint-config-node',
    'plugin:tailwindcss/recommended',
    '@will-stone/eslint-config-prettier',
  ],
  rules: {
    'tailwindcss/no-custom-classname': [
      'error',
      {
        whitelist: [
          'scrollbar',
          'scrollbar-(thumb-.+|track-.+)',
          'lead',
          'language-.+',
          'scroll-(smooth|mt-.+)',
          'prose-invert',
        ],
      },
    ],
  },
}
