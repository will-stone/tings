import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isMap } from '../src'

const falsey = [
  'has content',
  '\r\n\t\f\v',
  { key: 'value' },
  ['item'],
  BigInt(1),
  Symbol(1),
  true,
  1,
  2,
  new Set([1]),
]

falsey.forEach((input) => {
  test(`${String(input)} is not a Map`, () => {
    assert.is(isMap(input), false)
  })
})

const truthy = [
  new Map(),
  new Map([]),
  new Map([[1, 1]]),
  new Map([['string', 'string']]),
]

truthy.forEach((input) => {
  test(`${input} is a Map`, () => {
    assert.is(isMap(input), true)
  })
})

test.run()
