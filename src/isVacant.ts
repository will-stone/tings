import isMap from 'lodash/isMap'
import isSet from 'lodash/isSet'

/**
 * Similar to Lodash's isEmpty this will return true if a value is considered
 * the minimum for its type. The main differences being:
 * - Only `0` is vacant, not all numbers.
 * - Only `BigInt(0)` is vacant, not all BigInts.
 * - Only `false` is vacant, not both booleans.
 * - Symbols are not vacant.
 * @requires lodash
 */
const isVacant = (input: unknown): boolean => {
  if (input === null) {
    return true
  }

  // Empty string or an array with no items
  if (typeof input === 'string' || Array.isArray(input)) {
    return input.length === 0
  }

  if (isSet(input) || isMap(input)) {
    return input.size === 0
  }

  // Object without any keys
  if (typeof input === 'object' && Object.keys(input || {}).length === 0) {
    return true
  }

  return !input
}

export default isVacant
