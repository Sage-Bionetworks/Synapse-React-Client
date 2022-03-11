import * as React from 'react'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const LockIcon = (props:SvgIconProps) => {
  return (
    <SvgIcon {...props} height={49} viewBox='0 0 36 49'>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.0393 12.5492V19.089H26.0397H30.5554V12.5492C30.5554 5.62965 24.8774 0 17.8984 0V4.47765C22.3876 4.47765 26.0393 8.09818 26.0393 12.5492Z" fill="#5C94B9"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.75828 19.0891V12.5493C9.75828 8.09841 13.4101 4.47777 17.899 4.47777V0C10.9202 0 5.24219 5.62965 5.24219 12.5492V19.0889H5.24255H9.75828V19.0891Z" fill="#5C94B9"/>
      <path d="M18 48.4558C27.9411 48.4558 36 40.7282 36 31.1956C36 21.663 27.9411 13.9353 18 13.9353C8.05888 13.9353 0 21.663 0 31.1956C0 40.7282 8.05888 48.4558 18 48.4558Z" fill="white"/>
      <path d="M35.5 31.0681C35.5 40.305 27.685 47.8284 18 47.8284C8.31503 47.8284 0.5 40.305 0.5 31.0681C0.5 21.8313 8.31503 14.3079 18 14.3079C27.685 14.3079 35.5 21.8313 35.5 31.0681Z" fill="#5C94B9" fillOpacity="0.1" stroke="#5C94B9"/>
      <path d="M18.0004 36.4929C16.5086 36.4929 15.2881 35.2723 15.2881 33.7805V28.3559C15.2881 26.8641 16.5086 25.6436 18.0004 25.6436C19.4922 25.6436 20.7127 26.8641 20.7127 28.3559V33.7805C20.7127 35.2723 19.4922 36.4929 18.0004 36.4929Z" fill="white" stroke="#5C94B9" strokeWidth="2"/>
    </SvgIcon>
  )
}