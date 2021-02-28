import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isUniq } from '../src'

const falsey = [
  ['', ''],
  [1, 1],
]

for (const input of falsey) {
  test(`${input} is false`, () => {
    assert.is(isUniq(input), false)
  })
}

const truthy = [[1, 2], 1, []]

for (const input of truthy) {
  test(`${input} is true`, () => {
    assert.is(isUniq(input), true)
  })
}

test.run()
