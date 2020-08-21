import endsWith from 'lodash/endsWith'

import toNumberAlways from './toNumberAlways'

/**
 * Converts a number to its ordinal string form, if possible, else returns 0th.
 * 1 -> 1st
 * 4.2 -> 4.2th
 * notANumber -> 0th
 */
const toOrdinal = (input: unknown = 0): string => {
  const number = toNumberAlways(input)
  const isInt = Number.isInteger(number)

  if (isInt) {
    if (endsWith(String(number), '1') && number !== 11) {
      return `${number}st`
    }

    if (endsWith(String(number), '2') && number !== 12) {
      return `${number}nd`
    }

    if (endsWith(String(number), '3') && number !== 13) {
      return `${number}rd`
    }
  }

  return `${number}th`
}

export default toOrdinal
