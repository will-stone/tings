/* eslint-disable unicorn/prefer-global-this -- want to check window and document */

import { expect, test } from 'vitest'

import { checkBrowser } from './check-browser.js'

test('isBrowser is true', () => {
  const originalWindow = global.window
  const originalDocument = global.document
  // @ts-expect-error -- TS doesn't like this override
  global.window = {}
  // @ts-expect-error -- TS doesn't like this override
  global.document = {}
  expect(checkBrowser()).toBe(true)
  global.window = originalWindow
  global.document = originalDocument
})

test('isBrowser is false', () => {
  expect(checkBrowser()).toBe(false)
})
