import React, { useEffect } from 'react'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'

export type IconSvgOptions = {
  icon: string
  color: string
  size: string
  padding?: 'left' | 'right'
  hoverEffect?: boolean  // not implement currently
}

export type IconSvgProps = {
  options: IconSvgOptions
}

const IconPath = {
  'data': '../src/lib/assets/icons/data.svg',
  'reload': '../src/lib/assets/icons/reload.svg',
  'checkMark': '../src/lib/assets/icons/check-mark.svg',
  'dataLocked': '../src/lib/assets/icons/data-locked.svg',
}

// Help standardize the sizing of icons
const IconSize = {
  'sm': '14px'
}

// Help standardize the left or right padding of icons
const IconPadding = {
  'sm': '7px'
}

const IconSvg: React.FunctionComponent<IconSvgProps> = props => {
  const { icon, color, size, padding } = props.options
  let mounted = true

  useEffect(() => {
    if (mounted) {
      //
    }
    return () => {
      mounted = false
    }
  }, [icon, color, size])

  const StyledSVGIcon = styled(ReactSVG)`
    svg {
      fill: ${color};
      height: ${IconSize[size]};
      padding: 0;
      padding-left: ${padding === 'left' ? IconPadding[size] : 0};
      padding-right: ${padding === 'right' ? IconPadding[size] : 0};
      width: auto;
      path {
        fill: ${color};
      }
    }
  `

  const errorHandler = (error: Error|null) => {
    if (error) {
      console.error(error)
      return
    }
  }

  return (
    <span data-svg={icon} className="styled-svg-wrapper">
      {
        IconPath[icon] !== undefined && <StyledSVGIcon
        afterInjection={errorHandler}
        wrapper="span"
        src={`${IconPath[icon]}`}/>
      }
    </span>
  )
}

export default IconSvg