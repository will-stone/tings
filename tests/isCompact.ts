import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isCompact } from '../src'

const invalidInputs = [
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
    assert.is(isCompact(input), false)
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
    assert.is(isCompact(input), true)
  })
})

test.run()
