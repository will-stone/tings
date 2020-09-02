import toTitleCase from './toTitleCase'

/**
 * @internal
 */
export function _isTitleCase(input: unknown): boolean {
  if (typeof input !== 'string') {
    return false
  }

  return toTitleCase(input) === input
}

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
  return _isTitleCase(string)
}

export default isTitleCase
