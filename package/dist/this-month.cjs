"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
function thisMonth(locale = "en-GB") {
  const relativeTimeFormatter = new Intl.RelativeTimeFormat(locale, {
    localeMatcher: "best fit",
    numeric: "auto",
    style: "long"
  });
  return relativeTimeFormatter.format(0, "month");
}
exports.toCompactCase = thisMonth;
