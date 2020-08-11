import fs from 'fs'
import path from 'path'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

const validators: NodeRequire[] = []

const sourceDirectory = path.join(__dirname, '..', 'src')

fs.readdirSync(sourceDirectory).forEach((file) => {
  if (file.startsWith('is')) {
    // eslint-disable-next-line node/global-require, @typescript-eslint/no-var-requires
    validators.push(require(path.join(sourceDirectory, file)).default)
  }
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

validators.forEach((validator) => {
  test('not throw on string', () => {
    assert.not.throws(() => validator('string'))
  })

  invalidInputs.forEach((input) => {
    test(`throws ${String(input)} is not a string`, () => {
      assert.throws(
        () => validator(input),
        (error: Error) => error.message === 'Input is not a string',
      )
    })
  })
})

test.run()
