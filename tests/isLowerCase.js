import { test } from 'uvu'
import * as assert from 'uvu/assert'

import isLowerCase from '../lib/isLowerCase'

const falsey = ['Title Case', 'camelCase', 'PascalCase', []]

for (const input of falsey) {
  test(`${input} is false`, () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    assert.is(isLowerCase(input), false)
  })
}

const truthy = [
  'lowercase',
  'lower case',
  '',
  `
  `,
]

for (const input of truthy) {
  test(`${input} is true`, () => {
    assert.is(isLowerCase(input), true)
  })
}

test.run()
