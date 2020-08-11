import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isPascalCase } from '../src'

const invalidInputs = [
  '',
  'A',
  'AWord',
  'NotCAMEL',
  'EndWithCaptiaL',
  'ContainNumbers123',
  '123',
  'ContainsSpecial!Characters',
  '!',
  'This HasaSpace',
]
invalidInputs.forEach((input) => {
  test(`${input} is not valid`, () => {
    assert.is(isPascalCase(input), false)
  })
})

const validInputs = ['One', 'CamelCase', 'MiltiWordCamelCase']
validInputs.forEach((input) => {
  test(`${input} is valid`, () => {
    assert.is(isPascalCase(input), true)
  })
})

test.run()
