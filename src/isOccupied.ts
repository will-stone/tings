import negate from 'lodash/negate'

import isVacant from './isVacant'

/**
 * Similar to the opposite of Lodash's isEmpty this will return true if a value
 * is more than the minimum for its type. The main differences being:
 * - All numbers except `0` are occupied.
 * - All BigInts except `BigInt(0)` are occupied.
 * - Only `true` is occupied, not both booleans.
 * - All Symbols are occupied.
 * @requires lodash
 * @example
```ts
import isOccupied from 'tings/isOccupied'

isOccupied('') // false
isOccupied(0) // false
isOccupied(BigInt(0)) // false
isOccupied([]) // false
isOccupied({}) // false
isOccupied(false) // false
isOccupied(null) // false
isOccupied(undefined) // false
isOccupied(new Map([])) // false

isOccupied(1) // true
isOccupied(true) // true
isOccupied('a') // true
isOccupied({ key: 'value' }) // true
```
 */
function isOccupied(input: unknown): boolean {
  return negate(isVacant)(input)
}

export default isOccupied
