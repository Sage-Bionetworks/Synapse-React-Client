import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useErrorHandler } from 'react-error-boundary'
import { useInView } from 'react-intersection-observer'
import { SynapseClient } from '../../../../utils'
import { formatDate } from '../../../../utils/functions/DateFormatter'
import {
  getEntityTypeFromHeader,
  isVersionableEntityType
} from '../../../../utils/functions/EntityTypeUtils'
import useGetEntityBundle from '../../../../utils/hooks/SynapseAPI/useEntityBundle'
import {
  EntityHeader,
  ProjectHeader,
  Reference
} from '../../../../utils/synapseTypes'
import { Hit } from '../../../../utils/synapseTypes/Search'
import { VersionInfo } from '../../../../utils/synapseTypes/VersionInfo'
import { EntityBadge } from '../../../EntityBadge'
import { EntityTypeIcon } from '../../../EntityIcon'
import { toError } from '../../../ErrorBanner'
import { Checkbox } from '../../../widgets/Checkbox'
import { RadioGroup } from '../../../widgets/RadioGroup'

export type DetailsViewRowAppearance =
  | 'default'
  | 'selected'
  | 'disabled'
  | 'hidden'

export type DetailsViewRowProps = {
  sessionToken: string
  entityHeader: EntityHeader | ProjectHeader | Hit
  appearance: DetailsViewRowAppearance
  showVersionColumn: boolean
  selectButtonType: 'checkbox' | 'radio' | 'none'
  selectedVersion?: number
  toggleSelection: (entity: Reference) => void
}

export const DetailsViewRow: React.FunctionComponent<DetailsViewRowProps> = ({
  sessionToken,
  entityHeader,
  appearance,
  showVersionColumn,
  selectButtonType,
  selectedVersion,
  toggleSelection,
}) => {
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
    sessionToken,
    entityHeader.id,
    {
      includeEntity: true,
      includeAnnotations: true,
      includeBenefactorACL: true,
      includePermissions: true,
      includeRootWikiId: true,
      includeThreadCount: true,
    },
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
      SynapseClient.getEntityVersions(sessionToken, entityHeader.id).then(
        response => {
          setVersions(response.results)
        },
        err => {
          handleError(err)
        },
      )
    }
  }, [isSelected, versions, sessionToken, entityHeader.id, handleError])

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
                onChange={() => {}}
              />
            )}
            {!isDisabled && selectButtonType === 'radio' && (
              <RadioGroup
                className="SRC-pointer-events-none"
                options={[{ label: '', value: 'true' }]}
                value={isSelected.toString()}
                id=""
                onChange={() => {}}
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
        {bundle && <EntityBadge entityId={entityHeader.id} bundle={bundle} />}
      </td>
      <td className="IdColumn">
        <div>{entityHeader.id} </div>
      </td>
      <td className="CreatedOnColumn">
        <div>{bundle && formatDate(moment(bundle.entity!.modifiedOn))}</div>
      </td>
      <td className="ModifiedOnColumn">
        <div>{bundle && formatDate(moment(bundle.entity!.modifiedOn))}</div>
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
                  {versions?.map((version, index) => {
                    return (
                      <option
                        key={version.versionNumber}
                        value={version.versionNumber}
                      >
                        Version {version.versionNumber}
                        {index === 0 ? ' (Current)' : ''}
                      </option>
                    )
                  })}
                </Form.Control>
              )}
          </div>
        </td>
      )}
    </tr>
  )
}
