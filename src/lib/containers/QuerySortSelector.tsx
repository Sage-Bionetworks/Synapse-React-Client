import React, { useState } from 'react'
import { SortConfiguration } from './CardContainerLogic'
import { useInfiniteQueryContext } from './QueryContext'
import { SortDirection, SortItem } from '../utils/synapseTypes'
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
  const { defaultColumn, defaultDirection, sortableColumns } = sortConfig
  const infiniteQueryContext = useInfiniteQueryContext()
  const { getLastQueryRequest, executeQueryRequest } = infiniteQueryContext
  const [sortColumn, setSortColumn] = useState(defaultColumn)
  const [sortDirection, setSortDirection] = useState(defaultDirection)
  const handleColumnSortChange = (value: string) => {
    const lastQueryRequestDeepClone = getLastQueryRequest()
    let newSortDirection: SortDirection = 'ASC'
    if (value === sortColumn) {
      // flip sort direction
      newSortDirection = sortDirection === 'ASC' ? 'DESC' : 'ASC'
    }

    const newSortItems: SortItem[] = [
      {
        column: value,
        direction: newSortDirection,
      },
    ]
    lastQueryRequestDeepClone.query.sort = newSortItems
    executeQueryRequest(lastQueryRequestDeepClone)
    setSortColumn(value)
    setSortDirection(newSortDirection)
  }
  const handleSelectionChange = (
    event: React.ChangeEvent<{ value: string }>,
  ) => {
    handleColumnSortChange(event.target.value)
  }

  return (
    <div className="QuerySortSelector bootstrap-4-backport">
      <Typography variant="label" className="SRC-inlineBlock">
        Sort by
      </Typography>
      <select
        name="sortable columns"
        onChange={handleSelectionChange}
        style={{ padding: '4px', marginLeft: '4px' }}
        value={sortColumn}
      >
        {sortableColumns.map(sortableColumn => {
          // if the current sort column is selected again, then flip the sort
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
