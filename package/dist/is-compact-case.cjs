"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function isCompactCase(input) {
  if (typeof input !== "string") {
    return false;
  }
  if (input.length === 0) {
    return true;
  }
  return /^\S+$/u.test(input);
}
exports.isCompactCase = isCompactCase;
