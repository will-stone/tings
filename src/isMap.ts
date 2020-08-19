/**
 * Determines if input is a Map object
 * @param input any input
 * @see {@link https://stackoverflow.com/a/29926193}
 */
const isMap = <K = unknown, V = unknown>(
  input: unknown,
): input is Map<K, V> => {
  try {
    // throws if o is not an object or has no [[SetData]]
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    Map.prototype.has.call(input)
    return true
  } catch {
    return false
  }
}

export default isMap
