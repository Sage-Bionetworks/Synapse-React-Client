import { unCamelCase } from 'lib/utils/functions/unCamelCase'
import React, { useState } from 'react'
import { GraphNodeData } from './types/IDataSchemaTypes'

interface GraphNetworkNodeProps {
  node: GraphNodeData
}

export default function GraphNetworkNode({
  node: { id, label, type, onNodeClick, nodeColor },
}: GraphNetworkNodeProps) {
  const [hoverClass, setHoverClass] = useState('mouseOffNode')
  const radius = 30
  const isPropertyType = type.includes('rdf:Property')
  const nodeLabel = unCamelCase(label)

  return (
    <g
      className={`entity ${hoverClass}`}
      onClick={onNodeClick(id)}
      onMouseEnter={() => setHoverClass('mouseOnNode')}
      onMouseLeave={() => setHoverClass('mouseOffNode')}
      pointerEvents={id === 'hiddenRoot' ? 'none' : undefined}
      opacity={id === 'hiddenRoot' ? 0 : 1}
    >
      <circle
        fill={isPropertyType ? 'white' : nodeColor}
        stroke={isPropertyType ? nodeColor : undefined}
        strokeWidth={isPropertyType ? 2 : undefined}
        r={isPropertyType ? radius - 2 : radius}
        className={`shape`}
      />
      <foreignObject
        x={-Math.abs(radius - 5)}
        y={-Math.abs(radius - 5)}
        width={radius * 2 - 10}
        height={radius * 2 - 10}
        className={`shape`}
      >
        <div title={nodeLabel} className={`text-entity`}>
          <span style={{ borderColor: `${nodeColor}` }}>{nodeLabel}</span>
        </div>
      </foreignObject>
    </g>
  )
}
