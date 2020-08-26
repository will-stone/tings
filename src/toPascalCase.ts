import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'

/**
 * Converts input to PascalCase string.
 * @requires lodash
 * @example
```ts
import toPascalCase from 'tings/toPascalCase'

toPascalCase('this is text') // ThisIsText
toPascalCase('someTEXT') // SomeText
```
 */
function toPascalCase(input: unknown): string {
  return upperFirst(camelCase(String(input)))
}

export default toPascalCase
