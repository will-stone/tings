import { Validator } from './_model'
import { optionify } from './_optionify'

const isCompactCore: Validator = (string) => /^\S+$/u.test(string)

const isCompact = optionify(isCompactCore, {
  invalidMessage: 'not compact',
  validMessage: 'is compact',
})

export default isCompact
