import React from 'react'
import { EntityNodeLabel, EntityNodeLabelProps } from './EntityNodeLabel'

export enum NodeType {
  ENTITY,
  EXTERNAL,
  ACTIVITY,
}

type ProvenanceNodeNodeLabelProps = EntityNodeLabelProps
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
      nodeLabel = <EntityNodeLabel {...data} />
      break
    case NodeType.EXTERNAL:
      // TODO: Add external
      break
    case NodeType.ACTIVITY:
      // TODO: Add activity
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
