/**
 * Will return the given input as a number, if it cannot be converted, it will return 0.
 * @example
```ts
import toNumberAlways from 'tings/lib/toNumberAlways'

toNumberAlways('this is text') // 0
toNumberAlways('3') // 3
toNumberAlways(0.4) // 0.4
toNumberAlways(new Set([])) // 0
```
 */
declare function toNumberAlways(input: unknown): number;
export default toNumberAlways;
