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
  image: IconDefinition | CustomImageProps
  callbackFn: Function
  tooltipText: string
  cssClass?: string
  idForToolTip: string
  isDropdownToggle?: boolean
}

export const ImageButtonWithTooltip: FunctionComponent<ImageButtonWithTooltipProps> = ({
  image,
  idForToolTip,
  callbackFn,
  tooltipText,
  cssClass,
  isDropdownToggle,
}) => {
  var buttonImage = <></>
  if ('svgImg' in image) {
    buttonImage = <img src={image.svgImg} alt={image.altText} />
  } else {
    buttonImage = <FontAwesomeIcon size="1x" color="white" icon={image} />
  }

  const button = isDropdownToggle ? (
    <Dropdown.Toggle
      data-for={idForToolTip}
      data-tip={tooltipText}
      id={idForToolTip}
      variant={'light'}
    >
      {buttonImage}
    </Dropdown.Toggle>
  ) : (
    <button
      style={{ padding: '0 5px 0 5px' }}
      tabIndex={0}
      id={idForToolTip}
      data-for={idForToolTip}
      data-tip={tooltipText}
      className={`SRC-primary-background-color-hover SRC-hand-cursor ${cssClass}`}
      onKeyPress={() => callbackFn()}
      onClick={() => callbackFn()}
      aria-label={tooltipText}
    >
      {buttonImage}
    </button>
  )

  return (
    <>
      {button}
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
