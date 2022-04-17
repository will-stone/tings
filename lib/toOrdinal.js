"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var toNumberAlways_1 = __importDefault(require("./toNumberAlways"));
/**
 * Converts a number to its ordinal string form, if possible, else returns 0th.
 * - 1 -> 1st
 * - 4.2 -> 4.2th
 * - notANumber -> 0th
 * @example
```ts
import toOrdinal from 'tings/lib/toOrdinal'

toOrdinal('this is text') // 0th
toOrdinal('3') // 3rd
toOrdinal('11') // 11th
```
 */
function toOrdinal(input) {
    if (input === void 0) { input = 0; }
    var number = (0, toNumberAlways_1.default)(input);
    var isInt = Number.isInteger(number);
    if (isInt) {
        if (String(number).endsWith('1') && number !== 11) {
            return "".concat(number, "st");
        }
        if (String(number).endsWith('2') && number !== 12) {
            return "".concat(number, "nd");
        }
        if (String(number).endsWith('3') && number !== 13) {
            return "".concat(number, "rd");
        }
    }
    return "".concat(number, "th");
}
exports.default = toOrdinal;
