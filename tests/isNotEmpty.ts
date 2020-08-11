import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isNotEmpty } from '../src'

const invalidInputs = ['']
invalidInputs.forEach((input) => {
  test(`${input} is not valid`, () => {
    assert.is(isNotEmpty(input), false)
  })
})

const validInputs = ['has content', '\r\n\t\f\v']
validInputs.forEach((input) => {
  test(`${input} is valid`, () => {
    assert.is(isNotEmpty(input), true)
  })
})

test.run()
