import React from 'react'
import { EntityBundle } from '../utils/synapseTypes'
import {
  faAlignLeft,
  faCheck,
  faComment,
  faGlobe,
  faLock,
  faTag,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import _ from 'lodash-es'
import sanitizeHtml from 'sanitize-html'
import ReactTooltip from 'react-tooltip'

const ENTITY_BADGE_TOOLTIP_ID = 'EntityBadgeTooltipID'

const AUTHENTICATED_PRINCIPAL_ID = 273948
const PUBLIC_PRINCIPAL_ID = 273949
const ANONYMOUS_PRINCIPAL_ID = 273950

const isPublic = (bundle: EntityBundle): boolean => {
  return bundle.benefactorAcl!.resourceAccess.some(ra => {
    return (
      ra.principalId === AUTHENTICATED_PRINCIPAL_ID ||
      ra.principalId === PUBLIC_PRINCIPAL_ID ||
      ra.principalId === ANONYMOUS_PRINCIPAL_ID
    )
  })
}

type EntityBadgeProps = {
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
 */
export const EntityBadge: React.FunctionComponent<EntityBadgeProps> = ({
  entityId,
  bundle,
  flexWrap = 'nowrap',
  justifyContent = 'flex-start',
}) => {
  // TODO: Unlink (this should only be shown in contexts where the entity should be editable)
  // TODO: Download list?
  return (
    <div className="EntityBadge" style={{ flexWrap, justifyContent }}>
      <ReactTooltip
        id={ENTITY_BADGE_TOOLTIP_ID}
        delayShow={100}
        place={'right'}
        html={true}
      />

      {bundle.benefactorAcl && (
        <>
          {isPublic(bundle) ? (
            <FontAwesomeIcon
              className="EntityBadge__Badge"
              icon={faGlobe}
              aria-hidden="true"
              data-for={ENTITY_BADGE_TOOLTIP_ID}
              data-tip={'Public'}
            />
          ) : (
            <FontAwesomeIcon
              className="EntityBadge__Badge"
              icon={faLock}
              aria-hidden="true"
              data-for={ENTITY_BADGE_TOOLTIP_ID}
              data-tip={'Private'}
            />
          )}
          {entityId === bundle.benefactorAcl.id && (
            <FontAwesomeIcon
              className="EntityBadge__Badge"
              icon={faCheck}
              aria-hidden="true"
              data-for={ENTITY_BADGE_TOOLTIP_ID}
              data-tip="Sharing Settings have been set"
            />
          )}
        </>
      )}
      {bundle.annotations && !_.isEmpty(bundle.annotations.annotations) && (
        <FontAwesomeIcon
          className="EntityBadge__Badge"
          icon={faTag}
          aria-hidden="true"
          data-for={ENTITY_BADGE_TOOLTIP_ID}
          data-tip={sanitizeHtml(
            Object.entries(bundle.annotations.annotations).reduce(
              (previous, current) => {
                return `${previous}<b>${current[0]}</b> ${current[1].value}<br/>`
              },
              '',
            ),
          )}
        />
      )}
      {bundle.rootWikiId && (
        <FontAwesomeIcon
          //   style={{ maxWidth: '20px', maxHeight: '20px' }}
          className="EntityBadge__Badge"
          icon={faAlignLeft} // faNewspaper is ugly
          aria-hidden="true"
          data-for={ENTITY_BADGE_TOOLTIP_ID}
          data-tip="Has a wiki"
        />
      )}
      {!!bundle.threadCount && !!(bundle.threadCount > 0) && (
        <FontAwesomeIcon
          className="EntityBadge__Badge"
          icon={faComment}
          aria-hidden="true"
          data-for={ENTITY_BADGE_TOOLTIP_ID}
          data-tip="Has been mentioned in discussion"
        />
      )}
    </div>
  )
}
