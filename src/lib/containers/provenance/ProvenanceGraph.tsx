/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ReactFlow, {
  Controls,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  getConnectedEdges,
} from 'react-flow-renderer'
import {
  getLayoutedElements,
  getNodeId,
  getProvenanceEdge,
  getProvenanceNode,
  NodeType,
  ProvenanceNodeData,
  ProvenanceNodeProps,
} from './ProvenanceUtils'
import useDeepCompareEffect from 'use-deep-compare-effect'
import {
  Activity,
  Used,
  UsedEntity,
  UsedURL,
  USED_ENTITY_CONCRETE_TYPE_VALUE,
} from '../../utils/synapseTypes/Provenance/Provenance'
import { Reference } from '../../utils/synapseTypes'
import { useSynapseContext } from '../../utils/SynapseContext'
import { SynapseClient } from '../../utils'
import _ from 'lodash-es'
import { ExpandGraphNodeLabelProps } from './ExpandGraphNodeLabel'

export type ProvenanceProps = {
  /** The entity (and version) whose provenance should be shown */
  entityId: string
  versionNumber: number
  containerHeight: string
  depth: number
}

/**
 * Renders a form for editing an entity's annotations. The component also supports supplying just a schema ID,
 * but work to support annotation flows without an entity (i.e. before creating entities) is not yet complete.
 */
