/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import ReactFlow, { MiniMap, Controls, Node, Edge } from 'react-flow-renderer'
import { getProvenanceNode, NodeType } from './ProvenanceUtils'
import dagre from 'dagre'

export type ProvenanceProps = {
  /** The entity (and version) whose provenance should be shown */
  entityId: string
  version: number
  depth: number
}

/**
 * Renders a form for editing an entity's annotations. The component also supports supplying just a schema ID,
 * but work to support annotation flows without an entity (i.e. before creating entities) is not yet complete.
 */
export const ProvenanceGraph = (props: ProvenanceProps) => {
  // const { entityId, version, depth = 1 } = props
  const initialNodes: Node[] = [
    getProvenanceNode({
      id: '1',
      type: NodeType.ENTITY,
      data: { targetId: 'syn13363290', targetVersionNumber: 9 },
    }),
    getProvenanceNode({
      id: '2',
      type: NodeType.ACTIVITY,
      data: {
        id: '12345',
        name: 'fake activity',
        description: 'activity description',
        etag: 'fake etag',
        createdOn: '12345',
        modifiedOn: '12345',
        createdBy: '10129484',
        modifiedBy: '10129484',
        used: [],
      },
    }),
  ]
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]
  const [nodes, setNodes] = React.useState<Node<any>[]>(initialNodes)
  const [edges, setEdges] = React.useState<Edge<any>[]>(initialEdges)

  return (
    <div
      className="bootstrap-4-backport ProvenanceWidget"
      style={{ width: '100%', height: '200px' }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        // onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  )
}
