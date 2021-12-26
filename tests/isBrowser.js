import { test } from 'uvu'
import * as assert from 'uvu/assert'

import isBrowser from '../lib/isBrowser'

test('isBrowser is true', () => {
  const originalWindow = global.window
  const originalDocument = global.document
  global.window = {}
  global.document = {}
  assert.is(isBrowser(), true)
  global.window = originalWindow
  global.document = originalDocument
})

test('isBrowser is true', () => {
  assert.is(isBrowser(), false)
})

test.run()
