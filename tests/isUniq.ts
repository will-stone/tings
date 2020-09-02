import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isUniq } from '../src'

const falsey = [
  ['', ''],
  [1, 1],
]

falsey.forEach((input) => {
  test(`${input} is false`, () => {
    assert.is(isUniq(input), false)
  })
})

const truthy = [[1, 2], 1, []]

truthy.forEach((input) => {
  test(`${input} is true`, () => {
    assert.is(isUniq(input), true)
  })
})

test.run()
