import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isCamelCase, isCompact, isEmpty, isNotEmpty, strngs } from '../src'

test('strngs.or should be valid 1', () => {
  const validator = strngs.or(isEmpty, isCompact)
  assert.equal(validator(''), { valid: true, message: 'is empty' })
})

test('strngs.or should be valid 2', () => {
  const validator = strngs.or(isEmpty, isCompact)
  assert.equal(validator('compact'), { valid: true, message: 'is compact' })
})

test('strngs.or should be invalid', () => {
  const validator = strngs.or(isEmpty, isCompact)
  assert.equal(validator('not compact'), {
    valid: false,
    message: 'no validators passed',
  })
})

test('strngs.or should throw', () => {
  const validator = strngs.or(isEmpty, isCompact)
  assert.throws(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    () => validator(123),
    (error: Error) => error.message === '123 is not a string',
  )
})

test('strngs.and should be valid', () => {
  const validator = strngs.and(isNotEmpty, isCompact)
  assert.equal(validator('compact'), {
    valid: true,
    message: 'all validators passed',
  })
})

test('strngs.and should be invalid', () => {
  const validator = strngs.and(isEmpty, isCompact)
  assert.equal(validator(''), {
    valid: false,
    message: 'not compact',
  })
})

test('strngs.and should throw', () => {
  const validator = strngs.or(isEmpty, isCompact)
  assert.throws(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    () => validator(123),
    (error: Error) => error.message === '123 is not a string',
  )
})

// ---------------------------------------------------------

test('strngs.or() should be valid 1', () => {
  assert.equal(strngs('').or(isEmpty, isCompact), {
    valid: true,
    message: 'is empty',
  })
})

test('strngs.or() should be valid 2', () => {
  assert.equal(strngs('compact').or(isEmpty, isCompact), {
    valid: true,
    message: 'is compact',
  })
})

test('strngs.or() should be invalid', () => {
  assert.equal(strngs('not compact').or(isEmpty, isCompact), {
    valid: false,
    message: 'no validators passed',
  })
})

test('strngs.or() should throw', () => {
  assert.throws(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    () => strngs(123).or(isEmpty, isCompact),
    (error: Error) => error.message === '123 is not a string',
  )
})

test('strngs.and() should be valid', () => {
  assert.equal(strngs('compact').and(isNotEmpty, isCompact), {
    valid: true,
    message: 'all validators passed',
  })
})

test('strngs.and() should be invalid', () => {
  assert.equal(strngs('').and(isEmpty, isCompact), {
    valid: false,
    message: 'not compact',
  })
})

test('strngs.and() should throw', () => {
  assert.throws(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    () => strngs(123).or(isEmpty, isCompact),
    (error: Error) => error.message === '123 is not a string',
  )
})

// ---------------------------------------------------------

test('custom validator', () => {
  const customValidator = strngs.create((s) => s === 'yes', 'valid', 'invalid')

  assert.equal(strngs('yes').or(customValidator), {
    valid: true,
    message: 'valid',
  })
  assert.equal(strngs('no').and(customValidator), {
    valid: false,
    message: 'invalid',
  })
})

test('strngs.some', () => {
  assert.equal(
    strngs.some(
      strngs('').or(isEmpty, isCompact),
      strngs('compact').or(isEmpty, isCamelCase),
    ),
    { valid: true, message: '1st check passed: is empty' },
  )
  assert.equal(
    strngs.some(
      strngs('compact').or(isEmpty, isCamelCase),
      strngs('').or(isEmpty, isCompact),
    ),
    { valid: true, message: '1st check passed: is camelCase' },
  )
  assert.equal(
    strngs.some(
      strngs('compact').or(isEmpty),
      strngs('').or(isEmpty, isCompact),
    ),
    { valid: true, message: '2nd check passed: is empty' },
  )
  assert.equal(
    strngs.some(strngs('compact').or(isEmpty), strngs('').or(isCompact)),
    { valid: false, message: 'all checks failed' },
  )
})

test('strngs.every', () => {
  assert.equal(
    strngs.every(
      strngs('compact').or(isNotEmpty, isCompact),
      strngs('').or(isEmpty),
    ),
    { valid: true, message: 'all checks passed' },
  )
  assert.equal(
    strngs.every(
      strngs('compact').and(isEmpty, isCompact),
      strngs('').or(isEmpty),
    ),
    { valid: false, message: '1st check failed: not empty' },
  )
  assert.equal(
    strngs.every(
      strngs('').or(isEmpty),
      strngs('compact').and(isEmpty, isCompact),
    ),
    { valid: false, message: '2nd check failed: not empty' },
  )
})

test.run()
