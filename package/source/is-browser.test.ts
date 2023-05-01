import { expect, test } from 'vitest'

import { isBrowser } from './is-browser.js'

test('isBrowser is true', () => {
  const originalWindow = global.window
  const originalDocument = global.document
  // @ts-expect-error -- TS doesn't like this override
  global.window = {}
  // @ts-expect-error -- TS doesn't like this override
  global.document = {}
  expect(isBrowser()).toBe(true)
  global.window = originalWindow
  global.document = originalDocument
})

test('isBrowser is true', () => {
  expect(isBrowser()).toBe(false)
})
