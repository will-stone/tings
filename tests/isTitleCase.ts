import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isTitleCase } from '../src'

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
  'notTitle',
  'Contains Special ! Characters',
  'thisHas aSpace',
]
for (const input of falsey) {
  test(`${String(input)} is false`, () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    assert.is(isTitleCase(input), false)
  })
}

const truthy = [
  '',
  'One',
  'a',
  '123',
  'Title Case',
  'Small Words are not Capitalised',
]
for (const input of truthy) {
  test(`${input} is true`, () => {
    assert.is(isTitleCase(input), true)
  })
}

test.run()
