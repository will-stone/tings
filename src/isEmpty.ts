import { Validator } from './_model'
import { optionify } from './_optionify'

const validator: Validator = (value) => value.length === 0

const isEmpty = optionify(validator, {
  invalidMessage: 'not empty',
  validMessage: 'is empty',
})

export default isEmpty
