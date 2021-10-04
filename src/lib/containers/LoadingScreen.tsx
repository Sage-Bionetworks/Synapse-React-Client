import { LinearProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import Typography from '../utils/typography/Typography'

const loadingScreen = (
  <div className="bar-loader">
    <LinearProgress
      classes={{
        colorPrimary: 'bar-background-color',
        barColorPrimary: 'bar-color',
      }}
    />
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

type BlockingLoaderProps = {
  show: boolean
}
export const BlockingLoader: React.FC<BlockingLoaderProps> = ({ show }) => {
  useEffect(() => {
    document.body.style.cursor = 'wait'
    return () => {
      document.body.style.cursor = 'default'
    }
  }, [])

  return (
    <Modal
      className="bootstrap-4-backport BlockingLoader"
      animation={false}
      show={show}
      size="sm"
      centered={true}
      onHide={() => {}}
    >
      <div className="SpinnerContainer">
        <SynapseSpinner size={40}></SynapseSpinner>
        <Typography variant="headline3">Loading...</Typography>
      </div>
    </Modal>
  )
}

export default loadingScreen
