import React from 'react'
import { ProgramsDataProps } from './Programs'
import ExpandableContent from '../ExpandableContent'
import { Icon } from '../../../containers/row_renderers/utils'

export default function ({
  link,
  summary,
  title,
  color,
  iconValue,
  iconOptions, 
  exploreLink,
}: ProgramsDataProps) {
  const titleElement = (
    <div className="Programs__Mobile__Header">
      <Icon type={iconValue} iconOptions={iconOptions}/>
      <span className="Programs__Mobile__Header__Title"> {title} </span>
    </div>
  )
  const content = (
    <div className="Programs__Mobile__Content">
      <p className="Programs__Card__header__info__link">
        <a
        style={{borderBottom: `1px solid ${color}`}}
        href={link}>
          Visit website
        </a>
      </p>
      <p>{summary}</p>
      <p>
        <a href={exploreLink} className="homepage-button-link">
            EXPLORE
        </a>
      </p>
    </div>
  )
  return <ExpandableContent title={titleElement} content={content} />
}
