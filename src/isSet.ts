/**
 * Determines if input is a Set object
 * @param input any input
 * @see {@link https://stackoverflow.com/a/29926193}
 */
const isSet = <T = unknown>(input: unknown): input is Set<T> => {
  try {
    // throws if o is not an object or has no [[SetData]]
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    Set.prototype.has.call(input)
    return true
  } catch {
    return false
  }
}

export default isSet
