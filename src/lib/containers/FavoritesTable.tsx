import React, { useState, useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import * as ReactBootstrap from 'react-bootstrap'
import { SynapseClient } from '../utils'
import SortIcon from '../assets/icons/Sort'
import { Direction, EntityHeader } from '../utils/synapseTypes'
import { useSynapseContext } from '../utils/SynapseContext'
import { toError } from '../utils/ErrorUtils'
import { SynapseSpinner } from './LoadingScreen'
import { useGetFavorites } from '../utils/hooks/SynapseAPI/useFavorites'
import IconSvg from './IconSvg'
import { convertToEntityType, entityTypeToFriendlyName } from '../utils/functions/EntityTypeUtils'

// Local types used for client-side sorting
export type SortField = 'name' | 'type'
export type SortDirection = 'ASC' | 'DESC'
export type Sort = {
  field: SortField
  direction: SortDirection
}

export default function FavoritesTable() {
  const { accessToken } = useSynapseContext()
  const handleError = useErrorHandler()
  const [sort, setSort] = useState<Sort | undefined>(undefined)
  const [sortedData, setSortedData] = useState<EntityHeader[] | undefined>(undefined)
  const {
    data,
    isFetching,
    isError,
    error: newError,
    refetch,
  } = useGetFavorites()

  useEffect(() => {
    if (isError && newError) {
      handleError(toError(newError))
    }
  }, [isError, newError, handleError])

  useEffect(() => {
    if (data) {
      if (sort) {
        const newSortedData = [...data.results]
        newSortedData.sort((a, b) => {
          if (sort.direction == 'DESC') {
            return (a[sort.field] > b[sort.field]) ? 1 : -1
          }
          else {
            return (a[sort.field] < b[sort.field]) ? 1 : -1
          }
        })
        setSortedData(newSortedData)
      } else {
        // no sort
        setSortedData(data.results)
      }
    }
  }, [data, sort])

  const removeFavorite = async (item: EntityHeader) => {
    try {
      await SynapseClient.removeUserFavorite(item.id, accessToken)
      refetch()
    } catch (err) {
      console.error(err)
    }
  }

  const showInteractiveSortIcon = (columnSortBy: SortField) => {
    return (
      setSort && (
        <SortIcon
          role="button"
          style={{ height: '20px' }}
          active={sort?.field === columnSortBy}
          direction={
            sort?.field === columnSortBy
              ? sort.direction === 'DESC'
                ? Direction.DESC
                : Direction.ASC
              : Direction.DESC
          }
          onClick={() => {
            const direction =
              columnSortBy === sort?.field
                ? sort.direction === 'ASC'
                  ? 'DESC'
                  : 'ASC'
                : 'DESC'
            setSort({
              field: columnSortBy,
              direction,
            })
          }}
        />
      )
    )
  }
  
  return (
    <>
      {sortedData && sortedData.length > 0 && (
        <ReactBootstrap.Table
          striped={true}
          responsive={true}
          className="FavoritesTable"
        >
          <thead>
            <tr>
              {/* first column for the favorite icon */}
              <th />
              <th>
                Name
                <span>{showInteractiveSortIcon('name')}</span>
              </th>
              <th>
                Type
                <span>{showInteractiveSortIcon('type')}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item:EntityHeader) => {
              if (item) {
                return (
                  <tr key={item.id}>
                    <td>
                      <a
                          onClick={()=>{removeFavorite(item)}}
                      >
                        <IconSvg options={{icon:'star'}} />
                      </a>
                    </td>
                    <td>{item.name}</td>
                    <td>{entityTypeToFriendlyName(convertToEntityType(item.type))}</td>
                  </tr>
                )
              } else return false
            })}
          </tbody>
        </ReactBootstrap.Table>
      )}
      {isFetching && (
        <div className="placeholder">
          <SynapseSpinner size={30} />
        </div>
      )}
    </>
  )
}
