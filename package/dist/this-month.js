function thisMonth(locale = "en-GB") {
  const relativeTimeFormatter = new Intl.RelativeTimeFormat(locale, {
    localeMatcher: "best fit",
    numeric: "auto",
    style: "long"
  });
  return relativeTimeFormatter.format(0, "month");
}
export {
  thisMonth as toCompactCase
};
