const intToOrdinal = (int: number | string): string => {
  const intAsString = String(int)
  const intAsNumber = Number(int)

  if (
    (typeof int !== 'number' || typeof int !== 'string') &&
    !Number.isInteger(intAsNumber)
  ) {
    throw new TypeError(`${intAsString} is not an integer`)
  }

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
