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
  const nodeLabel = unCamelCase(label)

  return (
    <g
      className={`entity ${hoverClass}`}
      onClick={onNodeClick(id)}
      onMouseEnter={() => setHoverClass('mouseOnNode')}
      onMouseLeave={() => setHoverClass('mouseOffNode')}
    >
      <circle
        fill={isPropertyType ? 'white' : nodeColor}
        opacity={id === 'hiddenRoot' ? 0 : 1}
        stroke={isPropertyType ? nodeColor : undefined}
        strokeWidth={isPropertyType ? 2 : undefined}
        r={isPropertyType ? radius - 2 : radius}
        className={`shape`}
        pointerEvents={id === 'hiddenRoot' ? 'none' : undefined}
      />
      <foreignObject x={-8} y={-8} width={16} height={16} className={`shape`}>
        <div title={nodeLabel} className={`text-entity`}>
          {nodeLabel}
        </div>
      </foreignObject>
    </g>
  )
}
