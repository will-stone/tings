/**
 * Removes all whitespace characters from a string.
 * @example
```ts
import toCompactCase from 'tings/lib/toCompactCase'

toCompactCase('this is text') // thisistext
toCompactCase('someTEXT') // someTEXT
```
 */
declare function toCompactCase(input: unknown): string;
export default toCompactCase;
