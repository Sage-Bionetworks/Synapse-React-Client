import * as React from 'react'
import UserCard from '../UserCard'
import IconSvg from '../IconSvg'
import moment from 'moment'
import { ShowMore } from './utils'

export type ObservationCardProps = {
  data?: any
  schema?: any
}

/**
 * Specialized Observation Card, initially implemented for the NF portal.
 * Expects the following columns: submitterName, submitterUserId, time, timeUnits, text, and tag.
 */
export const ObservationCard: React.FunctionComponent<ObservationCardProps> = ({
  data,
  schema
}: ObservationCardProps) => {

  const submitterName = data[schema.submitterName]
  const submitterUserId = data[schema.submitterUserId]
  const time = data[schema.time]
  const timeUnits = data[schema.timeUnits]
  const text = data[schema.text]
  const tag = data[schema.tag]
  moment.relativeTimeThreshold('d', 24)
  moment.relativeTimeThreshold('h', 24)
  return (
    <div className="SRC-portalCard SRC-typeObservation">
        <div className="submitter">
          {!submitterUserId && (
            <div>{submitterName}</div>
          )}
          {submitterUserId && (
            <UserCard
              size={'SMALL USER CARD'}
              ownerId={submitterUserId}
            />
          )}
        </div>
        {time && <div className="time">
          <IconSvg
            options={{
              icon: 'time'
            }}
          />
          {/* // bug, still rounds (losing precision!) <span>{moment.duration(time, timeUnits).humanize({s:60, m:60, h:24, d:7, w:4})}</span> */}
          <span>{time} {timeUnits}</span>
        </div>}
        <div className="text">
          <ShowMore summary={text} />
        </div>
        <div className="tags">
          {tag && <span className="SRC-tag">{tag}</span>}
        </div>
      </div>
  )
}
