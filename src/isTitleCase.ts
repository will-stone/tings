import toTitleCase from './toTitleCase'

/**
 * Determines if input is a Tile Case string.
 * @requires lodash
 * @example
```ts
import isTitleCase from 'tings/isTitleCase'

isTitleCase('this is text') // false
isTitleCase('Small Words are not Capitalised') // true
```
 */
function isTitleCase(string: string): boolean {
  const input = string as unknown

  if (typeof input !== 'string') {
    return false
  }

  return toTitleCase(input) === input
}

export default isTitleCase
