export interface Options {
  verbose?: boolean
}

interface OptionsIsVerbose extends Options {
  verbose: true
}

interface OptionsNotVerbose extends Options {
  verbose: false | undefined
}

export interface ValidMessage {
  valid: boolean
  message: string
}

export type Tester = (string: string) => boolean

export interface Validator {
  (string: string): boolean
  (string: string, options: OptionsNotVerbose): boolean
  (string: string, options: OptionsIsVerbose): ValidMessage
}
