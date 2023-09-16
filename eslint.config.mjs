import config from '@will-stone/eslint-config'

export default [
  {
    settings: {
      tailwindcss: {
        config: 'website/tailwind.config.cjs',
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
    },
  },
  ...config,
]
