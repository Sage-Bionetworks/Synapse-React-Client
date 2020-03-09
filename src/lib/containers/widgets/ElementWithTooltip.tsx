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

export type TooltipVisualProps = {
  delayShow: number
  place: 'top' | 'right' | 'bottom' | 'left'
  type: 'dark' | 'success' | 'warning' | 'error' | 'info' | 'light'
  effect: 'float' | 'solid'
  border?: boolean
}

/*****************************************
 *  The control needs to either have a child element or needs to have an image supplied
 *  If the child element is supplied the control renders the child applying additional proiperties
 *  If the image is supplied the control renders a clickable image
 *  If there are no children and callback Fn is not supplied it is assumed to be a a dropdown trigger
 */

type ElementWithTooltipProps = {
  image?: IconDefinition | CustomImageProps
  imageColor?: string
  idForToolTip: string
  tooltipText: string
  callbackFn?: Function
  className?: string
  tooltipVisualProps?: TooltipVisualProps
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

export const ElementWithTooltip: FunctionComponent<ElementWithTooltipProps> = ({
  image,
  idForToolTip,
  callbackFn,
  tooltipText,
  className,
  imageColor,
  tooltipVisualProps = { place: 'top', type: 'dark', effect: 'solid' },
  children,
}) => {
  const { place, type, effect, border } = tooltipVisualProps
  const tooltipTriggerContents = image
    ? getTooltipTriggerContents(image, imageColor)
    : children || <></>

  //if there is no callbackFn - assume it's a toggle

  let tooltipTrigger: JSX.Element
  if (!children) {
    tooltipTrigger = callbackFn ? (
      <button
        style={{ padding: '0 5px 0 5px' }}
        tabIndex={0}
        id={idForToolTip}
        data-for={idForToolTip}
        data-tip={tooltipText}
        className={`SRC-hand-cursor ${
          image ? 'SRC-primary-background-color-hover' : ''
        } ${className}`}
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
  } else {
    const outerChild = children as JSX.Element
    tooltipTrigger = React.cloneElement(outerChild, {
      className: `${outerChild.props.className} SRC-hand-cursor`,
      id: idForToolTip,
      ['data-for']: idForToolTip,
      ['data-tip']: tooltipText,
    })
  }

  return (
    <>
      {tooltipTrigger}
      <ReactTooltip
        delayShow={TOOLTIP_DELAY_SHOW}
        place={place}
        type={type}
        effect={effect}
        border={border ? true : false}
        id={idForToolTip}
      />
    </>
  )
}
