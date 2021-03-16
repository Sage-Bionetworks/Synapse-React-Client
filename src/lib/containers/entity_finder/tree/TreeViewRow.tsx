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

export type TreeViewRowProps = {
  sessionToken: string
  entityHeader: EntityHeader | ProjectHeader
  selectedId?: string | null
  setSelectedId: (entityId: string) => void
  level?: number
  autoExpand?: (entityId: string) => boolean
}

export const TreeViewRow: React.FunctionComponent<TreeViewRowProps> = ({
  sessionToken,
  entityHeader,
  selectedId,
  setSelectedId,
  level = 0,
  autoExpand = () => false,
}) => {
  const TOOLTIP_ID = 'TreeViewRowTooltipId'

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
      includeTypes: [EntityType.PROJECT, EntityType.FOLDER],
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
    <div className="TreeNode" aria-selected={selectedId === entityHeader.id}>
      <ReactTooltip id={TOOLTIP_ID} delayShow={500} place={'top'} />
      <div
        ref={nodeRef}
        style={{ paddingLeft: `${level * 20 + 20}px` }}
        className="TreeNode__Row"
        role="row"
        key={entityHeader.id}
        onClick={() => setSelectedId(entityHeader.id)}
      >
        {children &&
        children.pages &&
        children.pages.length > 0 &&
        children.pages[0].page.length > 0 ? (
          <div
            className={'TreeNode__Row__ExpandButton'}
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
        <div className="TreeNode__Row__EntityIcon">
          {<EntityTypeIcon type={entityType} />}
        </div>
        <div
          className="TreeNode__Row__EntityName"
          data-for={TOOLTIP_ID}
          data-tip={entityHeader.name}
        >
          {entityHeader.name}
        </div>
        <div>
          {bundle && <EntityBadge entityId={entityHeader.id} bundle={bundle} />}
        </div>
      </div>
      <div style={!isExpanded ? { display: 'none' } : {}}>
        {children?.pages.map(page => {
          return (
            <div key={'' + page.nextPageToken}>
              {page.page.map(child => {
                return (
                  <TreeViewRow
                    key={child.id}
                    sessionToken={sessionToken}
                    entityHeader={child}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    level={level + 1}
                    autoExpand={autoExpand}
                  ></TreeViewRow>
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
