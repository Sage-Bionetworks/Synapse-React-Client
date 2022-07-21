import React, { useEffect, useRef } from 'react'
import ReactFlow, { MiniMap, Controls, Node, Edge } from 'react-flow-renderer'

export type ProvenanceProps = {
  /** The entity (and version) whose provenance should be shown */
  entityId: string
  version: number
}

/**
 * Renders a form for editing an entity's annotations. The component also supports supplying just a schema ID,
 * but work to support annotation flows without an entity (i.e. before creating entities) is not yet complete.
 */
export const ProvenanceGraph = (props: ProvenanceProps) => {
  const { entityId, version } = props

  const [nodes, setNodes] = React.useState<Node<any>[]>([])
  const [edges, setEdges] = React.useState<Edge<any>[]>([])

  return (
    <div className="bootstrap-4-backport ProvenanceWidget">
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
      )
    </div>
  )
}
