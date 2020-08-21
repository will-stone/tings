import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isUniq } from '../src'

const cases = [
  [[1, 2], true],
  [1, true],
  [[], true],
  [['', ''], false],
  [[1, 1], false],
]

cases.forEach(([input, expected]) => {
  test(`${input} is ${expected}`, () => {
    assert.is(isUniq(input), expected)
  })
})

test.run()
