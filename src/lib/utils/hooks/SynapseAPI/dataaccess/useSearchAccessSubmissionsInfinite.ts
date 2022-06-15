import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClient'
import { useSynapseContext } from '../../../SynapseContext'
import {
  SubmissionSearchRequest,
  SubmissionSearchResponse,
} from '../../../synapseTypes/AccessSubmission'

export function useSearchAccessSubmissionsInfinite(
  params: SubmissionSearchRequest,
  options?: UseInfiniteQueryOptions<
    SubmissionSearchResponse,
    SynapseClientError
  >,
) {
  const { accessToken } = useSynapseContext()

  return useInfiniteQuery<SubmissionSearchResponse, SynapseClientError>(
    ['accessSubmissionSearch', params],
    async context => {
      return await SynapseClient.searchAccessSubmission(
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
