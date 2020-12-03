import {
  cachedFetch,
  clearExpired,
  dbClear,
  dbDel,
  dbGet,
  dbKeys,
  dbSet,
  decode,
  encode,
  SUFFIX,
} from 'lib/containers/data_schema/utils/cache'

const key1: string = `${SUFFIX.scma}test1`
const timeKey1: string = `${key1}${SUFFIX.tm}`
const key2: string = `${SUFFIX.scma}test2`
const timeKey2: string = `${key2}${SUFFIX.tm}`
const value1: string = `test value1`
const value2: string = `test value2`
const cacheTime: number = 1
const dataUri: string = `https://raw.githubusercontent.com/generalui/Synapse-React-Client/staging-dd/src/lib/assets/data_schema/test.jsonld`

test(`cachedFetch fetches external data, encodes it and caches it`, async () => {
  await dbClear()

  const uri = new URL(dataUri)
  const response = await cachedFetch(key1, uri.href, {})

  const returnedValue1 = await dbGet(key1)
  expect(decode(returnedValue1)).toEqual(response)
})

test(`clearExpired removes all expired cached items`, async () => {
  await dbClear()

  await dbSet(key1, value1, cacheTime, true)
  await dbSet(key2, value2, 0.005, true)

  const value1BeforeClear = await dbGet(key1)
  expect(value1BeforeClear).toEqual(value1)
  const value2BeforeClear = await dbGet(key2)
  expect(value2BeforeClear).toEqual(value2)
  const keysBeforeClear = await dbKeys()
  expect(keysBeforeClear).toEqual([key1, timeKey1, key2, timeKey2])

  // Wait until key2 has expired
  setTimeout(async () => {
    const keysBAfterClear = await clearExpired()
    expect(keysBAfterClear).toEqual([key1, timeKey1])

    const value1AfterClear = await dbGet(key1)
    expect(value1AfterClear).toEqual(value1)
    const value2AfterClear = await dbGet(key2)
    expect(value2AfterClear).toBeNull()
  }, 1000)
})

test(`dbClear removes all cached key`, async () => {
  await dbClear()

  await dbSet(key1, value1, cacheTime, true)
  await dbSet(key2, value2, cacheTime, true)

  const value1BeforeClear = await dbGet(key1)
  expect(value1BeforeClear).toEqual(value1)
  const value2BeforeClear = await dbGet(key2)
  expect(value2BeforeClear).toEqual(value2)

  await dbClear()

  const value1AfterClear = await dbGet(key1)
  expect(value1AfterClear).toBeNull()
  const value2AfterClear = await dbGet(key2)
  expect(value2AfterClear).toBeNull()
})

test(`dbDel removes the cached key`, async () => {
  await dbClear()

  await dbSet(key1, value1, cacheTime, true)
  await dbSet(key2, value2, cacheTime, true)

  const value1BeforeDelete = await dbGet(key1)
  expect(value1BeforeDelete).toEqual(value1)
  const value2BeforeDelete = await dbGet(key2)
  expect(value2BeforeDelete).toEqual(value2)

  dbDel(key1)

  const value1AfterDelete = await dbGet(key1)
  expect(value1AfterDelete).toBeUndefined()
  const value2AfterDelete = await dbGet(key2)
  expect(value2AfterDelete).toEqual(value2)
})

test(`dbGet retrieves the cached key`, async () => {
  await dbClear()

  await dbSet(key1, value1, cacheTime, true)
  await dbSet(key2, value2, cacheTime, true)

  const returnedValue1 = await dbGet(key1)
  expect(returnedValue1).toEqual(value1)
  const returnedValue2 = await dbGet(key2)
  expect(returnedValue2).toEqual(value2)
})

test(`dbKeys retrieves a list of all keys in the store`, async () => {
  await dbClear()

  await dbSet(key1, value1, cacheTime, true)
  await dbSet(key2, value2, cacheTime, true)

  const keys = await dbKeys()
  expect(keys).toEqual([key1, timeKey1, key2, timeKey2])
})

test(`dbSet saves the assigned value to the designated key`, async () => {
  await dbClear()

  await dbSet(key1, value1, cacheTime, true)
  await dbSet(key2, value2, cacheTime, true)

  const returnedValue1 = await dbGet(key1)
  expect(returnedValue1).toEqual(value1)
  const returnedValue2 = await dbGet(key2)
  expect(returnedValue2).toEqual(value2)
})

test(`decode reveals the encoded value`, async () => {
  const encodedValue = encode(value1)
  expect(decode(encodedValue)).toEqual(value1)
})

test(`encode obfuscates the value`, async () => {
  expect(encode(value1)).not.toEqual(value1)
})

test(`fetch fetches external data, encodes it and caches it`, async () => {
  await dbClear()

  const uri = new URL(dataUri)
  const response = await cachedFetch(key1, uri.href, {})

  const returnedValue1 = await dbGet(key1)
  expect(decode(returnedValue1)).toEqual(response)
})
