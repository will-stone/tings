import { guard } from './_guard'

function isCompact(value: string): boolean {
  return /^\S+$/u.test(value)
}

export default guard(isCompact)
