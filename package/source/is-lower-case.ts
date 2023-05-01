/**
 * Determines if input is a string containing no UPPERcase characters.
 * @category String
 * @example
```ts
import { isLowerCase } from 'tings'

isLowerCase('this is lower') // true
isLowerCase('This is not LOWER') // false
```
 */
export function isLowerCase(input: unknown): input is string {
  if (typeof input !== 'string') {
    return false
  }

  return input === input.toLowerCase()
}
