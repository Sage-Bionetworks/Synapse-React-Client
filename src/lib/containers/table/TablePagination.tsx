import React, { useEffect, useState } from 'react'
import { Pagination } from '@material-ui/lab'
import { usePaginatedQueryContext } from '../QueryContext'
import Typography from '../../utils/typography/Typography'

export const TablePagination = () => {
  const [pageSize, setPageSize] = useState(25)
  const [page, setPage] = useState(1)

  const { executeQueryRequest, getLastQueryRequest, data, goToPage } =
    usePaginatedQueryContext()
  const queryCount = data?.queryCount

  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    goToPage(page)
  }

  const handlePageSize = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as number
    setPageSize(value)
  }

  useEffect(() => {
    const lastQueryRequestDeepClone = getLastQueryRequest()
    lastQueryRequestDeepClone.query.offset = (page - 1) * pageSize
    lastQueryRequestDeepClone.query.limit = pageSize
    executeQueryRequest(lastQueryRequestDeepClone)
  }, [pageSize, page])

  return (
    <div>
      <Pagination
        page={page}
        count={Math.ceil(queryCount! / pageSize)}
        color="secondary"
        onChange={handlePage}
        style={{ display: 'inline-block', float: 'left' }}
      />
      <Typography variant="body1" style={{ display: 'inline-block' }}>
        {`${queryCount?.toLocaleString()} total rows /`}
      </Typography>
      <select
        name="page size"
        onChange={handlePageSize}
        style={{ padding: '4px', marginLeft: '4px' }}
      >
        <option value={10}>10 per page</option>
        <option selected value={25}>
          25 per page
        </option>
        <option value={100}>100 per page</option>
        <option value={500}>500 per page</option>
      </select>
    </div>
  )
}
