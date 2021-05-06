import UserCard from '../UserCard'
import { SynapseConstants } from '../../utils'
import React from 'react'

export type CreatedOnByUserDivProps = {
  userId: string
  date: Date
  accessToken: string
  utc: boolean
}

const dateFormatOptionLocal = { timeZoneName: 'short' }
const dateFormatOptionUTC = { timeZone: 'UTC', timeZoneName: 'short' }

export const CreatedOnByUserDiv: React.FunctionComponent<CreatedOnByUserDivProps> = ({
  userId,
  date,
  accessToken,
  utc,
}) => {
  return (
    <div className="created-on">
      <span>
        Created on{' '}
        {date
          .toLocaleDateString(
            undefined,
            utc ? dateFormatOptionUTC : dateFormatOptionLocal,
          )
          .replace(',', '')}{' '}
        by{' '}
      </span>
      <UserCard
        token={accessToken}
        size={SynapseConstants.SMALL_USER_CARD}
        ownerId={userId}
      />
    </div>
  )
}
