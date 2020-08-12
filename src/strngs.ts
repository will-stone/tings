import { Options, Tester, Validator, ValidMessage } from './_model'

function or(string: string, validators: Validator[]) {
  for (const validator of validators) {
    const { valid, message } = validator(string, { verbose: true })
    if (valid) {
      return { valid, message }
    }
  }

  return { valid: false, message: 'no validators passed' }
}

function and(string: string, validators: Validator[]) {
  for (const validator of validators) {
    const result = validator(string, { verbose: true })
    if (!result.valid) {
      return result
    }
  }

  return { valid: true, message: 'all validators passed' }
}

type StrngsOutput = {
  or: (...validators: Validator[]) => ValidMessage
  and: (...validators: Validator[]) => ValidMessage
}

function strngs(): undefined
function strngs(string: string): StrngsOutput
function strngs(string?: string): StrngsOutput | undefined {
  if (string || string?.length === 0) {
    return {
      or: (...validators) => or(string, validators),
      and: (...validators) => and(string, validators),
    }
  }
}

strngs.or = (...validators: Validator[]) => (string: string) =>
  or(string, validators)

strngs.and = (...validators: Validator[]) => (string: string) =>
  and(string, validators)

strngs.some = (...validMessages: ValidMessage[]) => {
  let count = 0
  for (const { valid, message } of validMessages) {
    count = count + 1
    if (valid) {
      return {
        valid: true,
        message: `number ${count} check passed: ${message}`,
      }
    }
  }

  return { valid: false, message: 'all checks failed' }
}

strngs.every = (...validMessages: ValidMessage[]) => {
  let count = 0
  for (const { valid, message } of validMessages) {
    count = count + 1
    if (!valid) {
      return {
        valid: false,
        message: `number ${count} check failed: ${message}`,
      }
    }
  }

  return { valid: true, message: 'all checks passed' }
}

const stringGuard = (input: string): input is string => {
  if (typeof input !== 'string') {
    throw new TypeError('Input is not a string')
  }

  return true
}

/**
 * Create a custom validator that is compatible with strngs' methods
 * @param tester - function that tests a string for validity
 * @param validMessage - message to display if tester returns true
 * @param invalidMessage - message to display if tester returns false
 */
strngs.create = (
  tester: Tester,
  validMessage: string,
  invalidMessage: string,
): Validator => (string: string, options?: Options) => {
  stringGuard(string)

  const valid = tester(string)

  if (options?.verbose) {
    return {
      valid,
      message: valid ? validMessage : invalidMessage,
    }
  }

  // This any is required as TS doesn't know how to type this conditional return type
  // correctly without the casting. The return types are correct despite adding this. Weird.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return valid as any
}

export default strngs
