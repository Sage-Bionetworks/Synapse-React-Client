import React from 'react'
import IconSvg, { IconSvgOptions } from './IconSvg'

export type IconListProps = {
  iconConfigs: {
    [index:string]: IconSvgOptions
  }
  iconNames: string
  showTooltip?: boolean
}

const IconList: React.FunctionComponent<IconListProps> = props => {

  const { iconConfigs, iconNames} = props
  const icons = JSON.parse(iconNames)
  let noMatch: boolean = false

  const buildIconList = () => {
    const unique = Array.from(new Set(icons))
    return unique.map((el:any) => {
      const iconConfig = iconConfigs[el]
      // if this data type value doesn't have a matching icon, we use the "other" icon
      if (!iconConfig) {
        noMatch = true
        return
      } else {
        return <IconSvg key={el} options={iconConfig} />
      }
    })
  }

  return(
    <span className={"icon-list bg-circle"}>
      { buildIconList() }
      { noMatch ? <IconSvg options={iconConfigs['other']} /> : <></>}
    </span>
  )
}

export default IconList