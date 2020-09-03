import toPascalCase from './toPascalCase'

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
  const input = string as unknown

  if (typeof input !== 'string') {
    return false
  }

  return toPascalCase(input) === input
}

export default isPascalCase
