import isCamelCase from './isCamelCase'

test.each([
  '',
  'A',
  'notCAMEL',
  'endWithCaptiaL',
  'containNumbers123',
  '123',
  'containsSpecial!Characters',
  '!',
])('isCamelCase(%p) is false', (input) => {
  expect(isCamelCase(input)).toBe(false)
})

test.each(['one', 'a', 'camelCase', 'miltiWordCamelCase'])(
  'isCamelCase(%p) is true',
  (input) => {
    expect(isCamelCase(input)).toBe(true)
  },
)
