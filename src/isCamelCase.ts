import camelCase from 'lodash/camelCase'

const isCamelCase = (input: unknown): boolean => {
  if (typeof input !== 'string') {
    return false
  }

  return camelCase(input) === input
}

export default isCamelCase
