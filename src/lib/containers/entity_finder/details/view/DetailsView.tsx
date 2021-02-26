import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { QueryStatus } from 'react-query'
import SortIcon from '../../../../assets/icons/Sort'
import { getEntityTypeFromHeader } from '../../../../utils/functions/EntityTypeUtils'
import {
  Direction,
  EntityHeader,
  ProjectHeader,
  Reference,
  SortBy,
} from '../../../../utils/synapseTypes'
import { EntityType } from '../../../../utils/synapseTypes/EntityType'
import { Hit } from '../../../../utils/synapseTypes/Search'
import { DetailsViewRow, DetailsViewRowAppearance } from './DetailsViewRow'

export type DetailsViewProps = {
  sessionToken: string
  entities: (EntityHeader | ProjectHeader | Hit)[]
  queryStatus: QueryStatus
  queryIsFetching: boolean
  hasNextPage?: boolean
  fetchNextPage?: () => void
  /** The current sort of the view. If the view cannot be sorted, set this to `undefined` */
  sort?: { sortBy: SortBy; sortDirection: Direction }
  /** If sortable, `setSort` will be invoked when the user tries to change the sort */
  setSort?: (soryBy: SortBy, sortDirection: Direction) => void
  showVersionSelection: boolean
  /** Show checkboxes or radio buttons for selection. If `undefined`, the column will be hidden. */
  selectColumnType: 'checkbox' | 'radio' | 'none'
  selected: Reference[]
  showTypes: EntityType[]
  selectableTypes: EntityType[]
  toggleSelection: (entity: Reference) => void
  noResultsPlaceholder?: React.ReactElement
}

/**
 * Displays a list of entities in a table.
 *
 * If the list of entities is paginated, the `hasNextPage` prop can be set to indicate that there is more data to load.
 * When the view is ready to load more data, the `fetchNextPage` callback will be invoked. The view is designed to handle
 * an "infinite scroll" pattern, so entities should not be removed from the list when loading the next page.
 *
 * @param param0
 */
export const DetailsView: React.FunctionComponent<DetailsViewProps> = ({
  entities,
  queryStatus,
  queryIsFetching,
  hasNextPage,
  fetchNextPage,
  sessionToken,
  showVersionSelection,
  selectColumnType,
  selected,
  showTypes,
  selectableTypes,
  toggleSelection,
  sort,
  setSort,
  noResultsPlaceholder,
}) => {
  // Load the next page when this ref comes into view.
  const { ref, inView } = useInView()

  const determineRowAppearance = (
    entity: EntityHeader | ProjectHeader | Hit,
  ): DetailsViewRowAppearance => {
    if (!showTypes.includes(getEntityTypeFromHeader(entity))) {
      return 'hidden'
    } else if (!selectableTypes.includes(getEntityTypeFromHeader(entity))) {
      return 'disabled'
    } else if (selected.map(e => e.targetId).includes(entity.id)) {
      return 'selected'
    } else {
      return 'default'
    }
  }

  useEffect(() => {
    if (
      queryStatus === 'success' &&
      !queryIsFetching &&
      hasNextPage &&
      fetchNextPage &&
      inView
    ) {
      fetchNextPage()
    }
  }, [queryStatus, queryIsFetching, hasNextPage, fetchNextPage, inView])

  const showInteractiveSortIcon = (columnSortBy: SortBy) => {
    return (
      sort &&
      setSort && (
        <SortIcon
          style={{ float: 'right', height: '20px' }}
          active={sort.sortBy === columnSortBy}
          direction={
            sort.sortBy === columnSortBy ? sort.sortDirection : Direction.DESC
          }
          onClick={() => {
            if (sort.sortBy === columnSortBy) {
              setSort(
                sort.sortBy,
                sort.sortDirection === Direction.ASC
                  ? Direction.DESC
                  : Direction.ASC,
              )
            } else {
              setSort(columnSortBy, Direction.DESC)
            }
          }}
        />
      )
    )
  }

  return (
    <div
      className="EntityFinderDetailsView"
      style={{ width: '100%', overflow: 'auto' }}
    >
      <table style={{ width: '100%' }}>
        <thead>
          <tr className="EntityFinderDetailsView__HeaderRow">
            <th className="EntityIconColumn" />
            {selectColumnType !== 'none' && <th className="IsSelectedColumn" />}
            <th className="NameColumn">
              <span>Name</span>
              <span>{showInteractiveSortIcon(SortBy.NAME)}</span>
            </th>
            <th className="AccessColumn"></th>
            <th className="IdColumn">ID</th>
            <th className="CreatedOnColumn">
              <span>Created On</span>
              <span>{showInteractiveSortIcon(SortBy.CREATED_ON)}</span>
            </th>
            <th className="ModifiedOnColumn">
              <span>Modified On</span>
              <span>{showInteractiveSortIcon(SortBy.MODIFIED_ON)}</span>
            </th>
            {showVersionSelection && <th className="VersionColumn">Version</th>}
          </tr>
        </thead>
        <tbody className="EntityFinderDetailsView__TableBody">
          {entities?.map(entity => {
            return (
              <DetailsViewRow
                key={entity.id}
                sessionToken={sessionToken}
                entityHeader={entity}
                appearance={determineRowAppearance(entity)}
                showVersionColumn={showVersionSelection}
                selectButtonType={selectColumnType}
                toggleSelection={toggleSelection}
              ></DetailsViewRow>
            )
          })}
          {/* To trigger loading the next page */}
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
