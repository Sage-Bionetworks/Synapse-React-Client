/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Node,
  Edge,
  Position,
  ConnectionLineType,
} from 'react-flow-renderer'
import { getProvenanceNode, NodeType } from './ProvenanceUtils'
import dagre from 'dagre'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { UsedEntity } from '../../utils/synapseTypes/Provenance/Provenance'

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
  const { entityId, version, depth = 1 } = props

  const initialNodes: Node[] = [
    getProvenanceNode({
      id: '1',
      type: NodeType.ENTITY,
      data: { targetId: entityId, targetVersionNumber: version },
    }),
    getProvenanceNode({
      id: '2',
      type: NodeType.ACTIVITY,
      data: {
        id: '10006327',
        name: 'Copied file',
        etag: 'f9cfea64-71f2-4615-8836-044097e6b632',
        createdOn: '2018-07-18T21:18:49.287Z',
        modifiedOn: '2018-07-18T21:18:49.287Z',
        createdBy: '3323072',
        modifiedBy: '3323072',
        used: [
          {
            wasExecuted: false,
            concreteType:
              'org.sagebionetworks.repo.model.provenance.UsedEntity',
            reference: { targetId: 'syn11180450', targetVersionNumber: 4 },
          } as UsedEntity,
        ],
      },
    }),
  ]
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]
  const [nodes, setNodes] = React.useState<Node<any>[]>(initialNodes)
  const [edges, setEdges] = React.useState<Edge<any>[]>(initialEdges)
  const [layoutedNodes, setLayoutedNodes] = React.useState<Node<any>[]>([])
  const [layoutedEdges, setLayoutedEdges] = React.useState<Edge<any>[]>([])

  // layout
  const dagreGraph = new dagre.graphlib.Graph()
  const nodeWidth = 172
  const nodeHeight = 36
  dagreGraph.setDefaultEdgeLabel(() => ({}))

  const getLayoutedElements = (
    nodes: Node[],
    edges: Edge[],
    direction: string,
  ) => {
    const isHorizontal = direction === 'LR'
    dagreGraph.setGraph({ rankdir: direction })

    nodes.forEach(node => {
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
    })

    edges.forEach(edge => {
      dagreGraph.setEdge(edge.source, edge.target)
    })

    dagre.layout(dagreGraph)

    nodes.forEach(node => {
      const nodeWithPosition = dagreGraph.node(node.id)
      node.targetPosition = isHorizontal ? Position.Left : Position.Top
      node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom

      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      node.position = {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      }

      return node
    })

    return { nodes, edges }
  }

  useDeepCompareEffect(() => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      nodes,
      edges,
      'TB',
    )
    setLayoutedNodes(layoutedNodes)
    setLayoutedEdges(layoutedEdges)
  }, [nodes, edges])
  return (
    <div
      className="bootstrap-4-backport ProvenanceWidget"
      style={{ width: '100%', height: '200px' }}
    >
      <ReactFlow
        nodes={layoutedNodes}
        edges={layoutedEdges}
        // onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  )
}
