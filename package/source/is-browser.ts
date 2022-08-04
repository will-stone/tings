/**
 * Determines if current code is running in a browser environment.
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

export { isBrowser }
