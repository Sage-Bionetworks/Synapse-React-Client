import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { DownloadListQueryResponse } from '../../synapseTypes/DownloadListV2/DownloadListQueryResponse'
import { AvailableFilesRequest } from '../../synapseTypes/DownloadListV2/QueryRequestDetails'
import { AvailableFilesResponse } from '../../synapseTypes/DownloadListV2/QueryResponseDetails'

export function useGetDownloadListV2(
  token: string,
  request: AvailableFilesRequest,
  options?: UseQueryOptions<
    DownloadListQueryResponse,
    SynapseClientError,
    DownloadListQueryResponse
  >,
) {
  return useQuery<DownloadListQueryResponse, SynapseClientError>(
    ['downloadlistv2', token, request],
    () => SynapseClient.getDownloadListV2(request, token),
    options,
  )
}

export function useGetDownloadListV2Infinite(
  token: string,
  request: AvailableFilesRequest,
  options?: UseInfiniteQueryOptions<
  DownloadListQueryResponse,
    SynapseClientError,
    DownloadListQueryResponse
  >,
) {
  return useInfiniteQuery<DownloadListQueryResponse, SynapseClientError>(
    ['downloadlistv2', request],
    async context => {
      return await SynapseClient.getDownloadListV2(
        { ...request, nextPageToken: context.pageParam },
        token,
      )
    },
    {
      ...options,
      getNextPageParam: page => (page.reponseDetails as AvailableFilesResponse).nextPageToken,
    },
  )
}
