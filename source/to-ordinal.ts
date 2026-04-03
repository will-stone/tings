import { toNumber } from './to-number.js'

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
toOrdinal(3.14) // 3.14th
```
 */
export function toOrdinal(input: unknown = 0): string {
  const number = toNumber(input)
  const isInt = Number.isInteger(number)

  if (isInt) {
    if (number !== 11 && Math.abs(number) % 10 === 1) {
      return `${number}st`
    }

    if (number !== 12 && Math.abs(number) % 10 === 2) {
      return `${number}nd`
    }

    if (number !== 13 && Math.abs(number) % 10 === 3) {
      return `${number}rd`
    }
  }

  return `${number}th`
}
