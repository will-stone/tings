import { Validator } from './_model'
import { optionify } from './_optionify'

const validator: Validator = (string) => /^\S+$/u.test(string)

const isCompact = optionify(validator, {
  invalidMessage: 'not compact',
  validMessage: 'is compact',
})

export default isCompact
