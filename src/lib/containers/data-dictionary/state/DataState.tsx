import { createReduxModule } from 'hooks-for-redux'
import {
  DataDictionaryData,
  DataDictionaryState,
  SchemaContext,
  SchemaData,
  SchemaJson,
} from './../types/IDataDictionaryTypes'
import { DEFAULT_SCHEMA } from './../constants'
import { mapSchemaDataToDataDictionaryData } from './../utils/getDataDictionaryDetails'

export const [stateData, { replaceData }] = createReduxModule(
  'dictionaryData',
  {
    data: [] as DataDictionaryData[],
    schemaJson: DEFAULT_SCHEMA,
  } as DataDictionaryState,
  {
    replaceData: (
      _state: DataDictionaryState,
      schemaJson: SchemaJson | undefined,
    ) => {
      const schema: SchemaData[] = schemaJson ? schemaJson['@graph'] || [] : []
      const context: SchemaContext = schemaJson
        ? schemaJson['@context'] || {}
        : {}
      if (schema.length > 0) {
        return {
          data: schema.map(mapSchemaDataToDataDictionaryData(context, schema)),
          schemaJson: schemaJson || DEFAULT_SCHEMA,
        }
      }
      return {
        data: [] as DataDictionaryData[],
        schemaJson: DEFAULT_SCHEMA,
      }
    },
  },
)
