/**
 * Generate an array of integers from a given number to another.
 * @category Array
 * @example
```ts
import { generateIntegers } from 'tings'

generateIntegers(1, 6) // [1, 2, 3, 4, 5, 6]
generateIntegers("abc", 6) // [] - at least one input is not a number
```
 */
export function generateIntegers(from: unknown, to: unknown): number[] {
  if (typeof from !== 'number' || typeof to !== 'number') {
    return []
  }

  const fromTrunc = Math.trunc(from)
  const toTrunc = Math.trunc(to)

  const step = fromTrunc < toTrunc ? 1 : -1
  const length = Math.abs(toTrunc - fromTrunc) + 1

  // Construct the array with slots first, as this is more performant than
  // adding to the array on each iteration below.
  // eslint-disable-next-line unicorn/no-new-array -- this method is much more performant than Unicorn's suggested method of `Array.from({length})`.
  const list = new Array(length)

  // `for` and `while` loops are much faster than using array methods.
  for (let index = 0; index < length; index = index + 1) {
    list[index] = fromTrunc + index * step
  }

  return list
}
