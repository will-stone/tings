"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function isUniq(input) {
  if (Array.isArray(input)) {
    return new Set(input).size === input.length;
  }
  return true;
}
exports.isUniq = isUniq;
