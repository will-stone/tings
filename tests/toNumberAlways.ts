import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { toNumberAlways } from '../src'

const cases = [
  [0, 0],
  [1, 1],
  [2, 2],
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

cases.forEach(([input, expected]) => {
  test(`${input} is ${expected}`, () => {
    assert.is(toNumberAlways(input), expected)
  })
})

test.run()
