import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isPascalCase } from '../src'

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
  'notCAMEL',
  'containsSpecial!Characters',
  'thisHas aSpace',
]
invalidInputs.forEach((input) => {
  test(`${String(input)} is not valid`, () => {
    assert.is(isPascalCase(input), false)
  })
})

const validInputs = [
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
validInputs.forEach((input) => {
  test(`${input} is valid`, () => {
    assert.is(isPascalCase(input), true)
  })
})

test.run()
