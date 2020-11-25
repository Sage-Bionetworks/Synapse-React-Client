import React, { useState } from 'react'
import { VIEW_TYPES } from './constants'
import { GraphNodeData } from './types/IDataDictionaryTypes'

interface GraphNetworkNodeProps {
  node: GraphNodeData
}

export default function GraphNetworkNode({
  node: { id, label, onNodeClick, viewType },
}: GraphNetworkNodeProps) {
  const [hoverClass, setHoverClass] = useState('mouseOffNode')
  const radius = 10
  const color: string =
    viewType === VIEW_TYPES.REQUIRES_COMPONENT ? `darkorange` : `green`

  return (
    <g className={`entity ${hoverClass}`}>
      <circle
        className={`shape`}
        fill={color}
        r={radius}
        onClick={onNodeClick(id)}
        onMouseEnter={() => setHoverClass('mouseOnNode')}
        onMouseLeave={() => setHoverClass('mouseOffNode')}
      />
      <g className={`text-entity`}>
        <text x={radius + 7} y={radius / 2}>
          {label}
        </text>
      </g>
    </g>
  )
}
