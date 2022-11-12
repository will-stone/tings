"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const toNumber = require("./to-number.cjs");
function toOrdinal(input = 0) {
  const number = toNumber.toNumber(input);
  const isInt = Number.isInteger(number);
  if (isInt) {
    if (String(number).endsWith("1") && number !== 11) {
      return `${number}st`;
    }
    if (String(number).endsWith("2") && number !== 12) {
      return `${number}nd`;
    }
    if (String(number).endsWith("3") && number !== 13) {
      return `${number}rd`;
    }
  }
  return `${number}th`;
}
exports.toOrdinal = toOrdinal;
