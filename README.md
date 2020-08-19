<div align="center">
  <img src="https://raw.githubusercontent.com/will-stone/tings/master/media/logo.png" alt="tings" width="498" height="172" />
</div>

<div align="center">
  A collection of small utilities and Lodash addons.
</div>

---

## Install

```bash
npm i tings lodash
# or
yarn add tings lodash
```

## Utilities

### `isCamelCase`

```ts
import { isCamelCase } from 'tings'

isCamelCase('camelCase') // true
isCamelCase('NOTCamelCase') // false
```

### `isCompactCase`

```ts
import { isCompactCase } from 'tings'

isCompactCase('thisIsCompact') // true
isCompactCase('This is not compact') // false
```

### `isPascalCase`

```ts
import { isPascalCase } from 'tings'

isPascalCase('ThisIsPascal') // true
isPascalCase('notCAMEL') // false
```

### `isVacant`

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

```ts
import { toPascalCase } from 'tings'

toPascalCase('this is text') // ThisIsText
toPascalCase('notCAMEL') // NotCamel
```

### `toTitleCase`

```ts
import { toTitleCase } from 'tings'

toTitleCase('this is text') // This is Text
toTitleCase('smallWordsAreNotCapitalised') // Small Words are not Capitalisedl
```
