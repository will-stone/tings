/**
 * Displays "this month" in given or current locale
 * @category Date
 * @example
```ts
import { thisMonth } from 'tings'

thisMonth() // this month
thisMonth('fr) // ce mois-ci
thisMonth('es) // este mes
```
 */
function thisMonth(locale?: string): string {
  const relativeTimeFormatter = new Intl.RelativeTimeFormat(locale, {
    localeMatcher: 'best fit',
    numeric: 'auto',
    style: 'long',
  })

  return relativeTimeFormatter.format(0, 'month')
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest

  const cases = [
    [undefined, 'this month'],
    ['fr', 'ce mois-ci'],
    ['fr-FR', 'ce mois-ci'],
    ['es', 'este mes'],
  ]

  test.each(cases)('%s is %s', (input, expected) => {
    const result = thisMonth(input)
    expect(result).toBe(expected)
  })
}

export { thisMonth }
