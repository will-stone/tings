/**
 * Converts a number to its ordinal string form, if possible, else returns 0th.
 * - 1 -> 1st
 * - 4.2 -> 4.2th
 * - notANumber -> 0th
 * @category Number
 * @example
```ts
import { toOrdinal } from 'tings'

toOrdinal('this is text') // 0th
toOrdinal('3') // 3rd
toOrdinal('11') // 11th
```
 */
export declare function toOrdinal(input?: unknown): string;
