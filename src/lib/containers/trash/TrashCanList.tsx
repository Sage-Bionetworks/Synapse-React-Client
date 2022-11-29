import dayjs from 'dayjs'
import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, Table } from 'react-bootstrap'
import { formatDate } from '../../utils/functions/DateFormatter'
import { useGetEntity } from '../../utils/hooks/SynapseAPI'
import {
  useGetItemsInTrashCanInfinite,
  usePurgeEntities,
  useRestoreEntities,
} from '../../utils/hooks/SynapseAPI/trash/useTrashCan'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { TrashedEntity } from '../../utils/synapseTypes'
import { Typography } from '@mui/material'
import { EntityLink } from '../EntityLink'
import { BlockingLoader, SynapseSpinner } from '../LoadingScreen'
import WarningModal from '../synapse_form_wrapper/WarningModal'
import { Checkbox } from '../widgets/Checkbox'

type TrashCanListItemProps = {
  item: TrashedEntity
  isSelected: boolean
  setIsSelected: (isSelected: boolean) => void
  onRestore: () => void
}

function TrashCanListItem(props: TrashCanListItemProps) {
  const { item, isSelected, setIsSelected, onRestore } = props
  const { data: parentEntity } = useGetEntity(item.originalParentId)
  return (
    <tr>
      <td>
        <Checkbox
          label={`Select ${item.entityId}`}
          hideLabel={true}
          checked={isSelected}
          onChange={setIsSelected}
        />
      </td>
      <td>{item.entityId}</td>
      <td>{item.entityName}</td>
      {/* <td>TypePlaceholder</td> */}
      <td>
        <>
          {parentEntity && <EntityLink entity={parentEntity} />} (
          {item.originalParentId})
        </>
      </td>
      <td>{formatDate(dayjs(item.deletedOn))}</td>
      <td>
        <Button size="sm" variant="outline" onClick={onRestore}>
          Restore
        </Button>
      </td>
    </tr>
  )
}

/**
 * Convert an array of Promise results to an array of errors
 */
function toSynapseClientErrorList(
  results: PromiseSettledResult<void>[],
): SynapseClientError[] {
  return results
    .filter(
      (result): result is PromiseRejectedResult => result.status === 'rejected',
    )
    .map(result => result.reason as SynapseClientError)
}

export function TrashCanList() {
  const isMounted = useRef(true)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [errors, setErrors] = useState<SynapseClientError[]>([])

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  })

  /**
   * When a mutation operation settles, update the list of errors and clear the selected set
   */
  function onMutateSettled(
    results?: PromiseSettledResult<void>[],
    error?: SynapseClientError | null,
  ) {
    if (isMounted.current) {
      if (results) {
        setErrors(toSynapseClientErrorList(results))
      } else if (error) {
        setErrors([error])
      }
      setSelected(new Set())
    }
  }

  const { mutate: restore, isLoading: isLoadingRestore } = useRestoreEntities({
    onSettled: onMutateSettled,
  })
  const { mutate: purge, isLoading: isLoadingPurge } = usePurgeEntities({
    onSettled: onMutateSettled,
  })

  const isMutating = isLoadingRestore || isLoadingPurge

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetItemsInTrashCanInfinite({
      useErrorBoundary: true,
    })

  const items = data?.pages.flatMap(page => page.results) ?? []

  const isAllSelected = selected.size === items.length

  const onSelectAll = () => {
    if (isAllSelected) {
      setSelected(new Set())
    } else {
      setSelected(new Set(items.map(item => item.entityId)))
    }
  }

  return (
    <div className="bootstrap-4-backport">
      <BlockingLoader
        show={isMutating}
        headlineText={isLoadingPurge ? 'Deleting...' : 'Restoring...'}
      />
      <Typography variant="body1">
        The trash can contains items that were recently deleted. You can recover
        deleted items in the trash can by clicking &quot;Restore&quot;. Items
        will remain in the trash can for 30 days before being automatically
        purged.
      </Typography>
      <WarningModal
        title="Delete selected items from your Trash?"
        modalBody={
          <Typography variant="body1">
            You can&apos;t undo this action.
          </Typography>
        }
        confirmButtonText="Delete"
        confirmButtonVariant="danger"
        onConfirm={() => {
          purge(selected)
          setShowDeleteConfirmation(false)
        }}
        onCancel={() => {
          setShowDeleteConfirmation(false)
        }}
        show={showDeleteConfirmation}
      />
      {isLoading && <SynapseSpinner />}
      {!isLoading && items.length === 0 && (
        <Typography variant="body1">Trash Can is currently empty.</Typography>
      )}
      {!isLoading && items.length > 0 && (
        <>
          <Table striped borderless bordered={false}>
            <thead>
              <tr>
                <th>
                  <Checkbox
                    label="Select All"
                    hideLabel={true}
                    checked={isAllSelected}
                    onChange={onSelectAll}
                  />
                </th>
                <th>ID</th>
                <th>Name</th>
                {/* <th>TypePlaceholder</th> */}
                <th>Location</th>
                <th>Deleted On</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <TrashCanListItem
                  key={item.entityId}
                  item={item}
                  isSelected={selected.has(item.entityId)}
                  setIsSelected={isSelected => {
                    setSelected(selected => {
                      if (isSelected) {
                        selected.add(item.entityId)
                      } else {
                        selected.delete(item.entityId)
                      }
                      return new Set(selected)
                    })
                  }}
                  onRestore={() => {
                    restore(item.entityId)
                    selected.delete(item.entityId)
                  }}
                />
              ))}
            </tbody>
          </Table>
          {errors.length > 0 && (
            <Alert
              dismissible={false}
              show={true}
              variant={'danger'}
              transition={false}
            >
              The following errors were encountered:
              <ul>
                {errors.map(error => (
                  <li key={error.message}>{error.message}</li>
                ))}
              </ul>
            </Alert>
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '10px',
            }}
          >
            {hasNextPage && (
              <Button
                variant="sds-primary"
                disabled={isFetchingNextPage}
                onClick={() => {
                  fetchNextPage()
                }}
              >
                Load More
              </Button>
            )}
            <div style={{ margin: 'auto' }} />
            <Button
              variant="danger"
              disabled={selected.size === 0}
              onClick={() => {
                setShowDeleteConfirmation(true)
              }}
            >
              Delete Selected
            </Button>
            <Button
              variant="outline"
              disabled={selected.size === 0}
              onClick={() => {
                restore(selected)
              }}
            >
              Restore Selected
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
