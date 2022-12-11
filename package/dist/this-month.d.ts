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
declare function thisMonth(locale?: string): string;
export { thisMonth };
