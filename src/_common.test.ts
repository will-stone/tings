import isCompact from './isCompact'

describe.each([isCompact])('%p', (validator) => {
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
    expect(() => validator(input)).toThrow('Input is not a string')
  })
})
