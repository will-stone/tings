function isBrowser() {
  if (typeof window === "object" && typeof document === "object") {
    return true;
  }
  return false;
}
export {
  isBrowser
};
