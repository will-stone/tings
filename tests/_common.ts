import { test } from 'uvu'
import * as assert from 'uvu/assert'

import * as all from '../src'

const validators = Object.entries(all).filter(([name]) => name.startsWith('is'))

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- allow all bad types
const invalidInputs: any[] = [
  0,
  1,
  new Date(),
  undefined,
  true,
  false,
  {},
  [],
  BigInt(1),
  Symbol(1),
  () => '',
]

validators.forEach(([name, validator]) => {
  test(`${name} does not throw on string`, () => {
    assert.not.throws(() => validator('string'))
  })

  invalidInputs.forEach((input) => {
    test(`${name} throws ${String(input)} is not a string`, () => {
      assert.throws(
        () => validator(input),
        (error: Error) => error.message === 'Input is not a string',
      )
    })
  })
})

test.run()
