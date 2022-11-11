/**
 * Will return the given input as a number, if it cannot be converted, it will return 0.
 * @example
```ts
import { toNumber } from 'tings'

toNumber('this is text') // 0
toNumber('3') // 3
toNumber(0.4) // 0.4
toNumber(new Set([])) // 0
```
 */
function toNumber(input: unknown): number {
  try {
    const number = Number(input)

    if (Number.isNaN(number)) {
      return 0
    }

    return number
  } catch {
    return 0
  }
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  const cases = [
    [-2, -2],
    [-1, -1],
    [0, 0],
    [1, 1],
    [2, 2],
    ['-2', -2],
    ['-1', -1],
    ['0', 0],
    ['1', 1],
    ['2', 2],
    ['blah', 0],
    [new Set(), 0],
    [[], 0],
    // eslint-disable-next-line unicorn/no-null
    [null, 0],
    [undefined, 0],
    [true, 1],
    [false, 0],
    [1.1, 1.1],
    [Number.NaN, 0],
  ]

  // @ts-expect-error -- doesn't like some of the inputs
  test.each(cases)('%s is %s', (input, expected) => {
    expect(toNumber(input)).toBe(expected)
  })
}

export { toNumber }
