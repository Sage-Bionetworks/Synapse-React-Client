import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ReactTooltip from 'react-tooltip'
import {
  getEntityTypeFromHeader,
  isContainerType,
} from '../../../utils/functions/EntityTypeUtils'
import { useGetEntityChildrenInfinite } from '../../../utils/hooks/SynapseAPI/useGetEntityChildren'
import {
  EntityHeader,
  ProjectHeader,
  Reference,
} from '../../../utils/synapseTypes'
import { EntityType } from '../../../utils/synapseTypes/EntityType'
import { EntityBadgeIcons } from '../../EntityBadgeIcons'
import { EntityTypeIcon } from '../../EntityIcon'

export type RootNodeConfiguration = {
  nodeText: string
  children: (Pick<EntityHeader, 'name' | 'id' | 'type'> | ProjectHeader)[]
}

export enum NodeAppearance {
  SELECT,
  BROWSE,
}

export type TreeNodeProps = {
  entityHeader?: Pick<EntityHeader, 'name' | 'id' | 'type'> | ProjectHeader
  selected: Reference[]
  setSelectedId: (entityId: string) => void
  level?: number
  autoExpand?: (entityId: string) => boolean
  visibleTypes?: EntityType[]
  appearance: NodeAppearance
  /* If rootNodeConfiguration is defined, then entityHeader will be ignored */
  rootNodeConfiguration?: RootNodeConfiguration
  selectableTypes: EntityType[]
}

export const TreeNode: React.FunctionComponent<TreeNodeProps> = ({
  entityHeader,
  selected,
  setSelectedId,
  level = 0,
  autoExpand = () => false,
  visibleTypes = [EntityType.PROJECT, EntityType.FOLDER],
  rootNodeConfiguration,
  appearance,
  selectableTypes,
}: TreeNodeProps) => {
  const isRootNode = !!rootNodeConfiguration

  const isDisabled =
    !isRootNode &&
    entityHeader &&
    !selectableTypes.includes(getEntityTypeFromHeader(entityHeader))

  const nodeId = isRootNode ? 'root' : entityHeader!.id
  const nodeName = isRootNode
    ? rootNodeConfiguration?.nodeText
    : entityHeader!.name

  const TOOLTIP_ID = `TreeViewNodeTooltipId_${nodeId}`

  const [isExpanded, setIsExpanded] = useState(isRootNode || autoExpand(nodeId))
  const [entityChildren, setEntityChildren] = useState<
    (Pick<EntityHeader, 'name' | 'id' | 'type'> | ProjectHeader)[]
  >([])

  // For retrieving the entity bundle and children
  const { ref: nodeRef, inView: nodeInView } = useInView({
    triggerOnce: true,
  })

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
    {
      parentId: nodeId,
      includeTypes: visibleTypes,
    },
    {
      enabled:
        (nodeInView || endInView) &&
        !isRootNode &&
        isContainerType(getEntityTypeFromHeader(entityHeader!)),
    },
  )

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
  }, [isRootNode, children, rootNodeConfiguration])

  return (
    <div
      className={`Node ${
        appearance === NodeAppearance.SELECT ? 'SelectNode' : 'BrowseNode'
      }`}
      role="treeitem"
      aria-selected={selected.map(e => e.targetId).includes(nodeId)}
      aria-disabled={isDisabled}
    >
      <div
        ref={nodeRef}
        style={{ paddingLeft: `${level * 20 + 20}px` }}
        role="button"
        aria-label={`Select ${nodeName}`}
        className={`NodeContent ${isRootNode ? 'NodeRootContent' : ''}`}
        key={nodeId}
        onClick={event => {
          event.stopPropagation()
          if (!isDisabled) {
            setSelectedId(nodeId)
          }
        }}
      >
        <ReactTooltip id={TOOLTIP_ID} delayShow={500} place={'top'} />
        {entityChildren && entityChildren.length > 0 ? (
          <div
            className={'ExpandButton'}
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
        {appearance === NodeAppearance.SELECT && ( // SWC-5592
          <div className="EntityIcon">
            {!isRootNode && entityHeader && (
              <EntityTypeIcon type={getEntityTypeFromHeader(entityHeader)} />
            )}
          </div>
        )}
        <div className="EntityName" data-for={TOOLTIP_ID} data-tip={nodeName}>
          <span>{nodeName}</span>
        </div>
        {appearance === NodeAppearance.SELECT && (
          <div>
            {nodeInView && (
              <EntityBadgeIcons
                entityId={nodeId}
                showHasDiscussionThread={false}
                showHasWiki={false}
                showUnlink={false}
                canOpenModal={false}
              />
            )}
          </div>
        )}
      </div>
      <div className={'NodeChildren'} aria-hidden={!isExpanded}>
        {entityChildren &&
          entityChildren.map(child => {
            return (
              <TreeNode
                key={child.id}
                entityHeader={child}
                selected={selected}
                setSelectedId={setSelectedId}
                level={level + 1}
                autoExpand={autoExpand}
                visibleTypes={visibleTypes}
                appearance={appearance}
                selectableTypes={selectableTypes}
              />
            )
          })}
        <div ref={endRef}></div>
      </div>
    </div>
  )
}
