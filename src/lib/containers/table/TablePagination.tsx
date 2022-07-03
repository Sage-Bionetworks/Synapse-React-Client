import React from 'react'
import { Pagination } from '@material-ui/lab'
import { usePaginatedQueryContext } from '../QueryContext'
import Typography from '../../utils/typography/Typography'

export const TablePagination = () => {
  const { data, goToPage, pageSize, setPageSize, currentPage } =
    usePaginatedQueryContext()
  const queryCount = data?.queryCount

  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    goToPage(value)
  }

  const handlePageSize = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as number
    setPageSize(value)
  }

  return (
    <div>
      <Pagination
        page={currentPage}
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
