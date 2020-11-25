import { unCamelCase } from 'lib/utils/functions/unCamelCase'
import React, { useState } from 'react'
import { GraphNodeData } from './types/IDataDictionaryTypes'

interface GraphNetworkNodeProps {
  node: GraphNodeData
}

export default function GraphNetworkNode({
  node: { id, label, type, onNodeClick, nodeColor },
}: GraphNetworkNodeProps) {
  const [hoverClass, setHoverClass] = useState('mouseOffNode')
  const textSize = 14
  const radius = 10
  const isPropertyType = type.includes('rdf:Property')

  return (
    <>
      <circle
        fill={isPropertyType ? 'white' : nodeColor}
        stroke={isPropertyType ? nodeColor : undefined}
        strokeWidth={isPropertyType ? 2 : undefined}
        r={isPropertyType ? radius - 2 : radius}
        className={hoverClass}
        onClick={onNodeClick(id)}
        onMouseEnter={() => setHoverClass('mouseOnNode')}
        onMouseLeave={() => setHoverClass('mouseOffNode')}
      />
      <g style={{ fontSize: `${textSize}px` }}>
        <text x={radius + 7} y={radius / 2}>
          {unCamelCase(label)}
        </text>
      </g>
    </>
  )
}
