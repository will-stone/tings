import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isLowerCase } from '../pkg'

const falsey = ['Title Case', 'camelCase', 'PascalCase', []]
falsey.forEach((input) => {
  test(`${input} is false`, () => {
    assert.is(isLowerCase(input), false)
  })
})

const truthy = [
  'lowercase',
  'lower case',
  '',
  `
  `,
]
truthy.forEach((input) => {
  test(`${input} is true`, () => {
    assert.is(isLowerCase(input), true)
  })
})

test.run()
