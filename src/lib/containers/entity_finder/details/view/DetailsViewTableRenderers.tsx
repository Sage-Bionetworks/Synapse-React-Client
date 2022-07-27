import { Skeleton } from '@material-ui/lab'
import BaseTable, {
  CallOrReturn,
  ColumnShape,
  SortOrder,
} from '@sage-bionetworks/react-base-table'
import moment from 'moment'
import React, { SyntheticEvent, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import SortIcon from '../../../../assets/icons/Sort'
import { formatDate } from '../../../../utils/functions/DateFormatter'
import {
  useGetEntity,
  useGetVersionsInfinite,
} from '../../../../utils/hooks/SynapseAPI/entity/useEntity'
import useGetEntityBundle from '../../../../utils/hooks/SynapseAPI/entity/useEntityBundle'
import { SMALL_USER_CARD } from '../../../../utils/SynapseConstants'
import {
  EntityRef,
  EntityType,
  Reference,
} from '../../../../utils/synapseTypes'
import Tooltip from '../../../../utils/tooltip/Tooltip'
import { EntityBadgeIcons } from '../../../EntityBadgeIcons'
import { EntityTypeIcon } from '../../../EntityIcon'
import { EntityLink } from '../../../EntityLink'
import IconSvg from '../../../IconSvg'
import { SynapseSpinner } from '../../../LoadingScreen'
import { DatasetItemsEditorTableData } from '../../../table/datasets/DatasetItemsEditor'
import UserCard from '../../../UserCard'
import { Checkbox } from '../../../widgets/Checkbox'
import { NO_VERSION_NUMBER } from '../../EntityFinder'
import { EntityFinderTableViewRowData } from './DetailsView'

// TODO: Consider sharing logic with SynapseTableCell.tsx

export type CellRendererProps<T> = {
  cellData: any
  columns: ColumnShape<T>[]
  column: ColumnShape<T>
  columnIndex: number
  rowData: T
  rowIndex: number
  container: BaseTable<T>
  isScrolling?: boolean
}

export type CellRenderer<T> = CallOrReturn<
  React.ReactNode,
  CellRendererProps<T>
>

/**
 * The data across tables may differ, but it has entity ID and version, then it can use many of these renderers
 */
export type EntityIdAndVersionNumber = {
  entityId: string
  versionNumber?: number
}

export type EntityIdAndVersionRendererProps =
  CellRendererProps<EntityIdAndVersionNumber>

/**
 * Props for cellRenderer components within the BaseTable
 */
export type EntityFinderTableCellRendererProps =
  CellRendererProps<EntityFinderTableViewRowData>

export const CustomSortIndicator = ({
  className,
  sortOrder,
}: {
  className: string
  sortOrder: SortOrder
}) => {
  return (
    <SortIcon
      className={className}
      active={true}
      role="button"
      style={{ height: '20px', marginLeft: 'auto' }}
      direction={sortOrder}
    />
  )
}

/**
 * Renders Entity Badges using the entity bundle.
 * @param props
 * @returns
 */
export function BadgeIconsRenderer(props: EntityIdAndVersionRendererProps) {
  return (
    <EntityBadgeIcons
      entityId={props.rowData.entityId}
      versionNumber={props.rowData.versionNumber}
      showHasDiscussionThread={false}
      showHasWiki={false}
      showUnlink={false}
      canOpenModal={false}
      // We render the tooltip component outside of the table so it plays nicely with list virtualization
      // https://github.com/wwayne/react-tooltip/issues/300#issuecomment-468042592
      renderTooltipComponent={false}
    />
  )
}

export function DateRenderer({ cellData }: { cellData?: string }) {
  return <>{(cellData && formatDate(moment(cellData))) ?? <></>}</>
}

/**
 * Renders 'modifiedOn' from the entity bundle.
 * @param props
 * @returns
 */
export function ModifiedOnRenderer(props: EntityIdAndVersionRendererProps) {
  const { data: bundle, isLoading } = useGetEntityBundle(
    props.rowData.entityId,
    undefined,
    props.rowData.versionNumber,
  )

  if (isLoading) {
    return <Skeleton width={200} />
  }

  return <DateRenderer {...props} cellData={bundle?.entity?.modifiedOn} />
}

/**
 * Renders 'createdOn' from the entity bundle.
 * @param props
 * @returns
 */
export function CreatedOnRenderer(props: EntityIdAndVersionRendererProps) {
  const { data: bundle, isLoading } = useGetEntityBundle(
    props.rowData.entityId,
    undefined,
    props.rowData.versionNumber,
  )

  if (isLoading) {
    return <Skeleton width={200} />
  }

  return <DateRenderer {...props} cellData={bundle?.entity?.createdOn} />
}

export function EntityNameRenderer(props: EntityIdAndVersionRendererProps) {
  const { data: bundle, isLoading } = useGetEntityBundle(
    props.rowData.entityId,
    undefined,
    props.rowData.versionNumber,
  )
  if (isLoading) {
    return <Skeleton width={200} />
  }

  return bundle ? (
    <EntityLink
      className="EntityNameWithIconRenderer"
      entity={bundle.entity!}
      link={false}
    />
  ) : (
    <></>
  )
}

export function ProjectRenderer(props: EntityIdAndVersionRendererProps) {
  const { data: entityBundle, isLoading: isLoadingBundle } = useGetEntityBundle(
    props.rowData.entityId,
    undefined,
    props.rowData.versionNumber,
  )
  const { data: project, isLoading: isLoadingProjectEntity } = useGetEntity(
    entityBundle?.path!.path[1].id ?? '',
    undefined,
    { enabled: !!entityBundle },
  )

  if (isLoadingBundle || isLoadingProjectEntity) {
    return <Skeleton width={200} />
  }

  return project ? <EntityLink entity={project} /> : <></>
}

export function UserCardRenderer({ cellData }: { cellData?: string }) {
  return (
    <UserCard
      ownerId={cellData}
      size={SMALL_USER_CARD}
      openLinkInNewTab={true}
    />
  )
}

/**
 * Renders 'modifiedBy' from the entity bundle.
 * @param props
 * @returns
 */
export function ModifiedByRenderer(props: EntityIdAndVersionRendererProps) {
  const { data: bundle, isLoading } = useGetEntityBundle(
    props.rowData.entityId,
    undefined,
    props.rowData.versionNumber,
  )

  if (isLoading) {
    return <Skeleton width={200} />
  }

  return <UserCardRenderer {...props} cellData={bundle?.entity?.modifiedBy} />
}

export function LoadingRenderer() {
  return (
    <div className="EntityFinderDetailsViewPlaceholder">
      <SynapseSpinner size={30} />
    </div>
  )
}

export function DetailsViewCheckboxRenderer({
  rowData,
}: EntityFinderTableCellRendererProps) {
  const { isSelected, isDisabled } = rowData
  return (
    !isDisabled && (
      <Checkbox
        label={`Select ${rowData.entityId}`}
        hideLabel={true}
        className="SRC-pointer-events-none"
        checked={isSelected}
        onChange={() => {
          // no-op
        }}
      />
    )
  )
}

export function TypeIconRenderer({
  cellData,
}: EntityFinderTableCellRendererProps) {
  return (
    <EntityTypeIcon
      className="EntityFinderTableCellEntityIcon"
      type={cellData as EntityType}
    />
  )
}

export function EmptyRenderer({
  noResultsPlaceholder,
}: {
  noResultsPlaceholder: React.ReactNode
}) {
  return (
    <div className="EntityFinderDetailsViewPlaceholder">
      {noResultsPlaceholder || <div>Empty</div>}
    </div>
  )
}

export const DatasetEditorVersionRenderer = ({
  rowData,
  toggleSelection,
}: CellRendererProps<DatasetItemsEditorTableData> & {
  toggleSelection: (entity: EntityRef) => void
}) => {
  const { entityId, versionNumber } = rowData

  const {
    data: versionData,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetVersionsInfinite(entityId, {
    staleTime: 60 * 1000, // 60 seconds
  })
  const versions = versionData?.pages.flatMap(page => page.results) ?? []
  const currentVersionHasBeenRetrieved = !!versions.find(
    version => version.versionNumber === versionNumber,
  )
  useEffect(() => {
    if (!currentVersionHasBeenRetrieved && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [
    currentVersionHasBeenRetrieved,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  ])

  if (isError) {
    return <>{versionNumber}</>
  }

  return (
    <div>
      {versions && versions.length > 0 && (
        <Form.Control
          role="listbox"
          size="sm"
          as="select"
          value={versionNumber}
          onClick={(event: SyntheticEvent<HTMLSelectElement>) => {
            event.stopPropagation()
          }}
          onChange={event => {
            event.stopPropagation()
            const version = parseInt(event.target.value)
            toggleSelection({
              entityId: entityId,
              versionNumber: version,
            })
          }}
        >
          {
            /* The selected version number doesn't exist */
            !currentVersionHasBeenRetrieved &&
              !hasNextPage &&
              !isFetchingNextPage && (
                <option disabled key={versionNumber} value={versionNumber}>
                  {versionNumber} (Not Found)
                </option>
              )
          }
          {versions.map(version => {
            return (
              <option key={version.versionNumber} value={version.versionNumber}>
                {version.versionNumber}
                {version.isLatestVersion && ' (Latest)'}
              </option>
            )
          })}
        </Form.Control>
      )}
    </div>
  )
}

export const DetailsViewVersionRenderer = ({
  rowData,
  mustSelectVersionNumber,
  latestVersionText,
  toggleSelection,
}: EntityFinderTableCellRendererProps & {
  mustSelectVersionNumber: boolean
  latestVersionText: string
  toggleSelection: (entity: Reference | Reference[]) => void
}) => {
  const { id, isVersionableEntity, isSelected, currentSelectedVersion } =
    rowData
  const { data: versionData } = useGetVersionsInfinite(id, {
    enabled: isVersionableEntity,
    staleTime: 60 * 1000, // 60 seconds
  })
  const versions = versionData?.pages.flatMap(page => page.results) ?? []

  useEffect(() => {
    // If 'mustSelectVersionNumber' is true and the user has selected this entity and hasn't selected a version, then we force a version selection
    if (
      isSelected &&
      mustSelectVersionNumber &&
      currentSelectedVersion === NO_VERSION_NUMBER &&
      versions.length > 0
    ) {
      toggleSelection({
        targetId: id,
        targetVersionNumber: versions[0].versionNumber,
      })
    }
  }, [
    currentSelectedVersion,
    id,
    isSelected,
    mustSelectVersionNumber,
    toggleSelection,
    versions,
  ])

  return (
    <div>
      {isSelected && versions && versions.length > 0 && (
        <Form.Control
          role="listbox"
          size="sm"
          as="select"
          value={currentSelectedVersion}
          onClick={(event: SyntheticEvent<HTMLSelectElement>) => {
            event.stopPropagation()
          }}
          onChange={event => {
            event.stopPropagation()
            const version = parseInt(event.target.value)
            toggleSelection({
              targetId: id,
              targetVersionNumber:
                version === NO_VERSION_NUMBER ? undefined : version,
            })
          }}
        >
          {!mustSelectVersionNumber && (
            <option value={NO_VERSION_NUMBER}>{latestVersionText}</option>
          )}
          {versions.map(version => {
            return (
              <option key={version.versionNumber} value={version.versionNumber}>
                Version {version.versionNumber}
              </option>
            )
          })}
        </Form.Control>
      )}
    </div>
  )
}

export function DatasetEditorCheckboxRenderer(
  props: CellRendererProps<
    EntityIdAndVersionNumber & {
      isSelected: boolean
      isDisabled?: boolean
      setSelected: (newValue: boolean) => void
    }
  >,
) {
  const { isSelected, isDisabled, setSelected, entityId } = props.rowData
  return (
    !isDisabled && (
      <Checkbox
        data-testid={`dataset-editor-checkbox-${entityId}`}
        disabled={isDisabled}
        label={`Select ${entityId}`}
        hideLabel={true}
        checked={isSelected}
        onChange={value => {
          setSelected(value)
        }}
      />
    )
  )
}

export const EntityErrorRenderer = (props: EntityIdAndVersionRendererProps) => {
  const { entityId, versionNumber } = props.rowData
  const { error, isError } = useGetEntity(entityId, versionNumber)

  let message = error?.reason

  if (error?.status === 403) {
    message = "You don't have permission to view this entity."
  } else if (error?.status === 404) {
    message = 'The entity or version does not exist. It may have been deleted.'
  }

  if (!isError) {
    return <></>
  } else {
    return (
      <Tooltip
        title={message ?? ''}
        placement="right"
        className="EntityBadgeTooltip"
      >
        <div className="EntityErrorRenderer">
          <IconSvg options={{ icon: 'warningOutlined' }} />
        </div>
      </Tooltip>
    )
  }
}
