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
  const textSize = 14
  const radius = 10
  const color: string =
    viewType === VIEW_TYPES.REQUIRES_COMPONENT ? `darkorange` : `green`

  return (
    <>
      <circle
        fill={color}
        r={radius}
        className={hoverClass}
        onClick={onNodeClick(id)}
        onMouseEnter={() => setHoverClass('mouseOnNode')}
        onMouseLeave={() => setHoverClass('mouseOffNode')}
      />
      <g style={{ fontSize: `${textSize}px` }}>
        <text x={radius + 7} y={radius / 2}>
          {label}
        </text>
      </g>
    </>
  )
}
