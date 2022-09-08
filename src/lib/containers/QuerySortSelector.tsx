import React, { useState } from 'react'
import { SortConfiguration } from './CardContainerLogic'
import { useInfiniteQueryContext } from './QueryContext'
import { SortItem } from '../utils/synapseTypes'
import { unCamelCase } from '../utils/functions/unCamelCase'
import Typography from '../utils/typography/Typography'

export type QuerySortSelectorProps = {
  sortConfig: SortConfiguration
  facetAliases?: Record<string, string>
}
const QuerySortSelector: React.FunctionComponent<QuerySortSelectorProps> = ({
  sortConfig,
  facetAliases,
}) => {
  const { defaultColumn, sortableColumns } = sortConfig
  const infiniteQueryContext = useInfiniteQueryContext()
  const { getLastQueryRequest, executeQueryRequest } = infiniteQueryContext
  const [sortColumn, setSortColumn] = useState(defaultColumn)
  const handleSelectionChange = (
    event: React.ChangeEvent<{ value: string }>,
  ) => {
    const value = event.target.value
    const lastQueryRequestDeepClone = getLastQueryRequest()
    const newSortItems: SortItem[] = [
      {
        column: value,
        direction: 'ASC',
      },
    ]
    lastQueryRequestDeepClone.query.sort = newSortItems
    executeQueryRequest(lastQueryRequestDeepClone)
    setSortColumn(value)
    // setSortDirection(newSortDirection)
  }
  return (
    <div className="QuerySortSelector bootstrap-4-backport">
      <Typography variant="label" className="SRC-inlineBlock">
        Sort by
      </Typography>

      <select
        name="sortable columns"
        onChange={handleSelectionChange}
        style={{ padding: '4px', marginLeft: '10px' }}
        value={sortColumn}
      >
        {sortableColumns.map(sortableColumn => {
          return (
            <option key={sortableColumn} value={sortableColumn}>
              {unCamelCase(sortableColumn, facetAliases)}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default QuerySortSelector
