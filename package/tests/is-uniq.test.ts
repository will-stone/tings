import { expect, test } from 'vitest'

import { isUniq } from '../source/index.js'

test('should return false when array does not contain unique items', () => {
  expect(isUniq(['', ''])).toBe(false)
  expect(isUniq([1, 1])).toBe(false)
})

test('should return true when array contains only unique items', () => {
  expect(isUniq(['one', 1])).toBe(true)
  expect(isUniq([1, 2])).toBe(true)
  expect(isUniq(1)).toBe(true)
  expect(isUniq([])).toBe(true)
})
