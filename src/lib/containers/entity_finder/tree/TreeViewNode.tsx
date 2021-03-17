import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ReactTooltip from 'react-tooltip'
import {
  getEntityTypeFromHeader,
  isContainerType,
} from '../../../utils/functions/EntityTypeUtils'
import useGetEntityBundle from '../../../utils/hooks/SynapseAPI/useEntityBundle'
import { useGetEntityChildrenInfinite } from '../../../utils/hooks/SynapseAPI/useGetEntityChildren'
import { EntityHeader, ProjectHeader } from '../../../utils/synapseTypes'
import { EntityType } from '../../../utils/synapseTypes/EntityType'
import { EntityBadge } from '../../EntityBadge'
import { EntityTypeIcon } from '../../EntityIcon'

export type TreeViewNodeProps = {
  sessionToken: string
  entityHeader: EntityHeader | ProjectHeader
  selectedId?: string | null
  setSelectedId: (entityId: string) => void
  level?: number
  autoExpand?: (entityId: string) => boolean
  visibleTypes?: EntityType[]
}

export const TreeViewNode: React.FunctionComponent<TreeViewNodeProps> = ({
  sessionToken,
  entityHeader,
  selectedId,
  setSelectedId,
  level = 0,
  autoExpand = () => false,
  visibleTypes = [EntityType.PROJECT, EntityType.FOLDER],
}) => {
  const TOOLTIP_ID = 'TreeViewNodeTooltipId'

  const entityType = getEntityTypeFromHeader(entityHeader)

  const [isExpanded, setIsExpanded] = useState(false)

  // For retrieving the entity bundle
  const { ref: nodeRef, inView: nodeInView } = useInView()

  // For "infinite scroll" paginated retrieval of the children
  const { ref: endRef, inView: endInView } = useInView({
    rootMargin: '200px',
  })

  const {
    data: children,
    fetchNextPage,
    hasNextPage,
    isSuccess,
  } = useGetEntityChildrenInfinite(
    sessionToken,
    {
      parentId: entityHeader.id,
      includeTypes: visibleTypes,
    },
    {
      enabled:
        nodeInView && isContainerType(getEntityTypeFromHeader(entityHeader)),
    },
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
      enabled: nodeInView,
      // We'll make the stale time longer because these requests are expensive + we make a lot of them
      // They also aren't likely to change meaningfully while in the entity finder
      staleTime: 60 * 1000, // 60 seconds
    },
  )

  useEffect(() => {
    if (autoExpand(entityHeader.id)) {
      setIsExpanded(true)
    }
  }, [entityHeader.id])

  useEffect(() => {
    if (isSuccess && endInView && hasNextPage) {
      fetchNextPage()
    }
  }, [isSuccess, endInView, hasNextPage, fetchNextPage])

  return (
    <div
      className="TreeNode"
      role="treeitem"
      aria-selected={selectedId === entityHeader.id}
    >
      <div
        ref={nodeRef}
        style={{ paddingLeft: `${level * 20 + 20}px` }}
        role="button"
        aria-label={`Select ${entityHeader.name}`}
        className="TreeNode__Content"
        key={entityHeader.id}
        onClick={event => {
          event.stopPropagation()
          setSelectedId(entityHeader.id)
        }}
      >
        <ReactTooltip id={TOOLTIP_ID} delayShow={500} place={'top'} />

        {children &&
        children.pages &&
        children.pages.length > 0 &&
        children.pages[0].page.length > 0 ? (
          <div
            className={'TreeNode__Content__ExpandButton'}
            aria-label={`Expand ${entityHeader.name}`}
            role="button"
            onClick={e => {
              e.stopPropagation()
              setIsExpanded(!isExpanded)
            }}
          >
            {isExpanded ? '▾' : '▸'}
          </div>
        ) : (
          <span style={{ padding: '10px' }}></span>
        )}
        <div className="TreeNode__Content__EntityIcon">
          {<EntityTypeIcon type={entityType} />}
        </div>
        <div
          className="TreeNode__Content__EntityName"
          data-for={TOOLTIP_ID}
          data-tip={entityHeader.name}
        >
          {entityHeader.name}
        </div>
        <div>
          {bundle && <EntityBadge entityId={entityHeader.id} bundle={bundle} />}
        </div>
      </div>
      <div className={'TreeNode__Children'} aria-hidden={!isExpanded}>
        {children?.pages.map(page => {
          return (
            <div key={'' + page.nextPageToken}>
              {page.page.map(child => {
                return (
                  <TreeViewNode
                    key={child.id}
                    sessionToken={sessionToken}
                    entityHeader={child}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    level={level + 1}
                    autoExpand={autoExpand}
                  ></TreeViewNode>
                )
              })}
            </div>
          )
        })}
      </div>
      <div ref={endRef}></div>
    </div>
  )
}
