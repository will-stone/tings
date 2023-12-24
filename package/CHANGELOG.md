# tings

## 10.0.0

### Major Changes

- 1ab112a: Tings is now ESM-only, and will now allow dependencies.

## 9.1.0

### Minor Changes

- c9fcdcf: Added `checkPrime`.
- c6bc27d: Added `checkOdd` and `checkEven`.

## 9.0.3

### Patch Changes

- 0f9608e: Non-release: testing CI.

## 9.0.2

### Patch Changes

- 7c6fae0: Non-release: testing CI.

## 9.0.1

### Patch Changes

- c37ab5f: Non-release: testing CI.

## 9.0.0

### Major Changes

- 6a81d86: Renamed `checkRunningInBrowser` to `checkBrowser`.

### Minor Changes

- a9b0d2c: Added `checkDate` ting.

### Patch Changes

- 45aaa8d: Updated package declarations.

## 8.1.4

### Patch Changes

- `generateIntegers` now ignores any decimal places on `from` and `to`
  arguments.

## 8.1.3

### Patch Changes

- 894d549: Increased performance of `generateIntegers` by almost double.

## 8.1.2

### Patch Changes

- 30b78e8: Added more examples of potential undesired input.

## 8.1.1

### Patch Changes

- e11873c: Fix `checkUrlAbsolute` not accepting non-strings.

## 8.1.0

### Minor Changes

- 162d111: Added `checkUrlAbsolute`.

## 8.0.0

### Major Changes

- d1e50db: Changed boolean check functions' names to allow for easier result
  naming. e.g. `const isCompactCase = checkCompactCase(input)`. All functions
  starting with `is` changed to `check`, except `isBrowser` which is now
  `checkRunningInBrowser`, and `isUniq` is now `checkUnique`.

### Minor Changes

- 81f3eaa: Added `generateIntegers`.

### Patch Changes

- 844d0f5: Fixed `generateIntegers` throws on non-numerical input.

## 7.0.5

### Patch Changes

- d43a381: Internal refactor to use tsup for bundling.

## 7.0.4

### Patch Changes

- a871048: Internal refactor to inline exports.

## 7.0.3

### Patch Changes

- ce164d6: Fix build broken by ts nesting source code.

## 7.0.2

### Patch Changes

- 65738e4: Replace `replace` with `replaceAll`.

## 7.0.1

### Patch Changes

- Re-release.

## 7.0.0

### Major Changes

- 2a8c5be: Remove `thisMonth` ting.

### Patch Changes

- 5114ccd: Update deps.

## 6.0.1

### Patch Changes

- Just a test now Tings uses pnpm.

## 6.0.0

### Major Changes

- 98420b6: Rename `toNumberAlways` to `toNumber`. This was originally named to
  avoid a clash with Lodash but Tings is no longer a Lodash addon package.

## 5.0.2

### Patch Changes

- Another test release.

## 5.0.1

### Patch Changes

- This is just a test release

## 5.0.0

### Major Changes

- 7e0a930: Support ESM and CJS.
