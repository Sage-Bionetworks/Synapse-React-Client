import React from 'react'
import { Edge, MarkerType } from 'react-flow-renderer'
import { ActivityNodeLabel, ActivityNodeLabelProps } from './ActivityNodeLabel'
import { EntityNodeLabel, EntityNodeLabelProps } from './EntityNodeLabel'
import {
  ExpandGraphNodeLabel,
  ExpandGraphNodeLabelProps,
} from './ExpandGraphNodeLabel'
import {
  ExternalGraphNodeLabel,
  ExternalGraphNodeLabelProps,
} from './ExternalGraphNodeLabel'

export enum NodeType {
  ENTITY,
  EXTERNAL,
  ACTIVITY,
  EXPAND_NODE,
}

type ProvenanceNodeNodeLabelProps =
  | EntityNodeLabelProps
  | ActivityNodeLabelProps
  | ExternalGraphNodeLabelProps
  | ExpandGraphNodeLabelProps
type ProvenanceNodeProps = {
  type: NodeType
  data: ProvenanceNodeNodeLabelProps
}

export const getProvenanceNode = (props: ProvenanceNodeProps) => {
  const { type, data } = props
  let nodeLabel: JSX.Element = <></>
  switch (type) {
    case NodeType.ENTITY:
      nodeLabel = <EntityNodeLabel {...(data as EntityNodeLabelProps)} />
      break
    case NodeType.EXTERNAL:
      nodeLabel = (
        <ExternalGraphNodeLabel {...(data as ExternalGraphNodeLabelProps)} />
      )
      break
    case NodeType.ACTIVITY:
      nodeLabel = <ActivityNodeLabel {...(data as ActivityNodeLabelProps)} />
      break
    case NodeType.EXPAND_NODE:
      nodeLabel = (
        <ExpandGraphNodeLabel {...(data as ExpandGraphNodeLabelProps)} />
      )
      break
    default:
      nodeLabel = <p>Unrecognized node type: {type}</p>
      break
  }
  return {
    id: getNodeId(props),
    position: { x: 100, y: 100 }, // hard coded, let graph layout library figure this out
    data: { label: nodeLabel },
    connectable: false,
    draggable: false,
  }
}

export const getProvenanceEdge = (
  node1Props: ProvenanceNodeProps,
  node2Props: ProvenanceNodeProps,
) => {
  const node1Id = getNodeId(node1Props)
  const node2Id = getNodeId(node2Props)
  return {
    id: `${node1Id}-${node2Id}`,
    source: node1Id,
    target: node2Id,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  }
}

export const getNodeId = (props: ProvenanceNodeProps) => {
  const { type, data } = props
  switch (type) {
    case NodeType.ENTITY:
      return `${(data as EntityNodeLabelProps).targetId}.${
        (data as EntityNodeLabelProps).targetVersionNumber
      }`
    case NodeType.EXTERNAL:
      return `${(data as ExternalGraphNodeLabelProps).url}`
    case NodeType.ACTIVITY:
      return `${(data as ActivityNodeLabelProps).id}`
    case NodeType.EXPAND_NODE:
      return `${(data as ExpandGraphNodeLabelProps).targetId}.${
        (data as ExpandGraphNodeLabelProps).targetVersionNumber
      }`
  }
}
