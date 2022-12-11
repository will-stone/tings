"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function isLowerCase(input) {
  if (typeof input !== "string") {
    return false;
  }
  return input === input.toLowerCase();
}
exports.isLowerCase = isLowerCase;
