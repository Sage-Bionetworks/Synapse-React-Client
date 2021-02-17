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
    return icons.map((el:any) => {
      const iconConfig = iconConfigs[el] //  iconConfigs['other']
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