import React from 'react'
import { VIEW_TYPES } from './constants'

interface GraphNetworkLineProps {
  link: { viewType: string }
}

export default function GraphNetworkLine({
  link: { viewType },
  ...props
}: GraphNetworkLineProps) {
  const color: string =
    viewType === VIEW_TYPES.REQUIRES_COMPONENT ? 'green' : 'darkorange'
  return <line {...props} stroke={color} />
}
