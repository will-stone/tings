/**
 * Determines if an array only contains unique items.
 * Will return true for any input that's not an array.
 * @example
 * ```ts
 * import { checkUnique } from 'tings'
 *
 * checkUnique([1, 2, 3]) // true
 * checkUnique([1, 1, 2]) // false
 * checkUnique('not array') // true
 * ```
 * @category Array
 */
export function checkUnique(input: unknown): boolean {
  if (Array.isArray(input)) {
    return new Set(input).size === input.length
  }

  return true
}
