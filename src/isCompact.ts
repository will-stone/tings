import { guard } from './guard'

function isCompact(value: string): boolean {
  return /^\S*$/u.test(value)
}

export default guard(isCompact)
