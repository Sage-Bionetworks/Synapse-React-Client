import { unCamelCase } from 'lib/utils/functions/unCamelCase'
import React, { ReactElement, useState } from 'react'
import { GraphNodeData } from './types/IDataSchemaTypes'

interface GraphNetworkNodeProps {
  node: GraphNodeData
  nodeRadius: number
}

export default function GraphNetworkNode({
  node: { attribute, id, label, type, onNodeClick, nodeColor },
  nodeRadius,
}: GraphNetworkNodeProps): ReactElement {
  const [hoverClass, setHoverClass] = useState('mouseOffNode')
  const radius = id !== 'hiddenRoot' ? nodeRadius : 0
  const nodeDisplay = unCamelCase(attribute || label)

  return (
    <g
      className={`entity ${hoverClass}`}
      onClick={id !== 'hiddenRoot' ? onNodeClick(id) : undefined}
      onMouseEnter={
        id !== 'hiddenRoot' ? () => setHoverClass('mouseOnNode') : undefined
      }
      onMouseLeave={
        id !== 'hiddenRoot' ? () => setHoverClass('mouseOffNode') : undefined
      }
      pointerEvents={id === 'hiddenRoot' ? 'none' : undefined}
      opacity={id === 'hiddenRoot' ? 0 : 1}
    >
      {type.includes('schema:DataType') ? (
        <Square nodeColor={nodeColor} radius={radius} />
      ) : type.includes('rdf:Property') ? (
        <Hexagon nodeColor={nodeColor} radius={radius} />
      ) : (
        <Circle nodeColor={nodeColor} radius={radius} />
      )}

      {id !== 'hiddenRoot' && (
        <foreignObject
          x={-Math.abs(radius - 5)}
          y={-Math.abs(radius - 5)}
          width={radius * 2 - 10}
          height={radius * 2 - 10}
          className={`shape${
            type.includes('schema:DataType')
              ? ` square`
              : type.includes('rdf:Property')
              ? ` hexagon`
              : ``
          }`}
        >
          <div title={nodeDisplay} className={`text-entity`}>
            <span style={{ borderColor: `${nodeColor}` }}>{nodeDisplay}</span>
          </div>
        </foreignObject>
      )}
    </g>
  )
}

interface ShapeProps {
  nodeColor: string
  radius: number
}

function Circle({ nodeColor, radius }: ShapeProps): ReactElement {
  return <circle fill={nodeColor} r={radius} className={`shape`} />
}

function Hexagon({ nodeColor, radius }: ShapeProps): ReactElement {
  const points = [0, 1, 2, 3, 4, 5, 6]
    .map((n, i) => {
      var angle_deg = 60 * i - 30
      var angle_rad = (Math.PI / 180) * angle_deg
      return [radius * Math.cos(angle_rad), radius * Math.sin(angle_rad)]
    })
    .map(p => p.join(','))
    .join(' ')

  return (
    <polygon
      fill={`white`}
      points={points}
      stroke={nodeColor}
      strokeWidth={2}
      className={`shape`}
    />
  )
}

function Square({ nodeColor, radius }: ShapeProps): ReactElement {
  const size = radius * 2
  return (
    <rect
      fill={nodeColor}
      className={`shape`}
      width={size}
      height={size}
      x={-Math.abs(radius)}
      y={-Math.abs(radius)}
    />
  )
}
