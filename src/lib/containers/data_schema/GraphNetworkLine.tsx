import React from 'react'
import { GraphNodeLinkData } from './types/IDataSchemaTypes'
interface GraphNetworkLineProps {
  link: GraphNodeLinkData
}

export default function GraphNetworkLine({
  link: { source, linkColor },
  ...props
}: GraphNetworkLineProps) {
  return (
    <g>
      <defs>
        <marker
          id={`${source}_arrowhead`}
          markerWidth="5"
          markerHeight="3.5"
          refX="16.25"
          refY="1.75"
          orient="auto"
          stroke={linkColor}
          fill={linkColor}
        >
          <polygon points="-1.5 0, 5 1.75, -1.5 3.5" />
        </marker>
      </defs>
      <line
        {...props}
        stroke={linkColor}
        strokeWidth={3}
        strokeOpacity={source === 'hiddenRoot' ? 0 : 1}
        markerEnd={
          source != 'hiddenRoot' ? `url(#${source}_arrowhead)` : undefined
        }
      />
    </g>
  )
}
