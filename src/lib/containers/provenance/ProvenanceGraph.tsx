/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useMemo } from 'react'
import ReactFlow, {
  Controls,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer'
import {
  getLayoutedElements,
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

  // keep track of all references to detect and avoid cycles in the graph
  const [allReferences, setAllReferences] = React.useState<Reference[]>([])

  const onExpandEntity = (entityRef: Reference) => {
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
        const newAllReferences = [...allReferences]
        const newNodes: Node[] = [...tempNodes]
        const newEdges: Edge[] = [...tempEdges]
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
              if (!allReferences.includes(usedEntityItem.reference)) {
                newAllReferences.push(usedEntityItem.reference)
                return {
                  type: NodeType.ENTITY,
                  data: usedEntityItem.reference,
                }
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
              newEdges.push(getProvenanceEdge(usedNodeProps, activityNodeProps))

              // also create expand nodes for all used entity nodes
              if (usedNodeProps.type === NodeType.ENTITY) {
                const expandNodeProps = {
                  type: NodeType.EXPAND,
                  data: {
                    entityReference: usedNodeProps.data as Reference,
                    onExpandEntity,
                  },
                }
                newNodes.push(getProvenanceNode(expandNodeProps))
                newEdges.push(getProvenanceEdge(expandNodeProps, usedNodeProps))
              }
            }
          })
        }
        setTempNodes(newNodes)
        setTempEdges(newEdges)
        setAllReferences(newAllReferences)
      })
      .catch(e => {
        // if not found, remove associated expand node (and edge that connects to the expand node)
      })
  }

  if (allReferences.length == 0) {
    onExpandEntity(rootNodeEntityRef)
  }

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
