const isPascalCase = (string: string): boolean =>
  /^[A-Z][a-z]+([A-Z][a-z]+)*$/u.test(string)

export default isPascalCase
