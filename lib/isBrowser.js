"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Is current code running in a browser environment
 * @example
```ts
import isBrowser from 'tings/lib/isBrowser'

isBrowser() // true
```
 */
function isBrowser() {
    if (typeof window === 'object' && typeof document === 'object') {
        return true;
    }
    return false;
}
exports.default = isBrowser;
