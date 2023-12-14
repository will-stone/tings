/**
 * Determines if input is a prime number.
 * @category Number
 * @example
```ts
import { checkPrime } from 'tings'

checkPrime(0)    // false
checkPrime(1)    // false
checkPrime(2)    // true
checkPrime(5)    // true
checkPrime(9)    // false
checkPrime(3.14) // false
```
 */
export function checkPrime(input: unknown): input is number {
  if (typeof input !== 'number' || !Number.isInteger(input)) return false

  for (let i = 2, s = Math.sqrt(input); i <= s; i = i + 1) {
    if (input % i === 0) return false
  }

  return input > 1
}
