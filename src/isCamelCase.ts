const isCamelCase = (input: unknown): boolean => {
  if (typeof input !== 'string') {
    return false
  }

  return /^[a-z]+([A-Z][a-z]+)*$/u.test(input)
}

export default isCamelCase
