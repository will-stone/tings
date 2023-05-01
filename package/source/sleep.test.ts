import { afterEach, beforeEach, expect, test, vi } from 'vitest'

import { sleep } from './sleep.js'

// A test helper to spy on a callback and know if time has passed
const sleepWrapper = async (ms: number, callback: () => void) => {
  await sleep(ms)
  callback()
}

const callbackSpy = vi.fn()

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.restoreAllMocks()
})

test('sleeps for given milliseconds', async () => {
  sleepWrapper(10_000, callbackSpy)

  await vi.advanceTimersByTime(9001)
  expect(callbackSpy).not.toHaveBeenCalled()

  await vi.advanceTimersByTime(1000)
  expect(callbackSpy).toHaveBeenCalledTimes(1)
})

test(`sleeps for 0 milliseconds given a non-number`, async () => {
  // @ts-expect-error -- not a number
  sleepWrapper('blah', callbackSpy)

  await vi.advanceTimersByTime(0)
  expect(callbackSpy).toBeCalledTimes(1)
})

test(`sleeps for 0 milliseconds given a negative number`, async () => {
  sleepWrapper(-10_000, callbackSpy)

  await vi.advanceTimersByTime(0)
  expect(callbackSpy).toBeCalledTimes(1)
})

test(`sleeps for given float milliseconds, rounded-down`, async () => {
  sleepWrapper(10_000.942_89, callbackSpy)

  await vi.advanceTimersByTime(0)
  expect(callbackSpy).not.toBeCalled()

  await vi.advanceTimersByTime(9999)
  expect(callbackSpy).not.toBeCalled()

  await vi.advanceTimersByTime(10_000)
  expect(callbackSpy).toBeCalledTimes(1)
})
