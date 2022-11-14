"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function toNumber(input) {
  try {
    const number = Number(input);
    if (Number.isNaN(number)) {
      return 0;
    }
    return number;
  } catch {
    return 0;
  }
}
exports.toNumber = toNumber;