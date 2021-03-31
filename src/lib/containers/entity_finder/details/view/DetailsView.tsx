import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { QueryStatus } from 'react-query'
import SortIcon from '../../../../assets/icons/Sort'
import { getEntityTypeFromHeader } from '../../../../utils/functions/EntityTypeUtils'
import {
  Direction,
  EntityHeader,
  ProjectHeader,
  SortBy,
} from '../../../../utils/synapseTypes'
import { Hit } from '../../../../utils/synapseTypes/Search'
import { HelpButtonPopover } from '../../../HelpButtonPopover'
import { SynapseSpinner } from '../../../LoadingScreen'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsViewRow, DetailsViewRowAppearance } from './DetailsViewRow'

export type DetailsViewProps = EntityDetailsListSharedProps & {
  entities: (EntityHeader | ProjectHeader | Hit)[]
  queryStatus: QueryStatus
  queryIsFetching: boolean
  hasNextPage?: boolean
  fetchNextPage?: () => void
  /** The current sort of the view. If the view cannot be sorted, set this to `undefined` */
  sort?: { sortBy: SortBy; sortDirection: Direction }
  /** If sortable, `setSort` will be invoked when the user tries to change the sort */
  setSort?: (soryBy: SortBy, sortDirection: Direction) => void
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
  includeTypes,
  selectableTypes,
  toggleSelection,
  sort,
  setSort,
  noResultsPlaceholder,
}) => {
  // Load the next page when this ref comes into view.
  const { ref, inView } = useInView()

  const showSelectColumn = selectColumnType !== 'none'

  const determineRowAppearance = (
    entity: EntityHeader | ProjectHeader | Hit,
  ): DetailsViewRowAppearance => {
    if (!includeTypes.includes(getEntityTypeFromHeader(entity))) {
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
          role="button"
          style={{ height: '20px' }}
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
    <div className="EntityFinderDetailsView">
      <table>
        <thead>
          <tr className="EntityFinderDetailsView__HeaderRow">
            {showSelectColumn && <th className="IsSelectedColumn" />}
            <th className="EntityIconColumn" />
            <th className="NameColumn">
              <div>
                <span>Name</span>
                <span>{showInteractiveSortIcon(SortBy.NAME)}</span>
              </div>
            </th>
            <th className="AccessColumn"></th>
            <th className="IdColumn">
              <div>ID</div>
            </th>
            <th className="CreatedOnColumn">
              <div>
                <span>Created On</span>
                <span>{showInteractiveSortIcon(SortBy.CREATED_ON)}</span>
              </div>
            </th>
            <th className="ModifiedOnColumn">
              <div>
                <span>Modified On</span>
                <span>{showInteractiveSortIcon(SortBy.MODIFIED_ON)}</span>
              </div>
            </th>
            {showVersionSelection && (
              <th className="VersionColumn">
                <div>
                  <span>
                    Version
                    <HelpButtonPopover
                      contentMarkdown={
                        'Allows you to choose which version of this item you would like to perform this action on. If you would like the selected reference to update as new versions are created, choose “Always Latest Version”'
                      }
                    />
                  </span>
                </div>
              </th>
            )}
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
                selectedVersion={
                  selected.find(e => e.targetId === entity.id)
                    ?.targetVersionNumber
                }
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
          {queryStatus !== 'loading' &&
            (noResultsPlaceholder || <div>No results</div>)}
          {queryStatus === 'loading' && <SynapseSpinner size={30} />}
        </div>
      )}
    </div>
  )
}
