import {
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
import { FilesStatisticsResponse } from '../../synapseTypes/DownloadListV2/QueryResponseDetails'

export function useGetDownloadListStatistics(
  options?: UseQueryOptions<
    FilesStatisticsResponse,
    SynapseClientError,
    FilesStatisticsResponse
  >,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<FilesStatisticsResponse, SynapseClientError>(
    ['downloadliststatsv2', accessToken],
    () => SynapseClient.getDownloadListStatistics(accessToken),
    options,
  )
}
