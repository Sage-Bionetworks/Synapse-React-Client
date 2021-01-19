import React from 'react'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'

export type IconSvgOptions = {
  icon: string
  color: string
  size: string
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

const IconSvg: React.FunctionComponent<IconSvgProps> = props => {
  const { icon, color, size } = props.options

  const StyledSVGIcon = styled(ReactSVG)`
    svg {
      fill: ${color};
      height: ${IconSize[size]};
      width: auto;
      path {
        fill: ${color};
      }
    }
    span {
      height: ${IconSize[size]};
    }
  `

  const errorHandler = (error: Error|null) => {
    if (error) {
      console.error(error)
      return
    }
  }

  return (
    <StyledSVGIcon
      afterInjection={errorHandler}
      wrapper="span"
      src={`${IconPath[icon]}`} />
  )
}

export default IconSvg