import camelCase from 'lodash/camelCase'
import flow from 'lodash/flow'
import upperFirst from 'lodash/upperFirst'

const toPascalCase = flow([camelCase, upperFirst])

export default toPascalCase
