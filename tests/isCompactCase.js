import { test } from 'uvu'
import * as assert from 'uvu/assert'

import isCompactCase from '../lib/isCompactCase'

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

for (const input of falsey) {
  test(`${input} is false`, () => {
    assert.is(isCompactCase(input), false)
  })
}

const truthy = [
  '',
  'justletters',
  '123',
  'mixed123',
  'hyphenated-123',
  'special!@@£$%^%^*(-123',
]

for (const input of truthy) {
  test(`${input} is true`, () => {
    assert.is(isCompactCase(input), true)
  })
}

test.run()
