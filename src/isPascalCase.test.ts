import { isPascalCase } from '.'

test.each([
  '',
  'A',
  'AWord',
  'NotCAMEL',
  'EndWithCaptiaL',
  'ContainNumbers123',
  '123',
  'ContainsSpecial!Characters',
  '!',
  'This HasaSpace',
])('isPascalCase(%p) is false', (input) => {
  expect(isPascalCase(input)).toBe(false)
})

test.each(['One', 'CamelCase', 'MiltiWordCamelCase'])(
  'isPascalCase(%p) is true',
  (input) => {
    expect(isPascalCase(input)).toBe(true)
  },
)
