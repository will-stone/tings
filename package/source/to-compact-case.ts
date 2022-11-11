/**
 * Removes all whitespace characters from a string.
 * @example
```ts
import { toCompactCase } from 'tings'

toCompactCase('this is text') // thisistext
toCompactCase('someTEXT') // someTEXT
```
 */
function toCompactCase(input: unknown): string {
  return String(input).replace(/\s/gu, '')
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  const cases = [
    [0, '0'],
    ['', ''],
    ['  leadingSpace', 'leadingSpace'],
    ['  twoLeadingSpaces', 'twoLeadingSpaces'],
    ['trailingSpace ', 'trailingSpace'],
    ['twoTrailingSpace  ', 'twoTrailingSpace'],
    ['space inside', 'spaceinside'],
    ['twoSpaces  inside', 'twoSpacesinside'],
    ['regular sentence of words', 'regularsentenceofwords'],
    ['  all the  problems  ', 'alltheproblems'],
    ['\r\n\t\f\v', ''],
    [
      `
        `,
      '',
    ],
  ]

  test.each(cases)('%s is %s', (input, expected) => {
    const result = toCompactCase(input)
    expect(result).toBe(expected)
  })
}

export { toCompactCase }
