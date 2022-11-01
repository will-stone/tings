import { expect, test } from 'vitest'

import { toLetters } from '../dist/index.js'

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

// @ts-expect-error -- doesn't like array inputs
test.each(cases)('%s is %s', (input, expected) => {
  const result = toLetters(input)
  expect(result).toBe(expected)
})
