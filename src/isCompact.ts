import { Tester } from './_model'
import strngs from './strngs'

const tester: Tester = (string) => /^\S+$/u.test(string)

const isCompact = strngs.create(tester, 'is compact', 'not compact')

export default isCompact
