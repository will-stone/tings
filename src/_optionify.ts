import { Config, Options, Validator, ValidatorWithOptions } from './_model'

const stringGuard = (input: string): input is string => {
  if (typeof input !== 'string') {
    throw new TypeError('Input is not a string')
  }

  return true
}

export const optionify = (
  validator: Validator,
  config: Config,
): ValidatorWithOptions => (string: string, options?: Options) => {
  stringGuard(string)

  const valid = validator(string)

  if (options?.verbose) {
    return {
      valid,
      message: valid ? config.validMessage : config.invalidMessage,
    }
  }

  // This any is required as TS doesn't know how to type this conditional return type
  // correctly without the casting. The return types are correct despite adding this. Weird.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return valid as any
}
