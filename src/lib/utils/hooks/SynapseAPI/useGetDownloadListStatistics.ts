import {
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
import { DownloadListQueryResponse } from '../../synapseTypes/DownloadListV2/DownloadListQueryResponse'

export function useGetDownloadListStatistics(
  options?: UseQueryOptions<
    DownloadListQueryResponse,
    SynapseClientError,
    DownloadListQueryResponse
  >,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<DownloadListQueryResponse, SynapseClientError>(
    ['downloadliststatsv2', accessToken],
    () => SynapseClient.getDownloadListStatistics(accessToken),
    options,
  )
}
