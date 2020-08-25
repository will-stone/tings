import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'

/**
 * Converts input to PascalCase string.
 */
const toPascalCase = (input: unknown): string =>
  upperFirst(camelCase(String(input)))

export default toPascalCase
