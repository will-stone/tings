const isCamelCase = (string: string): boolean =>
  /^[a-z]+([A-Z][a-z]+)*$/u.test(string)

export default isCamelCase
