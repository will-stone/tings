import { Tester } from './_model'
import strngs from './strngs'

const tester: Tester = (value: string): boolean => value.length > 0

const isNotEmpty = strngs.create(tester, 'not empty', 'is empty')

export default isNotEmpty
