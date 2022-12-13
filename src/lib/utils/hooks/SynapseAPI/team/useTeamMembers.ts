import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { PaginatedResults } from '../../../synapseTypes'
import { TeamMember } from '../../../synapseTypes/TeamMember'
import { ACT_TEAM_ID } from '../../../SynapseConstants'
import { useGetCurrentUserProfile } from '../user'

export function useGetTeamMembers(
  teamId: string | number,
  options?: UseQueryOptions<PaginatedResults<TeamMember>, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()

  return useQuery<PaginatedResults<TeamMember>, SynapseClientError>(
    ['team', teamId, 'membersList'],
    () => SynapseClient.getTeamMembers(accessToken, teamId, '', 50, 0),
    options,
  )
}

export function useGetIsUserMemberOfTeam(
  teamId: string,
  userId: string,
  options?: UseQueryOptions<TeamMember | null, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()

  return useQuery<TeamMember | null, SynapseClientError>(
    ['team', teamId, 'member', userId],
    () => SynapseClient.getIsUserMemberOfTeam(teamId, userId, accessToken),
    options,
  )
}

export function useIsCurrentUserACTMember() {
  const { accessToken } = useSynapseContext()
  const { data: currentProfile } = useGetCurrentUserProfile()
  return useQuery<TeamMember | null, SynapseClientError>(
    ['isCurrentUserActMember'],
    () => {
      return SynapseClient.getIsUserMemberOfTeam(
        ACT_TEAM_ID.toString(),
        currentProfile?.ownerId ?? '',
        accessToken,
      )
    },
    {
      enabled: !!currentProfile,
    },
  )
}
