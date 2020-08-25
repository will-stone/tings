import toPascalCase from './toPascalCase'

/**
 * Determines if input is a PascalCase string.
 * @requires lodash
 */
const isPascalCase = (input: unknown): boolean => {
  if (typeof input !== 'string') {
    return false
  }

  return toPascalCase(input) === input
}

export default isPascalCase
