import React from 'react'
import { GraphNodeLinkData } from './types/IDataSchemaTypes'
interface GraphNetworkLineProps {
  link: GraphNodeLinkData
}

export default function GraphNetworkLine({
  link: { linkColor, source, target },
  ...props
}: GraphNetworkLineProps) {
  const sourceId = typeof source === 'string' ? source : source.id
  const targetId = typeof target === 'string' ? target : target.id
  const markerId = `${sourceId}_${targetId}_arrowhead`

  return (
    <g>
      {sourceId !== 'hiddenRoot' && (
        <defs>
          <marker
            id={markerId}
            markerWidth={5}
            markerHeight={3.5}
            refX={16.25}
            refY={1.75}
            orient={`auto`}
            stroke={linkColor}
            fill={linkColor}
          >
            <polygon points={`-1.5 0, 5 1.75, -1.5 3.5`} />
          </marker>
        </defs>
      )}
      <line
        {...props}
        stroke={linkColor}
        strokeWidth={3}
        strokeOpacity={sourceId === 'hiddenRoot' ? 0 : 1}
        markerEnd={sourceId != 'hiddenRoot' ? `url(#${markerId})` : undefined}
      />
    </g>
  )
}
