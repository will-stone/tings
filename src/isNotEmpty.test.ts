import { isNotEmpty } from '.'

test.each([''])('isNotEmpty(%p) is false', (input) => {
  expect(isNotEmpty(input)).toBe(false)
})

test.each(['has content', '\r\n\t\f\v'])('isNotEmpty(%p) is true', (input) => {
  expect(isNotEmpty(input)).toBe(true)
})
