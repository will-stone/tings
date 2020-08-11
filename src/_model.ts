export interface Config {
  validMessage: string
  invalidMessage: string
}

export interface Options {
  verbose?: boolean
}

interface OptionsIsVerbose extends Options {
  verbose: true
}

interface OptionsNotVerbose extends Options {
  verbose: false | undefined
}

export interface VerboseOutput {
  valid: boolean
  message: string
}

export type Validator = (string: string) => boolean

export interface ValidatorWithOptions {
  (string: string): boolean
  (string: string, options: OptionsNotVerbose): boolean
  (string: string, options: OptionsIsVerbose): VerboseOutput
}
