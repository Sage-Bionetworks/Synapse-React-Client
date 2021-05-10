import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { DownloadListQueryResponse } from '../../synapseTypes/DownloadListV2/DownloadListQueryResponse'
import { AvailableFilesRequest, Sort } from '../../synapseTypes/DownloadListV2/QueryRequestDetails'
import { AvailableFilesResponse } from '../../synapseTypes/DownloadListV2/QueryResponseDetails'

export function useGetAvailableFilesToDownload(
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
    () => SynapseClient.getAvailableFilesToDownload(request, token),
    options,
  )
}

export function useGetAvailableFilesToDownloadInfinite(
  token: string,
  sort: Sort,
  options?: UseInfiniteQueryOptions<
  DownloadListQueryResponse,
    SynapseClientError,
    DownloadListQueryResponse
  >,
) {
  const request:AvailableFilesRequest = {
    concreteType: 'org.sagebionetworks.repo.model.download.AvailableFilesRequest',
    sort: [sort]
  }
  return useInfiniteQuery<DownloadListQueryResponse, SynapseClientError>(
    ['downloadlistv2', request],
    async context => {
      return await SynapseClient.getAvailableFilesToDownload(
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
