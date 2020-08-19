import isMap from './isMap'
import isSet from './isSet'

const isVacant = (input: unknown): boolean => {
  if (input === null) {
    return true
  }

  // Empty string or an array with no items
  if (typeof input === 'string' || Array.isArray(input)) {
    return input.length === 0
  }

  if (isSet(input) || isMap(input)) {
    return input.size === 0
  }

  // Object without any keys
  if (typeof input === 'object' && Object.keys(input || {}).length === 0) {
    return true
  }

  return !input
}

export default isVacant
