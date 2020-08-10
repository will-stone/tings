import isCamelCase from './isCamelCase'
import isCompact from './isCompact'
import isEmpty from './isEmpty'
import isNotEmpty from './isNotEmpty'

describe.each([isCompact, isEmpty, isNotEmpty, isCamelCase])(
  '%p',
  (validator) => {
    test.each(['string'])('not throw on %p', (input) => {
      expect(() => validator(input)).not.toThrow()
    })

    test.each([
      0,
      1,
      new Date(),
      undefined,
      true,
      false,
      {},
      [],
      BigInt(1),
      Symbol(1),
      () => '',
    ])('throw on %p', (input) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      expect(() => validator(input)).toThrow('Input is not a string')
    })
  },
)
