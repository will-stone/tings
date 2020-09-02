import toPascalCase from './toPascalCase'

/**
 * @internal
 */
export function _isPascalCase(input: unknown): boolean {
  if (typeof input !== 'string') {
    return false
  }

  return toPascalCase(input) === input
}

/**
 * Determines if input is a PascalCase string.
 * @requires lodash
 * @example
```ts
import isPascalCase from 'tings/isPascalCase'

isPascalCase('ThisIsPascal') // true
isPascalCase('notPascal') // false
```
 */
function isPascalCase(string: string): boolean {
  return _isPascalCase(string)
}

export default isPascalCase
