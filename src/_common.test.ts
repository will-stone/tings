import fs from 'fs'
import path from 'path'

const isFiles: NodeRequire[] = []

fs.readdirSync(__dirname).forEach((file) => {
  if (file.startsWith('is') && !file.includes('.test')) {
    // eslint-disable-next-line node/global-require, @typescript-eslint/no-var-requires
    isFiles.push(require(path.join(__dirname, file)).default)
  }
})

describe.each(isFiles)('%p', (validator) => {
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
})
