"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function isLowerCase(input) {
  if (typeof input !== "string") {
    return false;
  }
  return input === input.toLowerCase();
}
exports.isLowerCase = isLowerCase;
