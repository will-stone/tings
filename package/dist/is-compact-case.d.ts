/**
 * Determines if input is a string that does not contain whitespaces.
 * @example
```ts
import { isCompactCase } from 'tings'

isCompactCase('thisiscompact') // true
isCompactCase('this is not compact') // false
```
 */
declare function isCompactCase(input: unknown): input is string;
export { isCompactCase };
