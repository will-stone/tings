import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isCamelCase } from '../src'

const invalidInputs = [
  123,
  'A',
  '!',
  'notCAMEL',
  'containsSpecial!Characters',
  'thisHas aSpace',
]
invalidInputs.forEach((input) => {
  test(`${input} is not valid`, () => {
    assert.is(isCamelCase(input), false)
  })
})

const validInputs = [
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
validInputs.forEach((input) => {
  test(`${input} is valid`, () => {
    assert.is(isCamelCase(input), true)
  })
})

test.run()
