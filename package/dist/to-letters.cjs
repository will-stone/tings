"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function toLetters(input) {
  return String(input).replace(/[^a-zA-Z]/gu, "");
}
exports.toLetters = toLetters;