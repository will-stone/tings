import { bench } from 'vitest'

import { generateIntegers } from './generate-integers.js'

bench('set of 100 integers', () => {
  generateIntegers(-50, 50)
})
