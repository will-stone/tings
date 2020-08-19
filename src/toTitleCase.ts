import upperFirst from 'lodash/upperFirst'
import words from 'lodash/words'

export const englishSmallWords = [
  'a',
  'an',
  'and',
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
 * keep small words in lowercase else uppercase the first letter
 * @param input
 */
const toTitleCase = (
  input: unknown,
  smallWords = englishSmallWords,
): string => {
  const wordCollection: string[] = []

  for (const word of words(input as string)) {
    const lowerWord = word.toLowerCase()
    const casedWord = smallWords.includes(lowerWord)
      ? lowerWord
      : upperFirst(word)
    wordCollection.push(casedWord)
  }

  return wordCollection.join(' ')
}

export default toTitleCase
