/**
 * Will return the given input as a number, if it cannot be converted, it will return 0.
 * @category Number
 * @example
```ts
import { toNumber } from 'tings'

toNumber('this is text') // 0
toNumber('3') // 3
toNumber(0.4) // 0.4
toNumber(new Set([])) // 0
```
 */
export declare function toNumber(input: unknown): number;
