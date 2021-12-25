"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Removes all non-alphabetical characters from a string.
 * @example
```ts
import toLetters from 'tings/toLetters'

toLetters('this is text') // thisistext
toLetters('123-Text!!!') // Text
```
 */
function toLetters(input) {
    return String(input).replace(/[^a-zA-Z]/gu, '');
}
exports.default = toLetters;
