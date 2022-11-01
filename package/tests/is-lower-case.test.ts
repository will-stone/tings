import { expect, test } from 'vitest'

import { isLowerCase } from '../dist/index.js'

const falsey = ['Title Case', 'camelCase', 'PascalCase', []]

test.each(falsey)('%s is false', (input) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(isLowerCase(input)).toBe(false)
})

const truthy = [
  'lowercase',
  'lower case',
  '',
  `
`,
]

test.each(truthy)('%s is true', (input) => {
  expect(isLowerCase(input)).toBe(true)
})
