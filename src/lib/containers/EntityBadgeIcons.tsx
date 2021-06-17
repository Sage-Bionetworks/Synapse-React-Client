import React, { useState } from 'react'
import { EntityBundle, EntityType } from '../utils/synapseTypes'
import {
  faAlignLeft,
  faCheck,
  faComment,
  faGlobeAmericas,
  faLock,
  faTag,
  faUnlink,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isEmpty } from 'lodash-es'
import sanitizeHtml from 'sanitize-html'
import ReactTooltip from 'react-tooltip'
import { SynapseClient } from '../utils'
import { useSynapseContext } from '../utils/SynapseContext'
import {
  AUTHENTICATED_PRINCIPAL_ID,
  PUBLIC_PRINCIPAL_ID,
  ANONYMOUS_PRINCIPAL_ID,
} from '../utils/SynapseConstants'
import {
  useGetSchemaBinding,
  useGetValidationResults,
} from '../utils/hooks/SynapseAPI/useSchema'
import { useEffect } from 'react'
import { EntityModal, EntityModalTabs } from './entity/metadata/EntityModal'

const isPublic = (bundle: EntityBundle): boolean => {
  return bundle.benefactorAcl!.resourceAccess.some(ra => {
    return (
      ra.principalId === AUTHENTICATED_PRINCIPAL_ID ||
      ra.principalId === PUBLIC_PRINCIPAL_ID ||
      ra.principalId === ANONYMOUS_PRINCIPAL_ID
    )
  })
}

type EntityBadgeIconsProps = {
  entityId: string
  bundle: EntityBundle
  flexWrap?: // possible settings for flex-wrap
  | 'wrap'
    | 'nowrap'
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'wrap-reverse'
  justifyContent?: 'flex-start' | 'flex-end' | string
  /* shows an 'unlink' button if the entity is a link and the user has permission to delete it */
  showUnlink?: false
  /* invoked after the entity is unlinked/deleted in case there is cleanup to do */
  onUnlink?: (entityId?: string) => void
}

/**
 * Stateless component used to show multiple entity badges.
 * Adapted from https://github.com/Sage-Bionetworks/SynapseWebClient/blob/46b9b717636cda2421926d96365244bbb72a05b6/src/main/java/org/sagebionetworks/web/client/widget/entity/EntityBadge.java
 *
 * List of badges and bundle components required to show them:
 * - Private/Public badge (benefactorAcl)
 * - Has Local Sharing Settings (benefactorAcl)
 * - Annotations badge (annotations)
 * - Has Wiki (rootWikiId)
 * - Has Discussion Thread (threadCount)
 * - Unlink (requires entityType, permission to delete, and showUnlink to be true)
 */
