import React from 'react'
import { SynapseConstants } from '../../../utils'
import { useGetUserGroupHeaderWithAlias } from '../../../utils/hooks/SynapseAPI'
import TeamBadge from '../../TeamBadge'
import UserCard from '../../UserCard'

export type MarkdownUserBadgeProps = {
  alias: string
}

export default function MarkdownUserBadge(props: MarkdownUserBadgeProps) {
  const { alias } = props
  const { data: userGroupheader } = useGetUserGroupHeaderWithAlias([alias])

  return (
    userGroupheader &&
    (userGroupheader[0].isIndividual ? (
      <UserCard
        ownerId={userGroupheader[0].ownerId}
        size={SynapseConstants.SMALL_USER_CARD}
      />
    ) : (
      <TeamBadge
        teamId={userGroupheader[0].ownerId}
        teamName={userGroupheader[0].userName}
      />
    ))
  )
}
