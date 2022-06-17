import {
  ChatBubbleTwoTone,
  CheckTwoTone,
  DescriptionTwoTone,
  LinkOffTwoTone,
  LocalOfferTwoTone,
  LockTwoTone,
  PublicTwoTone,
} from '@material-ui/icons'
import { isEmpty } from 'lodash-es'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ReactTooltip from 'react-tooltip'
import sanitizeHtml from 'sanitize-html'
import { useDeleteEntity } from '../utils/hooks/SynapseAPI/entity/useEntity'
import {
  useGetSchemaBinding,
  useGetValidationResults,
} from '../utils/hooks/SynapseAPI/entity/useEntityBoundSchema'
import useGetEntityBundle from '../utils/hooks/SynapseAPI/entity/useEntityBundle'
import {
  ANONYMOUS_PRINCIPAL_ID,
  AUTHENTICATED_PRINCIPAL_ID,
  PUBLIC_PRINCIPAL_ID,
} from '../utils/SynapseConstants'
import { useSynapseContext } from '../utils/SynapseContext'
import { EntityBundle, EntityType } from '../utils/synapseTypes'
import { EntityModal, EntityModalTabs } from './entity/metadata/EntityModal'
import WarningModal from './synapse_form_wrapper/WarningModal'

const isPublic = (bundle: EntityBundle): boolean => {
  return bundle.benefactorAcl!.resourceAccess.some(ra => {
    return (
      ra.principalId === AUTHENTICATED_PRINCIPAL_ID ||
      ra.principalId === PUBLIC_PRINCIPAL_ID ||
      ra.principalId === ANONYMOUS_PRINCIPAL_ID
    )
  })
}

export const ENTITY_BADGE_ICONS_TOOLTIP_ID = 'EntityBadgeIconsTooltipID'

export type EntityBadgeIconsProps = {
  entityId: string
  versionNumber?: number
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
  /** Shows an icon indicating if the entity is 'public' or 'private'. Default true  */
  showIsPublicPrivate?: boolean
  /** Shows an icon if the entity has sharing settings set on itself. Default true  */
  showHasLocalSharingSettings?: boolean
  /** Shows an icon if the entity has annotations, or if it has a validation schema (in experimental mode only). Default true  */
  showHasAnnotations?: boolean
  /** Shows an icon if the entity a wiki. Default true  */
  showHasWiki?: boolean
  /** Shows an icon if the entity has been mentioned in discussion threads. Default true  */
  showHasDiscussionThread?: boolean
  /* Shows an 'unlink' button if the entity is a link and the user has permission to delete it. Default true */
  showUnlink?: boolean
  /* Invoked after the entity is unlinked/deleted in case there is cleanup to do. Returns the entityId */
  onUnlink?: (entityId: string) => void
  onUnlinkError?: (error: unknown) => void
  /** Whether or not the badges (e.g. Annotations) can trigger opening a modal on click */
  canOpenModal: boolean
  /** Whether this component should render a ReactTooltip or if an external component is managing it */
  renderTooltipComponent: boolean
}

/**
 * Stateless component used to show icons that show an entity's status.
 * Adapted from https://github.com/Sage-Bionetworks/SynapseWebClient/blob/46b9b717636cda2421926d96365244bbb72a05b6/src/main/java/org/sagebionetworks/web/client/widget/entity/EntityBadge.java
 */
