function toLetters(input) {
  return String(input).replace(/[^a-zA-Z]/gu, "");
}
export {
  toLetters
};
