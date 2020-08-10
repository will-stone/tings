import { Validator } from './_model'
import { optionify } from './_optionify'

const validator: Validator = (string) =>
  /^[A-Z][a-z]+([A-Z][a-z]+)*$/u.test(string)

const isPascalCase = optionify(validator, {
  invalidMessage: 'not PascalCase',
  validMessage: 'is PascalCase',
})

export default isPascalCase
