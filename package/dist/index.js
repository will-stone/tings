// source/check-browser.ts
function checkBrowser() {
  if (typeof window === "object" && typeof document === "object") {
    return true;
  }
  return false;
}

// source/check-compact-case.ts
function checkCompactCase(input) {
  if (typeof input !== "string") {
    return false;
  }
  if (input.length === 0) {
    return true;
  }
  return /^\S+$/u.test(input);
}

// source/check-date.ts
function checkDate(input) {
  return input instanceof Date && (input == null ? void 0 : input.toString()) !== "Invalid Date";
}

// source/check-lower-case.ts
function checkLowerCase(input) {
  if (typeof input !== "string") {
    return false;
  }
  return input === input.toLowerCase();
}

// source/check-prime.ts
function checkPrime(input) {
  if (typeof input !== "number" || !Number.isInteger(input))
    return false;
  for (let i = 2, s = Math.sqrt(input); i <= s; i = i + 1) {
    if (input % i === 0)
      return false;
  }
  return input > 1;
}

// source/check-unique.ts
function checkUnique(input) {
  if (Array.isArray(input)) {
    return new Set(input).size === input.length;
  }
  return true;
}

// source/check-url-absolute.ts
var checkUrlAbsolute = (url) => {
  if (typeof url !== "string")
    return false;
  return /^(?:[+a-z]+:)?\/\//iu.test(url);
};

// source/generate-integers.ts
function generateIntegers(from, to) {
  if (typeof from !== "number" || typeof to !== "number") {
    return [];
  }
  const fromTrunc = Math.trunc(from);
  const toTrunc = Math.trunc(to);
  const step = fromTrunc < toTrunc ? 1 : -1;
  const length = Math.abs(toTrunc - fromTrunc) + 1;
  const list = new Array(length);
  for (let index = 0; index < length; index = index + 1) {
    list[index] = fromTrunc + index * step;
  }
  return list;
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
export {
  checkBrowser,
  checkCompactCase,
  checkDate,
  checkLowerCase,
  checkPrime,
  checkUnique,
  checkUrlAbsolute,
  generateIntegers,
  sleep,
  toCompactCase,
  toLetters,
  toNumber,
  toOrdinal
};
