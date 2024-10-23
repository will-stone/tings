import { expect, test } from 'vitest'

import { checkUrlAbsolute } from './check-url-absolute.js'

test.each([
  ['http://example.com/page', true],
  ['/page', false],
  [123, false],
])('%s is %s', (input, expected) => {
  expect(checkUrlAbsolute(input as string)).toBe(expected)
})
