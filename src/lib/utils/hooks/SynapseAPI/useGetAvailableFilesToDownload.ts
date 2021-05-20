import { useContext } from 'react'
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { SynapseContext } from '../../SynapseContext'
import { DownloadListQueryResponse } from '../../synapseTypes/DownloadListV2/DownloadListQueryResponse'
import { AvailableFilesRequest, Sort } from '../../synapseTypes/DownloadListV2/QueryRequestDetails'
import { AvailableFilesResponse } from '../../synapseTypes/DownloadListV2/QueryResponseDetails'

export function useGetAvailableFilesToDownload(
  request: AvailableFilesRequest,
  options?: UseQueryOptions<
    DownloadListQueryResponse,
    SynapseClientError,
    DownloadListQueryResponse
  >,
) {
  const { accessToken } = useContext(SynapseContext)
  return useQuery<DownloadListQueryResponse, SynapseClientError>(
    ['downloadlistv2', accessToken, request],
    () => SynapseClient.getAvailableFilesToDownload(request, accessToken),
    options,
  )
}

export function useGetAvailableFilesToDownloadInfinite(
  sort?: Sort,
  options?: UseInfiniteQueryOptions<
  DownloadListQueryResponse,
    SynapseClientError,
    DownloadListQueryResponse
  >,
) {
  const { accessToken } = useContext(SynapseContext)
  const request:AvailableFilesRequest = {
    concreteType: 'org.sagebionetworks.repo.model.download.AvailableFilesRequest',
  }
  if (sort) {
    request.sort = [sort]
  }
  return useInfiniteQuery<DownloadListQueryResponse, SynapseClientError>(
    ['downloadlistv2', request],
    async context => {
      return await SynapseClient.getAvailableFilesToDownload(
        { ...request, nextPageToken: context.pageParam },
        accessToken,
      )
    },
    {
      ...options,
      getNextPageParam: page => (page.reponseDetails as AvailableFilesResponse).nextPageToken,
    },
  )
}
