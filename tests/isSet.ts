import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isSet } from '../src'

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
  new Map(),
  new Map([]),
  new Map([[1, 1]]),
  new Map([['string', 'string']]),
]

falsey.forEach((input) => {
  test(`${String(input)} is not a Set`, () => {
    assert.is(isSet(input), false)
  })
})

const truthy = [new Set(), new Set([]), new Set([1])]

truthy.forEach((input) => {
  test(`${input} is a Set`, () => {
    assert.is(isSet(input), true)
  })
})

test.run()
