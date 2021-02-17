import React, { useEffect } from 'react'
import {
  ArrowBackIos,
  ArrowForwardIos,
  Check,
  Cached,  
} from '@material-ui/icons'
import {
  Data,
  DataLocked,
} from '../assets/themed_icons'

export type IconSvgOptions = {
  icon: string
  color: string
  size?: string
  padding?: 'left' | 'right'
  hoverEffect?: boolean  // not implement currently
}

export type IconSvgProps = {
  options: IconSvgOptions
}

export type SVGStyleProps = {
  color?: string
  fontSize?: string
  verticalAlign?: string
}

const getIcon = (options:IconSvgOptions) => {
  const { icon, color } = options

  // Styles for svg imported from mui
  const muiSvgStyle:SVGStyleProps = {
    color: color,
    verticalAlign: 'middle',
  }
  // Styles for custom svg missing from mui
  const customSvgStyle:SVGStyleProps = {
    verticalAlign: 'middle',
  }

  switch (icon) {
    case 'arrowBack':
      return <ArrowBackIos style={muiSvgStyle} />
    case 'arrowForward':
      return <ArrowForwardIos style={muiSvgStyle} />  
    case 'check':
      return <Check style={muiSvgStyle}></Check>
    case 'data':
      return <Data fill={color} style={customSvgStyle}></Data>
    case 'dataLocked':
      return <DataLocked fill={color} style={customSvgStyle}></DataLocked>
    case 'reload':
      return <Cached style={muiSvgStyle}></Cached>
    default:
      return <></>
  }
}

const IconSvg: React.FunctionComponent<IconSvgProps> = props => {
  const { options } = props
  const { icon, color, padding } = options
  let mounted = true
  const wrapperCss = {
    padding: 0,
    paddingLeft: padding === 'left' ? "0.2rem" : "0",
    paddingRight: padding === 'right' ? "0.2rem" : "0",
  }

  useEffect(() => {
    if (mounted) {
      //
    }
    return () => {
      mounted = false
    }
  }, [icon, color])

  return (
    <span data-svg={icon} className="styled-svg-wrapper" style={wrapperCss}>
      { getIcon(options) }
    </span>
  )
}

export default IconSvg