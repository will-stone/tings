import { isEmpty } from '.'

test.each(['has content', '\r\n\t\f\v'])('isEmpty(%p) is false', (input) => {
  expect(isEmpty(input)).toBe(false)
})

test.each([''])('isEmpty(%p) is true', (input) => {
  expect(isEmpty(input)).toBe(true)
})
