import React from 'react'
import { ProgramsDataProps } from './Programs'
import { Icon } from '../../../containers/row_renderers/utils'

export default function ProgramsDesktop({
  link,
  summary,
  title,
  color,
  iconValue,
  iconOptions, 
  exploreLink,
}: ProgramsDataProps) {
  return (
    <div className="Programs__Card">
      <div
        className="Programs__Card__header"
        style={{backgroundColor: color.replace(')', ',.05)')}}
      >
        <div className="Programs__Card__header__icon">
          <Icon type={iconValue} iconOptions={iconOptions} />
        </div>
        <div className="Programs__Card__header__info">
          <span className="Programs__Card__header__info__title"> {title} </span>
          <p className="Programs__Card__header__info__link">
            <a
            style={{borderBottom: `1px solid ${color}`}}
            href={link}>
              Visit website
            </a>
          </p>
        </div>
        
      </div>
      <div className="Programs__Card__summary">
        <p> {summary} </p>
        <p>
          <a href={exploreLink} className="homepage-button-link">
              EXPLORE
          </a>
        </p>
      </div>
    </div>
  )
}
