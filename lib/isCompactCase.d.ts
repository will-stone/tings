/**
 * Determines if input is a string that does not contain whitespaces.
 * @example
```ts
import isCompactCase from 'tings/isCompactCase'

isCompactCase('thisiscompact') // true
isCompactCase('this is not compact') // false
```
 */
declare function isCompactCase(input: unknown): boolean;
export default isCompactCase;
