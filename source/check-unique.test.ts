import { expect, test } from 'vitest'

import { checkUnique } from './check-unique.js'

test('should return false when array does not contain unique items', () => {
  expect(checkUnique(['', ''])).toBe(false)
  expect(checkUnique([1, 1])).toBe(false)
})

test('should return true when array contains only unique items', () => {
  expect(checkUnique(['one', 1])).toBe(true)
  expect(checkUnique([1, 2])).toBe(true)
  expect(checkUnique(1)).toBe(true)
  expect(checkUnique([])).toBe(true)
})
