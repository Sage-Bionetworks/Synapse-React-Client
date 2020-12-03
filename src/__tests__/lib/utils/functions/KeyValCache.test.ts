import {
  clear,
  del,
  get,
  keys,
  set,
  Store,
} from 'lib/utils/functions/KeyValCache'

const key1: string = `test1`
const key2: string = `test2`
const value1: string = `test value1`
const value2: string = `test value2`

test(`clear removes all cached key`, async () => {
  await clear()

  await set(key1, value1)
  await set(key2, value2)

  const value1BeforeClear = await get(key1)
  expect(value1BeforeClear).toEqual(value1)
  const value2BeforeClear = await get(key2)
  expect(value2BeforeClear).toEqual(value2)

  await clear()

  const value1AfterClear = await get(key1)
  expect(value1AfterClear).toBeUndefined()
  const value2AfterClear = await get(key2)
  expect(value2AfterClear).toBeUndefined()
})

test(`del removes the cached key`, async () => {
  await clear()

  await set(key1, value1)
  await set(key2, value2)

  const value1BeforeDelete = await get(key1)
  expect(value1BeforeDelete).toEqual(value1)
  const value2BeforeDelete = await get(key2)
  expect(value2BeforeDelete).toEqual(value2)

  del(key1)

  const value1AfterDelete = await get(key1)
  expect(value1AfterDelete).toBeUndefined()
  const value2AfterDelete = await get(key2)
  expect(value2AfterDelete).toEqual(value2)
})

test(`get retrieves the cached key`, async () => {
  await clear()

  await set(key1, value1)
  await set(key2, value2)

  const returnedValue1 = await get(key1)
  expect(returnedValue1).toEqual(value1)
  const returnedValue2 = await get(key2)
  expect(returnedValue2).toEqual(value2)
})

test(`keys retrieves a list of all keys in the store`, async () => {
  await clear()

  await set(key1, value1)
  await set(key2, value2)

  const returnedValue = await keys()
  expect(returnedValue).toEqual([key1, key2])
})

test(`set saves the assigned value to the designated key`, async () => {
  await clear()

  await set(key1, value1)
  await set(key2, value2)

  const returnedValue1 = await get(key1)
  expect(returnedValue1).toEqual(value1)
  const returnedValue2 = await get(key2)
  expect(returnedValue2).toEqual(value2)
})

test(`Store creates a new indexedDB store with the passed name`, async () => {
  await clear()

  const newStore: Store = new Store('testStore')
  await set(key1, value1, newStore)
  await set(key2, value2)

  const returnedValue1 = await get(key1, newStore)
  expect(returnedValue1).toEqual(value1)
  const returnedValue2 = await get(key1)
  expect(returnedValue2).toBeUndefined()
  const returnedValue3 = await get(key2)
  expect(returnedValue3).toEqual(value2)
})
