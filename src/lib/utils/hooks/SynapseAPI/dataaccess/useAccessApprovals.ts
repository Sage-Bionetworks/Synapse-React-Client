import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import {
  AccessApprovalSearchRequest,
  AccessApprovalSearchResponse,
} from '../../../synapseTypes'

export function useSearchAccessApprovalsInfinite(
  params: AccessApprovalSearchRequest,
  options?: UseInfiniteQueryOptions<
    AccessApprovalSearchResponse,
    SynapseClientError
  >,
) {
  const { accessToken } = useSynapseContext()

  return useInfiniteQuery<AccessApprovalSearchResponse, SynapseClientError>(
    ['accessApprovalSearch', params],
    async context => {
      return await SynapseClient.searchAccessApprovals(
        {
          ...params,
          nextPageToken: context.pageParam,
        },
        accessToken,
      )
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}
