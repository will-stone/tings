/**
 * Determines if input is a string containing no UPPERcase characters.
 * @category String
 * @example
```ts
import { checkLowerCase } from 'tings'

checkLowerCase('this is lower') // true
checkLowerCase('This is not LOWER') // false
```
 */
export function checkLowerCase(input: unknown): input is string {
  if (typeof input !== 'string') {
    return false
  }

  return input === input.toLowerCase()
}
