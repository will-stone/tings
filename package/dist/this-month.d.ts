/**
 * Displays "this month" in given or current locale
 * @category Date
 * @example
```ts
import { thisMonth } from 'tings'

thisMonth() // this month
thisMonth() // ce mois-ci
```
 */
declare function thisMonth(locale?: string): string;
export { thisMonth as toCompactCase };
