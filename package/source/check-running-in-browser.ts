/**
 * Determines if current code is running in a browser environment.
 * @category Environment
 * @example
```ts
import { checkRunningInBrowser } from 'tings'

checkRunningInBrowser() // true
```
 */
export function checkRunningInBrowser(): boolean {
  if (typeof window === 'object' && typeof document === 'object') {
    return true
  }

  return false
}
