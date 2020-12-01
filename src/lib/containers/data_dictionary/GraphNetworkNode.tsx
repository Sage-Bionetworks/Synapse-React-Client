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
  const radius = 10
  const isPropertyType = type.includes('rdf:Property')

  return (
    <g className={`entity ${hoverClass}`}>
      <circle
        fill={isPropertyType ? 'white' : nodeColor}
        opacity={id === 'hiddenRoot' ? 0 : 1}
        stroke={isPropertyType ? nodeColor : undefined}
        strokeWidth={isPropertyType ? 2 : undefined}
        r={isPropertyType ? radius - 2 : radius}
        className={`shape`}
        onClick={onNodeClick(id)}
        onMouseEnter={() => setHoverClass('mouseOnNode')}
        onMouseLeave={() => setHoverClass('mouseOffNode')}
      />
      <g className={`text-entity`}>
        <text x={radius + 7} y={radius / 2}>
          {unCamelCase(label)}
        </text>
      </g>
    </g>
  )
}
