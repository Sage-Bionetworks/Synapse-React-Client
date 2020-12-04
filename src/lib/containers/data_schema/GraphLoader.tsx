import React from 'react'

export default function GraphLoader() {
  return (
    <div className={`graphLoader`}>
      <img
        alt={'Sage Bionetworks logo'}
        src="https://s3.amazonaws.com/static.synapse.org/sage-bionetworks-logo.svg"
      />
      <p className={`graphLoaderText`}>{`Generating chart, please wait...`}</p>
    </div>
  )
}
