import { JSXElement } from '@babel/types'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { QueryStatus } from 'react-query'
import useDeepCompareEffect from 'use-deep-compare-effect'
import SortIcon from '../../../assets/icons/Sort'
import { getEntityTypeFromHeader } from '../../../utils/functions/EntityTypeUtils'
import useTraceUpdate from '../../../utils/hooks/useTraceUpdate'
import {
  Direction,
  EntityHeader,
  ProjectHeader,
  SortBy,
} from '../../../utils/synapseTypes'
import { EntityType } from '../../../utils/synapseTypes/EntityType'
import { Hit } from '../../../utils/synapseTypes/Search'
import { EntityIdAndVersion } from '../EntityFinder'
import { DetailsViewRow } from './DetailsViewRow'

export type DetailsViewProps = {
  sessionToken: string
  entities: (EntityHeader | ProjectHeader | Hit)[]
  queryStatus: QueryStatus
  hasNextPage?: boolean
  fetchNextPage?: () => void
  sort?: { sortBy: SortBy; sortDirection: Direction } // undefined === cannot sort
  setSort?: (soryBy: SortBy, sortDirection: Direction) => void
  showVersionSelection: boolean
  selectMultiple: boolean
  selected: EntityIdAndVersion[] // synId(s)
  showTypes: EntityType[]
  selectableTypes: EntityType[]
  toggleSelection: (entity: EntityIdAndVersion) => void
  noResultsPlaceholder?: JSXElement
}

export const DetailsView: React.FunctionComponent<DetailsViewProps> = ({
  entities,
  queryStatus,
  hasNextPage,
  fetchNextPage,
  sessionToken,
  showVersionSelection,
  selectMultiple,
  selected,
  showTypes,
  selectableTypes,
  toggleSelection,
  sort,
  setSort,
  noResultsPlaceholder,
}) => {
  // used to load next page
  const { ref, inView } = useInView()

  useTraceUpdate(selected)

  useEffect(() => {
    if (queryStatus === 'success' && hasNextPage && fetchNextPage && inView) {
      fetchNextPage()
    }
  }, [queryStatus, hasNextPage, fetchNextPage, inView])

  return (
    <div
      className="EntityFinderDetailsView"
      style={{ width: '100%', overflow: 'auto' }}
    >
      <table style={{ width: '100%' }}>
        <thead>
          <tr className="EntityFinderDetailsView__HeaderRow">
            <th className="EntityIconColumn"></th>
            <th className="IsSelectedColumn"></th>
            <th className="NameColumn">
              <span>Name</span>
              <span>
                {/* TODO: Refactor to reduce code duplication and cache the entity bundle results. */}
                {sort && setSort && (
                  <SortIcon
                    style={{ float: 'right', height: '20px' }}
                    active={sort.sortBy === SortBy.NAME}
                    direction={
                      sort.sortBy === SortBy.NAME
                        ? sort.sortDirection
                        : Direction.DESC
                    }
                    onClick={() => {
                      if (sort.sortBy === SortBy.NAME) {
                        setSort(
                          sort.sortBy,
                          sort.sortDirection === Direction.ASC
                            ? Direction.DESC
                            : Direction.ASC,
                        )
                      } else {
                        setSort(SortBy.NAME, Direction.DESC)
                      }
                    }}
                  />
                )}
              </span>
            </th>
            <th className="AccessColumn"></th>
            <th className="IdColumn">ID</th>
            <th className="CreatedOnColumn">
              <span>Created On</span>
              <span>
                {sort && setSort && (
                  <SortIcon
                    style={{ float: 'right', height: '20px' }}
                    active={sort.sortBy === SortBy.CREATED_ON}
                    direction={
                      sort.sortBy === SortBy.CREATED_ON
                        ? sort.sortDirection
                        : Direction.DESC
                    }
                    onClick={() => {
                      if (sort.sortBy === SortBy.CREATED_ON) {
                        setSort(
                          sort.sortBy,
                          sort.sortDirection === Direction.ASC
                            ? Direction.DESC
                            : Direction.ASC,
                        )
                      } else {
                        setSort(SortBy.CREATED_ON, Direction.DESC)
                      }
                    }}
                  />
                )}{' '}
              </span>
            </th>
            <th className="ModifiedOnColumn">
              <span>Modified On</span>
              <span>
                {sort && setSort && (
                  <SortIcon
                    style={{ float: 'right', height: '20px' }}
                    active={sort.sortBy === SortBy.MODIFIED_ON}
                    direction={
                      sort.sortBy === SortBy.MODIFIED_ON
                        ? sort.sortDirection
                        : Direction.DESC
                    }
                    onClick={() => {
                      if (sort.sortBy === SortBy.MODIFIED_ON) {
                        setSort(
                          sort.sortBy,
                          sort.sortDirection === Direction.ASC
                            ? Direction.DESC
                            : Direction.ASC,
                        )
                      } else {
                        setSort(SortBy.MODIFIED_ON, Direction.DESC)
                      }
                    }}
                  />
                )}
              </span>
            </th>
            <th className="VersionColumn">Version</th>
          </tr>
        </thead>
        <tbody className="EntityFinderDetailsView__TableBody">
          {entities?.map(entity => {
            return (
              <DetailsViewRow
                key={entity.id}
                sessionToken={sessionToken}
                entityHeader={entity}
                hidden={!showTypes.includes(getEntityTypeFromHeader(entity))}
                disabled={
                  !selectableTypes.includes(getEntityTypeFromHeader(entity))
                }
                showVersionColumn={showVersionSelection}
                showSelectButton={selectMultiple ? 'checkbox' : 'radio'}
                isSelected={selected.map(e => e.entityId).includes(entity.id)}
                toggleSelection={toggleSelection}
              ></DetailsViewRow>
            )
          })}
          {/* Just for pagination */}
          <tr ref={ref} />
        </tbody>
      </table>
      {entities.length === 0 && (
        <div className="EntityFinderDetailsView__Placeholder">
          <div className="EntityFinderDetailsView__Placeholder__Content">
            {queryStatus !== 'loading' &&
              (noResultsPlaceholder || <div>No results</div>)}
            {queryStatus === 'loading' && <div className="spinner" />}
          </div>
        </div>
      )}
    </div>
  )
}
