import React from 'react'
import { ProgramsDataProps } from './Programs'
import ExpandableContent from '../ExpandableContent'
import { Icon } from '../../../../lib/containers/row_renderers/utils'

export default function ({
  link,
  summary,
  title,
  iconType,
  iconOptions,
}: ProgramsDataProps) {
  const titleElement = (
    <div className="Programs__Mobile__Header">
      <Icon type={iconType} iconOptions={iconOptions} />
      <span className="Programs__Mobile__Header__Title"> {title} </span>
    </div>
  )
  const content = (
    <div className="Programs__Mobile__Content">
      <p>{summary}</p>
      <a className="Programs__Mobile__Content__Link" href={link}>
        EXPLORE
      </a>
    </div>
  )
  return <ExpandableContent title={titleElement} content={content} />
}
