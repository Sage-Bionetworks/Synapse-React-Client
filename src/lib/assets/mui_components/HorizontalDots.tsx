import * as React from 'react'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const HorizontalDots = (props:SvgIconProps) => {
  const { fill, style } = props
  return (
    <SvgIcon style={style}>
      <circle cx="4.71456" cy="12.7146" r="1.71456" fill={fill}/>
      <circle cx="11.5728" cy="12.7146" r="1.71456" fill={fill}/>
      <circle cx="18.431" cy="12.7146" r="1.71456" fill={fill}/>
    </SvgIcon>
  )
}

export default HorizontalDots