import { expect, test } from 'vitest'

import { isLowerCase } from './is-lower-case.js'

const falsey = ['Title Case', 'camelCase', 'PascalCase', []]

test.each(falsey)('%s is false', (input) => {
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
