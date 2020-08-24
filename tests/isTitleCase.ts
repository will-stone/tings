import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isTitleCase } from '../src'

const invalidInputs = [
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
invalidInputs.forEach((input) => {
  test(`${String(input)} is not valid`, () => {
    assert.is(isTitleCase(input), false)
  })
})

const validInputs = [
  '',
  'One',
  'a',
  '123',
  'Title Case',
  'Small Words are not Capitalised',
]
validInputs.forEach((input) => {
  test(`${input} is valid`, () => {
    assert.is(isTitleCase(input), true)
  })
})

test.run()
