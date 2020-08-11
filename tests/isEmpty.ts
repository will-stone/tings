import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isEmpty } from '../src'

const invalidInputs = ['has content', '\r\n\t\f\v']
invalidInputs.forEach((input) => {
  test(`${input} is not valid`, () => {
    assert.is(isEmpty(input), false)
  })
})

const validInputs = ['']
validInputs.forEach((input) => {
  test(`${input} is valid`, () => {
    assert.is(isEmpty(input), true)
  })
})

test.run()
