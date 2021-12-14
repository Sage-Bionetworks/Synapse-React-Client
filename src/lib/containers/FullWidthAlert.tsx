import React, { useEffect } from 'react'
import { Button, Alert, AlertProps } from 'react-bootstrap'
import {
  InfoOutlined,
  ErrorOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  Clear,
} from '@material-ui/icons'
import Typography from '../utils/typography/Typography'

export interface FullWidthAlertProps extends AlertProps {
  variant: string
  title?: string
  description?: string
  primaryButtonText?: string
  onPrimaryButtonClick?: () => void
  secondaryButtonText?: string
  onSecondaryButtonClick?: (() => void) | string
  onClose?: () => void
  autoCloseAfterDelayInSeconds?: number
  isGlobal?: boolean
}

function getIcon(variant?: string) {
  switch (variant) {
    case 'warning':
      return <WarningOutlined className="text-warning" fontSize={'large'} />
    case 'info':
      return <InfoOutlined className="text-info" fontSize={'large'} />
    case 'danger':
      return <ErrorOutlined className="text-danger" fontSize={'large'} />
    case 'success':
      return <CheckCircleOutlined className="text-success" fontSize={'large'} />
    default:
      return <></>
  }
}

/**
 * Nav bar item, displayed when files have been added to the Download Cart.
 * This must be configured with the URL of a page dedicated to showing the Download Cart.
 */
function FullWidthAlert(props: FullWidthAlertProps) {
  const {
    title,
    description,
    secondaryButtonText,
    onSecondaryButtonClick,
    primaryButtonText,
    onPrimaryButtonClick,
    show,
    onClose,
    autoCloseAfterDelayInSeconds,
    variant = 'info',
    transition,
    isGlobal = true,
  } = props
  const iconContent = getIcon(variant)

  const hasActions =
    (primaryButtonText && onPrimaryButtonClick) ||
    (secondaryButtonText && onSecondaryButtonClick)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (onClose && autoCloseAfterDelayInSeconds) {
      timer = setTimeout(onClose, autoCloseAfterDelayInSeconds * 1000)
    }
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [onClose, autoCloseAfterDelayInSeconds])
  const additionalAlertVariantClass = variant ? `alert-${variant}` : ''
  return (
    <Alert
      variant={variant}
      show={show}
      dismissible={false}
      transition={transition}
      className={`FullWidthAlert bootstrap-4-backport ${
        isGlobal ? 'global' : ''
      } ${additionalAlertVariantClass}`}
    >
      <div
        className={`gridContainer ${hasActions ? '' : 'noActions'} ${
          onClose ? 'hasCloseButton' : ''
        }`}
      >
        <span className="iconArea">{iconContent}</span>
        <span className="messageArea">
          <Typography variant="headline3">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </span>
        {secondaryButtonText && onSecondaryButtonClick && (
          <a
            className="secondaryButton"
            target="_blank"
            rel="noopener noreferrer"
            onClick={
              typeof onSecondaryButtonClick === 'function'
                ? e => {
                    e.preventDefault()
                    onSecondaryButtonClick()
                  }
                : undefined
            }
            href={
              typeof onSecondaryButtonClick === 'string'
                ? onSecondaryButtonClick
                : '#'
            }
          >
            {' '}
            {secondaryButtonText}
          </a>
        )}
        {primaryButtonText && onPrimaryButtonClick && (
          <Button
            className="primaryButton"
            variant="secondary"
            onClick={onPrimaryButtonClick}
          >
            {primaryButtonText}
          </Button>
        )}
        {onClose && (
          <button className="closeAlert" onClick={onClose}>
            <Clear fontSize={'large'} />
          </button>
        )}
      </div>
    </Alert>
  )
}

export default FullWidthAlert
