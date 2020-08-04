import { optionify } from './_optionify'

function isNotEmptyCore(value: string): boolean {
  return value.length > 0
}

const isNotEmpty = optionify(isNotEmptyCore, {
  invalidMessage: 'is empty',
  validMessage: 'not empty',
})

export default isNotEmpty
