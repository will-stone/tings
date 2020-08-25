import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isVacant } from '../src'

const falsey = [
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

falsey.forEach((input) => {
  test(`${String(input)} is false`, () => {
    assert.is(isVacant(input), false)
  })
})

const truthy = [
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

truthy.forEach((input) => {
  test(`${input} is true`, () => {
    assert.is(isVacant(input), true)
  })
})

test.run()
