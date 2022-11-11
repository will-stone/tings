/**
 * Removes all non-alphabetical characters from a string.
 * @example
```ts
import { toLetters } from 'tings'

toLetters('this is text') // thisistext
toLetters('123-Text!!!') // Text
```
 */
function toLetters(input: unknown): string {
  return String(input).replace(/[^a-zA-Z]/gu, '')
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

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
}

export { toLetters }
