import { Skeleton } from '@material-ui/lab'
import { ColumnShape, SortOrder } from '@sage-bionetworks/react-base-table'
import moment from 'moment'
import React, { SyntheticEvent, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import SortIcon from '../../../../assets/icons/Sort'
import { formatDate } from '../../../../utils/functions/DateFormatter'
import { useGetVersionsInfinite } from '../../../../utils/hooks/SynapseAPI/useEntity'
import useGetEntityBundle from '../../../../utils/hooks/SynapseAPI/useEntityBundle'
import { SMALL_USER_CARD } from '../../../../utils/SynapseConstants'
import { EntityType, Reference } from '../../../../utils/synapseTypes'
import { EntityBadgeIcons } from '../../../EntityBadgeIcons'
import { EntityTypeIcon } from '../../../EntityIcon'
import { SynapseSpinner } from '../../../LoadingScreen'
import UserCard from '../../../UserCard'
import { Checkbox } from '../../../widgets/Checkbox'
import { NO_VERSION_NUMBER } from '../../EntityFinder'
import { DetailsViewRowData } from './DetailsView'

/**
 * Props for cellRenderer components within the BaseTable
 */
export type DetailsViewRendererProps = {
  rowData: DetailsViewRowData
  cellData: any
  columns: ColumnShape<DetailsViewRowData>[]
}

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

export function BadgeIconsRenderer({ rowData }: DetailsViewRendererProps) {
  return (
    <EntityBadgeIcons
      entityId={rowData.id}
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
  return (
    <>
      {(cellData && formatDate(moment(cellData))) ?? <Skeleton width={200} />}
    </>
  )
}

export function ModifiedOnRenderer(props: DetailsViewRendererProps) {
  const { data: bundle } = useGetEntityBundle(props.rowData.id)
  return <DateRenderer {...props} cellData={bundle?.entity?.modifiedOn} />
}

export function CreatedOnRenderer(props: DetailsViewRendererProps) {
  const { data: bundle } = useGetEntityBundle(props.rowData.id)
  return <DateRenderer {...props} cellData={bundle?.entity?.createdOn} />
}

export function UserCardRenderer({ cellData }: { cellData?: string }) {
  return cellData ? (
    <UserCard
      ownerId={cellData}
      size={SMALL_USER_CARD}
      openLinkInNewTab={true}
    />
  ) : (
    <Skeleton width={200} />
  )
}

export function ModifiedByRenderer(props: DetailsViewRendererProps) {
  const { data: bundle } = useGetEntityBundle(props.rowData.id)
  return <UserCardRenderer {...props} cellData={bundle?.entity?.modifiedBy} />
}

export function LoadingRenderer() {
  return (
    <div className="EntityFinderDetailsViewPlaceholder">
      <SynapseSpinner size={30} />
    </div>
  )
}

export function CheckboxRenderer({ rowData }: DetailsViewRendererProps) {
  const { isSelected, isDisabled } = rowData
  return (
    !isDisabled && (
      <Checkbox
        label=""
        className="SRC-pointer-events-none"
        checked={isSelected}
        onChange={() => {
          // no-op
        }}
      />
    )
  )
}

export function TypeIconRenderer({ cellData }: DetailsViewRendererProps) {
  return <EntityTypeIcon type={cellData as EntityType} />
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

export const VersionRenderer = ({
  rowData,
  mustSelectVersionNumber,
  toggleSelection,
}: DetailsViewRendererProps & {
  mustSelectVersionNumber: boolean
  toggleSelection: (entity: Reference | Reference[]) => void
}) => {
  const {
    id,
    isVersionableEntity,
    isSelected,
    currentSelectedVersion,
  } = rowData
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
              targetVersionNumber: version === NO_VERSION_NUMBER ? undefined : version,
            })
          }}
        >
          {!mustSelectVersionNumber && (
            <option value={NO_VERSION_NUMBER}>Always Latest Version</option>
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
