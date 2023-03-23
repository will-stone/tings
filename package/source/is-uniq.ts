/**
 * Determines if an array only contains unique items.
 * Will return true for any input that's not an array.
 * @category Array
 * @example
```ts
import { isUniq } from 'tings'

isUniq([1, 2, 3]) // true
isUniq([1, 1, 2]) // false
isUniq('not array') // true
```
 */
export function isUniq(input: unknown): boolean {
  if (Array.isArray(input)) {
    return new Set(input).size === input.length
  }

  return true
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  test('should return false when array does not contain unique items', () => {
    expect(isUniq(['', ''])).toBe(false)
    expect(isUniq([1, 1])).toBe(false)
  })

  test('should return true when array contains only unique items', () => {
    expect(isUniq(['one', 1])).toBe(true)
    expect(isUniq([1, 2])).toBe(true)
    expect(isUniq(1)).toBe(true)
    expect(isUniq([])).toBe(true)
  })
}
