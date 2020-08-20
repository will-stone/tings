/**
 * @param input
 */
const toCompactCase = (input: unknown): string => {
  return String(input).replace(/\s/gu, '')
}

export default toCompactCase
