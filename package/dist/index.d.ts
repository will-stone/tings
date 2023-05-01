/**
 * Determines if current code is running in a browser environment.
 * @category Environment
 * @example
```ts
import { isBrowser } from 'tings'

isBrowser() // true
```
 */
declare function isBrowser(): boolean;

/**
 * Determines if input is a string that does not contain white-spaces.
 * @category String
 * @example
```ts
import { isCompactCase } from 'tings'

isCompactCase('thisiscompact') // true
isCompactCase('this is not compact') // false
```
 */
declare function isCompactCase(input: unknown): input is string;

/**
 * Determines if input is a string containing no UPPERcase characters.
 * @category String
 * @example
```ts
import { isLowerCase } from 'tings'

isLowerCase('this is lower') // true
isLowerCase('This is not LOWER') // false
```
 */
declare function isLowerCase(input: unknown): input is string;

/**
 * Determines if an array only contains unique items.
 * Will return true for any input that's not an array.
 * @category Array
 * @example
```ts
import { isUniq } from 'tings'

isUniq([1, 2, 3]) // true
isUniq([1, 1, 2]) // false
isUniq('not array') // true
```
 */
declare function isUniq(input: unknown): boolean;

/**
 * Pauses the current function.
 * @category Misc
 * @example
```ts
import { sleep } from 'tings'

await sleep(2000) // sleeps for 2 seconds
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
```
 */
declare function toOrdinal(input?: unknown): string;

export { isBrowser, isCompactCase, isLowerCase, isUniq, sleep, toCompactCase, toLetters, toNumber, toOrdinal };
