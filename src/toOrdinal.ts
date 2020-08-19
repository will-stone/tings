import toNumberAlways from './toNumberAlways'

const toOrdinal = (int: unknown = 0): string => {
  const intAsNumber = toNumberAlways(int)
  const intAsString = String(intAsNumber)

  if (intAsString.endsWith('1') && intAsString !== '11') {
    return `${intAsString}st`
  }

  if (intAsString.endsWith('2') && intAsString !== '12') {
    return `${intAsString}nd`
  }

  if (intAsString.endsWith('3') && intAsString !== '13') {
    return `${intAsString}rd`
  }

  return `${intAsString}th`
}

export default toOrdinal
