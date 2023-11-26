/**
 * Determines if input is a string that does not contain white-spaces.
 * @category String
 * @example
```ts
import { checkCompactCase } from 'tings'

checkCompactCase('thisiscompact') // true
checkCompactCase('this is not compact') // false
checkCompactCase(123) // false - input is not a string
```
 */
declare function checkCompactCase(input: unknown): input is string;

/**
 * Determines if input is a string containing no UPPERcase characters.
 * @category String
 * @example
```ts
import { checkLowerCase } from 'tings'

checkLowerCase('this is lower') // true
checkLowerCase('This is not LOWER') // false
checkLowerCase(123) // false - input is not a string
```
 */
declare function checkLowerCase(input: unknown): input is string;

/**
 * Determines if current code is running in a browser environment.
 * @category Environment
 * @example
```ts
import { checkRunningInBrowser } from 'tings'

checkRunningInBrowser() // true
```
 */
declare function checkRunningInBrowser(): boolean;

/**
 * Determines if an array only contains unique items.
 * Will return true for any input that's not an array.
 * @category Array
 * @example
```ts
import { checkUnique } from 'tings'

checkUnique([1, 2, 3]) // true
checkUnique([1, 1, 2]) // false
checkUnique('not array') // true
```
 */
declare function checkUnique(input: unknown): boolean;

/**
 * Determines if a URL string is absolute by seeing if it starts with a protocol.
 * Will return false for any input that's not a string.
 * @category String
 * @example
```ts
import { checkUrlAbsolute } from 'tings'

checkUrlAbsolute("http://example.com/page") // true
checkUrlAbsolute("/page") // false
checkUrlAbsolute(123) // false - input is not a string
```
 */
declare const checkUrlAbsolute: (url: unknown) => boolean;

/**
 * Generate an array of integers from a given number to another.
 * @category Array
 * @example
```ts
import { generateIntegers } from 'tings'

generateIntegers(1, 6) // [1, 2, 3, 4, 5, 6]
generateIntegers("abc", 6) // [] - at least one input is not a number
```
 */
declare function generateIntegers(from: unknown, to: unknown): number[];

/**
 * Pauses the current function.
 * @category Misc
 * @example
```ts
import { sleep } from 'tings'

await sleep(2000) // sleeps for 2 seconds
await sleep("abc") // sleeps for 0 seconds as input is not a number
```
 */
declare function sleep(milliseconds: number): Promise<void>;

/**
 * Removes all whitespace characters from a string.
 * @category String
 * @example
```ts
import { toCompactCase } from 'tings'

toCompactCase('this is text') // thisistext
toCompactCase('someTEXT') // someTEXT
```
 */
declare function toCompactCase(input: unknown): string;

/**
 * Removes all non-alphabetical characters from a string.
 * @category String
 * @example
```ts
import { toLetters } from 'tings'

toLetters('this is text') // thisistext
toLetters('123-Text!!!') // Text
```
 */
declare function toLetters(input: unknown): string;

/**
 * Will return the given input as a number, if it cannot be converted, it will return 0.
 * @category Number
 * @example
```ts
import { toNumber } from 'tings'

toNumber('this is text') // 0
toNumber('3') // 3
toNumber(0.4) // 0.4
toNumber(new Set([])) // 0
```
 */
declare function toNumber(input: unknown): number;

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
toOrdinal(3.14) // 3.14th
```
 */
declare function toOrdinal(input?: unknown): string;

export { checkCompactCase, checkLowerCase, checkRunningInBrowser, checkUnique, checkUrlAbsolute, generateIntegers, sleep, toCompactCase, toLetters, toNumber, toOrdinal };
