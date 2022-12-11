"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function isBrowser() {
  if (typeof window === "object" && typeof document === "object") {
    return true;
  }
  return false;
}
exports.isBrowser = isBrowser;
