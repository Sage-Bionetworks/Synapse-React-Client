import { Skeleton } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import { SynapseClient } from '../utils'
import { SMALL_USER_CARD } from '../utils/SynapseConstants'
import { useSynapseContext } from '../utils/SynapseContext'
import { UserGroupHeader } from '../utils/synapseTypes'
import TeamBadge from './TeamBadge'
import UserCard from './UserCard'

type UserOrTeamBadgeProps = {
  /* The principal ID of the user or team. Required if userGroupHeader is undefined. */
  principalId?: string | number
  /* The userGroupHeader of the user or team. Required if principalId is undefined. */
  userGroupHeader?: UserGroupHeader
  showFullName?: boolean
  disableHref?: boolean
}

export default function UserOrTeamBadge(props: UserOrTeamBadgeProps) {
  let isMounted = true
  let principalId = props.principalId
  const {
    disableHref,
    showFullName,
    userGroupHeader: providedUserGroupHeader,
  } = props

  if (principalId == null) {
    principalId = providedUserGroupHeader?.ownerId
  }

  const { accessToken } = useSynapseContext()
  const [userGroupHeader, setUserGroupHeader] = useState<
    UserGroupHeader | undefined
  >(providedUserGroupHeader)

  useEffect(() => {
    async function getUserGroupHeader() {
      const headers = await SynapseClient.getGroupHeadersBatch(
        [principalId!.toString()],
        accessToken,
      )
      if (isMounted) {
        setUserGroupHeader(headers.children[0])
      }
    }
    if (principalId && userGroupHeader == undefined) {
      getUserGroupHeader()
    }
    return () => {
      isMounted = false
    }
  }, [accessToken, principalId, userGroupHeader])

  if (principalId == null && providedUserGroupHeader == null) {
    console.error(
      'Expected one of principalId or userGroupHeader to be defined but both were null or undefined',
    )
    return <></>
  } else if (userGroupHeader === undefined) {
    return <Skeleton width={150} />
  } else if (userGroupHeader.isIndividual) {
    return (
      <UserCard
        ownerId={principalId!.toString()}
        size={SMALL_USER_CARD}
        disableLink={disableHref}
        showFullName={showFullName}
      />
    )
  } else {
    return (
      <TeamBadge
        teamId={principalId!}
        teamName={userGroupHeader.userName}
        disableHref={disableHref}
      />
    )
  }
}
