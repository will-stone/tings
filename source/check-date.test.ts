import { expect, test } from 'vitest'

import { checkDate } from './check-date.js'

const falsey = [
  123,
  'a string',
  '\r\n\t\f\v',
  `
        `,
  new Date('not a date'),
]

test.each(falsey)('%s is falsey', (input) => {
  expect(checkDate(input)).toBe(false)
})

const truthy = [new Date()]

test.each(truthy)('%s is truthy', (input) => {
  expect(checkDate(input)).toBe(true)
})
