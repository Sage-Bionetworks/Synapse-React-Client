import React from 'react'
import { GoalsDataProps } from './Goals'
import ExpandableContent from '../ExpandableContent'
import QueryCount from '../../../containers/QueryCount'

export default function ({
  link,
  summary,
  tableId,
  title,
  token,
}: GoalsDataProps) {
  const titleElement = (
    <div className="Goals__Mobile__Header">
      {tableId && <span className="Goals__Mobile__Header__Count">
        <QueryCount
          parens={false}
          sql={`SELECT * FROM ${tableId}`}
          token={token}
          name=""
        />
      </span>}
      <span className="Goals__Mobile__Header__Title"> {title} </span>
    </div>
  )
  const content = (
    <div className="Goals__Mobile__Content">
      <p>{summary}</p>
      <a className="Goals__Mobile__Content__Link" href={link}>
        EXPLORE
      </a>
    </div>
  )
  return <ExpandableContent title={titleElement} content={content} />
}
