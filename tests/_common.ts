import fs from 'fs'
import path from 'path'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

import * as all from '../src'
import { Validator } from '../src/_model'

const validatorFileNames = fs
  .readdirSync(path.join(__dirname, '..', 'src'))
  .filter((n) => n.startsWith('is'))

const validators = (Object.entries(all).filter(([name]) =>
  name.startsWith('is'),
) as unknown) as [string, Validator][]

test('index exports all validators', () => {
  assert.is(validatorFileNames.length, validators.length)
})

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
