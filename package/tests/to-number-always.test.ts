import { expect, test } from 'vitest'

import { toNumberAlways } from '../source/index.js'

const cases = [
  [-2, -2],
  [-1, -1],
  [0, 0],
  [1, 1],
  [2, 2],
  ['-2', -2],
  ['-1', -1],
  ['0', 0],
  ['1', 1],
  ['2', 2],
  ['blah', 0],
  [new Set(), 0],
  [[], 0],
  // eslint-disable-next-line unicorn/no-null
  [null, 0],
  [undefined, 0],
  [true, 1],
  [false, 0],
  [1.1, 1.1],
  [Number.NaN, 0],
]

// @ts-expect-error -- doesn't like some of the inputs
test.each(cases)('%s is %s', (input, expected) => {
  expect(toNumberAlways(input)).toBe(expected)
})