export const EntityBadgeIcons = (props: EntityBadgeIconsProps) => {
  const {
    entityId,
    versionNumber,
    flexWrap = 'nowrap',
    justifyContent = 'flex-start',
    showIsPublicPrivate = true,
    showHasLocalSharingSettings = true,
    showHasAnnotations = true,
    showHasWiki = true,
    showHasDiscussionThread = true,
    showUnlink = true,
    onUnlink = () => {
      /* noop */
    },
    onUnlinkError = () => {
      /* noop */
    },
    canOpenModal,
    renderTooltipComponent,
  } = props
  const ownTooltipId =
    ENTITY_BADGE_ICONS_TOOLTIP_ID +
    (renderTooltipComponent ? `-${entityId}` : '')

  enum SchemaConformanceState {
    NO_SCHEMA = '', // or not in experimental mode
    VALID = 'Valid',
    INVALID = 'Invalid',
    ANNOTATIONS_MISSING = 'Missing',
  }

  const { ref, inView } = useInView()

  const { data: bundle } = useGetEntityBundle(
    entityId,
    undefined,
    versionNumber,
    {
      enabled: inView,
      staleTime: 60 * 1000, // 60 seconds
    },
  )
  const [showModal, setShowModal] = useState(false)
  const [showUnlinkConfirmModal, setShowUnlinkConfirmModal] = useState(false)
  const [schemaConformance, setSchemaConformance] = useState(
    SchemaConformanceState.NO_SCHEMA,
  )

  const { isInExperimentalMode } = useSynapseContext()

  const { data: boundSchema } = useGetSchemaBinding(entityId, {
    enabled: isInExperimentalMode && inView,
    staleTime: 60 * 1000, // 60 seconds
  })

  const { data: schemaValidationResults } = useGetValidationResults(entityId, {
    enabled: isInExperimentalMode && inView && !!boundSchema,
    staleTime: 60 * 1000, // 60 seconds
  })

  // The maximum number of annotations to show in the popover
  const maxAnnosToShow = 10
  const annotationsCount =
    bundle?.annotations && !isEmpty(bundle.annotations.annotations)
      ? Object.keys(bundle.annotations.annotations).length
      : 0

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

  const { mutate: unlinkEntity } = useDeleteEntity({
    onSuccess: (_, entityId) => {
      onUnlink(entityId)
    },
    onError: onUnlinkError,
  })

  /**
   * Convert the list of annotations to a string of <tr>...anno1</tr><tr>...anno2</tr>...
   * If there are no annotations, this is the empty string ('')
   */
  const annotationsTableRows = bundle
    ? `${Object.entries(bundle.annotations?.annotations ?? []).reduce(
        (previous, current, index) => {
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
        },
        '',
      )}`
    : ''

  // We also show the schema name if there is one (and we're in experimental mode)
  const valiationSchemaTableRow =
    isInExperimentalMode && boundSchema
      ? `<tr><td><b>Validation Schema</b></td><td>${boundSchema.jsonSchemaVersionInfo.schemaName}</td></tr>`
      : ''

  // Format it all as an html table
  const annotationsHtml = `
      ${
        schemaValidationResults ? `<p>${schemaConformance} Annotations</p>` : ''
      }
      <table>
      ${annotationsTableRows ? annotationsTableRows : ''}
      ${valiationSchemaTableRow}
      </table>${
        annotationsCount > maxAnnosToShow
          ? `<p>and ${annotationsCount - maxAnnosToShow} more</p>`
          : ''
      }`

  return (
    <div className="EntityBadge" ref={ref} style={{ flexWrap, justifyContent }}>
      {bundle && (
        <>
          {renderTooltipComponent && (
            <ReactTooltip
              id={ownTooltipId}
              className="EntityBadgeTooltip"
              delayShow={100}
              place={'right'}
              effect={'solid'}
            />
          )}
          <div onClick={e => e.stopPropagation()}>
            <EntityModal
              entityId={entityId}
              show={showModal}
              showTabs={false}
              onClose={() => setShowModal(false)}
              initialTab={EntityModalTabs.ANNOTATIONS}
            />
          </div>
          {showIsPublicPrivate && bundle.benefactorAcl && isPublic(bundle) ? (
            <PublicTwoTone
              aria-hidden={false}
              role="img"
              className="EntityBadge__Badge"
              data-for={ownTooltipId}
              data-tip={'Public'}
              data-testid={'is-public-icon'}
            />
          ) : null}
          {showIsPublicPrivate && bundle.benefactorAcl && !isPublic(bundle) ? (
            <LockTwoTone
              aria-hidden={false}
              role="img"
              className="EntityBadge__Badge"
              data-for={ownTooltipId}
              data-tip={'Private'}
              data-testid={'is-private-icon'}
            />
          ) : null}
          {showHasLocalSharingSettings &&
          bundle.benefactorAcl &&
          entityId === bundle.benefactorAcl!.id ? (
            <CheckTwoTone
              aria-hidden={false}
              role="img"
              className="EntityBadge__Badge"
              data-for={ownTooltipId}
              data-tip="Sharing Settings have been set"
              data-testid={'sharing-settings-icon'}
            />
          ) : null}

          {showHasAnnotations &&
            !!(annotationsCount || schemaValidationResults) && (
              <LocalOfferTwoTone
                aria-hidden={false}
                role={canOpenModal ? 'button' : 'img'}
                className={`EntityBadge__Badge ${schemaConformance}`}
                style={canOpenModal ? { cursor: 'pointer' } : undefined}
                onClick={canOpenModal ? () => setShowModal(true) : undefined}
                data-for={ownTooltipId}
                data-tip={sanitizeHtml(annotationsHtml)}
                data-html={true}
                data-testid={'annotations-icon'}
              />
            )}
          {showHasWiki && bundle.rootWikiId && (
            <DescriptionTwoTone
              aria-hidden={false}
              role="img"
              className="EntityBadge__Badge"
              data-for={ownTooltipId}
              data-tip="Has a wiki"
              data-testid={'wiki-icon'}
            />
          )}
          {showHasDiscussionThread &&
            !!bundle.threadCount &&
            !!(bundle.threadCount > 0) && (
              <ChatBubbleTwoTone
                aria-hidden={false}
                role="img"
                className="EntityBadge__Badge"
                data-for={ownTooltipId}
                data-tip="Has been mentioned in discussion"
                data-testid={'discussion-icon'}
              />
            )}
          {showUnlink &&
            bundle.entityType === EntityType.LINK &&
            bundle.permissions?.canDelete && (
              <>
                <WarningModal
                  show={showUnlinkConfirmModal}
                  title="Confirm Unlink"
                  modalBody={
                    'Are you sure you want to remove this link? The original object will not be changed.'
                  }
                  confirmButtonText="Unlink"
                  confirmButtonVariant="danger"
                  onConfirm={() => {
                    unlinkEntity(entityId)
                    setShowUnlinkConfirmModal(false)
                  }}
                  onCancel={() => {
                    setShowUnlinkConfirmModal(false)
                  }}
                />
                <LinkOffTwoTone
                  aria-hidden={false}
                  role="button"
                  onClick={() => setShowUnlinkConfirmModal(true)}
                  className="EntityBadge__Badge Unlink"
                  data-for={ownTooltipId}
                  data-tip="Remove this link"
                  data-testid={'unlink-icon'}
                />
              </>
            )}
        </>
      )}
    </div>
  )
}
