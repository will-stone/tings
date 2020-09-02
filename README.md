# tings

<p align="center">
  <img src="https://raw.githubusercontent.com/will-stone/tings/master/media/logo2.png" alt="tings" width="200" height="200" />
</p>

<h1 align="center">tings</h1>

<p align="center">
  A collection of small utilities and complementary Lodash add-ons.
</p>

---

## Install

```bash
npm i tings
# or
yarn add tings
```

> Rather than reinvent the wheel, some of these utilities depend on Lodash
> functions. This way, you will know that the two libraries are compatible. For
> example, `isCamelCase` will return true for any string converted using
> Lodash's `camelCase` function.

> The functions are marked below if they require Lodash, and you will need to
> install Lodash if you would like to use that function.

---

## Index

### Functions

- [isCamelCase](README.md#iscamelcase)
- [isCompactCase](README.md#iscompactcase)
- [isLowerCase](README.md#islowercase)
- [isOccupied](README.md#isoccupied)
- [isPascalCase](README.md#ispascalcase)
- [isTitleCase](README.md#istitlecase)
- [isUniq](README.md#isuniq)
- [isVacant](README.md#isvacant)
- [sleep](README.md#sleep)
- [toCompactCase](README.md#tocompactcase)
- [toNumberAlways](README.md#tonumberalways)
- [toOrdinal](README.md#toordinal)
- [toPascalCase](README.md#topascalcase)
- [toTitleCase](README.md#totitlecase)

## Functions

### isCamelCase

▸ **isCamelCase**(`string`: string): _boolean_

Determines if input is a camelCase string.

**`requires`** lodash

**`example`**

```ts
import isCamelCase from 'tings/isCamelCase'

isCamelCase('camelCase') // true
isCamelCase('NOTCamelCase') // false
```

**Parameters:**

| Name     | Type   |
| -------- | ------ |
| `string` | string |

**Returns:** _boolean_

---

### isCompactCase

▸ **isCompactCase**(`string`: string): _boolean_

Determines if input is a compactcase (no whitespaces) string.

**`example`**

```ts
import isCompactCase from 'tings/isCompactCase'

isCompactCase('thisiscompact') // true
isCompactCase('this is not compact') // false
```

**Parameters:**

| Name     | Type   |
| -------- | ------ |
| `string` | string |

**Returns:** _boolean_

---

### isLowerCase

▸ **isLowerCase**(`string`: string): _boolean_

Determines if input is a string containing no UPPERcase characters.

**`example`**

```ts
import isLowerCase from 'tings/isLowerCase'

isLowerCase('this is lower') // true
isLowerCase('This is not LOWER') // false
```

**Parameters:**

| Name     | Type   |
| -------- | ------ |
| `string` | string |

**Returns:** _boolean_

---

### isOccupied

▸ **isOccupied**(`input`: unknown): _boolean_

Similar to the opposite of Lodash's isEmpty this will return true if a value is
more than the minimum for its type. The main differences being:

- All numbers except `0` are occupied.
- All BigInts except `BigInt(0)` are occupied.
- Only `true` is occupied, not both booleans.
- All Symbols are occupied.

**`requires`** lodash

**`example`**

```ts
import isOccupied from 'tings/isOccupied'

isOccupied('') // false
isOccupied(0) // false
isOccupied(BigInt(0)) // false
isOccupied([]) // false
isOccupied({}) // false
isOccupied(false) // false
isOccupied(null) // false
isOccupied(undefined) // false
isOccupied(new Map([])) // false

isOccupied(1) // true
isOccupied(true) // true
isOccupied('a') // true
isOccupied({ key: 'value' }) // true
```

**Parameters:**

| Name    | Type    |
| ------- | ------- |
| `input` | unknown |

**Returns:** _boolean_

---

### isPascalCase

▸ **isPascalCase**(`string`: string): _boolean_

Determines if input is a PascalCase string.

**`requires`** lodash

**`example`**

```ts
import isPascalCase from 'tings/isPascalCase'

isPascalCase('ThisIsPascal') // true
isPascalCase('notPascal') // false
```

**Parameters:**

| Name     | Type   |
| -------- | ------ |
| `string` | string |

**Returns:** _boolean_

---

### isTitleCase

▸ **isTitleCase**(`string`: string): _boolean_

Determines if input is a Tile Case string.

**`requires`** lodash

**`example`**

```ts
import isTitleCase from 'tings/isTitleCase'

isTitleCase('this is text') // false
isTitleCase('Small Words are not Capitalised') // true
```

**Parameters:**

| Name     | Type   |
| -------- | ------ |
| `string` | string |

**Returns:** _boolean_

---

### isUniq

▸ **isUniq**(`input`: unknown): _boolean_

Determines if an array only contains unique items. Will return true for any
input that's not an array.

**`example`**

```ts
import isUniq from 'tings/isUniq'

isUniq([1, 2, 3]) // true
isUniq([1, 1, 2]) // false
isUniq('not array') // true
```

**Parameters:**

| Name    | Type    |
| ------- | ------- |
| `input` | unknown |

**Returns:** _boolean_

---

### isVacant

▸ **isVacant**(`input`: unknown): _boolean_

Similar to Lodash's isEmpty this will return true if a value is considered the
minimum for its type. The main differences being:

- Only `0` is vacant, not all numbers.
- Only `BigInt(0)` is vacant, not all BigInts.
- Only `false` is vacant, not both booleans.
- Symbols are not vacant.

**`requires`** lodash

**`example`**

```ts
import isVacant from 'tings/isVacant'

isVacant('') // true
isVacant(0) // true
isVacant(BigInt(0)) // true
isVacant([]) // true
isVacant({}) // true
isVacant(false) // true
isVacant(null) // true
isVacant(undefined) // true
isVacant(new Map([])) // true

isVacant(1) // false
isVacant(true) // false
isVacant('a') // false
isVacant({ key: 'value' }) // false
```

**Parameters:**

| Name    | Type    |
| ------- | ------- |
| `input` | unknown |

**Returns:** _boolean_

---

### sleep

▸ **sleep**(`milliseconds`: number): _Promise‹void›_

Pauses the current function.

**`example`**

```ts
import sleep from 'tings/sleep'

await sleep(2000) // sleeps for 20 seconds
```

**Parameters:**

| Name           | Type   |
| -------------- | ------ |
| `milliseconds` | number |

**Returns:** _Promise‹void›_

---

### toCompactCase

▸ **toCompactCase**(`input`: unknown): _string_

Removes all whitespace characters from a string.

**`example`**

```ts
import toCompactCase from 'tings/toCompactCase'

toCompactCase('this is text') // thisistext
toCompactCase('someTEXT') // someTEXT
```

**Parameters:**

| Name    | Type    |
| ------- | ------- |
| `input` | unknown |

**Returns:** _string_

---

### toNumberAlways

▸ **toNumberAlways**(`input`: unknown): _number_

Will return the given input as a number, if it cannot be converted, it will
return 0.

**`example`**

```ts
import toNumberAlways from 'tings/toNumberAlways'

toNumberAlways('this is text') // 0
toNumberAlways('3') // 3
toNumberAlways(0.4) // 0.4
toNumberAlways(new Set([])) // 0
```

**Parameters:**

| Name    | Type    |
| ------- | ------- |
| `input` | unknown |

**Returns:** _number_

---

### toOrdinal

▸ **toOrdinal**(`input`: unknown): _string_

Converts a number to its ordinal string form, if possible, else returns 0th. 1
-> 1st 4.2 -> 4.2th notANumber -> 0th

**`example`**

```ts
import toOrdinal from 'tings/toOrdinal'

toOrdinal('this is text') // 0th
toOrdinal('3') // 3rd
toOrdinal('11') // 11th
```

**Parameters:**

| Name    | Type    | Default |
| ------- | ------- | ------- |
| `input` | unknown | 0       |

**Returns:** _string_

---

### toPascalCase

▸ **toPascalCase**(`input`: unknown): _string_

Converts input to PascalCase string.

**`requires`** lodash

**`example`**

```ts
import toPascalCase from 'tings/toPascalCase'

toPascalCase('this is text') // ThisIsText
toPascalCase('someTEXT') // SomeText
```

**Parameters:**

| Name    | Type    |
| ------- | ------- |
| `input` | unknown |

**Returns:** _string_

---

### toTitleCase

▸ **toTitleCase**(`input`: unknown, `smallWords`: string[]): _string_

Keep small words in lowercase, otherwise make the first letter uppercase.

**`requires`** lodash

**`example`**

```ts
import toTitleCase from 'tings/toTitleCase'

toTitleCase('this is text') // This is Text
toTitleCase('smallWordsAreNotCapitalised') // Small Words are not Capitalised
```

**Parameters:**

| Name         | Type     | Default           |
| ------------ | -------- | ----------------- |
| `input`      | unknown  | -                 |
| `smallWords` | string[] | englishSmallWords |

**Returns:** _string_
