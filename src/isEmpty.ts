import { Validator } from './_model'
import { optionify } from './_optionify'

const isEmptyCore: Validator = (value) => value.length === 0

const isEmpty = optionify(isEmptyCore, {
  invalidMessage: 'not empty',
  validMessage: 'is empty',
})

export default isEmpty
