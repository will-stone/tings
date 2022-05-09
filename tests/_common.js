import fs from 'fs'
import path from 'path'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

import * as all from '../lib'

const tingFileNames = fs
  .readdirSync(path.join(__dirname, '..', 'source'))
  .filter((n) => n !== 'index.ts')
  .map((f) => f.split('.')[0])

const tingTestFileNames = fs
  .readdirSync(__dirname)
  .filter((n) => n !== '_common.js')
  .map((f) => f.split('.')[0])

const tings = Object.keys(all)

test('index exports all tings', () => {
  assert.is(tingFileNames.length, tings.length)
  assert.equal(tingFileNames, tings)
})

test('all tings have a test file', () => {
  assert.is(tingTestFileNames.length, tings.length)
  assert.equal(tingTestFileNames, tings)
})

test.run()
