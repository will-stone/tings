import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isCamelCase } from '../src'

const falsey = [
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
  'A',
  '!',
  'NotCamel',
  'notCAMEL',
  'NOTCamelCase',
  'containsSpecial!Characters',
  'thisHas aSpace',
]
for (const input of falsey) {
  test(`${String(input)} is false`, () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    assert.is(isCamelCase(input), false)
  })
}

const truthy = [
  '',
  'one',
  'a',
  '123',
  'camelCase',
  'endWithCaptiaL',
  'miltiWordCamelCase',
  'aWord',
  'containNumbers123',
]
for (const input of truthy) {
  test(`${input} is true`, () => {
    assert.is(isCamelCase(input), true)
  })
}

test.run()
