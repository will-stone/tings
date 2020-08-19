const isPascalCase = (input: unknown): boolean => {
  if (typeof input !== 'string') {
    return false
  }

  return /^[A-Z][a-z]+([A-Z][a-z]+)*$/u.test(input)
}

export default isPascalCase
