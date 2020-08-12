import { Tester } from './_model'
import strngs from './strngs'

const tester: Tester = (string) => /^[A-Z][a-z]+([A-Z][a-z]+)*$/u.test(string)

const isPascalCase = strngs.create(tester, 'is PascalCase', 'not PascalCase')

export default isPascalCase
