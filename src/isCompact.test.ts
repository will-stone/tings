import isCompact from './isCompact'

test.each([
  '  leadingSpace',
  '  twoLeadingSpaces',
  'trailingSpace ',
  'twoTrailingSpace  ',
  'space inside',
  'twoSpaces  inside',
  'regular sentence of words',
  '  all the  problems  ',
  '\t',
  '\n',
  `
      `,
])('isCompact($input) is false', (input) => {
  expect(isCompact(input)).toBe(false)
})

test.each([
  'justletters',
  '123',
  'mixed123',
  'hyphenated-123',
  'special!@@£$%^%^*(-123',
])('isCompact($input) is true', (input) => {
  expect(isCompact(input)).toBe(true)
})
