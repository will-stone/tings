const isCompactCase = (input: unknown): boolean => {
  if (typeof input !== 'string') {
    return false
  }

  return /^\S+$/u.test(input)
}

export default isCompactCase
