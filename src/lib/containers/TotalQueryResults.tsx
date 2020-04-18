import * as React from 'react'
import { QueryBundleRequest } from '../utils/synapseTypes'
import { SynapseClient, SynapseConstants } from '../'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { cloneDeep } from 'lodash-es'

export type TotalQueryResultsProps = {
  isLoading: boolean
  style?: React.CSSProperties
  //getLastQueryRequest: (() => QueryBundleRequest) | undefined
  lastQueryRequest: QueryBundleRequest
  token: string | undefined
  unitDescription: string
  frontText: string
}

// This is a stateful component so that during load the component can hold onto the previous
// total instead of showing 0 results for the intermittent loading state.

const TotalQueryResults: React.FunctionComponent<TotalQueryResultsProps> = ({
  style,
  unitDescription,
  frontText,
  //getLastQueryRequest,
  lastQueryRequest,
  token,
  isLoading: parentLoading,
}) => {
  const [total, setTotal] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(false)

  useDeepCompareEffect(() => {
    const calculateTotal = async () => {
      const cloneLastQueryRequest = cloneDeep(lastQueryRequest)
      cloneLastQueryRequest.partMask =
        SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS

      if (!parentLoading) {
        setIsLoading(true)
        SynapseClient.getQueryTableResults(cloneLastQueryRequest, token)
          .then((data) => {
            setTotal(data.queryCount!)
          })
          .catch((err) => {
            console.error('err ', err)
          })
          .finally(() => {
            setIsLoading(false)
          })
      }
    }
    calculateTotal()
  }, [parentLoading, token, lastQueryRequest])

  return (
    <div
      className="TotalQueryResults SRC-boldText SRC-text-title SRC-centerContent"
      style={style}
    >
      {frontText} {total} {unitDescription}{' '}
      {isLoading && (
        <span style={{ marginLeft: '2px' }} className={'spinner'} />
      )}
    </div>
  )
}

export default TotalQueryResults
