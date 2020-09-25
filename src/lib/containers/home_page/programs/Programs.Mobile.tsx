import React from 'react'
import { ProgramsDataProps } from './Programs'
import ExpandableContent from '../ExpandableContent'
import { Icon } from '../../../../lib/containers/row_renderers/utils'

export default function ({
  link,
  summary,
  title,
  iconValue,
  iconOptions,
  exploreLink,
}: ProgramsDataProps) {
  const titleElement = (
    <div className="Programs__Mobile__Header">
      <Icon type={iconValue} iconOptions={iconOptions} />
      <span className="Programs__Mobile__Header__Title"> {title} </span>
    </div>
  )
  const content = (
    <div className="Programs__Mobile__Content">
      <p>{summary}</p>
      <a href={exploreLink}>
          <button
            className="btn homepage-button"
          >
            EXPLORE
          </button>
      </a>
    </div>
  )
  return <ExpandableContent title={titleElement} content={content} />
}
