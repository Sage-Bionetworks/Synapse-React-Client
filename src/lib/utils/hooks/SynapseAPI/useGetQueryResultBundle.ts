import { QueryOptions, useQuery } from 'react-query'
import { SynapseClient } from '../..'
import { SynapseClientError } from '../../SynapseClient'
import { QueryBundleRequest, QueryResultBundle } from '../../synapseTypes'

export default function useGetQueryResultBundle(
  queryBundleRequest: QueryBundleRequest,
  token?: string,
  options?: QueryOptions<
    QueryResultBundle,
    SynapseClientError,
    QueryResultBundle
  >,
) {
  return useQuery<QueryResultBundle, SynapseClientError, QueryResultBundle>(
    ['queryResultBundle', token, queryBundleRequest],
    () => SynapseClient.getQueryTableResults(queryBundleRequest, token),
    options,
  )
}
