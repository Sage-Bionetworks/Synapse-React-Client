import moment from 'moment'
import React, { useMemo } from 'react'
import { formatDate } from '../../utils/functions/DateFormatter'
import { useGetUserProfile } from '../../utils/hooks/SynapseAPI'
import { Activity } from '../../utils/synapseTypes/Provenance/Provenance'
import Tooltip from '../../utils/tooltip/Tooltip'
import Typography from '../../utils/typography/Typography'
import { UserCardSmall } from '../UserCardSmall'

export type ActivityNodeLabelProps = Activity
export const ActivityNodeLabel = (data: ActivityNodeLabelProps) => {
  const { data: userProfile } = useGetUserProfile(data.modifiedBy)
  const friendlyModifiedOn = formatDate(moment(data.modifiedOn))
  const { name, description } = data
  return useMemo(
    () => (
      <>
        {name && (
          <Tooltip title={name} placement="top" enterNextDelay={200}>
            <span>
              <Typography variant="smallText1" className="name">
                {name}
              </Typography>
            </span>
          </Tooltip>
        )}
        {description && (
          <Tooltip title={description} placement="top" enterNextDelay={200}>
            <span>
              <Typography variant="smallText1" className="description">
                {description}
              </Typography>
            </span>
          </Tooltip>
        )}
        {userProfile && <UserCardSmall userProfile={userProfile} />}
        <div>{friendlyModifiedOn}</div>
      </>
    ),
    [name, description, userProfile, friendlyModifiedOn],
  )
}
