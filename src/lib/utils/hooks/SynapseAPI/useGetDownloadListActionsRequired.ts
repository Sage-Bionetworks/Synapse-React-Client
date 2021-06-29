import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
import { ActionRequiredRequest } from '../../synapseTypes/DownloadListV2/QueryRequestDetails'
import { ActionRequiredResponse } from '../../synapseTypes/DownloadListV2/QueryResponseDetails'

export function useGetDownloadListActionsRequired(
  options?: UseQueryOptions<
    ActionRequiredResponse,
    SynapseClientError,
    ActionRequiredResponse
  >,
) {
  const { accessToken } = useSynapseContext()
  const request: ActionRequiredRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.download.ActionRequiredRequest',
  }

  return useQuery<ActionRequiredResponse, SynapseClientError>(
    ['downloadlistv2actionsrequired', accessToken],
    () => SynapseClient.getDownloadListActionsRequired(request, accessToken),
    options,
  )
}

export function useGetDownloadListActionsRequiredInfinite(
  options?: UseInfiniteQueryOptions<
    ActionRequiredResponse,
    SynapseClientError,
    ActionRequiredResponse
  >,
) {
  const { accessToken } = useSynapseContext()
  const request: ActionRequiredRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.download.ActionRequiredRequest',
  }
  return useInfiniteQuery<ActionRequiredResponse, SynapseClientError>(
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
        page.nextPageToken,
    },
  )
}