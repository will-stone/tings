import { expect, test } from 'vitest'

import { checkOdd } from './check-odd.js'

const falsey = ['', 'string', [], -6, -3.14, -0, 0, 1.5, 3.14, 8, 100]

test.each(falsey)('%s is false', (input) => {
  expect(checkOdd(input)).toBe(false)
})

const truthy = [-5, -1, 1, 5, 99]

test.each(truthy)('%s is true', (input) => {
  expect(checkOdd(input)).toBe(true)
})
