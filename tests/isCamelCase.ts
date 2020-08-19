import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isCamelCase } from '../src'

const invalidInputs = [
  123,
  '',
  'A',
  'notCAMEL',
  'endWithCaptiaL',
  'containNumbers123',
  '123',
  'containsSpecial!Characters',
  '!',
  'thisHas aSpace',
]
invalidInputs.forEach((input) => {
  test(`${input} is not valid`, () => {
    assert.is(isCamelCase(input), false)
  })
})

const validInputs = ['one', 'a', 'camelCase', 'miltiWordCamelCase', 'aWord']
validInputs.forEach((input) => {
  test(`${input} is valid`, () => {
    assert.is(isCamelCase(input), true)
  })
})

test.run()
