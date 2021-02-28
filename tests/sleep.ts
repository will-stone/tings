import sinon from 'sinon'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { sleep } from '../src'

// A test helper to spy on a callback and know if time has passed
const sleepWrapper = async (ms: unknown, callback: () => void) => {
  await sleep(ms as number)
  callback()
}

let clock: sinon.SinonFakeTimers

test.before(() => {
  clock = sinon.useFakeTimers()
})

test.after(() => {
  clock.restore()
})

test(`sleeps for given milliseconds`, async () => {
  const callback = sinon.fake()

  sleepWrapper(10_000, callback)

  await clock.tickAsync(9000)
  assert.is(callback.notCalled, true)

  await clock.tickAsync(1000)
  assert.is(callback.calledOnce, true)
})

test(`sleeps for 0 milliseconds given a non-number`, async () => {
  const callback = sinon.fake()

  sleepWrapper('blah', callback)

  await clock.tickAsync(0)
  assert.is(callback.calledOnce, true)
})

test(`sleeps for 0 milliseconds given a negative number`, async () => {
  const callback = sinon.fake()

  sleepWrapper(-10_000, callback)

  await clock.tickAsync(0)
  assert.is(callback.calledOnce, true)
})

test(`sleeps for given float milliseconds, rounded-down`, async () => {
  const callback = sinon.fake()

  sleepWrapper(10_000.942_89, callback)

  await clock.tickAsync(0)
  assert.is(callback.notCalled, true)

  await clock.tickAsync(9999)
  assert.is(callback.notCalled, true)

  await clock.tickAsync(10_000)
  assert.is(callback.calledOnce, true)
})

test.run()
