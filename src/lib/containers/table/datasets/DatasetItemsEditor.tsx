import { Skeleton } from '@material-ui/lab'
import BaseTable, {
  AutoResizer,
  ColumnShape,
} from '@sage-bionetworks/react-base-table'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import { SkeletonTable } from '../../../assets/skeletons/SkeletonTable'
import { rebuildTooltip } from '../../../utils/functions/TooltipUtils'
import {
  useGetEntity,
  useGetEntityPath,
  useUpdateEntity,
} from '../../../utils/hooks/SynapseAPI/useEntity'
import { useSet } from '../../../utils/hooks/useSet'
import useTraceUpdate from '../../../utils/hooks/useTraceUpdate'
import {
  Dataset,
  DatasetItem,
  EntityType,
  Reference,
} from '../../../utils/synapseTypes'
import { RequiredProperties } from '../../../utils/types/RequiredProperties'
import Typography from '../../../utils/typography/Typography'
import { ENTITY_BADGE_ICONS_TOOLTIP_ID } from '../../EntityBadgeIcons'
import {
  BadgeIconsRenderer,
  CellRendererProps,
  CreatedOnRenderer,
  DatasetEditorCheckboxRenderer,
  DatasetEditorVersionRenderer,
  EntityErrorRenderer,
  EntityNameRenderer,
  ModifiedByRenderer,
  ModifiedOnRenderer,
  ProjectRenderer,
} from '../../entity_finder/details/view/DetailsViewTableRenderers'
import { EntityFinderModal } from '../../entity_finder/EntityFinderModal'
import { FinderScope } from '../../entity_finder/tree/TreeView'
import IconSvg from '../../IconSvg'
import WarningModal from '../../synapse_form_wrapper/WarningModal'
import { displayToast } from '../../ToastMessage'
import { Checkbox } from '../../widgets/Checkbox'

export type DatasetItemsEditorProps = {
  /* The synId of the Dataset to modify */
  entityId: string
  onSave?: () => void
  onClose?: () => void
}

export type DatasetItemsEditorTableData = DatasetItem & {
  isSelected: boolean
  setSelected: (value: boolean) => void
}

const ROW_HEIGHT = 42
const TABLE_HEIGHT = 350

const SAVE_THE_DATASET_TO_CONTINUE = 'Save the Dataset to continue.'

