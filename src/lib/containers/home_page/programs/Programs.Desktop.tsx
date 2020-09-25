import React from 'react'
import { ProgramsDataProps } from './Programs'
import { Icon } from '../../../../lib/containers/row_renderers/utils'

export default function ProgramsDesktop({
  link,
  summary,
  title,
  color,
  iconType,
  iconOptions, 
}: ProgramsDataProps) {
  return (
    <div className="Programs__Card">
      <div
        className="Programs__Card__header"
        style={{backgroundColor: color.replace(')', ',.05)')}}
      >
        <p>
          <Icon type={iconType} iconOptions={iconOptions} />
          <span className="Programs__Card__header__title"> {title} </span>
        </p>
      </div>
      <div className="Programs__Card__summary">
        <p> {summary} </p>
        <p>
          <a className="Programs__Card__summary__link" href={link}>
            EXPLORE
          </a>
        </p>
      </div>
    </div>
  )
}
