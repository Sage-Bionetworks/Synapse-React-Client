import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
import {
  AvailableFilesRequest,
  Sort,
} from '../../synapseTypes/DownloadListV2/QueryRequestDetails'
import { AvailableFilesResponse } from '../../synapseTypes/DownloadListV2/QueryResponseDetails'

export function useGetAvailableFilesToDownload(
  request: AvailableFilesRequest,
  options?: UseQueryOptions<
    AvailableFilesResponse,
    SynapseClientError,
    AvailableFilesResponse
  >,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<AvailableFilesResponse, SynapseClientError>(
    ['downloadlistv2availablefiles', accessToken, request],
    () => SynapseClient.getAvailableFilesToDownload(request, accessToken),
    options,
  )
}

export function useGetAvailableFilesToDownloadInfinite(
  sort?: Sort,
  options?: UseInfiniteQueryOptions<
    AvailableFilesResponse,
    SynapseClientError,
    AvailableFilesResponse
  >,
) {
  const { accessToken } = useSynapseContext()
  const request: AvailableFilesRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.download.AvailableFilesRequest',
  }
  if (sort) {
    request.sort = [sort]
  }
  return useInfiniteQuery<AvailableFilesResponse, SynapseClientError>(
    ['downloadlistv2availablefiles', request],
    async context => {
      return SynapseClient.getAvailableFilesToDownload(
        { ...request, nextPageToken: context.pageParam },
        accessToken,
      )
    },
    {
      ...options,
      getNextPageParam: page =>
        page.nextPageToken,
    },
  )
}
