import BaseTable, {
  AutoResizer,
  Column,
} from '@sage-bionetworks/react-base-table'
import { debounce } from 'lodash-es'
import React, { useEffect, useMemo, useState } from 'react'
import { useQueryClient } from 'react-query'
import ReactTooltip from 'react-tooltip'
import {
  getEntityTypeFromHeader,
  isVersionableEntityType,
} from '../../../../utils/functions/EntityTypeUtils'
import { getEntityVersions } from '../../../../utils/SynapseClient'
import { useSynapseContext } from '../../../../utils/SynapseContext'
import {
  Direction,
  EntityHeader,
  EntityType,
  ProjectHeader,
  SortBy,
} from '../../../../utils/synapseTypes'
import { Hit } from '../../../../utils/synapseTypes/Search'
import { ENTITY_BADGE_ICONS_TOOLTIP_ID } from '../../../EntityBadgeIcons'
import { HelpButtonPopover } from '../../../HelpButtonPopover'
import { BlockingLoader } from '../../../LoadingScreen'
import { Checkbox } from '../../../widgets/Checkbox'
import { NO_VERSION_NUMBER } from '../../EntityFinder'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import {
  BadgeIconsRenderer,
  CheckboxRenderer,
  CreatedOnRenderer,
  CustomSortIndicator,
  EmptyRenderer,
  LoadingRenderer,
  ModifiedByRenderer,
  ModifiedOnRenderer,
  TypeIconRenderer,
  VersionRenderer,
} from './DetailsViewTableRenderers'

// Borrowed from: https://github.com/wwayne/react-tooltip/issues/300#issuecomment-468042592
const rebuildTooltip = debounce(() => ReactTooltip.rebuild(), 200, {
  leading: false,
  trailing: true,
})

export type DetailsViewProps = EntityDetailsListSharedProps & {
  entities: (EntityHeader | ProjectHeader | Hit)[]
  isLoading: boolean
  hasNextPage?: boolean
  fetchNextPage?: () => Promise<any>
  isFetchingNextPage?: boolean
  /** The current sort of the view. If the view cannot be sorted, set this to `undefined` */
  sort?: { sortBy: SortBy; sortDirection: Direction }
  /** If sortable, `setSort` will be invoked when the user tries to change the sort */
  setSort?: (soryBy: SortBy, sortDirection: Direction) => void
  noResultsPlaceholder?: React.ReactElement
  /** We defer to the configuration component to determine this */
  selectAllIsChecked?: boolean
  autoSizeWidth: boolean
}

/**
 * Describes the shape of the data passed to the BaseTable
 */
