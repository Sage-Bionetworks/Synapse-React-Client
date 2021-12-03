import { ColumnType, QueryResultBundle } from '../../utils/synapseTypes'

export const getColumnIndiciesWithType = (
  data: QueryResultBundle | undefined,
  ...columnTypes: ColumnType[]
) => {
  const columnsOfTypeEntity: number[] = []
  data?.selectColumns?.forEach((el, index) => {
    if (columnTypes.includes(el.columnType)) {
      columnsOfTypeEntity.push(index)
    }
  })
  return columnsOfTypeEntity
}
