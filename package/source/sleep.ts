import { toNumber } from './to-number.js'

/**
 * Pauses the current function.
 * @category Misc
 * @example
```ts
import { sleep } from 'tings'

await sleep(2000) // sleeps for 2 seconds
await sleep("abc") // sleeps for 0 seconds as input is not a number
```
 */
export function sleep(milliseconds: number): Promise<void> {
  const input = milliseconds as unknown

  const ms = toNumber(input)

  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
