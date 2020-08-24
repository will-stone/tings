import upperFirst from 'lodash/upperFirst'
import words from 'lodash/words'

export const englishSmallWords = [
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'but',
  'by',
  'en',
  'for',
  'if',
  'in',
  'is',
  'nor',
  'not',
  'of',
  'on',
  'or',
  'per',
  'the',
  'to',
  'via',
  'vs',
]

/**
 * Keep small words in lowercase, otherwise make the first letter uppercase.
 */
const toTitleCase = (
  input: unknown,
  smallWords = englishSmallWords,
): string => {
  const wordCollection: string[] = []

  for (const word of words(String(input))) {
    const lowerWord = word.toLowerCase()
    const casedWord = smallWords.includes(lowerWord)
      ? lowerWord
      : upperFirst(word)
    wordCollection.push(casedWord)
  }

  return wordCollection.join(' ')
}

export default toTitleCase
