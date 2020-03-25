import { EntityColumnType, QueryResultBundle } from '../../utils/synapseTypes/'

export const getColumnIndiciesWithType = (
  data: QueryResultBundle | undefined,
  ...columnTypes: EntityColumnType[]
) => {
  const columnsOfTypeEntity: number[] = []
  data &&
    data.selectColumns &&
    data.selectColumns.forEach((el, index) => {
      if (columnTypes.includes(el.columnType)) {
        columnsOfTypeEntity.push(index)
      }
    })
  return columnsOfTypeEntity
}
