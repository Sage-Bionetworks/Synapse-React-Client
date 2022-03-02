import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ReactTooltip from 'react-tooltip'
import {
  getEntityTypeFromHeader,
  isContainerType,
} from '../../../utils/functions/EntityTypeUtils'
import { useGetEntityChildrenInfinite } from '../../../utils/hooks/SynapseAPI/useGetEntityChildren'
import { EntityHeader, ProjectHeader } from '../../../utils/synapseTypes'
import { EntityType } from '../../../utils/synapseTypes/EntityType'
import { EntityBadgeIcons } from '../../EntityBadgeIcons'
import { EntityTypeIcon } from '../../EntityIcon'
import { Map } from 'immutable'

export type RootNodeConfiguration = {
  nodeText: string
  children: (Pick<EntityHeader, 'name' | 'id' | 'type'> | ProjectHeader)[]
}

export enum EntityTreeNodeType {
  SELECT,
  BROWSE,
}

export type TreeNodeProps = {
  entityHeader?: Pick<EntityHeader, 'name' | 'id' | 'type'> | ProjectHeader
  selected: Map<string, number>
  setSelectedId: (entityId: string) => void
  level?: number
  autoExpand?: (entityId: string) => boolean
  visibleTypes?: EntityType[]
  treeNodeType: EntityTreeNodeType
  /* If rootNodeConfiguration is defined, then entityHeader will be ignored */
  rootNodeConfiguration?: RootNodeConfiguration
  selectableTypes: EntityType[]
  /* currentContainer is the container whose contents are shown on in the right pane in dual-pane configuration, and may only be defined when NodeAppearance is BROWSE */
  currentContainer?: string | 'root' | null
}

export type ITreeNode = React.ComponentType<TreeNodeProps>

export const TreeNode: ITreeNode = ({
  entityHeader,
  selected,
  setSelectedId,
  level = 0,
  autoExpand = () => false,
  visibleTypes = [EntityType.PROJECT, EntityType.FOLDER],
  rootNodeConfiguration,
  treeNodeType,
  selectableTypes,
  currentContainer,
}: TreeNodeProps) => {
  const isRootNode = !!rootNodeConfiguration
  const nodeId = isRootNode ? 'root' : entityHeader!.id

  const isSelected =
    treeNodeType === EntityTreeNodeType.SELECT
      ? selected.has(nodeId)
      : currentContainer === nodeId

  const isDisabled =
    !isRootNode &&
    entityHeader &&
    !selectableTypes.includes(getEntityTypeFromHeader(entityHeader))

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
      setEntityChildren(children?.pages.flatMap(page => page.page) ?? [])
    }
  }, [isRootNode, children, rootNodeConfiguration])

  return (
    <div
      className={`Node ${
        treeNodeType === EntityTreeNodeType.SELECT ? 'SelectNode' : 'BrowseNode'
      }`}
      role="treeitem"
      aria-selected={isSelected}
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
        <ReactTooltip
          id={TOOLTIP_ID}
          delayShow={500}
          place={'top'}
          effect="solid"
        />
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
        {treeNodeType === EntityTreeNodeType.SELECT && ( // SWC-5592
          <div className="EntityIcon">
            {!isRootNode && entityHeader && (
              <EntityTypeIcon type={getEntityTypeFromHeader(entityHeader)} />
            )}
          </div>
        )}
        <div className="EntityName" data-for={TOOLTIP_ID} data-tip={nodeName}>
          <span>{nodeName}</span>
        </div>
        {treeNodeType === EntityTreeNodeType.SELECT && (
          <EntityBadgeIcons
            entityId={nodeId}
            showHasDiscussionThread={false}
            showHasWiki={false}
            showUnlink={false}
            canOpenModal={false}
            renderTooltipComponent={true}
          />
        )}
      </div>
      {/* We hide the children using CSS rather than un/mounting the node on toggle because we want to preserve the child's state if shown, hidden, and shown again */}
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
                treeNodeType={treeNodeType}
                selectableTypes={selectableTypes}
                currentContainer={currentContainer}
              />
            )
          })}
        <div ref={endRef}></div>
      </div>
    </div>
  )
}
