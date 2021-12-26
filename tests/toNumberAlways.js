import { test } from 'uvu'
import * as assert from 'uvu/assert'

import toNumberAlways from '../lib/toNumberAlways'

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

for (const [input, expected] of cases) {
  test(`${input} is ${expected}`, () => {
    assert.is(toNumberAlways(input), expected)
  })
}

test.run()
