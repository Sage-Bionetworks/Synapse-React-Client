import React from 'react'

export default function GraphLoader() {
  return (
    <div className={`graphLoader`}>
      <img
        alt={'sage bionetworks logo'}
        src="https://s3.amazonaws.com/static.synapse.org/sage-bionetworks-logo.svg"
      />
      <div className={`graphLoaderText`}>Generating chart, please wait...</div>
    </div>
  )
}
