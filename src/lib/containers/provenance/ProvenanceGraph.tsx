/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
import ReactFlow, {
  Controls,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  getConnectedEdges,
  ReactFlowInstance,
  OnInit,
} from 'react-flow-renderer'
import {
  EntityHeaderIsCurrent,
  getLayoutedElements,
  getNodeId,
  getProvenanceEdge,
  getProvenanceNode,
  isArrayEqual,
  NodeType,
  ProvenanceNodeData,
  ProvenanceNodeProps,
} from './ProvenanceUtils'
import {
  Activity,
  Used,
  UsedEntity,
  UsedURL,
  USED_ENTITY_CONCRETE_TYPE_VALUE,
} from '../../utils/synapseTypes/Provenance/Provenance'
import {
  EntityHeader,
  Reference,
  ReferenceList,
} from '../../utils/synapseTypes'
import { useSynapseContext } from '../../utils/SynapseContext'
import { SynapseClient } from '../../utils'
import { ExpandGraphNodeDataProps } from './ExpandGraphNodeLabel'
import { useGetEntityHeaders } from '../../utils/hooks/SynapseAPI'
import { CircularProgress } from '@material-ui/core'
import { displayToast } from '../ToastMessage'
import { SynapseErrorBoundary } from '../ErrorBanner'
import { useErrorHandler } from 'react-error-boundary'

export type ProvenanceProps = {
  // what entity nodes should we start with?
  entityRefs: ReferenceList
  containerHeight: string
  initialNodes?: Node[]
  initialEdges?: Edge[]
  onNodesChangedListener?: (nodes: Node[]) => void
  onEdgesChangedListener?: (edges: Edge[]) => void
}

const MAX_ACTIVITY_EXPAND_NODES = 400
const DEFAULT_ZOOM = 0.85

/**
 * Renders a Provenance Graph for a set of entities.
 * New Nodes are added to tempNodes, and new Edges are added to tempEdges.
 * On change, these are fed into the dagre js graph library to figure out the node positions,
 * and the output stored in 'nodes' and 'edges'. The 'nodes' and 'edges' arrays are used by the
 * ReactFlow component.
 */
