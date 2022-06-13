import React, { FunctionComponent } from 'react'
import ReactTooltip from 'react-tooltip'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'
import { Dropdown } from 'react-bootstrap'
import { Icon } from '../row_renderers/utils'
import IconSvg, { IconSvgOptions } from '../IconSvg'

type CustomImageProps = {
  svgImg: React.ComponentElement<any, any>
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
 *  If the child element is supplied the control renders the child applying additional properties
 *  If the image is supplied the control renders a clickable image
 *  If there are no children and callback Fn is not supplied it is assumed to be a a dropdown trigger
 */

type ElementWithTooltipProps = {
  image?: IconSvgOptions | CustomImageProps
  imageColor?: string
  idForToolTip: string
  tooltipText: string
  callbackFn?: () => void
  className?: string
  tooltipVisualProps?: TooltipVisualProps
  darkTheme?: boolean
  size?: string
  icon?: string
}

function getTooltipTriggerContents(
  image: IconSvgOptions | CustomImageProps,
  imageColor: string | undefined,
  size: IconSvgOptions['size'] | undefined,
): JSX.Element {
  if ('svgImg' in image) {
    return image.svgImg
  } else {
    return <IconSvg options={{ size, color: imageColor, ...image }} />
  }
}

export const ElementWithTooltip: FunctionComponent<ElementWithTooltipProps> = ({
  image,
  idForToolTip,
  callbackFn,
  tooltipText,
  className = '',
  imageColor,
  tooltipVisualProps = { place: 'top', type: 'dark', effect: 'solid' },
  children,
  darkTheme,
  size,
  icon,
}) => {
  const { place, type, effect, border } = tooltipVisualProps
  const iconComponent = icon ? <Icon type={icon}></Icon> : undefined
  const tooltipTriggerContents = iconComponent
    ? iconComponent
    : image
    ? getTooltipTriggerContents(image, imageColor, size)
    : children || <></>

  //if there is no callbackFn - assume it's a toggle

  let tooltipTrigger: JSX.Element
  if (!children) {
    tooltipTrigger = callbackFn ? (
      <button
        tabIndex={0}
        id={idForToolTip}
        data-for={idForToolTip}
        data-tip={tooltipText}
        className={`ElementWithTooltip SRC-hand-cursor SRC-primary-background-color-hover ${className} ${
          darkTheme ? 'dark-theme' : ''
        } `}
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
        className={`ElementWithTooltip SRC-hand-cursor SRC-primary-background-color-hover ${className} ${
          darkTheme ? 'dark-theme' : ''
        } `}
        variant={'light'}
        aria-label={tooltipText}
      >
        {tooltipTriggerContents}
      </Dropdown.Toggle>
    )
  } else {
    const outerChild = children as JSX.Element
    tooltipTrigger = React.cloneElement(outerChild, {
      className: `${outerChild.props.className} SRC-hand-cursor`,
      id: idForToolTip,
      'data-for': idForToolTip,
      'data-tip': tooltipText,
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
