<p align="center">
  🥂
</p>

<p align="center" style="font-size: 80px">
  <img src="https://raw.githubusercontent.com/will-stone/tings/master/media/logo.png" alt="tings" width="498" height="172" />
</p>

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

## Utilities

### `isCamelCase`

⚠️ **_Requires Lodash_**

```ts
import { isCamelCase } from 'tings'

isCamelCase('camelCase') // true
isCamelCase('NOTCamelCase') // false
```

### `isCompactCase`

```ts
import { isCompactCase } from 'tings'

isCompactCase('thisiscompact') // true
isCompactCase('this is not compact') // false
```

### `isLowerCase`

```ts
import { isLowerCase } from 'tings'

isLowerCase('this is lower') // true
isLowerCase('This is not LOWER') // false
```

### `isPascalCase`

⚠️ **_Requires Lodash_**

```ts
import { isPascalCase } from 'tings'

isPascalCase('ThisIsPascal') // true
isPascalCase('notPascal') // false
```

### `isUniq`

```ts
import { isUniq } from 'tings'

isUniq([1, 2, 3]) // true
isUniq([1, 1, 2]) // false
isUniq('not array') // true
```

### `isVacant`

⚠️ **_Requires Lodash_**

Similar to Lodash's [`isEmpty`](https://lodash.com/docs/#isEmpty), this will
return true if a value is considered the minimum for its type. The main
differences being:

- Only `0` is considered _vacant_, not all numbers.
- Only `BigInt(0)` is considered _vacant_, not all BigInts.
- `true` is _not vacant_.
- Symbols are considered _not vacant_.

```ts
import { isVacant } from 'tings'

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

### `toNumberAlways`

Anything that cannot be converted to a number will yield zero.

```ts
import { toNumberAlways } from 'tings'

toNumberAlways('this is text') // 0
toNumberAlways('3') // 3
toNumberAlways(0.4) // 0.4
toNumberAlways(new Set([])) // 0
```

### `toOrdinal`

```ts
import { toOrdinal } from 'tings'

toOrdinal('this is text') // 0th
toOrdinal('3') // 3rd
toOrdinal('11') // 11th
```

### `toPascalCase`

⚠️ **_Requires Lodash_**

```ts
import { toPascalCase } from 'tings'

toPascalCase('this is text') // ThisIsText
toPascalCase('someTEXT') // SomeText
```

### `toTitleCase`

⚠️ **_Requires Lodash_**

```ts
import { toTitleCase } from 'tings'

toTitleCase('this is text') // This is Text
toTitleCase('smallWordsAreNotCapitalised') // Small Words are not Capitalisedl
```
