import { expect, test } from 'vitest'

import { checkRunningInBrowser } from './check-running-in-browser.js'

test('isBrowser is true', () => {
  const originalWindow = global.window
  const originalDocument = global.document
  // @ts-expect-error -- TS doesn't like this override
  global.window = {}
  // @ts-expect-error -- TS doesn't like this override
  global.document = {}
  expect(checkRunningInBrowser()).toBe(true)
  global.window = originalWindow
  global.document = originalDocument
})

test('isBrowser is true', () => {
  expect(checkRunningInBrowser()).toBe(false)
})
