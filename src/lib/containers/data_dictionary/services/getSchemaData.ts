import { SchemaData, SchemaJson } from './../types/IDataDictionaryTypes'
import { DEFAULT_SCHEMA, MINUTES_TO_CACHE } from './../constants'
import {
  cachedFetch,
  dbGet,
  dbSet,
  decode,
  encode,
  SUFFIX,
} from './../utils/cache'
import * as exampleSchema from 'lib/assets/data_dictionary/example.json'

const key = SUFFIX.scma

export const getSchemaData = async (
  dataUri: string,
  force?: boolean,
): Promise<SchemaJson> => {
  const cachedData: SchemaData = (await dbGet(key)) as SchemaData
  if (!force && cachedData) {
    console.log(`Returning cached Data Dictionary Schema.`)
    return decode(cachedData)
  }
  if (!dataUri) {
    const dataPromise = Promise.resolve({
      '@context': exampleSchema['@context'],
      '@graph': exampleSchema['@graph'],
      '@id': exampleSchema['@id'],
    }) as Promise<SchemaJson>
    dataPromise.then(data => dbSet(key, encode(data), MINUTES_TO_CACHE, force))
    return dataPromise
  }

  try {
    // https://raw.githubusercontent.com/Sage-Bionetworks/schematic/main/data/schema_org_schemas/example.jsonld
    const uri = new URL(dataUri)
    return cachedFetch(key, uri.href, {}, force).then(
      response => response as SchemaJson,
    )
  } catch {
    console.error(`Invalid Url: ${dataUri}`)
    return Promise.resolve(DEFAULT_SCHEMA)
  }
}
