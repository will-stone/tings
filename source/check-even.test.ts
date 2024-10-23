import { expect, test } from 'vitest'

import { checkEven } from './check-even.js'

const falsey = ['', 'string', [], -5, -3.14, -1, 1, 1.5, 3.14, 5, 99]

test.each(falsey)('%s is false', (input) => {
  expect(checkEven(input)).toBe(false)
})

const truthy = [-4, -2, -0, 0, 2, 4, 8, 100]

test.each(truthy)('%s is true', (input) => {
  expect(checkEven(input)).toBe(true)
})
