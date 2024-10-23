import { expect, test } from 'vitest'

import { checkPrime } from './check-prime.js'

const falsey = ['', 'string', [], -5, -3.14, -1, -0, 0, 1, 1.5, 3.14]

test.each(falsey)('%s is false', (input) => {
  expect(checkPrime(input)).toBe(false)
})

const truthy = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
  157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
  239, 241, 251, 257, 263, 269, 271,
]

test.each(truthy)('%s is true', (input) => {
  expect(checkPrime(input)).toBe(true)
})
