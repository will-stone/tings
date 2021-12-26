"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determines if input is a string that does not contain whitespaces.
 * @example
```ts
import isCompactCase from 'tings/lib/isCompactCase'

isCompactCase('thisiscompact') // true
isCompactCase('this is not compact') // false
```
 */
function isCompactCase(input) {
    if (typeof input !== 'string') {
        return false;
    }
    if (input.length === 0) {
        return true;
    }
    return /^\S+$/u.test(input);
}
exports.default = isCompactCase;
