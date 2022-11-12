function isLowerCase(input) {
  if (typeof input !== "string") {
    return false;
  }
  return input === input.toLowerCase();
}
export {
  isLowerCase
};
