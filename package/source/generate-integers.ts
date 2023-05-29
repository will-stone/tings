/**
 * Generate an array of integers from a given number to another.
 * @category Array
 * @example
```ts
import { generateIntegers } from 'tings'

generateIntegers(1, 6) // [1, 2, 3, 4, 5, 6]
```
 */
export function generateIntegers(from: unknown, to: unknown): number[] {
  if (typeof from !== 'number' || typeof to !== 'number') {
    return []
  }

  const list = []

  for (
    let index = from;
    from < to ? index <= to : index >= to;
    index = from < to ? index + 1 : index - 1
  ) {
    list.push(index)
  }

  return list
}
