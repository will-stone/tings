export const guard = (tester: (value: string) => boolean) => (
  input: unknown,
): input is string => {
  if (typeof input !== 'string') {
    throw new TypeError('Input is not a string')
  }

  return tester(input)
}
