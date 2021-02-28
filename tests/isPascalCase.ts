import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isPascalCase } from '../src'

const falsey = [
  123,
  '!',
  new Set(),
  Symbol(''),
  123,
  undefined,
  // eslint-disable-next-line unicorn/no-null
  null,
  true,
  false,
  () => {
    return false
  },
  'notCAMEL',
  'containsSpecial!Characters',
  'thisHas aSpace',
]
for (const input of falsey) {
  test(`${String(input)} is false`, () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    assert.is(isPascalCase(input), false)
  })
}

const truthy = [
  '',
  'One',
  'A',
  '123',
  'CamelCase',
  'EndWithCaptiaL',
  'MiltiWordCamelCase',
  'AWord',
  'ContainNumbers123',
]
for (const input of truthy) {
  test(`${input} is true`, () => {
    assert.is(isPascalCase(input), true)
  })
}

test.run()
