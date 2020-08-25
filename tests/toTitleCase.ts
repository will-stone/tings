import { test } from 'uvu'
import * as assert from 'uvu/assert'

import {
  isCompactCase,
  isLowerCase,
  isOccupied,
  isUniq,
  toTitleCase,
} from '../src'
import { englishSmallWords } from '../src/toTitleCase'

// TODO use suite for this
test('englishSmallWords lookup array is correct', () => {
  // no duplicates
  assert.is(isUniq(englishSmallWords), true)
  // sorted alphbetically
  assert.equal([...englishSmallWords].sort(), englishSmallWords)
  // all lowercase
  assert.is(englishSmallWords.every(isLowerCase), true)
  // does not contain any spaces
  assert.is(englishSmallWords.every(isCompactCase), true)
  // is at least one char
  assert.is(englishSmallWords.every(isOccupied), true)
})

const cases = [
  [
    'this Is a test of The Plugin VS. blah Blah BLAH. new Sentance Lorem ipsum dolor sit amet',
    'This is a Test of the Plugin vs Blah Blah BLAH New Sentance Lorem Ipsum Dolor Sit Amet',
  ],
  ['smallWordsAreNotCapitalised', 'Small Words are not Capitalised'],
  [123, '123'],
  [new Map(), 'Object Map'],
  [() => false, 'False'],
]

cases.forEach(([input, expected]) => {
  test(`title-cases the string: ${String(input)}`, () => {
    assert.is(toTitleCase(input), expected)
  })
})

test.run()
