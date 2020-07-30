export function isCompact(value: string): boolean {
  return /^\S*$/u.test(value)
}
