/**
 * Determines if input is a string containing no UPPERcase characters.
 * @example
```ts
import { isLowerCase } from 'tings'

isLowerCase('this is lower') // true
isLowerCase('This is not LOWER') // false
```
 */
function isLowerCase(input: unknown): input is string {
  if (typeof input !== 'string') {
    return false
  }

  return input === input.toLowerCase()
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  const falsey = ['Title Case', 'camelCase', 'PascalCase', []]

  test.each(falsey)('%s is false', (input) => {
    expect(isLowerCase(input)).toBe(false)
  })

  const truthy = [
    'lowercase',
    'lower case',
    '',
    `
`,
  ]

  test.each(truthy)('%s is true', (input) => {
    expect(isLowerCase(input)).toBe(true)
  })
}

export { isLowerCase }
