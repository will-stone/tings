/**
 * Determines if an array only contains unique items.
 * Will return true for any input that's not an array.
 */
const isUniq = (input: unknown): boolean => {
  if (Array.isArray(input)) {
    return new Set(input).size === input.length
  }

  return true
}

export default isUniq
