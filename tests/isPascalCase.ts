import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isPascalCase } from '../src'

const invalidInputs = [
  123,
  '!',
  'notCAMEL',
  'containsSpecial!Characters',
  'thisHas aSpace',
]
invalidInputs.forEach((input) => {
  test(`${input} is not valid`, () => {
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
