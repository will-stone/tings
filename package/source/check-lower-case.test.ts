import { expect, test } from 'vitest'

import { checkLowerCase } from './check-lower-case.js'

const falsey = ['Title Case', 'camelCase', 'PascalCase', []]

test.each(falsey)('%s is false', (input) => {
  expect(checkLowerCase(input)).toBe(false)
})

const truthy = [
  'lowercase',
  'lower case',
  '',
  `
`,
]

test.each(truthy)('%s is true', (input) => {
  expect(checkLowerCase(input)).toBe(true)
})
