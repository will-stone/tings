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
 */
const isOccupied = (input: unknown): boolean => negate(isVacant)(input)

export default isOccupied
