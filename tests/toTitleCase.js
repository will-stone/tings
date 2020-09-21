import { suite, test } from 'uvu'
import * as assert from 'uvu/assert'

import {
  isCompactCase,
  isLowerCase,
  isOccupied,
  isUniq,
  toTitleCase,
} from '../pkg'
import { englishSmallWords } from '../pkg/dist-src/toTitleCase'

const wordsList = suite('words list')

wordsList('has no duplicates', () => {
  assert.is(isUniq(englishSmallWords), true)
})

wordsList('is sorted alphbetically', () => {
  assert.equal([...englishSmallWords].sort(), englishSmallWords)
})

wordsList('is all lowercase', () => {
  assert.is(englishSmallWords.every(isLowerCase), true)
})

wordsList('does not contain any spaces', () => {
  assert.is(englishSmallWords.every(isCompactCase), true)
})

wordsList('is at least one char', () => {
  assert.is(englishSmallWords.every(isOccupied), true)
})

wordsList.run()

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
