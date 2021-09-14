import { isEmpty } from 'lodash-es'
import moment from 'moment'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useErrorHandler } from 'react-error-boundary'
import { useInView } from 'react-intersection-observer'
import { toError } from '../../../../utils/ErrorUtils'
import { formatDate } from '../../../../utils/functions/DateFormatter'
import {
  getEntityTypeFromHeader,
  isVersionableEntityType,
} from '../../../../utils/functions/EntityTypeUtils'
import { useGetVersionsInfinite } from '../../../../utils/hooks/SynapseAPI/useEntity'
import useGetEntityBundle from '../../../../utils/hooks/SynapseAPI/useEntityBundle'
import { SMALL_USER_CARD } from '../../../../utils/SynapseConstants'
import {
  EntityHeader,
  ProjectHeader,
  Reference,
} from '../../../../utils/synapseTypes'
import { Hit } from '../../../../utils/synapseTypes/Search'
import { EntityBadgeIcons } from '../../../EntityBadgeIcons'
import { EntityTypeIcon } from '../../../EntityIcon'
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
  mustSelectVersionNumber: boolean
  selectButtonType: 'checkbox' | 'none'
  selectedVersion?: number
  toggleSelection: (entity: Reference) => void
}

export const DetailsViewRow: React.FunctionComponent<DetailsViewRowProps> = ({
  entityHeader,
  appearance,
  showVersionColumn,
  mustSelectVersionNumber,
  selectButtonType,
  selectedVersion,
  toggleSelection,
}) => {
  const isSelected = appearance === 'selected'
  const isDisabled = appearance === 'disabled'
  const isHidden = appearance === 'hidden'

  const entityType = getEntityTypeFromHeader(entityHeader)
  const isVersionableEntity = isVersionableEntityType(entityType)

  const [currentSelectedVersion, setCurrentSelectedVersion] = useState<
    number | undefined
  >(selectedVersion)

  const handleError = useErrorHandler()

  // We won't load the entity bundle unless the row is visible
  const { ref, inView } = useInView()

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

  // TODO: Handle pagination, preferably with an IntersectionObserver
  // We can't use IntersectionObserver via ref on a div within a <select> input
  // It might make more sense to use react-select here
  const { data: versionData } = useGetVersionsInfinite(entityHeader.id, {
    enabled: inView && isVersionableEntity && showVersionColumn,
    staleTime: 60 * 1000, // 60 seconds
  })

  const versions = versionData?.pages.flatMap(page => page.results) ?? []

  /**
   * For versionable entities, this effect ensures that a version number is auto-selected
   * if mustSelectVersionNumber is true.
   */
  useEffect(() => {
    if (
      mustSelectVersionNumber &&
      !isEmpty(versions) &&
      currentSelectedVersion == null
    ) {
      setCurrentSelectedVersion(versions[0].versionNumber)
    }
  }, [currentSelectedVersion, mustSelectVersionNumber, versionData, versions])

  useEffect(() => {
    if (isError && error) {
      handleError(toError(error))
    }
  }, [isError, error, handleError])

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
          {<EntityTypeIcon type={entityType} style={{ margin: '5px auto' }} />}
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
          canOpenModal={false}
        />
      </td>
      <td className="IdColumn">
        <div>{entityHeader.id} </div>
      </td>
      {showVersionColumn && (
        <td className="VersionColumn" aria-label="version">
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
                  setCurrentSelectedVersion(version)
                  toggleSelection({
                    targetId: entityHeader.id,
                    targetVersionNumber: version === -1 ? undefined : version,
                  })
                }}
              >
                {!mustSelectVersionNumber && (
                  <option value={-1}>Always Latest Version</option>
                )}
                {versions.map(version => {
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
