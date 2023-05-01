"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// source/index.ts
var source_exports = {};
__export(source_exports, {
  isBrowser: () => isBrowser,
  isCompactCase: () => isCompactCase,
  isLowerCase: () => isLowerCase,
  isUniq: () => isUniq,
  sleep: () => sleep,
  toCompactCase: () => toCompactCase,
  toLetters: () => toLetters,
  toNumber: () => toNumber,
  toOrdinal: () => toOrdinal
});
module.exports = __toCommonJS(source_exports);

// source/is-browser.ts
function isBrowser() {
  if (typeof window === "object" && typeof document === "object") {
    return true;
  }
  return false;
}

// source/is-compact-case.ts
function isCompactCase(input) {
  if (typeof input !== "string") {
    return false;
  }
  if (input.length === 0) {
    return true;
  }
  return /^\S+$/u.test(input);
}

// source/is-lower-case.ts
function isLowerCase(input) {
  if (typeof input !== "string") {
    return false;
  }
  return input === input.toLowerCase();
}

// source/is-uniq.ts
function isUniq(input) {
  if (Array.isArray(input)) {
    return new Set(input).size === input.length;
  }
  return true;
}

// source/to-number.ts
function toNumber(input) {
  try {
    const number = Number(input);
    if (Number.isNaN(number)) {
      return 0;
    }
    return number;
  } catch {
    return 0;
  }
}

// source/sleep.ts
function sleep(milliseconds) {
  const input = milliseconds;
  const ms = toNumber(input);
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// source/to-compact-case.ts
function toCompactCase(input) {
  return String(input).replaceAll(/\s/gu, "");
}

// source/to-letters.ts
function toLetters(input) {
  return String(input).replaceAll(/[^a-zA-Z]/gu, "");
}

// source/to-ordinal.ts
function toOrdinal(input = 0) {
  const number = toNumber(input);
  const isInt = Number.isInteger(number);
  if (isInt) {
    if (String(number).endsWith("1") && number !== 11) {
      return `${number}st`;
    }
    if (String(number).endsWith("2") && number !== 12) {
      return `${number}nd`;
    }
    if (String(number).endsWith("3") && number !== 13) {
      return `${number}rd`;
    }
  }
  return `${number}th`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isBrowser,
  isCompactCase,
  isLowerCase,
  isUniq,
  sleep,
  toCompactCase,
  toLetters,
  toNumber,
  toOrdinal
});
