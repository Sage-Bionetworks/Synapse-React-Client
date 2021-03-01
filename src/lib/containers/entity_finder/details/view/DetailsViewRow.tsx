import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import { SynapseClient } from '../../../../utils'
import { formatDate } from '../../../../utils/functions/DateFormatter'
import {
  getEntityTypeFromHeader,
  isVersionableEntityType,
} from '../../../../utils/functions/EntityTypeUtils'
import useGetEntityBundle from '../../../../utils/hooks/SynapseAPI/useEntityBundle'
import {
  EntityHeader,
  ProjectHeader,
  Reference,
} from '../../../../utils/synapseTypes'
import { Hit } from '../../../../utils/synapseTypes/Search'
import { VersionInfo } from '../../../../utils/synapseTypes/VersionInfo'
import { EntityBadge } from '../../../EntityBadge'
import { EntityTypeIcon } from '../../../EntityIcon'
import { Checkbox } from '../../../widgets/Checkbox'
import { RadioGroup } from '../../../widgets/RadioGroup'

export type DetailsViewRowAppearance =
  | 'default'
  | 'selected'
  | 'disabled'
  | 'hidden'

type DetailsViewRowProps = {
  sessionToken: string
  entityHeader: EntityHeader | ProjectHeader | Hit
  appearance: DetailsViewRowAppearance
  showVersionColumn: boolean
  selectButtonType: 'checkbox' | 'radio' | 'none'
  toggleSelection: (entity: Reference) => void
}

export const DetailsViewRow: React.FunctionComponent<DetailsViewRowProps> = ({
  sessionToken,
  entityHeader,
  appearance,
  showVersionColumn,
  selectButtonType,
  toggleSelection,
}) => {
  const isSelected = appearance === 'selected'
  const isDisabled = appearance === 'disabled'
  const isHidden = appearance === 'hidden'

  const [versions, setVersions] = useState<VersionInfo[]>()
  const [currentSelectedVersion, setCurrentSelectedVersion] = useState<number>(
    -1,
  )

  // We won't load the entity bundle unless the row is visible
  const { ref, inView } = useInView()

  const isVersionableEntity = isVersionableEntityType(
    getEntityTypeFromHeader(entityHeader),
  )

  const { data: bundle } = useGetEntityBundle(
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
    if (inView && isSelected && versions === undefined) {
      SynapseClient.getEntityVersions(sessionToken, entityHeader.id).then(
        response => {
          setVersions(response.results)
        },
      )
    }
  }, [inView, isSelected, versions, sessionToken, entityHeader.id])

  return (
    <tr
      ref={ref}
      className={`EntityFinderDetailsView__Row${
        isSelected ? ' EntityFinderDetailsView__Row__Selected' : ''
      }${isDisabled ? ' EntityFinderDetailsView__Row__Disabled' : ''}`}
      style={isHidden ? { display: 'none' } : {}}
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
        <td className="IsSelectedColumn">
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
        </td>
      )}

      <td className="EntityIconColumn">
        {
          <EntityTypeIcon
            type={getEntityTypeFromHeader(entityHeader)}
            style={{ marginBottom: '3px' }}
          />
        }
      </td>

      <td className="NameColumn">{entityHeader.name}</td>
      <td className="AccessColumn">
        {bundle && <EntityBadge entityId={entityHeader.id} bundle={bundle} />}
      </td>
      <td className="IdColumn">{entityHeader.id}</td>
      <td className="CreatedOnColumn">
        {bundle && formatDate(moment(bundle.entity!.modifiedOn))}
      </td>
      <td className="ModifiedOnColumn">
        {bundle && formatDate(moment(bundle.entity!.modifiedOn))}
      </td>
      {showVersionColumn && (
        <td className="VersionColumn">
          {isSelected &&
            isVersionableEntity &&
            versions &&
            versions.length > 0 && (
              <Form.Control
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
                <option value={-1}>Do not select a version</option>
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
        </td>
      )}
    </tr>
  )
}
