/**
 * Pauses the current function.
 * @example
```ts
import sleep from 'tings/sleep'

await sleep(2000) // sleeps for 2 seconds
```
 */
declare function sleep(milliseconds: number): Promise<void>;
export default sleep;
