import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isCompactCase } from '../pkg'

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
falsey.forEach((input) => {
  test(`${input} is false`, () => {
    assert.is(isCompactCase(input), false)
  })
})

const truthy = [
  '',
  'justletters',
  '123',
  'mixed123',
  'hyphenated-123',
  'special!@@£$%^%^*(-123',
]
truthy.forEach((input) => {
  test(`${input} is true`, () => {
    assert.is(isCompactCase(input), true)
  })
})

test.run()
