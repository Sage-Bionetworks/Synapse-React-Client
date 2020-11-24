import { createReduxModule } from 'hooks-for-redux'
import {
  DataDictionaryData,
  SchemaContext,
  SchemaData,
  SchemaJson,
} from './../types/IDataDictionaryTypes'
import { mapSchemaDataToDataDictionaryData } from './../utils/getDataDictionaryDetails'

export const [stateData, { replaceData }] = createReduxModule(
  'data',
  [] as DataDictionaryData[],
  {
    replaceData: (
      _state: DataDictionaryData[],
      schemaJson: SchemaJson | undefined,
    ) => {
      const schema: SchemaData[] = schemaJson ? schemaJson['@graph'] || [] : []
      const context: SchemaContext = schemaJson
        ? schemaJson['@context'] || {}
        : {}
      if (schema.length > 0) {
        return schema.map(mapSchemaDataToDataDictionaryData(context, schema))
      }
      return [] as DataDictionaryData[]
    },
  },
)
