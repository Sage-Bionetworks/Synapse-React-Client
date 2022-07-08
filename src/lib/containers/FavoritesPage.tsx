import React, { useState, useEffect } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import { SynapseClient } from '../utils'
import SortIcon from '../assets/icons/Sort'
import { Direction, EntityHeader } from '../utils/synapseTypes'
import { useSynapseContext } from '../utils/SynapseContext'
import { SynapseSpinner } from './LoadingScreen'
import { useGetFavorites } from '../utils/hooks/SynapseAPI/user/useFavorites'
import IconSvg from './IconSvg'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
} from '../utils/functions/EntityTypeUtils'
import ReactTooltip from 'react-tooltip'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import { EntityTypeIcon } from './EntityIcon'
import { Form } from 'react-bootstrap'
import { ErrorBanner } from './ErrorBanner'

// Local types used for client-side sorting
export type SortField = 'name' | 'type'
export type SortDirection = 'ASC' | 'DESC'
export type Sort = {
  field: SortField
  direction: SortDirection
}

export default function FavoritesPage() {
  const { accessToken } = useSynapseContext()
  const [sort, setSort] = useState<Sort | undefined>(undefined)
  const [searchText, setSearchText] = useState<string>('')
  const [sortedData, setSortedData] = useState<EntityHeader[] | undefined>(
    undefined,
  )
  const [error, setError] = useState<Error>()
  const {
    data,
    isFetching,
    isError,
    error: newError,
    refetch,
  } = useGetFavorites()

  useEffect(() => {
    if (isError && newError) {
      setError(newError)
    }
  }, [isError, newError])

  useEffect(() => {
    if (!accessToken) {
      setError(new Error('Please sign in to access your favorites.'))
    }
  }, [accessToken])

  const filterEntityHeaders = (searchTerm: string, array: EntityHeader[]) => {
    const searchTermLowercase = searchTerm.toLowerCase()
    return array.filter(
      item => item.name.toLowerCase().indexOf(searchTermLowercase) >= 0,
    )
  }

  useEffect(() => {
    if (data) {
      let newData = [...data.results]
      if (sort) {
        newData.sort((a, b) => {
          if (sort.direction == 'DESC') {
            return a[sort.field].toLowerCase() > b[sort.field].toLowerCase()
              ? 1
              : -1
          } else {
            return a[sort.field].toLowerCase() < b[sort.field].toLowerCase()
              ? 1
              : -1
          }
        })
      }
      if (searchText) {
        newData = filterEntityHeaders(searchText, newData)
      }
      setSortedData(newData)
    }
  }, [data, searchText, sort])

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

  if (error) {
    return <ErrorBanner error={error} />
  }

  return (
    <div className="FavoritesPage">
      <div className="searchInputWithIcon">
        <IconSvg options={{ icon: 'searchOutlined' }} />
        <Form.Control
          type="search"
          placeholder="Favorite Name"
          value={searchText}
          onChange={event => {
            setSearchText(event.target.value)
          }}
        />
      </div>

      {sortedData && sortedData.length > 0 && (
        <div className="bootstrap-4-backport">
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
              {sortedData.map((item: EntityHeader) => {
                if (item) {
                  const entityType = convertToEntityType(item.type)
                  return (
                    <tr key={item.id}>
                      <td>
                        <a
                          data-tip="Click the star to remove this item from your favorites"
                          data-for={`${item.id}-Tooltip`}
                          onClick={() => {
                            removeFavorite(item)
                          }}
                          className="ignoreLink"
                        >
                          <ReactTooltip
                            delayShow={300}
                            place="right"
                            type="dark"
                            effect="solid"
                            id={`${item.id}-Tooltip`}
                          />
                          <IconSvg
                            options={{ icon: 'fav', color: '#EDC766' }}
                          />
                        </a>
                      </td>
                      <td>
                        <a
                          rel="noopener noreferrer"
                          href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${item.id}`}
                        >
                          {item.name}
                        </a>
                      </td>
                      <td>
                        <EntityTypeIcon
                          type={entityType}
                          style={{ marginRight: '5px' }}
                        />
                        {entityTypeToFriendlyName(entityType)}
                      </td>
                    </tr>
                  )
                } else return false
              })}
            </tbody>
          </ReactBootstrap.Table>
        </div>
      )}
      {isFetching && (
        <div className="placeholder">
          <SynapseSpinner size={30} />
        </div>
      )}
    </div>
  )
}
