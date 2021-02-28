import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { toPascalCase } from '../src'

const cases = [
  [123, '123'],
  ['!', ''],
  ['notCAMEL', 'NotCamel'],
  ['containsSpecial!Characters', 'ContainsSpecialCharacters'],
  ['thisHas aSpace', 'ThisHasASpace'],
]

for (const [input, expected] of cases) {
  test(`${input} is ${expected}`, () => {
    assert.is(toPascalCase(input), expected)
  })
}

test.run()
