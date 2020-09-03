/**
 * Determines if input is a compactcase (no whitespaces) string.
 * @example
```ts
import isCompactCase from 'tings/isCompactCase'

isCompactCase('thisiscompact') // true
isCompactCase('this is not compact') // false
```
 */
function isCompactCase(string: string): boolean {
  const input = string as unknown

  if (typeof input !== 'string') {
    return false
  }

  if (input.length === 0) {
    return true
  }

  return /^\S+$/u.test(input)
}

export default isCompactCase
