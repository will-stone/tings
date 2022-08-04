/**
 * Determines if input is a string that does not contain whitespaces.
 * @example
```ts
import { isCompactCase } from 'tings'

isCompactCase('thisiscompact') // true
isCompactCase('this is not compact') // false
```
 */
function isCompactCase(input: unknown): boolean {
  if (typeof input !== 'string') {
    return false
  }

  if (input.length === 0) {
    return true
  }

  return /^\S+$/u.test(input)
}

export { isCompactCase }
