import { optionify } from './_optionify'

const validator = (value: string): boolean => value.length > 0

const isNotEmpty = optionify(validator, {
  invalidMessage: 'is empty',
  validMessage: 'not empty',
})

export default isNotEmpty
