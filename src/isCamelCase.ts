import camelCase from 'lodash/camelCase'

/**
 * @internal
 */
export function _isCamelCase(input: unknown): boolean {
  if (typeof input !== 'string') {
    return false
  }

  return camelCase(input) === input
}

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
function isCamelCase(string: string): boolean {
  return _isCamelCase(string)
}

export default isCamelCase
