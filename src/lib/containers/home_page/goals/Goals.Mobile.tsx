import React from 'react'
import { GoalsDataProps } from './Goals'
import ExpandableContent from '../ExpandableContent'
import QueryCount from '../../../containers/QueryCount'
import { Button } from 'react-bootstrap'

export default function GoalsMobile({
  link,
  summary,
  countSql,
  title,
}: GoalsDataProps) {
  const titleElement = (
    <div className="Goals__Mobile__Header">
      {countSql && (
        <span className="Goals__Mobile__Header__Count">
          <QueryCount parens={false} query={{ sql: countSql }} />
        </span>
      )}
      <span className="Goals__Mobile__Header__Title"> {title} </span>
    </div>
  )
  const content = (
    <div className="Goals__Mobile__Content bootstrap-4-backport">
      <p>{summary}</p>
      <Button
        variant="secondary"
        className="pill Goals__Mobile__Content__Link"
        href={link}
      >
        EXPLORE
      </Button>
    </div>
  )
  return <ExpandableContent title={titleElement} content={content} />
}
