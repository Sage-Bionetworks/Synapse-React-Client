import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClient'
import { useSynapseContext } from '../../../SynapseContext'
import {
  AccessControlList,
  AccessRequirement,
  WikiPageKey,
} from '../../../synapseTypes'
import {
  AccessRequirementSearchRequest,
  AccessRequirementSearchResponse,
} from '../../../synapseTypes/AccessRequirement/AccessRequirementSearch'

export default function useGetAccessRequirement<T extends AccessRequirement>(
  accessRequirementId: string | number,
  options?: UseQueryOptions<T, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()

  return useQuery<T, SynapseClientError>(
    ['accessRequirement', accessRequirementId],
    () =>
      SynapseClient.getAccessRequirementById<T>(
        accessToken,
        accessRequirementId,
      ),
    options,
  )
}

export function useGetAccessRequirementWikiPageKey(
  accessRequirementId: string,
  options?: UseQueryOptions<WikiPageKey, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<WikiPageKey, SynapseClientError>(
    ['accessRequirement', accessRequirementId, 'wikiPageKey'],
    () =>
      SynapseClient.getWikiPageKeyForAccessRequirement(
        accessToken,
        accessRequirementId,
      ),
    options,
  )
}

export function useGetAccessRequirementACL(
  accessRequirementId: string,
  options?: UseQueryOptions<AccessControlList | null, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<AccessControlList | null, SynapseClientError>(
    ['accessRequirement', accessRequirementId, 'acl'],
    () =>
      SynapseClient.getAccessRequirementAcl(accessToken, accessRequirementId),
    options,
  )
}

export function useSearchAccessRequirementsInfinite(
  params: Omit<AccessRequirementSearchRequest, 'nextPageToken'>,
  options?: UseInfiniteQueryOptions<
    AccessRequirementSearchResponse,
    SynapseClientError
  >,
) {
  const { accessToken } = useSynapseContext()
  return useInfiniteQuery<AccessRequirementSearchResponse, SynapseClientError>(
    ['accessRequirement', 'search', params],
    async context => {
      return await SynapseClient.searchAccessRequirements(accessToken, {
        ...params,
        nextPageToken: context.pageParam,
      })
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}
