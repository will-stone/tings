/**
 * Determines if current code is running in a browser environment.
 * @category Environment
 * @example
```ts
import { checkBrowser } from 'tings'

checkBrowser() // true
```
 */
export function checkBrowser(): boolean {
  if (typeof window === 'object' && typeof document === 'object') {
    return true
  }

  return false
}
