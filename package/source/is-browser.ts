/**
 * Determines if current code is running in a browser environment.
 * @category Environment
 * @example
```ts
import { isBrowser } from 'tings'

isBrowser() // true
```
 */
export function isBrowser(): boolean {
  if (typeof window === 'object' && typeof document === 'object') {
    return true
  }

  return false
}
