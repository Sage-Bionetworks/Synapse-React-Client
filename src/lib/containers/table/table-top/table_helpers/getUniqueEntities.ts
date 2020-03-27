import { QueryResultBundle } from '../../../../utils/synapseTypes'

export const getUniqueEntities = (
  data: QueryResultBundle,
  mapIdToHeader: {},
  indicies: number[],
) => {
  const distinctEntities = new Set<string>()
  data!.queryResult.queryResults.rows.forEach(row => {
    row.values.forEach((el: any, colIndex: number) => {
      // make sure this is a column of type entity and that we haven't retrieved this entity's information prior
      if (
        indicies.includes(colIndex) &&
        !Object.prototype.hasOwnProperty.call(mapIdToHeader, el) &&
        el
      ) {
        distinctEntities.add(el)
      }
    })
  })
  return distinctEntities
}