export const ProvenanceGraph = (props: ProvenanceProps) => {
  const { entityId, versionNumber, containerHeight = '200px' } = props
  const { accessToken } = useSynapseContext()
  const rootNodeEntityRef = useMemo(
    () => ({ targetId: entityId, targetVersionNumber: versionNumber }),
    [entityId, versionNumber],
  )

  const rootNodeProps = useMemo(
    () => ({
      type: NodeType.ENTITY,
      data: rootNodeEntityRef,
    }),
    [rootNodeEntityRef],
  )
  const [tempNodes, setTempNodes] = React.useState<Node[]>([
    getProvenanceNode(rootNodeProps),
  ])
  const [tempEdges, setTempEdges] = React.useState<Edge[]>([])
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [clickedNode, setClickedNode] = useState<Node>()

  const onClickNode = useCallback((_event: React.MouseEvent, node: Node) => {
    setClickedNode(node)
  }, [])

  const isNodeNotFound = (
    nodeProps: ProvenanceNodeProps,
    nodesCopy: Node[],
  ) => {
    const foundRef = nodesCopy.find(node => {
      return node.id === getNodeId(nodeProps)
    })
    return foundRef === undefined
  }

  const addActivityNode = useCallback(
    (
      activity: Activity,
      entityRef: Reference,
      nodesCopy: Node[],
      edgesCopy: Edge[],
    ) => {
      const activityNodeProps = {
        type: NodeType.ACTIVITY,
        data: activity,
      }
      const entityNodeProps = {
        type: NodeType.ENTITY,
        data: entityRef,
      }
      if (isNodeNotFound(activityNodeProps, nodesCopy)) {
        nodesCopy.push(getProvenanceNode(activityNodeProps))
        edgesCopy.push(getProvenanceEdge(activityNodeProps, entityNodeProps))
      }
    },
    [],
  )

  const addExpandNode = useCallback(
    (entityRef: Reference, nodesCopy: Node[], edgesCopy: Edge[]) => {
      const expandNodeProps = {
        type: NodeType.EXPAND,
        data: {
          entityReference: entityRef,
        },
      }
      const entityNodeProps = {
        type: NodeType.ENTITY,
        data: entityRef,
      }
      if (isNodeNotFound(expandNodeProps, nodesCopy)) {
        nodesCopy.push(getProvenanceNode(expandNodeProps))
        edgesCopy.push(getProvenanceEdge(expandNodeProps, entityNodeProps))
      }
    },
    [],
  )

  const addExternalNode = useCallback(
    (
      usedURL: UsedURL,
      activity: Activity,
      nodesCopy: Node[],
      edgesCopy: Edge[],
    ) => {
      const activityNodeProps = {
        type: NodeType.ACTIVITY,
        data: activity,
      }
      const externalNodeProps = {
        type: NodeType.EXTERNAL,
        data: usedURL,
      }
      if (isNodeNotFound(externalNodeProps, nodesCopy)) {
        nodesCopy.push(getProvenanceNode(externalNodeProps))
        edgesCopy.push(getProvenanceEdge(externalNodeProps, activityNodeProps))
      }
    },
    [],
  )

  const addEntityNode = useCallback(
    (
      entityRef: Reference,
      activity: Activity | undefined,
      nodesCopy: Node[],
      edgesCopy: Edge[],
    ) => {
      const entityNodeProps = {
        type: NodeType.ENTITY,
        data: entityRef,
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
    [],
  )

  /**
   * Will add new nodes and edges to the input arrays
   */
  const addEntity = useCallback(
    async (
      entityRef: Reference,
      nodesCopy: Node[],
      edgesCopy: Edge[],
      usedInActivity?: Activity,
    ) => {
      addEntityNode(entityRef, usedInActivity, nodesCopy, edgesCopy)
      //look for Activity
      try {
        const activity = await SynapseClient.getActivityForEntity(
          entityRef.targetId,
          entityRef.targetVersionNumber!,
          accessToken,
        )
        // if this is the root node, then add the activity immediately.
        // otherwise, add an expand node and we'll add this later
        if (entityRef == rootNodeEntityRef) {
          addActivityNode(activity, entityRef, nodesCopy, edgesCopy)
        } else {
          addExpandNode(entityRef, nodesCopy, edgesCopy)
        }
      } catch (e) {
        // Activity is not accessible
        console.error(e)
      }
    },
    [
      accessToken,
      addActivityNode,
      addEntityNode,
      addExpandNode,
      rootNodeEntityRef,
    ],
  )

  const onExpandEntity = useCallback(
    async (entityRef: Reference, nodesCopy: Node[], edgesCopy: Edge[]) => {
      try {
        const activity = await SynapseClient.getActivityForEntity(
          entityRef.targetId,
          entityRef.targetVersionNumber!,
          accessToken,
        )
        addActivityNode(activity, entityRef, nodesCopy, edgesCopy)

        // go through Activity.used array to add these nodes/edges
        const addEntityPromises: Promise<void>[] = []
        if (activity.used) {
          activity.used.forEach((usedItem: Used) => {
            if (usedItem.concreteType == USED_ENTITY_CONCRETE_TYPE_VALUE) {
              const usedEntityItem = usedItem as UsedEntity
              addEntityPromises.push(
                addEntity(
                  usedEntityItem.reference,
                  nodesCopy,
                  edgesCopy,
                  activity,
                ),
              )
            } else {
              // UsedURL
              const usedUrlItem = usedItem as UsedURL
              addExternalNode(usedUrlItem, activity, nodesCopy, edgesCopy)
            }
          })
          await Promise.all(addEntityPromises)
        }
      } catch (e) {
        // Activity is not accessible
        console.error(e)
      } finally {
        setTempNodes(nodesCopy)
        setTempEdges(edgesCopy)
      }
    },
    [accessToken, addActivityNode, addEntity, addExternalNode],
  )

  useEffect(() => {
    const nodeData: ProvenanceNodeData = clickedNode?.data as ProvenanceNodeData
    if (clickedNode && nodeData?.type == NodeType.EXPAND) {
      const expandNodeProps = nodeData.props as ExpandGraphNodeLabelProps
      // remove clicked node
      const nodesWithoutExpandNode = tempNodes.filter(
        node => node.id != clickedNode.id,
      )
      const edgeToRemove = getConnectedEdges([clickedNode], tempEdges)[0]
      const edgesWithoutExpandEdge = tempEdges.filter(
        edge => edge != edgeToRemove,
      )
      onExpandEntity(
        expandNodeProps.entityReference,
        nodesWithoutExpandNode,
        edgesWithoutExpandEdge,
      )
      setClickedNode(undefined)
    }
  }, [clickedNode, tempNodes, tempEdges, onExpandEntity])

  useEffect(() => {
    if (tempNodes.length == 1) {
      const nodesCopy = [...tempNodes]
      const edgesCopy = [...tempEdges]
      const addAndExpandPromises: Promise<void>[] = []
      const addEntityPromise = addEntity(
        rootNodeEntityRef,
        nodesCopy,
        edgesCopy,
      )
      const expandEntityPromise = onExpandEntity(
        rootNodeEntityRef,
        nodesCopy,
        edgesCopy,
      )
      addAndExpandPromises.push(addEntityPromise)
      addAndExpandPromises.push(expandEntityPromise)
      Promise.all(addAndExpandPromises).then(() => {
        setTempNodes(nodesCopy)
        setTempEdges(edgesCopy)
      })
    }
  }, [addEntity, onExpandEntity, rootNodeEntityRef, tempEdges, tempNodes])

  useDeepCompareEffect(() => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      tempNodes,
      tempEdges,
      'TB',
    )
    setNodes(layoutedNodes)
    setEdges(layoutedEdges)
  }, [tempNodes, tempEdges])

  return (
    <div
      className="bootstrap-4-backport ProvenanceWidget"
      style={{ width: '100%', height: containerHeight }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onClickNode}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        // attributionPosition="top-right"
      >
        <Controls />
      </ReactFlow>
    </div>
  )
}