export const ProvenanceGraph = (props: ProvenanceProps) => {
  const {
    entityRefs: rootEntityRefs,
    containerHeight = '200px',
    initialNodes = [],
    initialEdges = [],
    onNodesChangedListener,
    onEdgesChangedListener,
  } = props
  const { accessToken } = useSynapseContext()
  const [tempNodes, setTempNodes] = React.useState<Node[]>(initialNodes)
  const [tempEdges, setTempEdges] = React.useState<Edge[]>(initialEdges)
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [clickedNode, setClickedNode] = useState<Node>()
  const handleError = useErrorHandler()

  const {
    data: rootEntityHeadersPage,
    isError,
    error: newError,
    isSuccess,
  } = useGetEntityHeaders(rootEntityRefs)
  if (isError) {
    handleError(newError)
  }
  if (isSuccess && rootEntityHeadersPage.totalNumberOfResults == 0) {
    const synapseIds = rootEntityRefs.map(ref => ref.targetId).join(',')
    handleError(
      `Unable to load provenance for the given Synapse IDs: ${synapseIds}`,
    )
  }
  const rootEntityHeaders = rootEntityHeadersPage?.results
  const [initializedPosition, setInitializedPosition] =
    React.useState<boolean>(false)

  // Get the react flow instance so we attempt to properly center the view.
  // Could instead use useReactFlow(), but that seems to require a Zustand context.
  // https://reactflow.dev/docs/api/react-flow-instance/
  const [reactFlowInstance, setReactFlowInstance] =
    React.useState<ReactFlowInstance>()

  const onClickNode = useCallback((_event: React.MouseEvent, node: Node) => {
    setClickedNode(node)
  }, [])

  /**
   * Is one of the root Entities given by the user
   */
  const isRootEntity = useCallback(
    (entityHeader: EntityHeader) => {
      const foundNode = rootEntityHeaders?.find(header => {
        return (
          entityHeader.id == header.id &&
          entityHeader.versionNumber == header.versionNumber
        )
      })
      return foundNode !== undefined
    },
    [rootEntityHeaders],
  )

  /**
   * Given the node properties, will return true if this node is already in the nodesCopy array.
   */
  const isNodeNotFound = useCallback(
    (nodeProps: ProvenanceNodeProps, nodesCopy: Node[]) => {
      const foundNode = nodesCopy.find(node => {
        return node.id === getNodeId(nodeProps)
      })
      return foundNode === undefined
    },
    [],
  )

  const findEntityNode = useCallback(
    (entityHeader: EntityHeader, nodesCopy: Node[]) => {
      const nodeProps = {
        type: NodeType.ENTITY,
        data: {
          entityHeader,
        },
      }
      return nodesCopy.find(node => {
        return node.id === getNodeId(nodeProps)
      })
    },
    [],
  )

  /**
   * Given the node properties, will return true if this edge is already in the edgesCopy array.
   */
  const isEdgeNotFound = useCallback(
    (
      nodeProps1: ProvenanceNodeProps,
      nodeProps2: ProvenanceNodeProps,
      edgesCopy: Edge[],
    ) => {
      const foundEdge = edgesCopy.find(edge => {
        return (
          edge.source === getNodeId(nodeProps1) &&
          edge.target === getNodeId(nodeProps2)
        )
      })
      return foundEdge === undefined
    },
    [],
  )

  /**
   * Given node properties of the new node and existing node, this function creates and adds a new node to
   * nodesCopy, and creates an edge from the new node to the existing node.  Note, this will only create
   * a new node or edge if these items are not found in the input nodesCopy array and edgesCopy array.
   */
  const addNodeAndEdge = useCallback(
    (params: {
      newNodeProps: ProvenanceNodeProps
      existingNodeProps: ProvenanceNodeProps
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { newNodeProps, existingNodeProps, nodesCopy, edgesCopy } = params
      if (isNodeNotFound(newNodeProps, nodesCopy)) {
        nodesCopy.push(getProvenanceNode(newNodeProps))
      }
      if (isEdgeNotFound(newNodeProps, existingNodeProps, edgesCopy)) {
        edgesCopy.push(getProvenanceEdge(newNodeProps, existingNodeProps))
      }
    },
    [isEdgeNotFound, isNodeNotFound],
  )

  const addActivityNode = useCallback(
    (params: {
      activity: Activity
      entityHeaderIsCurrent: EntityHeaderIsCurrent
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { activity, entityHeaderIsCurrent, nodesCopy, edgesCopy } = params
      const activityNodeProps = {
        type: NodeType.ACTIVITY,
        data: activity,
      }
      const entityNodeProps = {
        type: NodeType.ENTITY,
        data: entityHeaderIsCurrent,
      }
      addNodeAndEdge({
        newNodeProps: activityNodeProps,
        existingNodeProps: entityNodeProps,
        nodesCopy,
        edgesCopy,
      })
    },
    [addNodeAndEdge],
  )

  const addExpandNode = useCallback(
    (params: {
      entityHeaderIsCurrent: EntityHeaderIsCurrent
      itemCount: number | undefined
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const {
        entityHeaderIsCurrent,
        itemCount = 0,
        nodesCopy,
        edgesCopy,
      } = params
      const expandNodeProps = {
        type: NodeType.EXPAND,
        data: {
          itemCount,
          entityHeaderIsCurrent,
        },
      }
      const entityNodeProps = {
        type: NodeType.ENTITY,
        data: entityHeaderIsCurrent,
      }
      addNodeAndEdge({
        newNodeProps: expandNodeProps,
        existingNodeProps: entityNodeProps,
        nodesCopy,
        edgesCopy,
      })
    },
    [addNodeAndEdge],
  )

  const addEntityPlaceholderNode = useCallback(
    (params: {
      ref: Reference
      activity: Activity
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { ref, activity, nodesCopy, edgesCopy } = params
      const entityPlaceholderNodeProps = {
        type: NodeType.ENTITY_PLACEHOLDER,
        data: ref,
      }
      const activityNodeProps = {
        type: NodeType.ACTIVITY,
        data: activity,
      }
      addNodeAndEdge({
        newNodeProps: entityPlaceholderNodeProps,
        existingNodeProps: activityNodeProps,
        nodesCopy,
        edgesCopy,
      })
    },
    [addNodeAndEdge],
  )

  const addUndefinedNode = useCallback(
    (params: {
      entityHeader: EntityHeader
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { entityHeader, nodesCopy, edgesCopy } = params
      const undefinedNodeProps = {
        type: NodeType.UNDEFINED,
        data: entityHeader,
      }
      const entityNodeProps = {
        type: NodeType.ENTITY,
        data: {
          entityHeader,
        },
      }
      addNodeAndEdge({
        newNodeProps: undefinedNodeProps,
        existingNodeProps: entityNodeProps,
        nodesCopy,
        edgesCopy,
      })
    },
    [addNodeAndEdge],
  )

  const addExternalNode = useCallback(
    (params: {
      usedURL: UsedURL
      activity: Activity
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { usedURL, activity, nodesCopy, edgesCopy } = params
      const activityNodeProps = {
        type: NodeType.ACTIVITY,
        data: activity,
      }
      const externalNodeProps = {
        type: NodeType.EXTERNAL,
        data: usedURL,
      }
      addNodeAndEdge({
        newNodeProps: externalNodeProps,
        existingNodeProps: activityNodeProps,
        nodesCopy,
        edgesCopy,
      })
    },
    [addNodeAndEdge],
  )

  const addEntityNode = useCallback(
    (params: {
      entityHeaderIsCurrent: EntityHeaderIsCurrent
      activity: Activity | undefined
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { entityHeaderIsCurrent, activity, nodesCopy, edgesCopy } = params
      const entityNodeProps = {
        type: NodeType.ENTITY,
        data: entityHeaderIsCurrent,
      }
      if (isNodeNotFound(entityNodeProps, nodesCopy)) {
        // add the new entity node
        nodesCopy.push(getProvenanceNode(entityNodeProps))
        if (activity) {
          const activityNodeProps = {
            type: NodeType.ACTIVITY,
            data: activity,
          }
          edgesCopy.push(getProvenanceEdge(entityNodeProps, activityNodeProps))
        }
      }
    },
    [isNodeNotFound],
  )

  /**
   * Called when we have a new entity to add to the graph.  This will result in adding
   * a new Entity Node to the nodesCopy, a link from the usedInActivity to the new Entity Node,
   * AND it will look for an Activity associated with the new entity.  If an Activity is found,
   * it will add an Expand Node for the user to click (to expand to see this Activity!).
   * If this is a root node (starting entity node), then we automatically add the Activity Node
   * and process it.
   */
  const addEntity = useCallback(
    async (params: {
      entityHeaderIsCurrent: EntityHeaderIsCurrent
      usedInActivity?: Activity
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { entityHeaderIsCurrent, nodesCopy, edgesCopy, usedInActivity } =
        params
      addEntityNode({
        entityHeaderIsCurrent,
        activity: usedInActivity,
        nodesCopy,
        edgesCopy,
      })
      //look for Activity
      try {
        const { entityHeader } = entityHeaderIsCurrent
        const activity = await SynapseClient.getActivityForEntity(
          entityHeader.id,
          entityHeader.versionNumber,
          accessToken,
        )
        // if this is not a root node (or there are too many items to show), add an expand node
        if (
          !isRootEntity(entityHeader) ||
          (activity.used && activity.used.length >= MAX_ACTIVITY_EXPAND_NODES)
        ) {
          addExpandNode({
            entityHeaderIsCurrent,
            itemCount: activity.used?.length,
            nodesCopy,
            edgesCopy,
          })
        }
      } catch (e) {
        // Activity is not accessible
        console.error(e)
        if (isRootEntity(entityHeaderIsCurrent.entityHeader)) {
          // add provenance undefined node
          addUndefinedNode({
            entityHeader: entityHeaderIsCurrent.entityHeader,
            nodesCopy,
            edgesCopy,
          })
        }
      }
    },
    [addEntityNode, accessToken, isRootEntity, addExpandNode, addUndefinedNode],
  )

  /**
   * This effect attempts to center the graph on one of the root nodes.
   * Only initializes after after a root node has been added to the graph.
   */
  useEffect(() => {
    if (!initializedPosition && nodes.length > 0) {
      setTimeout(() => {
        if (reactFlowInstance && rootEntityHeaders) {
          const rootEntityNode = findEntityNode(rootEntityHeaders[0], nodes)
          if (rootEntityNode) {
            const currentZoom = reactFlowInstance.getZoom()
            const zoom = currentZoom > DEFAULT_ZOOM ? DEFAULT_ZOOM : currentZoom
            reactFlowInstance?.setCenter(
              rootEntityNode.position.x + 150,
              rootEntityNode.position.y - 30,
              { zoom, duration: 0 },
            )
          }
          setInitializedPosition(true)
        }
      })
    }
  }, [
    findEntityNode,
    initializedPosition,
    nodes,
    reactFlowInstance,
    rootEntityHeaders,
  ])

  const getEntityHeadersIsCurrent = useCallback(
    async (params: {
      refs: ReferenceList
    }): Promise<EntityHeaderIsCurrent[]> => {
      const { refs } = params
      const usedEntityHeadersPage = await SynapseClient.getEntityHeaders(refs)
      const refsWithoutVersion: ReferenceList = refs.map(ref => {
        return { targetId: ref.targetId }
      })
      const latestEntityHeadersPage = await SynapseClient.getEntityHeaders(
        refsWithoutVersion,
      )
      const { results: usedEntityHeaders } = usedEntityHeadersPage
      const { results: latestEntityHeaders } = latestEntityHeadersPage
      return usedEntityHeaders.map(usedEntityHeader => {
        const latestEntityHeader = latestEntityHeaders.find(currentHeader => {
          return usedEntityHeader.id == currentHeader.id
        })
        const isCurrent =
          latestEntityHeader?.versionNumber == usedEntityHeader.versionNumber
        return {
          entityHeader: usedEntityHeader,
          isCurrentVersion: isCurrent,
        }
      })
    },
    [],
  )

  /**
   * This is called when the user clicks on an Expand Node.  It will add the associated Activity
   * and all "used" items (entities and urls) to the graph by adding items to the nodesCopy and edgesCopy arrays.
   */
  const onExpandEntity = useCallback(
    async (params: {
      entityHeaderIsCurrent: EntityHeaderIsCurrent
      nodesCopy: Node[]
      edgesCopy: Edge[]
    }) => {
      const { entityHeaderIsCurrent, nodesCopy, edgesCopy } = params
      const { entityHeader } = entityHeaderIsCurrent
      try {
        const activity = await SynapseClient.getActivityForEntity(
          entityHeader.id,
          entityHeader.versionNumber,
          accessToken,
        )
        addActivityNode({
          activity,
          entityHeaderIsCurrent,
          nodesCopy,
          edgesCopy,
        })
        // go through Activity.used array to add these nodes/edges
        if (activity.used && activity.used.length < MAX_ACTIVITY_EXPAND_NODES) {
          const usedEntityReferences: ReferenceList = []
          activity.used.forEach((usedItem: Used) => {
            if (usedItem.concreteType == USED_ENTITY_CONCRETE_TYPE_VALUE) {
              usedEntityReferences.push((usedItem as UsedEntity).reference)
            } else {
              // UsedURL
              const usedURL = usedItem as UsedURL
              addExternalNode({ usedURL, activity, nodesCopy, edgesCopy })
            }
          })
          const entityHeadersIsCurrent = await getEntityHeadersIsCurrent({
            refs: usedEntityReferences,
          })
          // find refs that were not returned by the entity header call
          const refsMissingEntityHeaders = usedEntityReferences.filter(ref => {
            return (
              entityHeadersIsCurrent.find(eh => {
                return eh.entityHeader.id == ref.targetId
              }) == undefined
            )
          })
          refsMissingEntityHeaders.forEach(ref => {
            addEntityPlaceholderNode({ ref, activity, nodesCopy, edgesCopy })
          })
          const addEntityPromises: Promise<void>[] = []
          entityHeadersIsCurrent.forEach(newEntityHeaderIsCurrent => {
            addEntityPromises.push(
              addEntity({
                entityHeaderIsCurrent: newEntityHeaderIsCurrent,
                nodesCopy,
                edgesCopy,
                usedInActivity: activity,
              }),
            )
          })
          await Promise.allSettled(addEntityPromises)
        }
      } catch (e) {
        // Activity is not accessible
        console.error(e)
      }
    },
    [
      accessToken,
      addActivityNode,
      addEntity,
      addExternalNode,
      getEntityHeadersIsCurrent,
    ],
  )

  /**
   * This effect code executes when no nodes have been added.
   * It will add the root nodes, and attempt to expand the root nodes.
   */
  useEffect(() => {
    if (rootEntityHeaders && tempNodes.length == 0) {
      const nodesCopy = [...tempNodes]
      const edgesCopy = [...tempEdges]
      const addAndExpandPromises: Promise<void>[] = []
      getEntityHeadersIsCurrent({ refs: rootEntityRefs })
        .then(entityHeadersIsCurrent => {
          entityHeadersIsCurrent.forEach(entityHeaderIsCurrent => {
            const addEntityPromise = addEntity({
              entityHeaderIsCurrent,
              nodesCopy,
              edgesCopy,
            })
            addAndExpandPromises.push(addEntityPromise)

            const expandEntityPromise = onExpandEntity({
              entityHeaderIsCurrent,
              nodesCopy,
              edgesCopy,
            })
            addAndExpandPromises.push(expandEntityPromise)
          })

          Promise.allSettled(addAndExpandPromises).finally(() => {
            setTempNodes(nodesCopy)
            setTempEdges(edgesCopy)
          })
        })
        .catch(e => handleError(e))
    }
  })

  /**
   * This effect code executes when a node is clicked.
   * We check to see if it is an expand node.  If it is, then we remove the expand node (and associated edge)
   * and ask for the Activity and associated "used" nodes (entities and URLs)
   */
  useEffect(() => {
    const nodeData: ProvenanceNodeData = clickedNode?.data as ProvenanceNodeData
    if (clickedNode && nodeData?.type == NodeType.EXPAND) {
      const expandNodeDataProps = nodeData.props as ExpandGraphNodeDataProps
      if (expandNodeDataProps.itemCount > MAX_ACTIVITY_EXPAND_NODES) {
        displayToast(
          'Web visualization does not support expanding this many items at this time.',
          'danger',
        )
        return
      } else {
        // graph will be used outside of synapse, so show a non-branded spinner
        nodeData.label = <CircularProgress size={30} />
        // remove clicked node
        const nodesWithoutExpandNode = tempNodes.filter(
          node => node.id != clickedNode.id,
        )
        const edgeToRemove = getConnectedEdges([clickedNode], tempEdges)[0]
        const edgesWithoutExpandEdge = tempEdges.filter(
          edge => edge != edgeToRemove,
        )
        onExpandEntity({
          entityHeaderIsCurrent: expandNodeDataProps.entityHeaderIsCurrent,
          nodesCopy: nodesWithoutExpandNode,
          edgesCopy: edgesWithoutExpandEdge,
        }).finally(() => {
          setTempNodes(nodesWithoutExpandNode)
          setTempEdges(edgesWithoutExpandEdge)
        })
      }
      setClickedNode(undefined)
    }
  }, [clickedNode, tempNodes, tempEdges, onExpandEntity])

  /**
   * This effect code is run when the graph nodes or edges change.
   * It feeds the nodes and edges into our layout library to figure out where they should be positioned.
   * The result is saved in the state variable "nodes" and "edges".
   */
  useEffect(() => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      tempNodes,
      tempEdges,
      'TB',
    )
    // hack: ProvenanceUtils.getProvenanceNode() returns a new object every time, so check to see if
    // there were any real changes
    if (!isArrayEqual(layoutedNodes, nodes)) {
      setNodes(layoutedNodes)
      if (onNodesChangedListener) {
        onNodesChangedListener(layoutedNodes)
      }
    }
    if (!isArrayEqual(layoutedEdges, edges)) {
      setEdges(layoutedEdges)
      if (onEdgesChangedListener) {
        onEdgesChangedListener(layoutedEdges)
      }
    }
  }, [
    tempNodes,
    tempEdges,
    nodes,
    edges,
    setNodes,
    setEdges,
    initializedPosition,
    reactFlowInstance,
    findEntityNode,
    rootEntityRefs,
    onNodesChangedListener,
    onEdgesChangedListener,
  ])

  const onInit: OnInit = useCallback(
    reactFlow => setReactFlowInstance(reactFlow),
    [],
  )
  return (
    <SynapseErrorBoundary>
      <div
        className="bootstrap-4-backport ProvenanceWidget"
        style={{ width: '100%', height: containerHeight }}
      >
        <ReactFlow
          defaultZoom={DEFAULT_ZOOM}
          nodes={nodes}
          edges={edges}
          onNodeClick={onClickNode}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          attributionPosition="bottom-right"
          onConnect={undefined}
          onInit={onInit}
        >
          <Controls />
        </ReactFlow>
      </div>
    </SynapseErrorBoundary>
  )
}
