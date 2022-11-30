/**
 * Determines if input is a string that does not contain white-spaces.
 * @category String
 * @example
```ts
import { isCompactCase } from 'tings'

isCompactCase('thisiscompact') // true
isCompactCase('this is not compact') // false
```
 */
function isCompactCase(input: unknown): input is string {
  if (typeof input !== 'string') {
    return false
  }

  if (input.length === 0) {
    return true
  }

  return /^\S+$/u.test(input)
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  const falsey = [
    123,
    '  leadingSpace',
    '  twoLeadingSpaces',
    'trailingSpace ',
    'twoTrailingSpace  ',
    'space inside',
    'twoSpaces  inside',
    'regular sentence of words',
    '  all the  problems  ',
    '\r\n\t\f\v',
    `
        `,
  ]

  test.each(falsey)('%s is falsey', (input) => {
    expect(isCompactCase(input)).toBe(false)
  })

  const truthy = [
    '',
    'justletters',
    '123',
    'mixed123',
    'hyphenated-123',
    'special!@@£$%^%^*(-123',
  ]

  test.each(truthy)('%s is truthy', (input) => {
    expect(isCompactCase(input)).toBe(true)
  })
}

export { isCompactCase }
