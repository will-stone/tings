/**
 * Determines if input is a string containing no UPPERcase characters.
 * @example
```ts
import isLowerCase from 'tings/isLowerCase'

isLowerCase('this is lower') // true
isLowerCase('This is not LOWER') // false
```
 */
function isLowerCase(input: unknown): boolean {
  if (typeof input !== 'string') {
    return false
  }

  return input === input.toLowerCase()
}

export default isLowerCase
