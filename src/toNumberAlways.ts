/**
 * Will return the given input as a number, if it cannot be converted, will return zero.
 * @param input anything
 */
const toNumberAlways = (input: unknown): number => {
  try {
    const number = Number(input)

    if (Number.isNaN(number)) {
      return 0
    }

    return number
  } catch {
    return 0
  }
}

export default toNumberAlways
