import camelCase from 'lodash/camelCase'
import flow from 'lodash/flow'
import upperFirst from 'lodash/upperFirst'

/**
 * Converts input to PascalCase string.
 */
const toPascalCase = flow([camelCase, upperFirst])

export default toPascalCase