export const EntityBadgeIcons: React.FunctionComponent<EntityBadgeIconsProps> = ({
  entityId,
  bundle,
  flexWrap = 'nowrap',
  justifyContent = 'flex-start',
  showUnlink,
  onUnlink,
}) => {
  const ENTITY_BADGE_ICONS_TOOLTIP_ID = 'EntityBadgeIconsTooltipID-' + entityId

  enum SchemaConformanceState {
    NO_SCHEMA = '', // or not in experimental mode
    VALID = 'Valid',
    INVALID = 'Invalid',
    ANNOTATIONS_MISSING = 'Incomplete',
  }

  const [showModal, setShowModal] = useState(false)
  const [schemaConformance, setSchemaConformance] = useState(
    SchemaConformanceState.NO_SCHEMA,
  )

  const { accessToken, isInExperimentalMode } = useSynapseContext()

  const { data: schemaValidationResults } = useGetValidationResults(entityId, {
    enabled: isInExperimentalMode,
  })
  const { data: boundSchema } = useGetSchemaBinding(entityId, {
    enabled: isInExperimentalMode,
  })

  // The maximum number of annotations to show in the popover
  const maxAnnosToShow = 10
  const annotationsCount =
    bundle.annotations && !isEmpty(bundle.annotations.annotations)
      ? Object.keys(bundle.annotations.annotations).length
      : 0
  /**
   * Convert the list of annotations to a string of <tr>...anno1</tr><tr>...anno2</tr>...
   * If there are no annotations, this is the empty string ('')
   */
  const annotationsTableRows = `${Object.entries(
    bundle.annotations!.annotations,
  ).reduce((previous, current, index) => {
    if (
      index < maxAnnosToShow ||
      (index === maxAnnosToShow && maxAnnosToShow === annotationsCount)
    ) {
      return `${previous}<tr><td><b>${
        current[0]
      }</b></td><td>${current[1].value.join(', ')}</td></tr>`
    } else {
      return previous
    }
  }, '')}`

  // We also show the schema name if there is one (and we're in experimental mode)
  const valiationSchemaTableRow =
    isInExperimentalMode && boundSchema
      ? `<tr><td><b>Validation Schema</b></td><td>${boundSchema.jsonSchemaVersionInfo.schemaName}</td></tr>`
      : ''

  // Format it all as an html table
  const annotationsHtml = `<table>
      ${annotationsTableRows ? annotationsTableRows : 'No annotations'}
      ${valiationSchemaTableRow}
      </table>${
        annotationsCount > maxAnnosToShow
          ? `<p>and ${annotationsCount - maxAnnosToShow} more</p>`
          : ''
      }`

  if (entityId === 'syn25741220') {
    console.log(annotationsCount)
    console.log(annotationsHtml)
  }

  useEffect(() => {
    if (isInExperimentalMode && schemaValidationResults) {
      // Because we may not know to render an icon until after fetching data (i.e. after a delay), we have to rebuild the tooltip to ensure it appears
      ReactTooltip.rebuild()

      if (schemaValidationResults.isValid) {
        setSchemaConformance(SchemaConformanceState.VALID)
      } else if (annotationsCount) {
        // If annotations exist, then indicate that they are invalid
        setSchemaConformance(SchemaConformanceState.INVALID)
      } else {
        // If annotations are missing, it's still invalid, but should appear differently
        setSchemaConformance(SchemaConformanceState.ANNOTATIONS_MISSING)
      }
    }
  }, [
    schemaValidationResults,
    isInExperimentalMode,
    annotationsCount,
    bundle,
    SchemaConformanceState.VALID,
    SchemaConformanceState.INVALID,
    SchemaConformanceState.ANNOTATIONS_MISSING,
  ])

  return (
    <div
      className="EntityBadge"
      style={{ flexWrap, justifyContent }}
      onClick={e => e.stopPropagation()}
    >
      <ReactTooltip
        id={ENTITY_BADGE_ICONS_TOOLTIP_ID}
        className="EntityBadgeTooltip"
        delayShow={100}
        place={'right'}
      />
      <EntityModal
        entityId={entityId}
        show={showModal}
        onClose={() => setShowModal(false)}
        initialTab={EntityModalTabs.ANNOTATIONS}
      />
      {bundle.benefactorAcl && (
        <>
          {isPublic(bundle) ? (
            <FontAwesomeIcon
              className="EntityBadge__Badge"
              icon={faGlobeAmericas}
              data-for={ENTITY_BADGE_ICONS_TOOLTIP_ID}
              data-tip={'Public'}
            />
          ) : (
            <FontAwesomeIcon
              className="EntityBadge__Badge"
              icon={faLock}
              data-for={ENTITY_BADGE_ICONS_TOOLTIP_ID}
              data-tip={'Private'}
            />
          )}
          {entityId === bundle.benefactorAcl.id && (
            <FontAwesomeIcon
              className="EntityBadge__Badge"
              icon={faCheck}
              data-for={ENTITY_BADGE_ICONS_TOOLTIP_ID}
              data-tip="Sharing Settings have been set"
            />
          )}
        </>
      )}
      {!!(annotationsCount || schemaValidationResults) && (
        <FontAwesomeIcon
          className={`EntityBadge__Badge Annotations ${schemaConformance}`}
          onClick={() => setShowModal(true)}
          icon={faTag}
          data-for={ENTITY_BADGE_ICONS_TOOLTIP_ID}
          data-tip={sanitizeHtml(annotationsHtml)}
          data-html={true}
        />
      )}
      {bundle.rootWikiId && (
        <FontAwesomeIcon
          //   style={{ maxWidth: '20px', maxHeight: '20px' }}
          className="EntityBadge__Badge"
          icon={faAlignLeft} // faNewspaper is ugly
          data-for={ENTITY_BADGE_ICONS_TOOLTIP_ID}
          data-tip="Has a wiki"
        />
      )}
      {!!bundle.threadCount && !!(bundle.threadCount > 0) && (
        <FontAwesomeIcon
          className="EntityBadge__Badge"
          icon={faComment}
          data-for={ENTITY_BADGE_ICONS_TOOLTIP_ID}
          data-tip="Has been mentioned in discussion"
        />
      )}
      {showUnlink &&
        bundle.entityType === EntityType.LINK &&
        bundle.permissions?.canDelete && (
          <FontAwesomeIcon
            onClick={async () => {
              await SynapseClient.deleteEntity(accessToken, entityId)
              if (onUnlink) {
                onUnlink(entityId)
              }
            }}
            className="EntityBadge__Badge Unlink"
            icon={faUnlink}
            data-for={ENTITY_BADGE_ICONS_TOOLTIP_ID}
            data-tip="Remove this link"
          />
        )}
    </div>
  )
}
