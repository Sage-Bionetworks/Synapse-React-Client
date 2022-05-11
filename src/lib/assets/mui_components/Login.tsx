import { SvgIcon, SvgIconProps } from '@material-ui/core'
import * as React from 'react'

const Login = (props: SvgIconProps) => {
  const { fill, style } = props
  return (
    <SvgIcon style={style} className={'login'}>
      <path
        d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z"
        fill={fill}
      />
    </SvgIcon>
  )
}

export default Login
