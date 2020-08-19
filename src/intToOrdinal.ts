import toNumberAlways from './toNumberAlways'

const intToOrdinal = (int: unknown = 0): string => {
  const intAsNumber = toNumberAlways(int)
  const intAsString = String(intAsNumber)

  if (intAsString.endsWith('1') && intAsNumber !== 11) {
    return `${int}st`
  }

  if (intAsString.endsWith('2') && intAsNumber !== 12) {
    return `${int}nd`
  }

  if (intAsString.endsWith('3') && intAsNumber !== 13) {
    return `${int}rd`
  }

  return `${int}th`
}

export default intToOrdinal
