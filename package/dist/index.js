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

// source/check-lower-case.ts
function checkLowerCase(input) {
  if (typeof input !== "string") {
    return false;
  }
  return input === input.toLowerCase();
}

// source/check-running-in-browser.ts
function checkRunningInBrowser() {
  if (typeof window === "object" && typeof document === "object") {
    return true;
  }
  return false;
}

// source/check-unique.ts
function checkUnique(input) {
  if (Array.isArray(input)) {
    return new Set(input).size === input.length;
  }
  return true;
}

// source/generate-integers.ts
function generateIntegers(from, to) {
  const list = [];
  for (let index = from; from < to ? index <= to : index >= to; index = from < to ? index + 1 : index - 1) {
    list.push(index);
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
  checkCompactCase,
  checkLowerCase,
  checkRunningInBrowser,
  checkUnique,
  generateIntegers,
  sleep,
  toCompactCase,
  toLetters,
  toNumber,
  toOrdinal
};
