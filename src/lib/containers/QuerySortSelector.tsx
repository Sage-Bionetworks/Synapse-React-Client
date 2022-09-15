import React, { useState } from 'react'
import { SortConfiguration } from './CardContainerLogic'
import { useQueryContext } from './QueryContext'
import { SortDirection, SortItem } from '../utils/synapseTypes'
import { unCamelCase } from '../utils/functions/unCamelCase'
import Typography from '../utils/typography/Typography'
import Select from 'react-select'
import {
  EnumOption,
  findValueOption,
  Control,
} from './entity/annotations/CustomSelectWidget'

export type QuerySortSelectorProps = {
  sortConfig: SortConfiguration
  facetAliases?: Record<string, string>
}

const QuerySortSelector: React.FunctionComponent<QuerySortSelectorProps> = ({
  sortConfig,
  facetAliases,
}) => {
  const { defaultColumn, defaultDirection, sortableColumns } = sortConfig
  const queryContext = useQueryContext()
  const { getLastQueryRequest, executeQueryRequest } = queryContext
  const [sortColumn, setSortColumn] = useState<string | undefined>(
    defaultColumn,
  )
  const [sortDirection, setSortDirection] = useState(defaultDirection)

  const enumOptions: EnumOption[] = sortableColumns.map(sortableColumn => {
    return {
      value: sortableColumn,
      label: unCamelCase(sortableColumn, facetAliases)!,
    }
  })

  const onChange = (value?: string) => {
    const lastQueryRequestDeepClone = getLastQueryRequest()
    let newSortDirection: SortDirection = 'ASC'
    if (value === sortColumn) {
      // flip sort direction
      newSortDirection = sortDirection === 'ASC' ? 'DESC' : 'ASC'
    }

    const newSortItems: SortItem[] | undefined = value
      ? [
          {
            column: value,
            direction: newSortDirection,
          },
        ]
      : undefined
    lastQueryRequestDeepClone.query.sort = newSortItems
    executeQueryRequest(lastQueryRequestDeepClone)
    setSortColumn(value)
    setSortDirection(newSortDirection)
  }

  return (
    <div className="QuerySortSelector bootstrap-4-backport">
      <Typography variant="label" className="sort-by-label SRC-inlineBlock">
        Sort by
      </Typography>
      <Select
        className="react-select-container SRC-inlineBlock"
        value={findValueOption(sortColumn, enumOptions)}
        options={enumOptions}
        onChange={option => onChange((option as EnumOption | null)?.value)}
        components={{ Control }}
        styles={{
          control: provided => ({
            ...provided,
            marginLeft: '15px',
          }),
        }}
      />
    </div>
  )
}

export default QuerySortSelector
