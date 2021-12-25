"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determines if an array only contains unique items.
 * Will return true for any input that's not an array.
 * @example
```ts
import isUniq from 'tings/isUniq'

isUniq([1, 2, 3]) // true
isUniq([1, 1, 2]) // false
isUniq('not array') // true
```
 */
function isUniq(input) {
    if (Array.isArray(input)) {
        return new Set(input).size === input.length;
    }
    return true;
}
exports.default = isUniq;
