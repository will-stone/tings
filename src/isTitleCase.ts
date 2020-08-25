import toTitleCase from './toTitleCase'

/**
 * Determines if input is a Tile Case string.
 * @requires lodash
 */
const isTitleCase = (input: unknown): boolean => {
  if (typeof input !== 'string') {
    return false
  }

  return toTitleCase(input) === input
}

export default isTitleCase
