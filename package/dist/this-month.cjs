"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function thisMonth(locale) {
  const relativeTimeFormatter = new Intl.RelativeTimeFormat(locale, {
    localeMatcher: "best fit",
    numeric: "auto",
    style: "long"
  });
  return relativeTimeFormatter.format(0, "month");
}
exports.thisMonth = thisMonth;
