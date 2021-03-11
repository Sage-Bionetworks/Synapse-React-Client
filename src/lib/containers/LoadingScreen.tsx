import React from 'react'
import { BarLoader } from 'react-spinners'

const loadingScreen = (
  <div className="bar-loader">
    <BarLoader color="#878787" loading={true} height={5} />
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
