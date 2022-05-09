/**
 * Determines if input is a string containing no UPPERcase characters.
 * @example
```ts
import isLowerCase from 'tings/lib/isLowerCase'

isLowerCase('this is lower') // true
isLowerCase('This is not LOWER') // false
```
 */
function isLowerCase(string: string): boolean {
  const input = string as unknown

  if (typeof input !== 'string') {
    return false
  }

  return input === input.toLowerCase()
}

export default isLowerCase
