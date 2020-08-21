/**
 * Determines if input is a string containing no UPPERcase characters.
 */
const isLowerCase = (input: unknown): boolean => {
  if (typeof input !== 'string') {
    return false
  }

  return input === input.toLowerCase()
}

export default isLowerCase
