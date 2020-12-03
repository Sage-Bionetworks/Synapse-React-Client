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

test(`clear removes all cached key`, () => {
  set(key1, value1)
  set(key2, value2)

  get(key1).then(returnedValue => expect(returnedValue).toEqual(value1))
  get(key2).then(returnedValue => expect(returnedValue).toEqual(value2))

  clear()

  get(key1).then(returnedValue => expect(returnedValue).toBeUndefined())
  get(key2).then(returnedValue => expect(returnedValue).toBeUndefined())
})

test(`del removes the cached key`, () => {
  set(key1, value1)
  set(key2, value2)

  get(key1).then(returnedValue => expect(returnedValue).toEqual(value1))
  get(key2).then(returnedValue => expect(returnedValue).toEqual(value2))

  del(key1)

  get(key1).then(returnedValue => expect(returnedValue).toBeUndefined())
  get(key2).then(returnedValue => expect(returnedValue).toEqual(value2))
})

test(`get retrieves the cached key`, () => {
  set(key1, value1)
  set(key2, value2)

  get(key1).then(returnedValue => expect(returnedValue).toEqual(value1))
  get(key2).then(returnedValue => expect(returnedValue).toEqual(value2))
})

test(`keys retrieves a list of all keys in the store`, () => {
  set(key1, value1)
  set(key2, value2)

  keys().then(returnedValue => expect(returnedValue).toEqual([key1, key2]))
})

test(`set saves the assigned value to the designated key`, () => {
  set(key1, value1)
  set(key2, value2)

  get(key1).then(returnedValue => expect(returnedValue).toEqual(value1))
  get(key2).then(returnedValue => expect(returnedValue).toEqual(value2))
})

test(`Store creates a new indexedDB store with the passed name`, () => {
  const newStore: Store = new Store('testStore')
  set(key1, value1, newStore)
  set(key2, value2)

  get(key1, newStore).then(returnedValue =>
    expect(returnedValue).toEqual(value1),
  )
  get(key1).then(returnedValue => expect(returnedValue).toBeUndefined())
  get(key2).then(returnedValue => expect(returnedValue).toEqual(value2))
})
