import toNumberAlways from './toNumberAlways'

/**
 * @internal
 */
function _sleep(input: unknown): Promise<void> {
  const ms = toNumberAlways(input)

  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

/**
 * Pauses the current function.
 * @example
```ts
import sleep from 'tings/sleep'

await sleep(2000) // sleeps for 2 seconds
```
 */
function sleep(milliseconds: number): Promise<void> {
  return _sleep(milliseconds)
}

export default sleep
