import { Validator } from './_model'
import { optionify } from './_optionify'

const isCamelCaseCore: Validator = (string) =>
  /^[a-z]+([A-Z][a-z]+)*$/u.test(string)

const isCamelCase = optionify(isCamelCaseCore, {
  invalidMessage: 'not camelCase',
  validMessage: 'is camelCase',
})

export default isCamelCase
