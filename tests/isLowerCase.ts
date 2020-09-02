import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isLowerCase } from '../src'

const falsey = ['Title Case', 'camelCase', 'PascalCase', []]
falsey.forEach((input) => {
  test(`${input} is false`, () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
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
