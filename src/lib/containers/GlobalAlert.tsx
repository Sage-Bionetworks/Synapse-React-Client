import React from 'react'
import {
  Button,
  Alert,
  AlertProps,
} from 'react-bootstrap'
import {
  InfoOutlined,
  ErrorOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  Clear  
} from '@material-ui/icons'

export interface GlobalAlertProps extends AlertProps {
  title?: string
  description?: string
  primaryButtonText?: string
  onPrimaryButtonClick?: () => void
  secondaryButtonText?: string
  onSecondaryButtonClick?: () => void
  onClose?: () => void
}

function getIcon(variant?: string) {
  switch (variant) {
    case 'warning':
      return <WarningOutlined fontSize={'large'}></WarningOutlined>
    case 'info':
      return <InfoOutlined fontSize={'large'}></InfoOutlined>
    case 'danger':
      return <ErrorOutlined fontSize={'large'} ></ErrorOutlined>
    case 'success':
      return <CheckCircleOutlined fontSize={'large'}></CheckCircleOutlined>
    default: return <></>
  }
}

/**
 * Nav bar item, displayed when files have been added to the Download Cart.
 * This must be configured with the URL of a page dedicated to showing the Download Cart.
 */
function GlobalAlert(props: GlobalAlertProps) {
  const iconContent = getIcon(props.variant)
  return <Alert
    variant={props.variant}
    show={true}
    dismissible={false}
    transition={props.transition}
    className="GlobalAlert bootstrap-4-backport"
  >
    <div className="gridContainer">
      <span className="iconArea">
        {iconContent}
      </span>
      <span className="messageArea">
        <div><strong>{props.title}</strong></div>
        {props.description}
      </span>
      {props.secondaryButtonText && props.onSecondaryButtonClick && (
        <a
          className="secondaryButton"
          target="_blank"
          rel="noopener noreferrer"
          onClick={props.onSecondaryButtonClick}
        >
          {' '}
          <u> {props.secondaryButtonText} </u>
        </a>
      )}
      {props.primaryButtonText && props.onPrimaryButtonClick && (
        <Button className="primaryButton" onClick={props.onPrimaryButtonClick}>{props.primaryButtonText}</Button>
      )}
      {props.onClose && <a className="closeAlert" onClick={props.onClose}>
        <Clear fontSize={'large'}/>
      </a>}
    </div>
  </Alert>
}

export default GlobalAlert
