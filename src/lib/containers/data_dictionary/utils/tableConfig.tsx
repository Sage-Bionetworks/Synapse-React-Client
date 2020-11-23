import { Options as MaterialTableOptions } from 'material-table'
import { TABLE_PAGE_SIZE } from './../constants'

interface MaterialTableVariables {
  length?: number
}

export function tableConfig<T extends Record<string, unknown>>(
  options: MaterialTableOptions<T> = {},
  variables: MaterialTableVariables = {},
): MaterialTableOptions<T> {
  const length = Math.max(variables.length || 0, 0)
  const pageSize = options.pageSize ?? TABLE_PAGE_SIZE

  return {
    draggable: false,
    emptyRowsWhenPaging: false,
    filtering: false,
    grouping: false,
    loadingType: 'linear',
    paging: length > pageSize,
    pageSize,
    pageSizeOptions: [pageSize],
    search: false,
    showTitle: false,
    sorting: length > 1,
    toolbar: false,
    ...options,
  }
}
