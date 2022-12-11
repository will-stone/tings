"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const toNumber = require("./to-number.cjs");
function sleep(milliseconds) {
  const input = milliseconds;
  const ms = toNumber.toNumber(input);
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
exports.sleep = sleep;
