/**
 * Removes all whitespace characters from a string.
 * @category String
 * @example
```ts
import { toCompactCase } from 'tings'

toCompactCase('this is text') // thisistext
toCompactCase('someTEXT') // someTEXT
```
 */
export function toCompactCase(input: unknown): string {
  return String(input).replaceAll(/\s/gu, '')
}
