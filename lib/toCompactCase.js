"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Removes all whitespace characters from a string.
 * @example
```ts
import toCompactCase from 'tings/toCompactCase'

toCompactCase('this is text') // thisistext
toCompactCase('someTEXT') // someTEXT
```
 */
function toCompactCase(input) {
    return String(input).replace(/\s/gu, '');
}
exports.default = toCompactCase;
