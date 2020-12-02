import { createReduxModule } from 'hooks-for-redux'
import { DataDictionaryData, IdMap } from './../types/IDataDictionaryTypes'

export const [searchEntity, { setSearchEntity }] = createReduxModule(
  'searchEntity',
  ``,
  {
    setSearchEntity: (_state: string, id: string) => id,
  },
)

export const [idMap, { setIdMap }] = createReduxModule(
  'idMap',
  {},
  {
    setIdMap: (_state: IdMap, data: DataDictionaryData[]) => {
      if (data.length > 0) {
        return data
          .sort((a, b) => {
            const displayA = a.attribute || a.label
            const displayB = b.attribute || b.label
            const entityA = displayA.toUpperCase()
            const entityB = displayB.toUpperCase()

            if (entityA > entityB) {
              return 1
            } else if (entityA < entityB) {
              return -1
            }
            return 0
          })
          .reduce(
            (acc, entity): IdMap => ({
              ...acc,
              [entity.id]: entity.attribute || entity.label,
            }),
            {} as IdMap,
          )
      }
      return {}
    },
  },
)
