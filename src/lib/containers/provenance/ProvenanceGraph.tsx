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
} from './ProvenanceUtils'
import useDeepCompareEffect from 'use-deep-compare-effect'
import {
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
  const {
    entityId,
    versionNumber,
    containerHeight = '200px',
    depth = 1,
  } = props
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
  const [tempNodes, setTempNodes] = React.useState<Node<any>[]>([
    getProvenanceNode(rootNodeProps),
  ])
  const [tempEdges, setTempEdges] = React.useState<Edge<any>[]>([])
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [clickedNode, setClickedNode] = useState<Node>()

  const onClickNode = useCallback((_event: React.MouseEvent, node: Node) => {
    setClickedNode(node)
  }, [])

  const onExpandEntity = useCallback(
    (entityRef: Reference, allNodes: Node[], allEdges: Edge[]) => {
      SynapseClient.getActivityForEntity(
        entityRef.targetId,
        entityRef.targetVersionNumber!,
        accessToken,
      )
        .then(activity => {
          const activityNodeProps = {
            type: NodeType.ACTIVITY,
            data: activity,
          }
          const newNodes: Node[] = [...allNodes]
          const newEdges: Edge[] = [...allEdges]

          const entityNodeProps = {
            type: NodeType.ENTITY,
            data: entityRef,
          }
          newNodes.push(getProvenanceNode(activityNodeProps))
          newEdges.push(getProvenanceEdge(activityNodeProps, entityNodeProps))
          // go through Activity.used array to add these nodes/edges
          if (activity.used) {
            const usedNodesProps = activity.used.map((usedItem: Used) => {
              if (usedItem.concreteType == USED_ENTITY_CONCRETE_TYPE_VALUE) {
                const usedEntityItem = usedItem as UsedEntity
                const newEntityNodeProps = {
                  type: NodeType.ENTITY,
                  data: usedEntityItem.reference,
                }
                const foundRef = newNodes.find(node => {
                  return node.id === getNodeId(newEntityNodeProps)
                })
                if (foundRef === undefined) {
                  return newEntityNodeProps
                } else {
                  return undefined
                }
              } else {
                // UsedURL
                const usedUrlItem = usedItem as UsedURL
                return {
                  type: NodeType.EXTERNAL,
                  data: usedUrlItem,
                }
              }
            })
            usedNodesProps.forEach(usedNodeProps => {
              if (usedNodeProps) {
                newNodes.push(getProvenanceNode(usedNodeProps))
                newEdges.push(
                  getProvenanceEdge(usedNodeProps, activityNodeProps),
                )

                // also create expand nodes for all used entity nodes
                if (usedNodeProps.type === NodeType.ENTITY) {
                  const expandNodeProps = {
                    type: NodeType.EXPAND,
                    data: {
                      entityReference: usedNodeProps.data as Reference,
                    },
                  }
                  newNodes.push(getProvenanceNode(expandNodeProps))
                  newEdges.push(
                    getProvenanceEdge(expandNodeProps, usedNodeProps),
                  )
                }
              }
            })
          }
          setTempNodes(newNodes)
          setTempEdges(newEdges)
        })
        .catch(e => {
          // if not found, remove associated expand node (and edge that connects to the expand node)
          // TODO:
        })
    },
    [accessToken],
  )

  useEffect(() => {
    if (clickedNode && clickedNode.className == NodeType.EXPAND) {
      if (clickedNode.data.props) {
        const expandNodeProps = clickedNode.data
          .props as ExpandGraphNodeLabelProps
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
      }
      setClickedNode(undefined)
    }
  }, [clickedNode, tempNodes, tempEdges, onExpandEntity])

  useEffect(() => {
    if (tempNodes.length == 1) {
      onExpandEntity(rootNodeEntityRef, tempNodes, tempEdges)
    }
  }, [rootNodeEntityRef, tempEdges, tempNodes, onExpandEntity])

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
        {/* <MiniMap /> */}
        <Controls />
      </ReactFlow>
    </div>
  )
}
