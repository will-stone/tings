function toLetters(input) {
  return String(input).replaceAll(/[^a-zA-Z]/gu, "");
}
export {
  toLetters
};
