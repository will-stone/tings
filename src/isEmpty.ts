import { Tester } from './_model'
import strngs from './strngs'

const tester: Tester = (value) => value.length === 0

const isEmpty = strngs.create(tester, 'is empty', 'not empty')

export default isEmpty
