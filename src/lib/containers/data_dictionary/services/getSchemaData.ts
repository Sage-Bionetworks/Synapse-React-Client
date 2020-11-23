import { SchemaJson } from './../types/IDataDictionaryTypes'
import { DEFAULT_SCHEMA } from './../constants'
import { cachedFetch, SUFFIX } from './../utils/cache'
import * as exampleSchema from 'lib/assets/data_dictionary/example.json'

export const getSchemaData = (dataUri: string): Promise<SchemaJson> => {
  if (!dataUri) {
    return Promise.resolve({
      '@context': exampleSchema['@context'],
      '@graph': exampleSchema['@graph'],
      '@id': exampleSchema['@id'],
    }) as Promise<SchemaJson>
  }

  try {
    // https://raw.githubusercontent.com/Sage-Bionetworks/schematic/main/data/schema_org_schemas/example.jsonld
    const uri = new URL(dataUri)
    return cachedFetch(SUFFIX.dd, uri.href, {}).then(response => {
      return response as SchemaJson
    })
  } catch {
    console.error(`Invalid Url: ${dataUri}`)
    return Promise.resolve(DEFAULT_SCHEMA)
  }
}