export type DetailsViewRowData = (EntityHeader | ProjectHeader | Hit) & {
  entityType: EntityType
  isSelected: boolean
  isHidden: boolean
  isDisabled: boolean
  isVersionableEntity: boolean
  currentSelectedVersion?: number
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
  isLoading,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
  showVersionSelection,
  mustSelectVersionNumber,
  selectColumnType,
  selected,
  visibleTypes,
  selectableTypes,
  toggleSelection,
  sort,
  setSort,
  noResultsPlaceholder,
  enableSelectAll,
  selectAllIsChecked = false,
  autoSizeWidth,
}) => {
  const queryClient = useQueryClient()

  const { accessToken } = useSynapseContext()

  const showSelectColumn = selectColumnType !== 'none'

  const [shouldSelectAll, setShouldSelectAll] = useState(false)
  const [showLoadingScreen, setShowLoadingScreen] = useState(false)

  type DetailsViewRowAppearance = 'hidden' | 'disabled' | 'selected' | 'default'

  const determineRowAppearance = (
    entity: EntityHeader | ProjectHeader | Hit,
  ): DetailsViewRowAppearance => {
    if (!visibleTypes.includes(getEntityTypeFromHeader(entity))) {
      return 'hidden'
    } else if (!selectableTypes.includes(getEntityTypeFromHeader(entity))) {
      return 'disabled'
    } else if (selected.has(entity.id)) {
      return 'selected'
    } else {
      return 'default'
    }
  }

  useEffect(() => {
    async function handleSelectAll() {
      if (shouldSelectAll) {
        if (hasNextPage && fetchNextPage) {
          // Show the loading screen since we must fetch data (potentially a lot) to finish the task
          setShowLoadingScreen(true)
          if (!isFetchingNextPage) {
            fetchNextPage()
          }
        } else {
          if (selectAllIsChecked) {
            // All of the items are selected, so we will deselect all
            toggleSelection(
              entities
                .filter(e => {
                  // Collect just entities that are selected
                  // An entity may be in the list and unselected because it isn't of a selectable type
                  return selected.has(e.id)
                })
                .map(e => {
                  const selectedVersion = selected.get(e.id)
                  return {
                    targetId: e.id,
                    targetVersionNumber:
                      selectedVersion === NO_VERSION_NUMBER
                        ? undefined
                        : selectedVersion,
                  }
                }),
            )
          } else {
            // Not all of the items are selected, so we will select all
            toggleSelection(
              await Promise.all(
                entities
                  .filter(e => {
                    // must filter just selectable types or else any entities of unselectable types will get selected
                    const type = getEntityTypeFromHeader(e)
                    // also exclude already-selected entities, since we don't want to toggle those
                    return (
                      !selected.has(e.id) &&
                      selectableTypes.includes(type) &&
                      visibleTypes.includes(type)
                    )
                  })
                  .map(async e => {
                    let latestVersion: number | undefined
                    if (
                      mustSelectVersionNumber &&
                      isVersionableEntityType(getEntityTypeFromHeader(e))
                    ) {
                      // If `mustSelectVersionNumber` is true, then we need to supply a version with the entity.
                      // We may already have the version from the header:
                      if (
                        Object.prototype.hasOwnProperty.call(e, 'versionNumber')
                      ) {
                        latestVersion = (e as EntityHeader).versionNumber
                      }
                      if (!latestVersion) {
                        // Failsafe if we didn't get the version in the header. This is rare/unlikely, since the only cases we're sure we don't get versions are:
                        //  - ProjectHeaders (which are versionless)
                        //  - Search Results (for which we don't support Select All)
                        // For large lists, there's a good chance for this to trigger throttling.

                        // Show the loading screen since we must fetch data (potentially a lot) to finish the task
                        setShowLoadingScreen(true)

                        const versions = await queryClient.fetchQuery(
                          ['entity', e.id, 'versions', { offset: 0, limit: 1 }],
                          () => getEntityVersions(e.id, accessToken, 0, 1),
                        )
                        // we pick the first version in the list because it is the most recent
                        latestVersion = versions.results[0]?.versionNumber
                      }
                    }
                    return {
                      targetId: e.id,
                      targetVersionNumber: latestVersion,
                    }
                  }),
              ),
            )
          }
          setShouldSelectAll(false)
          setShowLoadingScreen(false)
        }
      }
    }
    handleSelectAll()
  }, [
    accessToken,
    entities,
    fetchNextPage,
    hasNextPage,
    mustSelectVersionNumber,
    queryClient,
    isFetchingNextPage,
    selectAllIsChecked,
    selectableTypes,
    selected,
    shouldSelectAll,
    toggleSelection,
  ])

  const tableData = entities.map<DetailsViewRowData>(e => {
    const appearance = determineRowAppearance(e)
    const entityType = getEntityTypeFromHeader(e)
    return {
      ...e,
      entityType,
      isSelected: appearance === 'selected',
      isHidden: appearance === 'hidden',
      isDisabled: appearance === 'disabled',
      isVersionableEntity: isVersionableEntityType(entityType),
      currentSelectedVersion: selected.get(e.id),
    }
  })

  const SelectAllCheckboxRenderer = useMemo(() => {
    const isDisabled = !entities.some(e =>
      selectableTypes.includes(getEntityTypeFromHeader(e)),
    )
    return (
      enableSelectAll && (
        <div
          data-testid="Select All"
          style={isDisabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' }}
          onClick={() => {
            if (!isDisabled) {
              setShouldSelectAll(true)
            }
          }}
        >
          <Checkbox
            label=""
            className="SRC-pointer-events-none"
            checked={selectAllIsChecked}
            disabled={isDisabled}
            onChange={() => {
              // no-op
            }}
          />
        </div>
      )
    )
  }, [enableSelectAll, entities, selectAllIsChecked, selectableTypes])

  const sortState = {}
  if (sort) {
    sortState[sort.sortBy] = sort.sortDirection.toLowerCase()
  }

  return (
    <div className="EntityFinderDetailsView bootstrap-4-backport">
      <BlockingLoader show={showLoadingScreen} />
      <AutoResizer className="DetailsViewAutosizer" onResize={rebuildTooltip}>
        {({ height, width }: { height: number; width: number }) => (
          <BaseTable
            classPrefix="DetailsViewTable"
            data={tableData}
            height={height}
            width={autoSizeWidth ? width : 1200}
            rowHeight={46}
            overscanRowCount={5}
            // Apply classes to the rows for styling
            rowClassName={({ rowIndex }: { rowIndex: number }) => {
              let className = 'EntityFinderDetailsViewRow'
              if (rowIndex % 2 === 0) {
                // Apply a class based on index so we can get alternating colors
                // We don't use CSSs nth-child because the rows are virtualized, so an even child might change to odd on-the-fly
                className += ' isEven'
              }
              return className
            }}
            // Apply aria roles to the rows for a11y/styling
            rowProps={({ rowData }) => {
              return {
                'aria-selected': rowData.isSelected,
                'aria-disabled': rowData.isDisabled,
                'aria-hidden': rowData.isHidden,
              }
            }}
            headerCellProps={{
              role: 'columnheader',
            }}
            // Sorting:
            sortState={sortState}
            components={{ SortIndicator: CustomSortIndicator }}
            onColumnSort={({ key, order }) => {
              if (sort && setSort) {
                setSort(
                  key as SortBy,
                  order === 'asc' ? Direction.ASC : Direction.DESC,
                )
              }
            }}
            onScroll={rebuildTooltip}
            rowEventHandlers={{
              onClick: ({ rowData }) => {
                const { id, isDisabled, isVersionableEntity } = rowData
                let { currentSelectedVersion } = rowData
                if (!isDisabled) {
                  if (
                    isVersionableEntity &&
                    mustSelectVersionNumber &&
                    currentSelectedVersion == null &&
                    Object.prototype.hasOwnProperty.call(
                      rowData,
                      'versionNumber',
                    )
                  ) {
                    currentSelectedVersion = (rowData as EntityHeader)
                      .versionNumber
                  }

                  toggleSelection({
                    targetId: id,
                    targetVersionNumber:
                      currentSelectedVersion === -1
                        ? undefined
                        : currentSelectedVersion,
                  })
                }
              },
            }}
            onEndReached={() => {
              if (hasNextPage && fetchNextPage && !isFetchingNextPage) {
                fetchNextPage()
              }
            }}
            emptyRenderer={
              isLoading
                ? LoadingRenderer
                : () => (
                    <EmptyRenderer
                      noResultsPlaceholder={noResultsPlaceholder}
                    />
                  )
            }
          >
            {showSelectColumn && (
              <Column<DetailsViewRowData>
                key="isSelected"
                title=""
                minWidth={50}
                maxWidth={50}
                width={50}
                dataKey="isSelected"
                headerRenderer={SelectAllCheckboxRenderer}
                cellRenderer={CheckboxRenderer}
              />
            )}
            <Column<DetailsViewRowData>
              key="type"
              title=""
              minWidth={45}
              maxWidth={45}
              width={45}
              dataKey="entityType"
              cellRenderer={TypeIconRenderer}
            />
            <Column<DetailsViewRowData>
              key={SortBy.NAME}
              title="Name"
              width={800}
              dataKey="name"
              sortable={sort != null}
              resizable={true}
            />
            <Column<DetailsViewRowData>
              key="badge"
              title=""
              width={75}
              maxWidth={75}
              minWidth={75}
              cellRenderer={BadgeIconsRenderer}
            />

            <Column<DetailsViewRowData>
              key="id"
              width={120}
              dataKey="id"
              title="ID"
              minWidth={120}
            />
            {showVersionSelection && (
              <Column<DetailsViewRowData>
                key="version"
                minWidth={150}
                width={500}
                title="Version"
                cellRenderer={props => (
                  <VersionRenderer
                    mustSelectVersionNumber={mustSelectVersionNumber}
                    toggleSelection={toggleSelection}
                    {...props}
                  />
                )}
                headerRenderer={() => {
                  return (
                    <>
                      Version
                      <HelpButtonPopover
                        contentMarkdown={
                          'Allows you to choose which version of this item you would like to perform this action on. If you would like the selected reference to update as new versions are created, choose “Always Latest Version”'
                        }
                      />
                    </>
                  )
                }}
              />
            )}
            <Column<DetailsViewRowData>
              key={SortBy.CREATED_ON}
              sortable={sort != null}
              title="Created On"
              width={200}
              minWidth={150}
              cellRenderer={CreatedOnRenderer}
            />
            <Column<DetailsViewRowData>
              key={SortBy.MODIFIED_ON}
              title="Modified On"
              width={200}
              minWidth={150}
              sortable={sort != null}
              cellRenderer={ModifiedOnRenderer}
            />
            <Column<DetailsViewRowData>
              key="modifiedBy"
              title="Modified By"
              width={500}
              resizable
              cellRenderer={ModifiedByRenderer}
            />
          </BaseTable>
        )}
      </AutoResizer>
      <ReactTooltip
        id={ENTITY_BADGE_ICONS_TOOLTIP_ID}
        className="EntityBadgeTooltip"
        delayShow={100}
        place={'right'}
        effect={'solid'}
      />
    </div>
  )
}
