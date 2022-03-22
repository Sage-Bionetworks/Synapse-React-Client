import { Skeleton } from '@material-ui/lab'
import { Map } from 'immutable'
import { cloneDeep } from 'lodash'
import React, { useCallback, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import AutoSizer from 'react-virtualized-auto-sizer'
import {
  TreeWalker,
  TreeWalkerValue,
  VariableSizeNodeData,
  VariableSizeNodePublicState,
  VariableSizeTree,
} from 'react-vtree'
import { NodeComponentProps } from 'react-vtree/dist/es/Tree'
import { SynapseClient } from '../../../utils'
import {
  getEntityTypeFromHeader,
  isContainerType,
} from '../../../utils/functions/EntityTypeUtils'
import { useSynapseContext } from '../../../utils/SynapseContext'
import {
  EntityHeader,
  EntityType,
  ProjectHeader,
} from '../../../utils/synapseTypes'
import { Writable } from '../../../utils/types/Writable'
import { EntityBadgeIcons } from '../../EntityBadgeIcons'
import { EntityTypeIcon } from '../../EntityIcon'
import { SynapseSpinner } from '../../LoadingScreen'

export enum EntityTreeNodeType {
  /** The tree component's appearance and interactions will facilitate selection. Nodes will be larger and styles will indicate primary selection */
  SINGLE_PANE,
  /** The tree component's appearance and interactions will facilitate browsing. Nodes will be smaller and styles will indicate secondary selection */
  DUAL_PANE,
}

type EntityFinderHeader =
  | Pick<EntityHeader, 'id' | 'name' | 'type'>
  | ProjectHeader

type NodeChildren = Readonly<{
  /** The node's children. If undefined, then children have not been fetched. */
  children?: EntityHeaderNode[]
  /** The token used to fetch the next page of children for this entity. If this property is nullish and children is defined, then all children have been fetched. */
  childrenNextPageToken?: string | null
}>

type EntityHeaderNode = EntityFinderHeader & NodeChildren
type PaginationNode = { __paginationNode: true }

type TreeNode = EntityHeaderNode | RootNodeConfiguration | PaginationNode

function getTreeNodeType(
  node: TreeNode,
): 'entityHeader' | 'rootNodeConfiguration' | 'pagination' {
  if ('__paginationNode' in node) {
    return 'pagination'
  }
  return 'id' in node ? 'entityHeader' : 'rootNodeConfiguration'
}

function isPaginationNode(node: TreeNode): node is PaginationNode {
  return getTreeNodeType(node) === 'pagination'
}

function isEntityHeaderNode(node: TreeNode): node is EntityHeaderNode {
  return getTreeNodeType(node) === 'entityHeader'
}

function isRootNodeConfiguration(
  node: TreeNode,
): node is RootNodeConfiguration {
  return getTreeNodeType(node) === 'rootNodeConfiguration'
}

function hasMoreChildren(node: TreeNode) {
  if (isPaginationNode(node)) {
    return true
  } else if (isRootNodeConfiguration(node)) {
    return node.hasNextPage
  }

  return node.children == null || node.childrenNextPageToken != null
}

function isLeafNode(node: TreeNode) {
  if (isPaginationNode(node)) {
    return true
  } else if (isRootNodeConfiguration(node)) {
    return false
  } else {
    return (
      // Entity is not a container
      !isContainerType(getEntityTypeFromHeader(node)) ||
      // OR Children have been fetched (nonnull) and there are 0 children
      (node.children != null && node.children.length === 0)
    )
  }
}

type TreeData = VariableSizeNodeData &
  Readonly<{
    node: TreeNode
    getNextPageOfChildren: () => Promise<void>
    isLeaf: boolean
    nestingLevel: number
    setSelectedId: (entityId: string) => void
    treeNodeType: EntityTreeNodeType
    isSelected: boolean
    isDisabled: boolean
  }>

type NodeMeta = Readonly<{
  nestingLevel: number
  node: TreeNode
}>

export type RootNodeConfiguration = {
  show: boolean
  nodeText: string
  children: EntityFinderHeader[]
  /** If undefined, no more entities to fetch */
  fetchNextPage: () => Promise<void>
  hasNextPage: boolean
}

/**
 * Converts a TreeNode and related data into a TreeWalkerValue that react-vtree can use to render the tree.
 * @param config
 * @returns
 */
const getNodeData = (config: {
  node: TreeNode
  nestingLevel: number
  getNextPageOfChildren: () => Promise<void>
  setSelectedId: (entityId: string) => void
  treeNodeType: EntityTreeNodeType
  selected: Map<string, number>
  selectableTypes: EntityType[]
  autoExpand: (entityId: string) => boolean
  defaultHeight: number
  currentContainer?: string | 'root' | null
}): TreeWalkerValue<TreeData, NodeMeta> => {
  const {
    node,
    nestingLevel,
    getNextPageOfChildren,
    setSelectedId,
    treeNodeType,
    selected,
    selectableTypes,
    autoExpand,
    defaultHeight,
    currentContainer,
  } = config

  if (isPaginationNode(node)) {
    throw new Error('Cannot create data for a pagination node')
  }

  const id = isRootNodeConfiguration(node) ? 'root' : node.id

  const isOpenByDefault = autoExpand(id)
  const isSelected =
    treeNodeType === EntityTreeNodeType.SINGLE_PANE
      ? selected.has(id)
      : currentContainer === id
  const isDisabled =
    !isRootNodeConfiguration(node) &&
    !selectableTypes.includes(getEntityTypeFromHeader(node))
  /*
   * If the node is open by default and we haven't fetched its children,
   * fetch the first page (otherwise we won't fetch unless re-toggled)
   */
  if (isOpenByDefault && node.children == null && hasMoreChildren(node)) {
    getNextPageOfChildren()
  }

  return {
    data: {
      node,
      getNextPageOfChildren,
      id: id,
      isLeaf: isLeafNode(node),
      isOpenByDefault: isOpenByDefault,
      nestingLevel,
      setSelectedId,
      treeNodeType,
      isSelected,
      isDisabled,
      defaultHeight,
    },
    nestingLevel,
    node,
  }
}

function Node(
  props: NodeComponentProps<TreeData, VariableSizeNodePublicState<TreeData>>,
) {
  const {
    data: {
      node,
      getNextPageOfChildren,
      isLeaf,
      id,
      nestingLevel,
      setSelectedId,
      treeNodeType,
      isSelected,
      isDisabled,
    },
    isOpen,
    style,
    setOpen,
  } = props

  const [isLoading, setLoading] = useState(false)

  const nodeText = isEntityHeaderNode(node) ? (
    node.name
  ) : isRootNodeConfiguration(node) ? (
    node.nodeText
  ) : (
    // Pagination node
    <Skeleton width={100} />
  )

  // We only use this for pagination nodes. If the pagination node comes into view, then immediately call `getNextPageOfChildren`
  const { ref, inView } = useInView()
  useEffect(() => {
    if (isPaginationNode(node) && inView) {
      getNextPageOfChildren()
    }
  }, [node, inView, getNextPageOfChildren])

  /**
   * If the height is 0, the node is purposefully hidden. Just render a fragment.
   */
  if ('height' in style && style.height === 0) {
    return <></>
  }

  async function toggleExpand() {
    if (hasMoreChildren(node)) {
      setLoading(true)
      await getNextPageOfChildren()
      await setOpen(!isOpen)
      setLoading(false)
    } else {
      await setOpen(!isOpen)
    }
  }

  return (
    <div
      className={`Node ${
        treeNodeType === EntityTreeNodeType.SINGLE_PANE
          ? 'SelectNode'
          : 'BrowseNode'
      }`}
      aria-selected={isSelected}
      aria-disabled={isDisabled}
      onClick={async event => {
        event.stopPropagation()
        if (!isDisabled) {
          setSelectedId(id)
        }
        if (
          treeNodeType === EntityTreeNodeType.DUAL_PANE &&
          !isOpen &&
          !isSelected
        ) {
          await toggleExpand()
        }
      }}
      style={{
        ...style,
        paddingLeft: `${20 + nestingLevel * 20}px`,
      }}
    >
      {!isLeaf && (
        <button
          className="ExpandButton"
          type="button"
          onClick={async event => {
            event.stopPropagation()
            await toggleExpand()
          }}
        >
          {isLoading ? <SynapseSpinner size={10} /> : isOpen ? '▾' : '▸'}
        </button>
      )}
      {treeNodeType === EntityTreeNodeType.SINGLE_PANE && ( // SWC-5592
        <div className="EntityIcon">
          {isEntityHeaderNode(node) && (
            <EntityTypeIcon type={getEntityTypeFromHeader(node)} />
          )}
        </div>
      )}

      <div className="EntityName" ref={ref}>
        {nodeText}
      </div>
      {treeNodeType === EntityTreeNodeType.SINGLE_PANE && (
        <EntityBadgeIcons
          entityId={id}
          showHasDiscussionThread={false}
          showHasWiki={false}
          showUnlink={false}
          canOpenModal={false}
          renderTooltipComponent={true}
        />
      )}
    </div>
  )
}

export type TreePresenterProps = Readonly<{
  treeNodeType: EntityTreeNodeType
  rootNodeConfiguration: RootNodeConfiguration
  setSelectedId: (entityId: string) => void
  selected: Map<string, number>
  /* currentContainer is the container whose contents are shown on in the right pane in dual-pane configuration, and may only be defined when NodeAppearance is BROWSE */
  currentContainer?: string | 'root' | null
  autoExpand: (entityId: string) => boolean
  selectableTypes: EntityType[]
  visibleTypes: EntityType[]
}>

/**
 * Component that utilizes react-vtree to efficiently display a tree of entities. react-vtree utilizes react-window
 * to only render visible nodes, which eliminates performance issues as seen in SWC-5978.
 */
export const TreePresenter = (props: TreePresenterProps) => {
  const {
    rootNodeConfiguration,
    setSelectedId,
    treeNodeType,
    selected,
    currentContainer,
    selectableTypes,
    visibleTypes,
    autoExpand,
  } = props

  const { accessToken } = useSynapseContext()

  const [rootNode, setRootNode] = useState<RootNodeConfiguration>(
    rootNodeConfiguration,
  )

  useEffect(() => {
    setRootNode(rootNodeConfiguration)
  }, [rootNodeConfiguration, rootNodeConfiguration.children])

  // This function is used by VariableSizeTree to identify the size of each node in the tree.
  const itemSize = useCallback(
    (index?: number) => {
      /**
       * We must have a root node, but we don't always want to show it.
       * In those cases, set the height of the root node to 0.
       */
      if (index === 0 && !rootNodeConfiguration.show) {
        return 0
      }
      /**
       * The height of all other nodes in the tree varies depending on the tree node type.
       */
      return treeNodeType === EntityTreeNodeType.DUAL_PANE ? 28 : 60
    },
    [treeNodeType, rootNodeConfiguration.show],
  )

  /**
   * Fetches the next page of children for a given node. After fetching the children, this method will make a deep clone of the
   *  full tree, including the new data, and updates the state of the component
   */
  const fetchNextPageOfChildren = useCallback(
    // Because we update the root node with a copy at the end of this function, we can write to the node under update.
    async (node: Writable<EntityHeaderNode>) => {
      // Fetch the children of the node
      const children = await SynapseClient.getEntityChildren(
        {
          parentId: node.id,
          nextPageToken: node.childrenNextPageToken,
          includeTypes: visibleTypes,
        },
        accessToken,
      )

      // Update the node data -- add the children and store the nextPageToken
      if (node.children) {
        node.children.push(...children.page)
      } else {
        node.children = children.page
      }
      node.childrenNextPageToken = children.nextPageToken

      // cloneDeep is required to re-render the tree with the new children
      setRootNode(cloneDeep(rootNode))
    },
    [rootNode, accessToken, visibleTypes],
  )

  /**
   * treeWalker is a generator function used by react-vtree to generate the tree structure. The tree is re-built when the function is updated,
   * so the dependencies specified in useCallback are important.
   */
  const treeWalker = useCallback(
    function* treeWalker(): ReturnType<TreeWalker<TreeData, NodeMeta>> {
      // Step [1]: Define the root node of our tree.
      yield getNodeData({
        node: rootNode,
        nestingLevel: 0,
        getNextPageOfChildren: rootNode.fetchNextPage,
        setSelectedId,
        treeNodeType,
        selected,
        selectableTypes,
        autoExpand,
        defaultHeight: itemSize(),
        currentContainer,
      })

      while (true) {
        // Step [2]: Get the parent. It will be the object the `getNodeData` function constructed, so you can read any data from it.
        const parentMeta = yield

        if (
          !isPaginationNode(parentMeta.node) &&
          (parentMeta.node.children || hasMoreChildren(parentMeta.node))
        ) {
          for (let i = 0; i < (parentMeta.node.children ?? []).length; i++) {
            // Step [3]: Yielding all the children of the parent
            const childNode = parentMeta.node.children![i]

            yield getNodeData({
              node: childNode,
              nestingLevel: parentMeta.nestingLevel + 1,
              getNextPageOfChildren: () => fetchNextPageOfChildren(childNode),
              setSelectedId,
              treeNodeType,
              selected,
              selectableTypes,
              autoExpand,
              defaultHeight: itemSize(),
              currentContainer,
            })
          }

          // Step [4] - If the parent node has more children, render a "pagination node" that will fetch more children when it comes into view (via intersection observer)
          if (
            parentMeta.node.children != null &&
            hasMoreChildren(parentMeta.node)
          ) {
            const paginationNode: PaginationNode = {
              __paginationNode: true,
            }
            const paginationTreeWalkerValue: TreeWalkerValue<
              TreeData,
              NodeMeta
            > = {
              data: {
                id: parentMeta.data.id + '-pagination',
                node: paginationNode,
                isOpenByDefault: false,
                getNextPageOfChildren: parentMeta.data.getNextPageOfChildren,
                isLeaf: true,
                isSelected: false,
                defaultHeight: itemSize(),
                isDisabled: true,
                nestingLevel: parentMeta.nestingLevel + 1,
                setSelectedId: () => {},
                treeNodeType,
              },
              nestingLevel: parentMeta.nestingLevel + 1,
              node: {
                __paginationNode: true,
              },
            }
            yield paginationTreeWalkerValue
          }
        }
      }
    },
    [
      rootNode,
      setSelectedId,
      treeNodeType,
      selected,
      selectableTypes,
      autoExpand,
      currentContainer,
      fetchNextPageOfChildren,
      itemSize,
    ],
  )

  return (
    <AutoSizer disableWidth>
      {({ height }: { height: number }) => (
        <VariableSizeTree
          treeWalker={treeWalker}
          itemSize={itemSize}
          height={height}
          async={true}
          width="100%"
        >
          {Node}
        </VariableSizeTree>
      )}
    </AutoSizer>
  )
}
