import { expect, test } from 'vitest'

import { generateIntegers } from './generate-integers.js'

test.each([
  [0, 1, [0, 1]],
  [1, 1, [1]],
  [3, 3, [3]],
  [1, 2, [1, 2]],
  [4, 9, [4, 5, 6, 7, 8, 9]],
  [3, 3, [3]],
  [8, 5, [8, 7, 6, 5]],
  [-3, 2, [-3, -2, -1, 0, 1, 2]],
  [3, -2, [3, 2, 1, 0, -1, -2]],
  [undefined, 6, []],
  ['', 6, []],
  [[], 6, []],
  [6, undefined, []],
  [6, '', []],
  [6, [], []],
  [6.5, 7.5, [6, 7]],
])('from %d, to %d', (from, to, expected) => {
  expect(generateIntegers(from as number, to as number)).toStrictEqual(expected)
})
