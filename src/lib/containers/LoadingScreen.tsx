import { LinearProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Typography from '../utils/typography/Typography'
import '../style/components/_spinner.scss'

const loadingScreen = (
  <div className="bar-loader">
    <LinearProgress
      variant='determinate'
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

export type BlockingLoaderProps = {
  show: boolean
  currentEntities?: number
  totalEntities?: number
  onCancel?: () => void
}
export const BlockingLoader: React.FC<BlockingLoaderProps> = ({ show, currentEntities, onCancel, totalEntities }) => {
  useEffect(() => {
    document.body.style.cursor = show ? 'wait' : 'default'
    return () => {
      document.body.style.cursor = 'default'
    }
  }, [show])
  const barLoader = (
    <>
      <div className="bar-loader">
        <LinearProgress
          variant='determinate'
          classes={{
            colorPrimary: 'bar-background-color',
            barColorPrimary: 'bar-color',
          }}
          value={(currentEntities! / totalEntities!)*100}

        />
      </div>
      {
        currentEntities && 
        <>
          <Typography variant="headline3">Fetching selected items</Typography>
          <Typography variant='hintText'>{currentEntities} of {totalEntities}</Typography>
        </>
      }
    </>
  )
  return (
    <Modal
      className="bootstrap-4-backport BlockingLoader"
      backdrop={false}
      animation={false}
      show={show}
      size="sm"
      centered={true}
      onHide={() => {}}
    >
      <div className="SpinnerContainer">
      {totalEntities?(
        barLoader
      ) : (
        <>
          <SynapseSpinner size={40}/>
          {currentEntities && <Typography variant="headline3">Fetching {currentEntities}</Typography>}
        </>
      )
    }
    {onCancel && <Button variant='default' onClick={onCancel}>Cancel</Button>}
      </div>
    </Modal>
  )
}

export default loadingScreen
