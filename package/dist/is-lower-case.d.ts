/**
 * Determines if input is a string containing no UPPERcase characters.
 * @example
```ts
import { isLowerCase } from 'tings'

isLowerCase('this is lower') // true
isLowerCase('This is not LOWER') // false
```
 */
declare function isLowerCase(input: unknown): input is string;
export { isLowerCase };
