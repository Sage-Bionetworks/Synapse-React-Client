import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
import { DownloadListQueryResponse } from '../../synapseTypes/DownloadListV2/DownloadListQueryResponse'
import { ActionRequiredRequest } from '../../synapseTypes/DownloadListV2/QueryRequestDetails'
import { ActionRequiredResponse } from '../../synapseTypes/DownloadListV2/QueryResponseDetails'

export function useGetDownloadListActionsRequired(
  options?: UseQueryOptions<
    DownloadListQueryResponse,
    SynapseClientError,
    DownloadListQueryResponse
  >,
) {
  const { accessToken } = useSynapseContext()
  const request: ActionRequiredRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.download.ActionRequiredRequest',
  }

  return useQuery<DownloadListQueryResponse, SynapseClientError>(
    ['downloadlistv2actionsrequired', accessToken],
    () => SynapseClient.getDownloadListActionsRequired(request, accessToken),
    options,
  )
}

export function useGetDownloadListActionsRequiredInfinite(
  options?: UseInfiniteQueryOptions<
    DownloadListQueryResponse,
    SynapseClientError,
    DownloadListQueryResponse
  >,
) {
  const { accessToken } = useSynapseContext()
  const request: ActionRequiredRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.download.ActionRequiredRequest',
  }
  return useInfiniteQuery<DownloadListQueryResponse, SynapseClientError>(
    ['downloadlistv2availablefiles', request],
    async context => {
      return await SynapseClient.getDownloadListActionsRequired(
        { ...request, nextPageToken: context.pageParam },
        accessToken,
      )
    },
    {
      ...options,
      getNextPageParam: page =>
        (page.responseDetails as ActionRequiredResponse).nextPageToken,
    },
  )
}