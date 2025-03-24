import { expect, test } from 'vitest'

import { toCompactCase } from './to-compact-case.js'

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

test.each(cases)('%s is %s', (input, expected) => {
  const result = toCompactCase(input)

  expect(result).toBe(expected)
})
