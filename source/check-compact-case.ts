/**
 * Determines if input is a string that does not contain white-spaces.
 * @category String
 * @example
```ts
import { checkCompactCase } from 'tings'

checkCompactCase('thisiscompact') // true
checkCompactCase('this is not compact') // false
checkCompactCase(123) // false - input is not a string
```
 */
export function checkCompactCase(input: unknown): input is string {
  if (typeof input !== 'string') {
    return false
  }

  if (input.length === 0) {
    return true
  }

  return /^\S+$/u.test(input)
}
