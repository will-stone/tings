/**
 * Removes all whitespace characters from a string.
 * @example
```ts
import { toCompactCase } from 'tings'

toCompactCase('this is text') // thisistext
toCompactCase('someTEXT') // someTEXT
```
 */
function toCompactCase(input: unknown): string {
  return String(input).replace(/\s/gu, '')
}

export default toCompactCase
