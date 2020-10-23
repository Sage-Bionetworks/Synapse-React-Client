import React from 'react'
import { GoalsDataProps } from './Goals'
import QueryCount from '../../../containers/QueryCount'

export default function GoalsDesktop({
  asset,
  link,
  summary,
  countSql,
  title,
  token,
}: GoalsDataProps) {
  return (
    <div className="Goals__Card">
      <div
        className="Goals__Card__header"
        style={{ background: `url('${asset}')` }}
      >
        <p>
          <span className="Goals__Card__header__title"> {title} </span>
          {countSql && <span className="Goals__Card__header__count">
            <QueryCount
              parens={false}
              sql={countSql}
              token={token}
              name=""
            />
          </span>}
        </p>
      </div>
      <div className="Goals__Card__summary">
        <p> {summary} </p>
        <p>
          <a className="Goals__Card__summary__link" href={link}>
            EXPLORE
          </a>
        </p>
      </div>
    </div>
  )
}
