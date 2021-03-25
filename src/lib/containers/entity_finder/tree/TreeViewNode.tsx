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

export type RootNodeConfiguration = {
  nodeText: string
  children: (EntityHeader | ProjectHeader)[]
}

export type TreeViewNodeProps = {
  sessionToken: string
  entityHeader?: EntityHeader | ProjectHeader
  selectedId?: string | null
  setSelectedId: (entityId: string) => void
  level?: number
  autoExpand?: (entityId: string) => boolean
  visibleTypes?: EntityType[]
  /* If rootNodeConfiguration is defined, then entityHeader will be ignored */
  rootNodeConfiguration?: RootNodeConfiguration
}

export const TreeViewNode: React.FunctionComponent<TreeViewNodeProps> = ({
  sessionToken,
  entityHeader,
  selectedId,
  setSelectedId,
  level = 0,
  autoExpand = () => false,
  visibleTypes = [EntityType.PROJECT, EntityType.FOLDER],
  rootNodeConfiguration,
}: TreeViewNodeProps) => {
  const isRootNode = !!rootNodeConfiguration

  const nodeId = isRootNode ? 'root' : entityHeader!.id
  const nodeName = isRootNode
    ? rootNodeConfiguration?.nodeText
    : entityHeader!.name

  const TOOLTIP_ID = 'TreeViewNodeTooltipId'

  const [isExpanded, setIsExpanded] = useState(false)
  const [entityChildren, setEntityChildren] = useState<
    (EntityHeader | ProjectHeader)[]
  >([])

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
      parentId: nodeId,
      includeTypes: visibleTypes,
    },
    {
      enabled:
        nodeInView &&
        !isRootNode &&
        isContainerType(getEntityTypeFromHeader(entityHeader!)),
    },
  )

  const { data: bundle } = useGetEntityBundle(
    sessionToken,
    nodeId,
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
      enabled: nodeInView && !isRootNode,
      // We'll make the stale time longer because these requests are expensive + we make a lot of them
      // They also aren't likely to change meaningfully while in the entity finder
      staleTime: 60 * 1000, // 60 seconds
    },
  )

  useEffect(() => {
    if (
      // isRootNode || // TODO: decide if we ever want to use autoexpand
      autoExpand(nodeId)
    ) {
      setIsExpanded(true)
    }
  }, [isRootNode, autoExpand, nodeId])

  useEffect(() => {
    if (isSuccess && endInView && hasNextPage) {
      fetchNextPage()
    }
  }, [isSuccess, endInView, hasNextPage, fetchNextPage])

  useEffect(() => {
    if (isRootNode) {
      setEntityChildren(rootNodeConfiguration!.children)
    } else {
      setEntityChildren(
        ([] as EntityHeader[]).concat.apply(
          [],
          children?.pages.map(page => page.page) ?? [],
        ),
      )
    }
  }, [isRootNode, children?.pages, rootNodeConfiguration])

  return (
    <div
      className="TreeNode"
      role="treeitem"
      aria-selected={selectedId === nodeId}
    >
      <div
        ref={nodeRef}
        style={{ paddingLeft: `${level * 20 + 20}px` }}
        role="button"
        aria-label={`Select ${nodeName}`}
        className={`TreeNode__Content ${isRootNode && 'TreeNodeRootContent'}`}
        key={nodeId}
        onClick={event => {
          event.stopPropagation()
          setSelectedId(nodeId)
        }}
      >
        <ReactTooltip id={TOOLTIP_ID} delayShow={500} place={'top'} />
        {entityChildren && entityChildren.length > 0 ? (
          <div
            className={'TreeNode__Content__ExpandButton'}
            aria-label={`Expand ${nodeName}`}
            role="button"
            onClick={e => {
              e.stopPropagation()
              setIsExpanded(!isExpanded)
            }}
          >
            {isExpanded ? '▾' : '▸'}
          </div>
        ) : (
          <span></span>
        )}
        <div className="TreeNode__Content__EntityIcon">
          {!isRootNode && entityHeader && (
            <EntityTypeIcon type={getEntityTypeFromHeader(entityHeader)} />
          )}
        </div>
        <div
          className="TreeNode__Content__EntityName"
          data-for={TOOLTIP_ID}
          data-tip={nodeName}
        >
          {nodeName}
        </div>
        <div>{bundle && <EntityBadge entityId={nodeId} bundle={bundle} />}</div>
      </div>
      <div className={'TreeNode__Children'} aria-hidden={!isExpanded}>
        {entityChildren &&
          entityChildren.map(child => {
            return (
              <TreeViewNode
                key={child.id}
                sessionToken={sessionToken}
                entityHeader={child}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                level={level + 1}
                autoExpand={autoExpand}
                visibleTypes={visibleTypes}
              />
            )
          })}
        <div ref={endRef}></div>
      </div>
    </div>
  )
}
