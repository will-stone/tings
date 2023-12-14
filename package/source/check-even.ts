/**
 * Determines if input is an even integer.
 * @category Number
 * @example
```ts
import { checkEven } from 'tings'

checkEven(-4)   // true
checkEven(-1)   // false
checkEven(0)    // true
checkEven(1)    // false
checkEven(2)    // true
checkEven(5)    // false
checkEven(9)    // false
checkEven(3.14) // false
```
 */
export function checkEven(input: unknown): input is number {
  if (typeof input !== 'number' || !Number.isInteger(input)) return false

  return input % 2 === 0
}
