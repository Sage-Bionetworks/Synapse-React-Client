import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { OAuthClientList } from '../../../synapseTypes/OAuthClient'

export function useGetOAuthClientInfinite(
  options?: UseInfiniteQueryOptions<OAuthClientList, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()

  return useInfiniteQuery<OAuthClientList, SynapseClientError>(
    ['oAuthClient', accessToken],
    async context =>
      await SynapseClient.getOAuth2(accessToken!, context.pageParam),
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}
