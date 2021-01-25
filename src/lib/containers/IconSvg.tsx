import React, { useEffect } from 'react'
import { ReactSVG } from 'react-svg'
import styled, { css } from 'styled-components'

export type IconSvgOptions = {
  icon: string
  color: string
  size: string
  padding?: 'left' | 'right'
  hoverEffect?: boolean  // not implement currently
}

export type IconSvgProps = {
  iconBasePath?: string
  options: IconSvgOptions
}

const defaultIconPath = '../src/lib/assets/icons/'
const IconPath = {
  'data': 'data.svg',
  'reload': 'reload.svg',
  'checkMark': 'check-mark.svg',
  'dataLocked': 'data-locked.svg',
}

// Help standardize the sizing of icons
const IconSize = {
  'sm': '14px'
}

// Help standardize the left or right padding of icons
const IconPadding = {
  'sm': '7px'
}

// styled component needs to be outside of the function component and render function
// to remove multiple render warning
const StyledSVGIcon = styled(ReactSVG)<IconSvgOptions>`
  svg {
    padding: 0;
    width: auto;
    ${({size, color, padding}) => {
      return css`
        fill: ${color};
        height: ${IconSize[size]};
        padding-left: ${padding === 'left' ? IconPadding[size] : 0};
        padding-right: ${padding === 'right' ? IconPadding[size] : 0};
        path {
          fill: ${color};
        }
      `
    }
  }
`

const IconSvg: React.FunctionComponent<IconSvgProps> = props => {
  const { iconBasePath, options} = props
  const { icon, color, size, padding } = options
  const iconPath = iconBasePath ? iconBasePath + IconPath[icon] : defaultIconPath + IconPath[icon]
  let mounted = true

  useEffect(() => {
    if (mounted) {
      //
    }
    return () => {
      mounted = false
    }
  }, [icon, color, size])

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
          src={`${iconPath}`}
          size={size}
          color={color}
          padding={padding}
          />
      }
    </span>
  )
}

export default IconSvg