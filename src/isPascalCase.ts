import toPascalCase from './toPascalCase'

const isPascalCase = (input: unknown): boolean => {
  if (typeof input !== 'string') {
    return false
  }

  return toPascalCase(input) === input
}

export default isPascalCase
