"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var toNumberAlways_1 = __importDefault(require("./toNumberAlways"));
/**
 * Pauses the current function.
 * @example
```ts
import sleep from 'tings/lib/sleep'

await sleep(2000) // sleeps for 2 seconds
```
 */
function sleep(milliseconds) {
    var input = milliseconds;
    var ms = (0, toNumberAlways_1.default)(input);
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}
exports.default = sleep;
