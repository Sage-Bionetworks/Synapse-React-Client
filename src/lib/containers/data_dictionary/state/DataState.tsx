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
        return schema.map(mapSchemaDataToDataDictionaryData(context, schema))
      }
      return [] as DataDictionaryData[]
    },
  },
)

export const [depsData, { setDepsData, resetDepsData }] = createReduxModule(
  'deps',
  {} as DepState,
  {
    setDepsData: doSetDepsData,
    resetDepsData: (
      state: DepState,
      args: {
        data: DataDictionaryData[]
        viewType?: VIEW_TYPES
        reset?: boolean
      },
    ) => doSetDepsData(state, { ...args, reset: true }),
  },
)

function buildDepsData(
  id: string,
  viewType: VIEW_TYPES,
  data: DataDictionaryData[],
): DepStateData {
  return { [id]: getChildIds(id, data, viewType) }
}

function getStart(data: DataDictionaryData[], viewType?: VIEW_TYPES) {
  let startEntity: DataDictionaryData = data.find(
    entity => entity.id === 'bts:Component',
  ) as DataDictionaryData
  viewType =
    viewType ||
    (startEntity ? VIEW_TYPES.REQUIRES_COMPONENT : VIEW_TYPES.SUBCLASS_OF)
  startEntity = startEntity || data.find(entity => entity.id === 'schema:Thing')
  return { startEntity, viewType }
}

function getChildIds(
  parentId: string,
  data: DataDictionaryData[],
  viewType: VIEW_TYPES,
) {
  let childIds: string[] = []
  if (parentId) {
    switch (viewType) {
      case VIEW_TYPES.SUBCLASS_OF:
      case VIEW_TYPES.REQUIRES_DEPENDENCY:
      case VIEW_TYPES.DOMAIN_INCLUDES:
        childIds = data
          .filter(
            entity =>
              entity[viewType].length > 0 &&
              entity[viewType].includes(parentId),
          )
          .map(child => child.id)
        break
      case VIEW_TYPES.REQUIRES_COMPONENT:
      case VIEW_TYPES.RANGE_INCLUDES:
        const entity = data.find(entity => entity.id === parentId)
        childIds = entity ? entity[viewType] : []
        break
      default:
        break
    }
  }
  return childIds
}

function buildDepStateData(
  filteredIds: string[],
  viewType: VIEW_TYPES,
  data: DataDictionaryData[],
  currentDepsData: DepStateData,
): DepStateData {
  return filteredIds.reduce((acc: DepStateData, id: string): DepStateData => {
    const deps: DepStateData = buildDepsData(id, viewType, data)
    const childIds: string[] = getChildIds(id, data, viewType)
    const depsWithChildren = buildDepStateData(childIds, viewType, data, deps)
    return { ...currentDepsData, ...depsWithChildren }
  }, currentDepsData)
}

function doSetDepsData(
  state: DepState,
  {
    data,
    viewType: type,
    reset,
  }: { data: DataDictionaryData[]; viewType?: VIEW_TYPES; reset?: boolean },
): DepState {
  const { startEntity, viewType } = getStart(data, type)
  if (state[viewType] && !reset) {
    return state
  } else {
    const depsData: DepStateData = {}
    return {
      ...state,
      [viewType]: buildDepStateData(
        getChildIds(startEntity.id, data, viewType),
        viewType,
        data,
        depsData,
      ),
    }
  }
}
