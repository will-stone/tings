import { toNumberAlways } from './to-number-always.js'

/**
 * Pauses the current function.
 * @example
```ts
import { sleep } from 'tings'

await sleep(2000) // sleeps for 2 seconds
```
 */
function sleep(milliseconds: number): Promise<void> {
  const input = milliseconds as unknown

  const ms = toNumberAlways(input)

  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export { sleep }
