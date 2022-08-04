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
    'plugin:astro/recommended',
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
          '.+-primary',
        ],
      },
    ],
    'import/extensions': ['error', 'always', { ignorePackages: true }],
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    // ...
  ],
}
