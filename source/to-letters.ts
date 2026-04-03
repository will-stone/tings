/**
 * Removes all non-alphabetical characters from a string.
 * @example
 * ```ts
 * import { toLetters } from 'tings'
 *
 * toLetters('this is text') // thisistext
 * toLetters('123-Text!!!') // Text
 * ```
 * @category String
 */
export function toLetters(input: unknown): string {
  return String(input).replaceAll(/[^a-zA-Z]/gu, '')
}