export function DatasetItemsEditor(props: DatasetItemsEditorProps) {
  const { entityId, onSave, onClose } = props

  const [showEntityFinder, setShowEntityFinder] = useState<boolean>(false)
  const [showWarningModal, setShowWarningModal] = useState<boolean>(false)

  // Disable updating the entity after the initial fetch because we don't want to replace edits that the user makes.
  const [datasetToUpdate, _setDatasetToUpdate] =
    useState<RequiredProperties<Dataset, 'items'>>()
  const setDatasetToUpdate = (
    dataset: React.SetStateAction<
      RequiredProperties<Dataset, 'items'> | undefined
    >,
  ) => {
    setHasChangedSinceLastSave(true)
    _setDatasetToUpdate(dataset)
  }

  const [hasChangedSinceLastSave, setHasChangedSinceLastSave] = useState(false)

  const {
    set: selectedIds,
    add: addSelectedId,
    remove: removeSelectedId,
    clear: clearSelectedIds,
  } = useSet<string>()
  const allItemsAreSelected = !!(
    datasetToUpdate && datasetToUpdate.items.length === selectedIds.size
  )

  // We get the project ID to show the "Current Project" context in the Entity Finder.
  const { data: path } = useGetEntityPath(entityId)
  const projectId = path?.path[1]?.id

  const { refetch } = useGetEntity<RequiredProperties<Dataset, 'items'>>(
    entityId,
    undefined,
    {
      enabled: !datasetToUpdate,
      onSuccess: dataset => {
        // SWC-5876: Dataset Items may be undefined. This has the same inherent meaning as the empty list, so we'll just change it to save us some null checks.
        if (dataset.items == null) {
          dataset.items = []
        }
        setDatasetToUpdate(dataset)
        setHasChangedSinceLastSave(false)
      },
    },
  )

  const mutation = useUpdateEntity<Dataset>({
    onSuccess: () => {
      if (onSave) {
        onSave()
      } else {
        // If onSave isn't specified, push a generic toast message.
        displayToast(
          'Create a Version of this Dataset to freeze it in its current state',
          'success',
          { title: 'Dataset Saved' },
        )
      }
    },
    onError: error => {
      if (error.status === 412) {
        displayToast(
          'Re-retrieve the dataset to get the latest changes. Your current changes will be lost.',
          'warning',
          {
            title: 'Dataset Updated since Last Fetched',
            primaryButtonConfig: { text: 'Retrieve Dataset', onClick: refetch },
          },
        )
      } else {
        displayToast(error.reason, 'danger', {
          title: 'An Error Occurred',
        })
      }
    },
  })

  const tableData = datasetToUpdate?.items.map((item: DatasetItem) => {
    return {
      ...item,
      isSelected: selectedIds.has(item.entityId),
      setSelected: (value: boolean) => {
        return value
          ? addSelectedId(item.entityId)
          : removeSelectedId(item.entityId)
      },
    }
  })

  function addItemsToDataset(itemsToAdd: Reference[]) {
    setDatasetToUpdate(datasetToUpdate => {
      if (datasetToUpdate) {
        // Items that were already in the dataset and are not being updated
        const unchangedItems = datasetToUpdate.items.filter(
          item =>
            !itemsToAdd.find(newItem => newItem.targetId === item.entityId),
        )

        // Items that were already in the dataset, but were selected so the version may have been updated
        const updatedItems = itemsToAdd.filter(newItem =>
          datasetToUpdate.items.find(
            existingItem => existingItem.entityId === newItem.targetId,
          ),
        )

        // Items that were not previously in the dataset
        const newItems = itemsToAdd.filter(
          newItem =>
            !datasetToUpdate.items.find(
              existingItem => existingItem.entityId === newItem.targetId,
            ),
        )

        // "X item(s) added"
        let toastMessageTitle = `${newItems.length} Item${
          newItems.length === 1 ? '' : 's'
        } added`

        // "and Y item(s) updated", only shown if there are updated items
        if (updatedItems.length > 0) {
          toastMessageTitle += ` and ${updatedItems.length} Item${
            updatedItems.length === 1 ? '' : 's'
          } updated`
        } else {
          // if no items were updated, title = "X items(s) added" + " to Dataset"
          toastMessageTitle += ` to Dataset`
        }

        displayToast(SAVE_THE_DATASET_TO_CONTINUE, 'info', {
          title: toastMessageTitle,
        })

        const items = [
          ...unchangedItems,
          ...updatedItems.map(item => ({
            entityId: item.targetId,
            versionNumber: item.targetVersionNumber!,
          })),
          ...newItems.map(item => ({
            entityId: item.targetId,
            versionNumber: item.targetVersionNumber!,
          })),
        ]
        return {
          ...datasetToUpdate,
          items: items,
        }
      } else {
        console.warn(
          'Cannot add items to the Dataset because it is undefined. The Dataset may not have been fetched yet.',
        )
        return datasetToUpdate
      }
    })
    clearSelectedIds()
  }

  function removeSelectedItemsFromDataset() {
    setDatasetToUpdate(dataset => ({
      ...dataset!,
      items: dataset!.items.filter(
        datasetItem => !selectedIds.has(datasetItem.entityId),
      ),
    }))

    displayToast(SAVE_THE_DATASET_TO_CONTINUE, 'info', {
      title: `${selectedIds.size} Item${
        selectedIds.size === 1 ? '' : 's'
      } removed from the Dataset`,
    })

    clearSelectedIds()
  }

  function changeVersionOnItem(entityId: string, newVersion: number) {
    setDatasetToUpdate(dataset => ({
      ...dataset!,
      items: dataset!.items.map(datasetItem =>
        datasetItem.entityId === entityId
          ? { entityId: entityId, versionNumber: newVersion }
          : datasetItem,
      ),
    }))
  }

  const DatasetItemVersionRenderer = (
    props: CellRendererProps<DatasetItemsEditorTableData>,
  ) => {
    return (
      <DatasetEditorVersionRenderer
        {...props}
        toggleSelection={datasetItem => {
          changeVersionOnItem(datasetItem.entityId, datasetItem.versionNumber)
        }}
      />
    )
  }

  type SelectAllCheckboxRendererProps = {
    datasetToUpdate: RequiredProperties<Dataset, 'items'>
    selectedIds: Omit<Set<string>, 'add' | 'delete' | 'clear'>
    addSelectedId: (...items: string[]) => void
    clearSelectedIds: () => void
    allItemsAreSelected: boolean
  }
  const SelectAllCheckboxRenderer = (props: SelectAllCheckboxRendererProps) => {
    const { datasetToUpdate, clearSelectedIds, addSelectedId } = props
    useTraceUpdate(props)
    const isChecked = allItemsAreSelected

    return datasetToUpdate ? (
      <div
        data-testid="Select All"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          if (isChecked) {
            clearSelectedIds()
          } else {
            addSelectedId(...datasetToUpdate.items.map(item => item.entityId))
          }
        }}
      >
        <Checkbox
          label=""
          className="SRC-pointer-events-none"
          checked={isChecked}
          disabled={datasetToUpdate.items.length === 0}
          onChange={() => {
            // no-op
          }}
        />
      </div>
    ) : (
      <></>
    )
  }

  const renderedSelectAllCheckbox = datasetToUpdate ? (
    <SelectAllCheckboxRenderer
      datasetToUpdate={datasetToUpdate}
      selectedIds={selectedIds}
      clearSelectedIds={clearSelectedIds}
      addSelectedId={addSelectedId}
      allItemsAreSelected={allItemsAreSelected}
    />
  ) : (
    <></>
  )

  const defaultColumns: ColumnShape<DatasetItemsEditorTableData>[] = [
    {
      key: 'errorState',
      width: 30,
      cellRenderer: EntityErrorRenderer,
    },
    {
      key: 'isSelected',
      width: 40,
      dataKey: 'isSelected',
      headerRenderer: renderedSelectAllCheckbox,
      cellRenderer: DatasetEditorCheckboxRenderer,
    },
    {
      key: 'name',
      width: 350,
      dataKey: 'entityId',
      title: 'Name',
      resizable: true,
      cellRenderer: EntityNameRenderer,
    },
    {
      key: 'status',
      width: 80,
      dataKey: 'entityId',
      resizable: true,
      cellRenderer: BadgeIconsRenderer,
    },
    {
      key: 'id',
      width: 140,
      title: 'ID',
      dataKey: 'entityId',
      resizable: true,
    },
    {
      key: 'version',
      width: 150,
      title: 'Version',
      dataKey: 'entityId',
      cellRenderer: DatasetItemVersionRenderer,
    },
    {
      key: 'createdOn',
      width: 200,
      title: 'Created On',
      dataKey: 'entityId',
      resizable: true,

      cellRenderer: CreatedOnRenderer,
    },
    {
      key: 'modifiedOn',
      width: 200,
      title: 'Modified On',
      dataKey: 'entityId',
      resizable: true,

      cellRenderer: ModifiedOnRenderer,
    },
    {
      key: 'modifiedBy',
      width: 250,
      title: 'Modified By',
      dataKey: 'entityId',
      resizable: true,

      cellRenderer: ModifiedByRenderer,
    },
    {
      key: 'projectId',
      width: 300,
      title: 'Project',
      dataKey: 'entityId',
      resizable: true,

      cellRenderer: ProjectRenderer,
    },
  ]

  const totalColumnWidth = defaultColumns.reduce((totalWidth, column) => {
    return totalWidth + column.width
  }, 0)

  function NoItemsPlaceholder() {
    return (
      <div className="NoItemsPlaceholder">
        <Typography variant={'headline3'}>No items in this Dataset</Typography>
        <Button
          className="AddItemsButton"
          variant="outline"
          onClick={() => setShowEntityFinder(true)}
        >
          <IconSvg options={{ icon: 'addCircleTwoTone' }} />
          <span>Add Items</span>
        </Button>
      </div>
    )
  }

  return (
    <div className="DatasetEditor bootstrap-4-backport">
      <EntityFinderModal
        configuration={{
          projectId: projectId,
          selectMultiple: true,
          initialScope: FinderScope.ALL_PROJECTS,
          initialContainer: null,
          selectableTypes: [EntityType.FILE],
          mustSelectVersionNumber: true,
        }}
        show={showEntityFinder}
        onClose={() => {
          setShowEntityFinder(false)
        }}
        title="Add Files to Dataset"
        confirmButtonCopy="Add Files"
        onConfirm={items => {
          addItemsToDataset(items)
          setShowEntityFinder(false)
        }}
        onCancel={() => setShowEntityFinder(false)}
      />
      <WarningModal
        title="Unsaved Changes"
        modalBody="Any unsaved changes will be lost. Are you sure you want to close the editor?"
        confirmButtonText="Close Editor"
        onConfirm={() => {
          if (onClose) {
            setShowWarningModal(false)
            onClose()
          }
        }}
        show={showWarningModal}
        onConfirmCallbackArgs={[]}
        onCancel={() => setShowWarningModal(false)}
      />

      <div className="DatasetEditorTopBottomPanel">
        <div className="ItemCount">
          {datasetToUpdate ? (
            <Typography variant="headline3">
              {datasetToUpdate.items.length === 0
                ? 'No'
                : datasetToUpdate.items.length.toLocaleString()}{' '}
              File
              {datasetToUpdate.items.length !== 1 && 's'}
            </Typography>
          ) : (
            <Skeleton variant="rect" width={200} />
          )}
        </div>

        <Button
          variant="outline"
          disabled={datasetToUpdate == null}
          onClick={() => setShowEntityFinder(true)}
        >
          Add Items
        </Button>
        <Button
          disabled={selectedIds.size === 0}
          variant="outline"
          onClick={removeSelectedItemsFromDataset}
        >
          Remove Items
        </Button>
      </div>
      <div className="DatasetEditorTableContainer">
        {datasetToUpdate ? (
          datasetToUpdate.items.length === 0 ? (
            <NoItemsPlaceholder></NoItemsPlaceholder>
          ) : (
            <AutoResizer height={TABLE_HEIGHT} onResize={rebuildTooltip}>
              {({ height, width }: { height: number; width: number }) => (
                <BaseTable
                  classPrefix="DatasetEditorTable"
                  data={tableData}
                  height={height}
                  width={width > totalColumnWidth ? width : totalColumnWidth}
                  rowHeight={ROW_HEIGHT}
                  overscanRowCount={5}
                  columns={defaultColumns}
                  rowClassName={'DatasetEditorRow'}
                  rowProps={({ rowData }) => {
                    return {
                      'aria-selected': rowData.isSelected,
                    }
                  }}
                  headerCellProps={{
                    role: 'columnheader',
                  }}
                  onRowsRendered={rebuildTooltip}
                  onScroll={rebuildTooltip}
                ></BaseTable>
              )}
            </AutoResizer>
          )
        ) : (
          <SkeletonTable
            className="DatasetItemsEditorSkeleton"
            numRows={8}
            numCols={6}
            rowHeight={`${ROW_HEIGHT}px`}
          />
        )}
        <ReactTooltip
          id={ENTITY_BADGE_ICONS_TOOLTIP_ID}
          className="EntityBadgeTooltip"
          delayShow={100}
          place={'right'}
          effect={'solid'}
        />
      </div>
      <div className="DatasetEditorTopBottomPanel">
        <Button
          variant={'outline'}
          onClick={() => {
            if (hasChangedSinceLastSave) {
              setShowWarningModal(true)
            } else if (onClose) {
              onClose()
            }
          }}
        >
          Cancel
        </Button>

        <Button
          disabled={!datasetToUpdate}
          variant={'sds-primary'}
          onClick={() => mutation.mutate(datasetToUpdate!)}
        >
          Save
        </Button>
      </div>
    </div>
  )
}
