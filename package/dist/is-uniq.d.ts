/**
 * Determines if an array only contains unique items.
 * Will return true for any input that's not an array.
 * @category Array
 * @example
```ts
import { isUniq } from 'tings'

isUniq([1, 2, 3]) // true
isUniq([1, 1, 2]) // false
isUniq('not array') // true
```
 */
export declare function isUniq(input: unknown): boolean;
