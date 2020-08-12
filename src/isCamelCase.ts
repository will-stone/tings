import { Tester } from './_model'
import strngs from './strngs'

const tester: Tester = (string) => /^[a-z]+([A-Z][a-z]+)*$/u.test(string)

const isCamelCase = strngs.create(tester, 'is camelCase', 'not camelCase')

export default isCamelCase
