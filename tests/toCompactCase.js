import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isCompactCase, toCompactCase } from '../pkg'

const cases = [
  [0, '0'],
  ['', ''],
  ['  leadingSpace', 'leadingSpace'],
  ['  twoLeadingSpaces', 'twoLeadingSpaces'],
  ['trailingSpace ', 'trailingSpace'],
  ['twoTrailingSpace  ', 'twoTrailingSpace'],
  ['space inside', 'spaceinside'],
  ['twoSpaces  inside', 'twoSpacesinside'],
  ['regular sentence of words', 'regularsentenceofwords'],
  ['  all the  problems  ', 'alltheproblems'],
  ['\r\n\t\f\v', ''],
  [
    `
      `,
    '',
  ],
]

cases.forEach(([input, expected]) => {
  test(`${String(input)} is ${expected}`, () => {
    const result = toCompactCase(input)
    assert.is(result, expected)
    assert.is(isCompactCase(result), true)
  })
})

test.run()
