import { createReduxModule } from 'hooks-for-redux'
import {
  DataSchemaData,
  SchemaContext,
  SchemaData,
  SchemaJson,
} from './../types/IDataSchemaTypes'
import { mapSchemaDataToDataSchemaData } from './../utils/mapSchemaDataToDataSchemaData'

export const [stateData, { replaceData }] = createReduxModule(
  'data',
  [] as DataSchemaData[],
  {
    replaceData: (
      _state: DataSchemaData[],
      schemaJson: SchemaJson | undefined,
    ) => {
      const schema: SchemaData[] = schemaJson ? schemaJson['@graph'] || [] : []
      const context: SchemaContext = schemaJson
        ? schemaJson['@context'] || {}
        : {}
      if (schema.length > 0) {
        return schema.map(mapSchemaDataToDataSchemaData(context))
      }
      return [] as DataSchemaData[]
    },
  },
)

export const [stateContext, { replaceContext }] = createReduxModule(
  'context',
  {},
  {
    replaceContext: (
      _state: SchemaContext,
      schemaJson: SchemaJson | undefined,
    ) => (schemaJson ? schemaJson['@context'] || {} : {}),
  },
)
