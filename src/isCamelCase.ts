import camelCase from 'lodash/camelCase'

/**
 * Determines if input is a camelCase string.
 */
const isCamelCase = (input: unknown): boolean => {
  if (typeof input !== 'string') {
    return false
  }

  return camelCase(input) === input
}

export default isCamelCase
