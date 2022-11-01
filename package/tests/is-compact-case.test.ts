import { expect, test } from 'vitest'

import { isCompactCase } from '../dist/index.js'

const falsey = [
  123,
  '  leadingSpace',
  '  twoLeadingSpaces',
  'trailingSpace ',
  'twoTrailingSpace  ',
  'space inside',
  'twoSpaces  inside',
  'regular sentence of words',
  '  all the  problems  ',
  '\r\n\t\f\v',
  `
      `,
]

test.each(falsey)('%s is falsey', (input) => {
  expect(isCompactCase(input)).toBe(false)
})

const truthy = [
  '',
  'justletters',
  '123',
  'mixed123',
  'hyphenated-123',
  'special!@@£$%^%^*(-123',
]

test.each(truthy)('%s is truthy', (input) => {
  expect(isCompactCase(input)).toBe(true)
})
