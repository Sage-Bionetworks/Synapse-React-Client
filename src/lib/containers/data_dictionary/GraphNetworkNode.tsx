import React from 'react'
import { VIEW_TYPES } from './constants'
import { GraphNodeData } from './types/IDataDictionaryTypes'

interface GraphNetworkNodeProps {
  node: GraphNodeData
}

export default function GraphNetworkNode({
  node: { id, label, onNodeClick, viewType },
}: GraphNetworkNodeProps) {
  const radius = 10
  const textSize = 14
  const color: string =
    viewType === VIEW_TYPES.REQUIRES_COMPONENT ? `darkorange` : `green`

  return (
    <>
      <circle fill={color} r={radius} onClick={onNodeClick(id)} />
      <g style={{ fontSize: `${textSize}px` }}>
        <text x={radius + 7} y={radius / 2}>
          {label}
        </text>
      </g>
    </>
  )
}
