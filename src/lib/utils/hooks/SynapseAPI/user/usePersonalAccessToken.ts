import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  QueryFunctionContext,
  QueryKey,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { AccessTokenRecordList } from '../../../synapseTypes/AccessToken/AccessTokenRecord'

export function useGetPersonalAccessTokensInfinite(
  options?: UseInfiniteQueryOptions<AccessTokenRecordList, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()

  return useInfiniteQuery<AccessTokenRecordList, SynapseClientError>(
    ['getPersonalAccessTokens'],
    async (context: QueryFunctionContext<QueryKey, string | undefined>) => {
      return await SynapseClient.getPersonalAccessTokenRecords(
        accessToken,
        context.pageParam,
      )
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}
