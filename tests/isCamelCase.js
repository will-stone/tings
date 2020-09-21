import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isCamelCase } from '../pkg'

const falsey = [
  new Set(),
  Symbol(''),
  123,
  undefined,
  // eslint-disable-next-line unicorn/no-null
  null,
  true,
  false,
  () => {
    return false
  },
  'A',
  '!',
  'NotCamel',
  'notCAMEL',
  'NOTCamelCase',
  'containsSpecial!Characters',
  'thisHas aSpace',
]
falsey.forEach((input) => {
  test(`${String(input)} is false`, () => {
    assert.is(isCamelCase(input), false)
  })
})

const truthy = [
  '',
  'one',
  'a',
  '123',
  'camelCase',
  'endWithCaptiaL',
  'miltiWordCamelCase',
  'aWord',
  'containNumbers123',
]
truthy.forEach((input) => {
  test(`${input} is true`, () => {
    assert.is(isCamelCase(input), true)
  })
})

test.run()
