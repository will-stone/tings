import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { toPascalCase } from '../pkg'

const cases = [
  [123, '123'],
  ['!', ''],
  ['notCAMEL', 'NotCamel'],
  ['containsSpecial!Characters', 'ContainsSpecialCharacters'],
  ['thisHas aSpace', 'ThisHasASpace'],
]

cases.forEach(([input, expected]) => {
  test(`${input} is ${expected}`, () => {
    assert.is(toPascalCase(input), expected)
  })
})

test.run()
