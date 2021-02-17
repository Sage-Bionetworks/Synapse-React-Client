import { QueryBundleRequest, QueryResultBundle } from '../../synapseTypes'
import { useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { SynapseClientError } from '../../SynapseClient'
import { SynapseClient } from '../..'

export type GetQueryResultBundleProps = {
  queryBundleRequest: QueryBundleRequest
  token?: string
}

type State = {
  queryResultBundle: QueryResultBundle | undefined
  isLoading: boolean
  error: SynapseClientError | undefined
}

export default function useGetQueryResultBundle(
  props: GetQueryResultBundleProps,
) {
  const { queryBundleRequest, token } = props
  const [state, setState] = useState<State>({
    isLoading: false,
    error: undefined,
    queryResultBundle: undefined,
  })

  const { isLoading, error, queryResultBundle } = state
  useDeepCompareEffect(() => {
    const getData = async () => {
      if (isLoading) {
        return
      }
      setState({
        isLoading: true,
        error: undefined,
        queryResultBundle: undefined,
      })
      try {
        const data = await SynapseClient.getQueryTableResults(
          queryBundleRequest,
          token,
        )
        setState({
          queryResultBundle: data,
          error: undefined,
          isLoading: false,
        })
      } catch (err) {
        setState({
          queryResultBundle: undefined,
          error: err,
          isLoading: false,
        })
      }
    }
    getData()
  }, [queryBundleRequest, token])

  return { queryResultBundle, error, isLoading }
}
