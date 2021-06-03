import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { useSynapseContext } from '../../SynapseContext'
import { QueryBundleRequest, QueryResultBundle } from '../../synapseTypes'

export default function useGetQueryResultBundle(
  queryBundleRequest: QueryBundleRequest,
  options?: UseQueryOptions<
    QueryResultBundle,
    SynapseClientError,
    QueryResultBundle
  >,
) {
  const { accessToken } = useSynapseContext()

  return useQuery<QueryResultBundle, SynapseClientError, QueryResultBundle>(
    ['queryResultBundle', accessToken, queryBundleRequest],
    () => SynapseClient.getQueryTableResults(queryBundleRequest, accessToken),
    options,
  )
}
