import { LinearProgress } from '@material-ui/core'
import React from 'react'

const loadingScreen = (
  <div className="bar-loader">
    <LinearProgress classes={{colorPrimary: 'bar-background-color', barColorPrimary: 'bar-color'}} />
  </div>
)

type SynapseSpinnerProps = {
  size?: number // the size in pixels. default 20
}

export const SynapseSpinner: React.FC<SynapseSpinnerProps> = ({
  size = 20,
}) => {
  return (
    <div
      className="spinner"
      style={{
        height: `${size}px`,
        width: `${size}px`,
        backgroundSize: `${size}px`,
      }}
    />
  )
}

export default loadingScreen
