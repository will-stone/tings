import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { isCompact, isEmpty, isNotEmpty, strngs } from '../src'

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
    (error: Error) => error.message === 'Input is not a string',
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
    (error: Error) => error.message === 'Input is not a string',
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
    (error: Error) => error.message === 'Input is not a string',
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
    (error: Error) => error.message === 'Input is not a string',
  )
})

test.run()
