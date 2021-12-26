"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Will return the given input as a number, if it cannot be converted, it will return 0.
 * @example
```ts
import toNumberAlways from 'tings/lib/toNumberAlways'

toNumberAlways('this is text') // 0
toNumberAlways('3') // 3
toNumberAlways(0.4) // 0.4
toNumberAlways(new Set([])) // 0
```
 */
function toNumberAlways(input) {
    try {
        const number = Number(input);
        if (Number.isNaN(number)) {
            return 0;
        }
        return number;
    }
    catch (_a) {
        return 0;
    }
}
exports.default = toNumberAlways;
