import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { toTitleCase } from '../src'
import { englishSmallWords } from '../src/toTitleCase'

function isUniq(array: string[]): boolean {
  return new Set(array).size === array.length
}

test('small words list does not include duplicates', () => {
  assert.is(isUniq(englishSmallWords), true)
})

test('small words list is sorted alphbetically', () => {
  assert.equal([...englishSmallWords].sort(), englishSmallWords)
})

function isLowerCase(string: string): boolean {
  return string === string.toLowerCase()
}

test('small words list are all lowercase', () => {
  assert.is(englishSmallWords.every(isLowerCase), true)
})

function isTrimmed(string: string): boolean {
  return string === string.trim()
}

test('small words list do not have leading or trailing spaces', () => {
  assert.is(englishSmallWords.every(isTrimmed), true)
})

function isAtLeastOneChar(string: string): boolean {
  return string.length >= 1
}

test('small words list include at least one character', () => {
  assert.is(englishSmallWords.every(isAtLeastOneChar), true)
})

const actual =
  'this Is a test of The Plugin VS. blah Blah BLAH. new Sentance Lorem ipsum dolor sit amet'

const expected =
  'This is a Test of the Plugin vs Blah Blah BLAH New Sentance Lorem Ipsum Dolor Sit Amet'

test('title-cases the string', () => {
  assert.is(toTitleCase(actual), expected)
})
