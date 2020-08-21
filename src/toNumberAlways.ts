/**
 * Will return the given input as a number, if it cannot be converted, it will return 0.
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
