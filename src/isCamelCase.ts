import camelCase from 'lodash/camelCase'

/**
 * Determines if input is a camelCase string.
 * @requires lodash
 * @example
```ts
import isCamelCase from 'tings/isCamelCase'

isCamelCase('camelCase') // true
isCamelCase('NOTCamelCase') // false
```
 */
function isCamelCase(input: unknown): boolean {
  if (typeof input !== 'string') {
    return false
  }

  return camelCase(input) === input
}

export default isCamelCase
