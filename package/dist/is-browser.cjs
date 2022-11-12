"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function isBrowser() {
  if (typeof window === "object" && typeof document === "object") {
    return true;
  }
  return false;
}
exports.isBrowser = isBrowser;
