"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determines if input is a string containing no UPPERcase characters.
 * @example
```ts
import isLowerCase from 'tings/lib/isLowerCase'

isLowerCase('this is lower') // true
isLowerCase('This is not LOWER') // false
```
 */
function isLowerCase(string) {
    var input = string;
    if (typeof input !== 'string') {
        return false;
    }
    return input === input.toLowerCase();
}
exports.default = isLowerCase;
