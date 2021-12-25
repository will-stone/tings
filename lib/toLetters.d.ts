/**
 * Removes all non-alphabetical characters from a string.
 * @example
```ts
import toLetters from 'tings/toLetters'

toLetters('this is text') // thisistext
toLetters('123-Text!!!') // Text
```
 */
declare function toLetters(input: unknown): string;
export default toLetters;
