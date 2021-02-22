import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import { SynapseClient } from '../../../utils'
import { formatDate } from '../../../utils/functions/DateFormatter'
import {
  getEntityTypeFromHeader,
  isVersionableEntityType,
} from '../../../utils/functions/EntityTypeUtils'
import useGetEntityBundle from '../../../utils/hooks/SynapseAPI/useEntityBundle'
import { EntityHeader, ProjectHeader } from '../../../utils/synapseTypes'
import { Hit } from '../../../utils/synapseTypes/Search'
import { VersionInfo } from '../../../utils/synapseTypes/VersionInfo'
import { EntityBadge } from '../../EntityBadge'
import { Checkbox } from '../../widgets/Checkbox'
import { RadioGroup } from '../../widgets/RadioGroup'
import { EntityIdAndVersion } from '../EntityFinder'
import { getIconForEntityType } from '../tree/TreeView'

type DetailsViewRowProps = {
  sessionToken: string
  entityHeader: EntityHeader | ProjectHeader | Hit
  isSelected: boolean
  disabled: boolean
  hidden: boolean
  showVersionColumn: boolean
  showSelectButton: 'checkbox' | 'radio' | 'none'
  toggleSelection: (entity: EntityIdAndVersion) => void
}

export const DetailsViewRow: React.FunctionComponent<DetailsViewRowProps> = ({
  sessionToken,
  entityHeader,
  isSelected, //consider collapsing selected, hidden, and disabled because they are mutually exclusive
  disabled,
  hidden,
  showVersionColumn,
  showSelectButton: selectButtonType,
  toggleSelection,
}) => {
  const [versions, setVersions] = useState<VersionInfo[]>()
  const [currentSelectedVersion, setCurrentSelectedVersion] = useState<number>(
    -1,
  )
  const { ref, inView } = useInView({
    triggerOnce: false,
  })

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
      staleTime: 10000,
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
  }, [inView, isSelected])

  return (
    <tr
      ref={ref}
      className={`EntityFinderDetailsView__Row${
        isSelected ? ' EntityFinderDetailsView__Row__Selected' : ''
      }${disabled ? ' EntityFinderDetailsView__Row__Disabled' : ''}`}
      style={hidden ? { display: 'none' } : {}}
      onClick={() => {
        if (!disabled) {
          toggleSelection({
            entityId: entityHeader.id,
            entityVersion:
              currentSelectedVersion === -1
                ? undefined
                : currentSelectedVersion,
          })
        }
      }}
    >
      {selectButtonType !== 'none' && (
        <td className="IsSelectedColumn">
          {!disabled && selectButtonType === 'checkbox' && (
            <Checkbox
              label=""
              id=""
              className="SRC-pointer-events-none"
              checked={isSelected}
              onChange={() => {}}
            />
          )}{' '}
          {!disabled && selectButtonType === 'radio' && (
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
        {getIconForEntityType(getEntityTypeFromHeader(entityHeader))}
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
                    entityId: entityHeader.id,
                    entityVersion: version === -1 ? undefined : version,
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
