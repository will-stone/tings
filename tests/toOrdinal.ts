import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { toOrdinal } from '../src'

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

cases.forEach(([input, expected]) => {
  test(`${input} is ${expected}`, () => {
    assert.is(toOrdinal(input), expected)
  })
})

test.run()
