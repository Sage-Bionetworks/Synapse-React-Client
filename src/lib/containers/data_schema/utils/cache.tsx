/* tslint:disable: no-console */
import omniFetch from 'isomorphic-fetch'
import { globalAgent } from 'https'
import { RequestOptions } from 'http'
import { get, set, del, clear, keys } from 'lib/utils/functions/KeyValCache'
import { MINUTES_TO_CACHE } from './../constants'
import { SchemaJson } from './../types/IDataSchemaTypes'

const MINUTES: number = 1000 * 60

interface FetchOptions extends RequestInit {
  timeout?: number
}

export const SUFFIX: { scma: '[schema]'; tm: '[time]' } = {
  scma: '[schema]',
  tm: '[time]',
}

// If it has expired, return null; if it doesn't exist, it should be undefined
export const dbGet = (key: string): Promise<unknown | null> => {
  return get(`${key}${SUFFIX.tm}`).then((val: unknown) => {
    const current = new Date().getTime()
    if (val) {
      if (current < (val as number)) {
        console.info(`Retrieving cached Data Schema.`)
        // Has NOT expired
        return get(key)
      }
    }
    return null
  })
}

// If there is previous tm and it is passed, overwrite, otherwise return false
export const dbSet = (
  key: string,
  val: unknown,
  tm: number,
  force?: boolean,
) => {
  const current = new Date().getTime()
  const expirationTime = current + MINUTES * tm
  return get(key).then((check: any) => {
    if (check && !force) {
      // Data exists, check if expired
      return get(`${key}${SUFFIX.tm}`).then((response: any) => {
        if (response) {
          if (current > response) {
            // it's passed the expiration time, can overwrite
            set(key, val)
            set(`${key}${SUFFIX.tm}`, expirationTime)
            return true
          } else {
            // Data exists, but hasn't expired yet; don't overwrite
            return false
          }
        } else {
          // No timeout associated to it, overwrite with current tm
          set(key, val)
          set(`${key}${SUFFIX.tm}`, expirationTime)
          return true
        }
      })
    } else {
      // Data doesn't exist, can insert with data and tm
      set(key, val)
      set(`${key}${SUFFIX.tm}`, expirationTime)
      return true
    }
  })
}

export const dbDel = (key: string): Promise<void> => del(key)

export const dbClear = (): Promise<void> => clear()

export const dbKeys = (): Promise<IDBValidKey[]> => keys()

// Clear out old cached data
export const clearExpired = () => {
  const current = new Date().getTime()
  return dbKeys()
    .then((val: IDBValidKey[]) => {
      val.forEach(async (elem: IDBValidKey) => {
        if ((elem as string).includes(SUFFIX.tm)) {
          // At expiration time for evergreen
          const expiration: number = (await dbGet(elem as string)) as number
          if (expiration || expiration === 0) {
            if (current > expiration) {
              // Passed expiration, clear the associated cached data
              await dbDel((elem as string).replace(SUFFIX.tm, ''))
              await dbDel(elem as string)
            }
          }
        }
      })
      return true
    })
    .catch(err => {
      console.error(`Error while cleaning Data Schema cache`, err)
      return err
    })
}

// dataKey is key for cached data
export const cachedFetch = async (
  dataKey: string,
  schemaUrl: string,
  options: FetchOptions,
  force?: boolean,
): Promise<SchemaJson> => {
  const key = `${dataKey}[${encode(schemaUrl)}]`
  const cachedData: SchemaJson = (await dbGet(key)) as SchemaJson
  if (!force && cachedData) {
    console.info(`Returning cached Data Schema.`)
    await dbSet(dataKey, cachedData, MINUTES_TO_CACHE, force)
    return decode(cachedData)
  }
  // If there is no cached response, do the call to the schema (cache this result).
  options.timeout = options.timeout || 5000
  return timeoutFetch(schemaUrl, ``, options)
    .then(async (response: any) => {
      await dbSet(dataKey, encode(response), MINUTES_TO_CACHE, force)
      await dbSet(key, encode(response), MINUTES_TO_CACHE, force)
      return response
    })
    .catch((error: Error) => {
      console.error(
        `There was an error returning data (no cache available): `,
        error,
      )
      return error
    })
}

export const encode = (val: any) => {
  return val ? Buffer.from(JSON.stringify(val)).toString('base64') : null
}

export const decode = (val: any) => {
  return val
    ? JSON.parse(Buffer.from(val.toString(), 'base64').toString())
    : null
}

const timeoutFetch = (
  url: string,
  cacheKey: string,
  options: RequestOptions | FetchOptions,
) => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      // Set timeout timer
      const timer = options.timeout
        ? setTimeout(
            () =>
              reject(new Error(JSON.stringify({ name: 'Timeout', status: 0 }))),
            options.timeout,
          )
        : null
      omniFetch(url, options as RequestInit)
        .then((response: any) => {
          if (response.status >= 400) {
            throw new Error(
              JSON.stringify({ name: 'Error', status: response.status }),
            )
          }
          return response
        })
        .then((response: any) => {
          response
            .json()
            .then(
              (data: any) =>
                resolve({ data, headers: response.headers._headers }),
              (err: Error) => reject(err),
            )
            .finally(() => clearTimeout((timer as unknown) as number))
        })
        .catch((err: Error) => {
          reject(err)
          clearTimeout((timer as unknown) as number)
        })
    } else {
      dbGet(cacheKey)
        .then((val: any) => {
          if (!val) {
            options = { agent: globalAgent, ...options }
            // Setting specific timeout here, don't include time
            // it takes to get from indexedDB since it is async
            const timer = options.timeout
              ? window.setTimeout(
                  () => reject(new Error('Request timeout')),
                  options.timeout,
                )
              : 5000
            omniFetch(url, options as RequestInit)
              .then((response: any) => {
                if (response.status >= 400) {
                  throw new Error(`Bad response, ${response.status}`)
                }
                return response
              })
              .then((response: any) => {
                response.json().then(
                  (data: any) => {
                    clearTimeout(timer)
                    resolve(data)
                  },
                  (err: Error) => {
                    clearTimeout(timer)
                    reject(err)
                  },
                )
              })
              .catch((err: Error) => {
                clearTimeout(timer)
                reject(err)
              })
          } else {
            resolve(val)
          }
        })
        .catch(err => err)
    }
  })
}
