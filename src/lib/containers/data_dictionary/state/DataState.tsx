import { createReduxModule } from 'hooks-for-redux'
import {
  DataDictionaryData,
  DepState,
  DepStateData,
  SchemaContext,
  SchemaData,
  SchemaJson,
} from './../types/IDataDictionaryTypes'
import { VIEW_TYPES } from './../constants'
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
        const data = schema.map(
          mapSchemaDataToDataDictionaryData(context, schema),
        )

        let component = data.find(comp => comp.id === 'bts:Component')
        const viewType = component
          ? VIEW_TYPES.REQUIRES_COMPONENT
          : VIEW_TYPES.SUBCLASS_OF
        component = component || data.find(comp => comp.id === 'schema:Thing')

        let filteredIds: string[] = []
        if (viewType === VIEW_TYPES.SUBCLASS_OF) {
          filteredIds = data.filter(c => {
            if (c[viewType].length > 0) {
              return c[viewType].some(id => id === component?.id)
            }
            return false
          }).map(fid => fid.id)
        } else {
          const entity = data.find(d => d.id === component?.id)
          if (entity) {
            filteredIds = entity[viewType] || []
          }
        }

        filteredIds.reduce(acc, fid => {
          acc[fid] = buildDepsData(fid, viewType, {} as DepState, data)
        }, {})


        resetDepsData({ viewType, {filteredIds} })
        return data
      }
      return [] as DataDictionaryData[]
    },
  },
)

export const [depsData, { setDepsData, resetDepsData }] = createReduxModule(
  'deps',
  {} as DepState,
  {
    setDepsData: (
      state: DepState,
      { id, viewType }: { id: string; viewType: VIEW_TYPES },
    ) => {
      if (state[viewType] && state[viewType][id]) {
        return state
      } else {
          return {
            ...state,
            [viewType]: buildDepsData(id, viewType, state, stateData())
          }
      }
    },
    resetDepsData: (
      state: DepState,
      { viewType, data }: { viewType: VIEW_TYPES; data: DepStateData },
    ) => ({ ...state, [viewType]: data }),
  },
)

function buildDepsData(
  id: string,
  viewType: VIEW_TYPES,
  state: DepState,
  data: DataDictionaryData[],
): DepStateData {
  const stateViewType = state[viewType] || {}

  let childList: string[] = []
  switch (viewType) {
    case VIEW_TYPES.SUBCLASS_OF:
    case VIEW_TYPES.REQUIRES_DEPENDENCY:
    case VIEW_TYPES.DOMAIN_INCLUDES:
      childList = data.filter(d => d[viewType].includes(id)).map(cl => cl.id)
      break
    case VIEW_TYPES.REQUIRES_COMPONENT:
    case VIEW_TYPES.RANGE_INCLUDES:
      const entity = data.find(d => d.id === id)
      if (entity) {
        childList = entity[viewType]
      }
      break
    default:
      break
  }

  return {
    ...stateViewType,
    [id]: childList,
  }
}
