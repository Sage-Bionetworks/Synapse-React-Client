import React, { useEffect } from 'react'
import { Button, Alert, AlertProps } from 'react-bootstrap'
import {
  InfoTwoTone,
  ErrorTwoTone,
  CheckCircleTwoTone,
  Clear,
} from '@material-ui/icons'
import Typography from '../utils/typography/Typography'
import ReactTooltip from 'react-tooltip'
import { rebuildTooltip } from '../utils/functions/TooltipUtils'

export type AlertButtonConfig = {
  text: string
  isDisabled?: boolean
  tooltipText?: string
} & (
  | // "onClick" or "href", but not both
  {
      onClick?:
        | ((e?: React.MouseEvent<HTMLElement, MouseEvent>) => void)
        | (() => void)
    }
  | { href?: string }
)

const FULL_WIDTH_ALERT_TOOLTIP_ID = 'FullWidthAlertTooltip'

export interface FullWidthAlertProps extends AlertProps {
  variant: string
  title?: string
  description?: string
  primaryButtonConfig?: AlertButtonConfig
  secondaryButtonConfig?: AlertButtonConfig
  onClose?: () => void
  autoCloseAfterDelayInSeconds?: number
  isGlobal?: boolean
}

function getIcon(variant?: string) {
  switch (variant) {
    case 'warning':
      return <ErrorTwoTone className="text-warning" fontSize={'large'} />
    case 'info':
      return <InfoTwoTone className="text-info" fontSize={'large'} />
    case 'danger':
      return <ErrorTwoTone className="text-danger" fontSize={'large'} />
    case 'success':
      return <CheckCircleTwoTone className="text-success" fontSize={'large'} />
    default:
      return <></>
  }
}

function ButtonFromConfig(props: {
  config?: AlertButtonConfig
  className: string
  variant: string
}) {
  const { config, variant, className } = props
  if (config && ('onClick' in config || 'href' in config)) {
    return (
      <span // See https://github.com/wwayne/react-tooltip/issues/304
        className={className}
        data-tip={config.tooltipText}
        data-for={FULL_WIDTH_ALERT_TOOLTIP_ID}
        data-tip-disable={false}
      >
        <Button
          variant={variant}
          disabled={config.isDisabled}
          onClick={e => {
            if ('onClick' in config) {
              e.preventDefault()
              config.onClick!(e)
            } else if ('href' in config) {
              e.preventDefault()
              window.open(config.href, '_blank', 'noopener')
            }
          }}
        >
          {config.text}
        </Button>
      </span>
    )
  }
  return null
}

/**
 * Nav bar item, displayed when files have been added to the Download Cart.
 * This must be configured with the URL of a page dedicated to showing the Download Cart.
 */
function FullWidthAlert(props: FullWidthAlertProps) {
  const {
    title,
    description,
    primaryButtonConfig,
    secondaryButtonConfig,
    show,
    onClose,
    autoCloseAfterDelayInSeconds,
    variant = 'info',
    transition,
    isGlobal = true,
  } = props
  const iconContent = getIcon(variant)

  const hasActions = primaryButtonConfig || secondaryButtonConfig

  useEffect(() => {
    rebuildTooltip()
  }, [primaryButtonConfig, secondaryButtonConfig])

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
      <ReactTooltip
        id={FULL_WIDTH_ALERT_TOOLTIP_ID}
        delayShow={300}
        effect="solid"
      />
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
        <ButtonFromConfig
          config={secondaryButtonConfig}
          variant="tertiary"
          className="secondaryButton"
        />
        <ButtonFromConfig
          config={primaryButtonConfig}
          variant="primary"
          className="primaryButton"
        />
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
