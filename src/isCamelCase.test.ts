import { isCamelCase } from '.'

test.each([
  '',
  'A',
  'notCAMEL',
  'endWithCaptiaL',
  'containNumbers123',
  '123',
  'containsSpecial!Characters',
  '!',
  'thisHas aSpace',
])('isCamelCase(%p) is false', (input) => {
  expect(isCamelCase(input)).toBe(false)
})

test.each(['one', 'a', 'camelCase', 'miltiWordCamelCase', 'aWord'])(
  'isCamelCase(%p) is true',
  (input) => {
    expect(isCamelCase(input)).toBe(true)
  },
)
