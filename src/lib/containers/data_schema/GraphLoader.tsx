import React from 'react'
import { GraphNodeData } from './types/IDataSchemaTypes'
import { BarLoader } from 'react-spinners'

interface GraphLoaderProps {
  nodes: GraphNodeData[]
}

export default function GraphLoader({ nodes: nodes }: GraphLoaderProps) {
  const numNodes = nodes ? nodes.length - 1 : 0 // deduct hiddenRoot node from count.
  const loadingData = numNodes <= 0 || !numNodes ? 'chart' : `${numNodes} nodes`

  return (
    <div className={`graphLoader`}>
      <img
        alt={'Sage Bionetworks logo'}
        src="https://s3.amazonaws.com/static.synapse.org/sage-bionetworks-logo.svg"
      />
      <div className={`graphTextAndBar`}>
        <p
          className={`graphLoaderText`}
        >{`Generating ${loadingData}, please wait...`}</p>
        <div className={`barLoader`}>
          <BarLoader color="#878787" loading={true} height={5} />
        </div>
      </div>
    </div>
  )
}
