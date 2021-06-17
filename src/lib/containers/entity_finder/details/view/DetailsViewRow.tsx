import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useErrorHandler } from 'react-error-boundary'
import { useInView } from 'react-intersection-observer'
import { SynapseClient } from '../../../../utils'
import { formatDate } from '../../../../utils/functions/DateFormatter'
import {
  getEntityTypeFromHeader,
  isVersionableEntityType,
} from '../../../../utils/functions/EntityTypeUtils'
import useGetEntityBundle from '../../../../utils/hooks/SynapseAPI/useEntityBundle'
import { SMALL_USER_CARD } from '../../../../utils/SynapseConstants'
import { useSynapseContext } from '../../../../utils/SynapseContext'
import {
  EntityHeader,
  ProjectHeader,
  Reference,
} from '../../../../utils/synapseTypes'
import { Hit } from '../../../../utils/synapseTypes/Search'
import { VersionInfo } from '../../../../utils/synapseTypes/VersionInfo'
import { EntityBadgeIcons } from '../../../EntityBadgeIcons'
import { EntityTypeIcon } from '../../../EntityIcon'
import { toError } from '../../../../utils/ErrorUtils'
import UserCard from '../../../UserCard'
import { Checkbox } from '../../../widgets/Checkbox'

export type DetailsViewRowAppearance =
  | 'default'
  | 'selected'
  | 'disabled'
  | 'hidden'

export type DetailsViewRowProps = {
  entityHeader: EntityHeader | ProjectHeader | Hit
  appearance: DetailsViewRowAppearance
  showVersionColumn: boolean
  selectButtonType: 'checkbox' | 'none'
  selectedVersion?: number
  toggleSelection: (entity: Reference) => void
}

export const DetailsViewRow: React.FunctionComponent<DetailsViewRowProps> = ({
  entityHeader,
  appearance,
  showVersionColumn,
  selectButtonType,
  selectedVersion,
  toggleSelection,
}) => {
  const { accessToken } = useSynapseContext()
  const isSelected = appearance === 'selected'
  const isDisabled = appearance === 'disabled'
  const isHidden = appearance === 'hidden'

  const [versions, setVersions] = useState<VersionInfo[]>()
  const [currentSelectedVersion, setCurrentSelectedVersion] = useState<number>(
    selectedVersion ?? -1,
  )

  const handleError = useErrorHandler()

  // We won't load the entity bundle unless the row is visible
  const { ref, inView } = useInView()

  const isVersionableEntity = isVersionableEntityType(
    getEntityTypeFromHeader(entityHeader),
  )

  const { data: bundle, isError, error } = useGetEntityBundle(
    entityHeader.id,
    undefined,
    undefined,
    {
      enabled: inView,
      // We'll make the stale time longer because these requests are expensive + we make a lot of them
      // They also aren't likely to change meaningfully while in the entity finder
      staleTime: 60 * 1000, // 60 seconds
    },
  )

  useEffect(() => {
    if (isError && error) {
      handleError(toError(error))
    }
  }, [isError, error, handleError])

  useEffect(() => {
    if (isSelected && versions === undefined) {
      SynapseClient.getEntityVersions(entityHeader.id, accessToken).then(
        response => {
          setVersions(response.results)
        },
        err => {
          handleError(err)
        },
      )
    }
  }, [isSelected, versions, accessToken, entityHeader.id, handleError])

  return (
    <tr
      ref={ref}
      aria-selected={isSelected}
      aria-disabled={isDisabled}
      aria-hidden={isHidden}
      className="EntityFinderDetailsView__Row"
      onClick={() => {
        if (!isDisabled) {
          toggleSelection({
            targetId: entityHeader.id,
            targetVersionNumber:
              currentSelectedVersion === -1
                ? undefined
                : currentSelectedVersion,
          })
        }
      }}
    >
      {selectButtonType !== 'none' && (
        <td className="IsSelectedColumn" aria-label="is-selected">
          <div>
            {!isDisabled && selectButtonType === 'checkbox' && (
              <Checkbox
                label=""
                id=""
                className="SRC-pointer-events-none"
                checked={isSelected}
                onChange={() => {
                  // no-op
                }}
              />
            )}
          </div>
        </td>
      )}

      <td className="EntityIconColumn">
        <div>
          {
            <EntityTypeIcon
              type={getEntityTypeFromHeader(entityHeader)}
              style={{ margin: '5px auto' }}
            />
          }
        </div>
      </td>

      <td className="NameColumn">
        <div>{entityHeader.name}</div>
      </td>
      <td className="AccessColumn">
        <EntityBadgeIcons
          entityId={entityHeader.id}
          showHasDiscussionThread={false}
          showHasWiki={false}
          showUnlink={false}
        />
      </td>
      <td className="IdColumn">
        <div>{entityHeader.id} </div>
      </td>
      {showVersionColumn && (
        <td className="VersionColumn" aria-label="version">
          <div>
            {isSelected &&
              isVersionableEntity &&
              versions &&
              versions.length > 0 && (
                <Form.Control
                  role="listbox"
                  size="sm"
                  as="select"
                  value={currentSelectedVersion}
                  onClick={(event: any) => {
                    event.stopPropagation()
                  }}
                  onChange={event => {
                    event.stopPropagation()
                    const version = parseInt(event.target.value)
                    setCurrentSelectedVersion(version)
                    toggleSelection({
                      targetId: entityHeader.id,
                      targetVersionNumber: version === -1 ? undefined : version,
                    })
                  }}
                >
                  <option value={-1}>Always Latest Version</option>
                  {versions?.map(version => {
                    return (
                      <option
                        key={version.versionNumber}
                        value={version.versionNumber}
                      >
                        Version {version.versionNumber}
                      </option>
                    )
                  })}
                </Form.Control>
              )}
          </div>
        </td>
      )}
      <td className="CreatedOnColumn">
        <div>{bundle && formatDate(moment(bundle.entity!.modifiedOn))}</div>
      </td>
      <td className="ModifiedOnColumn">
        <div>{bundle && formatDate(moment(bundle.entity!.modifiedOn))}</div>
      </td>
      <td className="ModifiedByColumn">
        <div>
          {bundle?.entity?.modifiedBy && (
            <UserCard
              ownerId={bundle?.entity?.modifiedBy}
              size={SMALL_USER_CARD}
              openLinkInNewTab={true}
            />
          )}
        </div>
      </td>
    </tr>
  )
}
