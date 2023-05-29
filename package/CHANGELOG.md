# tings

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
