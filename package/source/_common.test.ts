import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { expect, test } from 'vitest'

import * as all from './index.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const tingFileNames = fs
  .readdirSync(path.join(__dirname))
  .filter(
    (n) =>
      // Do not count the index file
      n !== 'index.ts' &&
      // Do not count files that should be ignored
      !n.startsWith('_') &&
      // Do not count tests
      !n.includes('.test.') &&
      // Do not count benchmark tests
      !n.includes('.bench.') &&
      // Do not count hidden files, e.g. .DS_Store
      !n.startsWith('.'),
  )
  .map((f) => f.split('.')[0])

const camelToKebab = (string_: string): string =>
  string_.replaceAll(/([\da-z])([A-Z])/gu, '$1-$2').toLowerCase()

const tings = Object.keys(all).map(camelToKebab)

test('index exports all tings', () => {
  expect(tingFileNames.length).toBe(tings.length)
  expect(tingFileNames).toEqual(tings)
})
