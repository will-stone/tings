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
  // TODO how the hell do you type this?
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
): ValidatorWithOptions => (string: string, options?: Options) => {
  stringGuard(string)

  const valid = validator(string)

  if (options?.verbose) {
    return {
      valid,
      message: valid ? config.validMessage : config.invalidMessage,
    }
  }

  return valid
}
