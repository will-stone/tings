"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function toLetters(input) {
  return String(input).replace(/[^a-zA-Z]/gu, "");
}
exports.toLetters = toLetters;
