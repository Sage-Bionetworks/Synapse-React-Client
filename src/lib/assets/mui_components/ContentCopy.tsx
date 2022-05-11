import * as React from 'react'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'

const ContentCopy = (props: SvgIconProps) => {
  const { fill, style } = props
  return (
    <SvgIcon style={style} className="Content-Copy-Icon">
      <path d="M8 7h11v14H8z" opacity=".3"></path>
      <path
        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
        fill={fill}
      ></path>
    </SvgIcon>
  )
}

export default ContentCopy
