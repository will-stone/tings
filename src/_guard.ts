export const guard = (validator: (value: string) => boolean) => (
  input: unknown,
): input is string => {
  if (typeof input !== 'string') {
    throw new TypeError('Input is not a string')
  }

  return validator(input)
}
