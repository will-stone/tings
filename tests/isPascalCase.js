import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isPascalCase } from '../pkg'

const falsey = [
  123,
  '!',
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
  'notCAMEL',
  'containsSpecial!Characters',
  'thisHas aSpace',
]
falsey.forEach((input) => {
  test(`${String(input)} is false`, () => {
    assert.is(isPascalCase(input), false)
  })
})

const truthy = [
  '',
  'One',
  'A',
  '123',
  'CamelCase',
  'EndWithCaptiaL',
  'MiltiWordCamelCase',
  'AWord',
  'ContainNumbers123',
]
truthy.forEach((input) => {
  test(`${input} is true`, () => {
    assert.is(isPascalCase(input), true)
  })
})

test.run()
