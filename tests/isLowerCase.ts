import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isLowerCase } from '../src'

const cases = [
  ['lowercase', true],
  ['lower case', true],
  ['', true],
  [
    `
  `,
    true,
  ],
  ['Title Case', false],
  ['camelCase', false],
  ['PascalCase', false],
  [[], false],
]

cases.forEach(([input, expected]) => {
  test(`${input} is ${expected}`, () => {
    assert.is(isLowerCase(input), expected)
  })
})

test.run()
