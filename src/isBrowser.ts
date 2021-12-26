/**
 * Is current code running in a browser environment
 * @example
```ts
import isBrowser from 'tings/lib/isBrowser'

isBrowser() // true
```
 */
function isBrowser(): boolean {
  if (typeof window === 'object' && typeof document === 'object') {
    return true
  }

  return false
}

export default isBrowser
