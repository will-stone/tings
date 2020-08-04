import { ValidatorWithOptions, VerboseOutput } from './_model'

function or(string: string, validators: ValidatorWithOptions[]) {
  for (const validator of validators) {
    const { valid, message } = validator(string, { verbose: true })
    if (valid) {
      return { valid, message }
    }
  }

  return { valid: false, message: 'no validators passed' }
}

function and(string: string, validators: ValidatorWithOptions[]) {
  for (const validator of validators) {
    const result = validator(string, { verbose: true })
    if (!result.valid) {
      return result
    }
  }

  return { valid: true, message: 'all validators passed' }
}

type StrngsOutput = {
  or: (...validators: ValidatorWithOptions[]) => VerboseOutput
  and: (...validators: ValidatorWithOptions[]) => VerboseOutput
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

strngs.or = (...validators: ValidatorWithOptions[]) => (string: string) =>
  or(string, validators)
strngs.and = (...validators: ValidatorWithOptions[]) => (string: string) =>
  and(string, validators)

export default strngs
