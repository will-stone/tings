"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function toCompactCase(input) {
  return String(input).replaceAll(/\s/gu, "");
}
exports.toCompactCase = toCompactCase;
