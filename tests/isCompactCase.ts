import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isCompactCase } from '../src'

const invalidInputs = [
  123,
  '',
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
invalidInputs.forEach((input) => {
  test(`${input} is not valid`, () => {
    assert.is(isCompactCase(input), false)
  })
})

const validInputs = [
  'justletters',
  '123',
  'mixed123',
  'hyphenated-123',
  'special!@@£$%^%^*(-123',
]
validInputs.forEach((input) => {
  test(`${input} is valid`, () => {
    assert.is(isCompactCase(input), true)
  })
})

test.run()
