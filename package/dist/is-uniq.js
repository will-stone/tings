function isUniq(input) {
  if (Array.isArray(input)) {
    return new Set(input).size === input.length;
  }
  return true;
}
export {
  isUniq
};
