import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isOccupied } from '../src'

const falsey = [
  '',
  [],
  {},
  0,
  false,
  // eslint-disable-next-line unicorn/no-null -- need to check null here
  null,
  undefined,
  BigInt(0),
  new Set(),
  new Set([]),
  new Map(),
  new Map([]),
]

for (const input of falsey) {
  test(`${String(input)} is false`, () => {
    assert.is(isOccupied(input), false)
  })
}

const truthy = [
  'has content',
  '\r\n\t\f\v',
  { key: 'value' },
  ['item'],
  BigInt(1),
  Symbol(1),
  true,
  -2,
  -1,
  1,
  2,
  new Set([1]),
  new Map([[1, 1]]),
  new Map([['string', 'string']]),
]

for (const input of truthy) {
  test(`${String(input)} is true`, () => {
    assert.is(isOccupied(input), true)
  })
}

test.run()
