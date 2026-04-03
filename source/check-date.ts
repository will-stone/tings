/**
 * Determines if input is a valid Date.
 * @example
 * ```ts
 * import { checkDate } from 'tings'
 *
 * checkDate(new Date()) // true
 * checkDate("not a date") // false
 * ```
 * @category Date
 */
export function checkDate(input: unknown): input is Date {
  return input instanceof Date && input.toString() !== 'Invalid Date'
}
