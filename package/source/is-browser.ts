/**
 * Determines if current code is running in a browser environment.
 * @category Environment
 * @example
```ts
import { isBrowser } from 'tings'

isBrowser() // true
```
 */
function isBrowser(): boolean {
  if (typeof window === 'object' && typeof document === 'object') {
    return true
  }

  return false
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

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
}

export { isBrowser }
