import fs from 'fs'
import path from 'path'
import { expect, test } from 'vitest'

import * as all from './source/index.js'

const tingFileNames = fs
  .readdirSync(path.join(__dirname, 'source'))
  .filter(
    (n) =>
      // Do not count the index file
      n !== 'index.ts' &&
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
