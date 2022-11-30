import { toNumber } from './to-number.js'

/**
 * Converts a number to its ordinal string form, if possible, else returns 0th.
 * - 1 -> 1st
 * - 4.2 -> 4.2th
 * - notANumber -> 0th
 * @category Number
 * @example
```ts
import { toOrdinal } from 'tings'

toOrdinal('this is text') // 0th
toOrdinal('3') // 3rd
toOrdinal('11') // 11th
```
 */
function toOrdinal(input: unknown = 0): string {
  const number = toNumber(input)
  const isInt = Number.isInteger(number)

  if (isInt) {
    if (String(number).endsWith('1') && number !== 11) {
      return `${number}st`
    }

    if (String(number).endsWith('2') && number !== 12) {
      return `${number}nd`
    }

    if (String(number).endsWith('3') && number !== 13) {
      return `${number}rd`
    }
  }

  return `${number}th`
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  const cases = [
    // Nonsense
    ['blah blah', '0th'],
    [Number.NaN, '0th'],
    // Numbers
    [-2, '-2nd'],
    [-1, '-1st'],
    [0, '0th'],
    [1, '1st'],
    [2, '2nd'],
    [3, '3rd'],
    [4, '4th'],
    [5, '5th'],
    [6, '6th'],
    [7, '7th'],
    [8, '8th'],
    [9, '9th'],
    [10, '10th'],
    [11, '11th'],
    [12, '12th'],
    [13, '13th'],
    [14, '14th'],
    [15, '15th'],
    [16, '16th'],
    [17, '17th'],
    [18, '18th'],
    [19, '19th'],
    [20, '20th'],
    [21, '21st'],
    [22, '22nd'],
    [23, '23rd'],
    [24, '24th'],
    [25, '25th'],
    [26, '26th'],
    [27, '27th'],
    [28, '28th'],
    [29, '29th'],
    [30, '30th'],
    // Strings
    ['1', '1st'],
    ['2', '2nd'],
    ['3', '3rd'],
    ['4', '4th'],
    ['5', '5th'],
    ['6', '6th'],
    ['7', '7th'],
    ['8', '8th'],
    ['9', '9th'],
    ['10', '10th'],
    ['11', '11th'],
    ['12', '12th'],
    ['13', '13th'],
    ['14', '14th'],
    ['15', '15th'],
    ['16', '16th'],
    ['17', '17th'],
    ['18', '18th'],
    ['19', '19th'],
    ['20', '20th'],
    ['21', '21st'],
    ['22', '22nd'],
    ['23', '23rd'],
    ['24', '24th'],
    ['25', '25th'],
    ['26', '26th'],
    ['27', '27th'],
    ['28', '28th'],
    ['29', '29th'],
    ['30', '30th'],
    // Floats -- these make no sense but this website says "0.3th quantile": https://www.researchgate.net/figure/Estimation-results-at-the-03th-quantile_tbl4_258390217
    [0.3, '0.3th'],
    [3.11, '3.11th'],
    [3.21, '3.21th'],
    [3.29, '3.29th'],
  ]

  test.each(cases)('%s is %s', (input, expected) => {
    expect(toOrdinal(input)).toBe(expected)
  })
}

export { toOrdinal }
