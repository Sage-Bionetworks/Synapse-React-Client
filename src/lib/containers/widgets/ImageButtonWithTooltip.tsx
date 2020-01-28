import React, { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactTooltip from 'react-tooltip'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Dropdown } from 'react-bootstrap'

type CustomImageProps = {
  svgImg: string
  altText: string
}

type ImageButtonWithTooltipProps = {
  image?: IconDefinition | CustomImageProps
  imageColor?: string
  idForToolTip: string
  tooltipText: string
  callbackFn?: Function
  className?: string
}

function getTooltipTriggerContents(
  image: IconDefinition | CustomImageProps,
  imageColor?: string,
): JSX.Element {
  if ('svgImg' in image) {
    return <img src={image.svgImg} alt={image.altText} />
  } else {
    return (
      <FontAwesomeIcon size="1x" color={imageColor || 'white'} icon={image} />
    )
  }
}

export const ImageButtonWithTooltip: FunctionComponent<ImageButtonWithTooltipProps> = ({
  image,
  idForToolTip,
  callbackFn,
  tooltipText,
  className,
  imageColor,
  children,
}) => {
  const tooltipTriggerContents = image
    ? getTooltipTriggerContents(image, imageColor)
    : children || <></>

  //if there is no callbackFn - assume it's a toggle

  const tooltipTrigger = callbackFn ? (
   
    <button
      style={{ padding: '0 5px 0 5px' }}
      tabIndex={0}
      id={idForToolTip}
      data-for={idForToolTip}
      data-tip={tooltipText}
      className={`SRC-hand-cursor ${image ?
        'SRC-primary-background-color-hover': ''} ${className}`}
      onKeyPress={() => callbackFn()}
      onClick={() => callbackFn()}
      aria-label={tooltipText}
    >
      {tooltipTriggerContents}
    </button>
  ) : (
    <Dropdown.Toggle
      data-for={idForToolTip}
      data-tip={tooltipText}
      id={idForToolTip}
      variant={'light'}
    >
      {tooltipTriggerContents}
    </Dropdown.Toggle>
  )

  return (
    <>
      {tooltipTrigger}
      <ReactTooltip
        delayShow={TOOLTIP_DELAY_SHOW}
        place="top"
        type="dark"
        effect="solid"
        id={idForToolTip}
      />
    </>
  )
}
