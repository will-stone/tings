/**
 * Determines if input is a string that does not contain white-spaces.
 * @category String
 * @example
```ts
import { isCompactCase } from 'tings'

isCompactCase('thisiscompact') // true
isCompactCase('this is not compact') // false
```
 */
export declare function isCompactCase(input: unknown): input is string;
