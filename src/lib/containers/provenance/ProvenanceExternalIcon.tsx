import React from 'react'
import IconSvg, { Icon } from '../IconSvg'

export type ProvenanceExternalIconProps = {
  url: string
}

export const ProvenanceExternalIcon = (props: ProvenanceExternalIconProps) => {
  const { url } = props
  let icon: Icon = 'link'
  if (url.includes('github.com') || url.includes('githubusercontent.com')) {
    icon = 'github'
  }
  // else if (url.includes("genomespace.org")) {
  //   icon = 'genomespace'
  // }

  // return the default (File icon)
  return (
    <IconSvg
      options={{
        icon,
      }}
    />
  )
}
