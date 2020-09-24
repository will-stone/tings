import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { toLetters } from '../src'

const cases = [
  [0, ''],
  ['', ''],
  [true, 'true'],
  [['hello', 'moo'], 'hellomoo'],
  ['  some-Spaces ', 'someSpaces'],
  ['123-Text!!!(hello)<html>?</html>', 'Texthellohtmlhtml'],
  ['\r\n\t\f\v', ''],
  [
    `
      `,
    '',
  ],
]

cases.forEach(([input, expected]) => {
  test(`${String(input)} is ${expected}`, () => {
    const result = toLetters(input)
    assert.is(result, expected)
  })
})

test.run()
