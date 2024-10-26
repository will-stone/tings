/**
 * Determines if a URL string is absolute by seeing if it starts with a protocol.
 * Will return false for any input that's not a string.
 * @category String
 * @example
```ts
import { checkUrlAbsolute } from 'tings'

checkUrlAbsolute("http://example.com/page") // true
checkUrlAbsolute("/page") // false
checkUrlAbsolute(123) // false - input is not a string
```
 */
export function checkUrlAbsolute(url: unknown): boolean {
  if (typeof url !== 'string') return false
  // regex sourced from https://stackoverflow.com/a/19709846
  return /^(?:[+a-z]+:)?\/\//iu.test(url)
}
