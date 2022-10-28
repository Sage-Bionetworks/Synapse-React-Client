import React from 'react'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'
import { Dropdown } from 'react-bootstrap'
import { Icon } from '../row_renderers/utils'
import IconSvg, { IconSvgOptions } from '../IconSvg'
import Tooltip from '../../utils/tooltip/Tooltip'

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

type ElementWithTooltipProps = React.PropsWithChildren<{
  image?: IconSvgOptions | CustomImageProps
  imageColor?: string
  tooltipText: string
  callbackFn?: () => void
  className?: string
  tooltipVisualProps?: Partial<TooltipVisualProps>
  darkTheme?: boolean
  size?: string
  icon?: string
}>

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

export const ElementWithTooltip = ({
  image,
  callbackFn,
  tooltipText,
  className = '',
  imageColor,
  tooltipVisualProps = { place: 'top' },
  children,
  darkTheme,
  size,
  icon,
}: ElementWithTooltipProps) => {
  const { place } = tooltipVisualProps
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
        className={`ElementWithTooltip SRC-hand-cursor SRC-grey-background-hover ${className} ${
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
        className={`ElementWithTooltip SRC-hand-cursor SRC-grey-background-hover ${className} ${
          darkTheme ? 'dark-theme' : ''
        } `}
        variant={'light'}
        aria-label={tooltipText}
      >
        {tooltipTriggerContents}
      </Dropdown.Toggle>
    )
  } else {
    tooltipTrigger = <div className="SRC-hand-cursor">{children}</div>
  }

  return (
    <Tooltip
      title={tooltipText}
      enterNextDelay={TOOLTIP_DELAY_SHOW}
      placement={place}
      data-testid="ElementTooltip"
    >
      {tooltipTrigger}
    </Tooltip>
  )
}
