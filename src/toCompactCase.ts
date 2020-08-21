/**
 * Removes all whitespace characters from a string.
 */
const toCompactCase = (input: unknown): string => {
  return String(input).replace(/\s/gu, '')
}

export default toCompactCase
