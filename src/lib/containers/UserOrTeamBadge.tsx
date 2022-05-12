import { Skeleton } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import { SynapseClient } from '../utils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import { useSynapseContext } from '../utils/SynapseContext'
import { UserGroupHeader } from '../utils/synapseTypes'
import IconSvg from './IconSvg'
import UserCard from './UserCard'

type UserOrTeamBadgeProps = {
  principalId: string | number
}

export default function UserOrTeamBadge(props: UserOrTeamBadgeProps) {
  const { principalId } = props

  const { accessToken } = useSynapseContext()
  const [userGroupHeader, setUserGroupHeader] = useState<
    UserGroupHeader | undefined
  >()
  useEffect(() => {
    async function getUserGroupHeader() {
      const headers = await SynapseClient.getGroupHeadersBatch(
        [`${principalId}`],
        accessToken,
      )
      setUserGroupHeader(headers.children[0])
    }
    getUserGroupHeader()
  }, [accessToken, principalId])

  if (userGroupHeader === undefined) {
    return <Skeleton width={150} />
  } else if (userGroupHeader.isIndividual) {
    return <UserCard ownerId={`${principalId}`} size="SMALL USER CARD" />
  } else {
    return (
      <span>
        <IconSvg icon="team" />
        <a
          style={{ marginLeft: '5px' }}
          href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Team:${principalId}`}
        >
          {userGroupHeader.userName}
        </a>
      </span>
    )
  }
}
