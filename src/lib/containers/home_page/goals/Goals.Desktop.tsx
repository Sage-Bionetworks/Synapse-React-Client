import React from 'react'
import { GoalsDataProps } from './Goals'
import QueryCount from '../../../containers/QueryCount'
import { Button } from 'react-bootstrap'

export default function GoalsDesktop({
  asset,
  link,
  summary,
  countSql,
  title,
}: GoalsDataProps) {
  return (
    <div className="Goals__Card bootstrap-4-backport">
      <div
        className="Goals__Card__header"
        style={{ background: `url('${asset}')` }}
      >
        <p>
          <span className="Goals__Card__header__title"> {title} </span>
          {countSql && (
            <span className="Goals__Card__header__count">
              <QueryCount parens={false} sql={countSql} name="" />
            </span>
          )}
        </p>
      </div>
      <div className="Goals__Card__summary">
        <p> {summary} </p>
        <Button
          className="pill Goals__Card__summary__link"
          variant="secondary"
          href={link}
        >
          EXPLORE
        </Button>
      </div>
    </div>
  )
}
