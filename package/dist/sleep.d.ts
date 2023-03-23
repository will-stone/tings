/**
 * Pauses the current function.
 * @category Misc
 * @example
```ts
import { sleep } from 'tings'

await sleep(2000) // sleeps for 2 seconds
```
 */
export declare function sleep(milliseconds: number): Promise<void>;
