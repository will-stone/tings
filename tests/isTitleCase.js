import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isTitleCase } from '../pkg'

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
falsey.forEach((input) => {
  test(`${String(input)} is false`, () => {
    assert.is(isTitleCase(input), false)
  })
})

const truthy = [
  '',
  'One',
  'a',
  '123',
  'Title Case',
  'Small Words are not Capitalised',
]
truthy.forEach((input) => {
  test(`${input} is true`, () => {
    assert.is(isTitleCase(input), true)
  })
})

test.run()
