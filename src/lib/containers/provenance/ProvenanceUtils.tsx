import React from 'react'
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
  id: string
  type: NodeType
  data: ProvenanceNodeNodeLabelProps
}

export const getProvenanceNode = (props: ProvenanceNodeProps) => {
  const { id, type, data } = props
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
    id,
    position: { x: 100, y: 100 }, // hard coded, let graph layout library figure this out
    data: { label: nodeLabel },
    connectable: false,
    draggable: false,
  }
}
