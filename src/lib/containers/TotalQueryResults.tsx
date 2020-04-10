import * as React from 'react'
import { QueryBundleRequest } from '../utils/synapseTypes'
import { SynapseClient, SynapseConstants } from '../'

export type TotalQueryResultsProps = {
  isLoading: boolean
  style?: React.CSSProperties
  getLastQueryRequest: (() => QueryBundleRequest) | undefined
  token: string | undefined
  unitDescription: string
  frontText: string
}

type State = {
  total: number
  isLoading: boolean
}

// This is a stateful component so that during load the component can hold onto the previous
// total instead of showing 0 results for the intermittent loading state.
export default class TotalQueryResults extends React.Component<
  TotalQueryResultsProps,
  State
> {
  constructor(props: TotalQueryResultsProps) {
    super(props)
    this.state = {
      total: 0,
      isLoading: false,
    }
  }

  componentDidMount() {
    this.calculateTotal()
  }

  componentDidUpdate(prevProps: TotalQueryResultsProps) {
    // Check that it has entered a loading state, meaning that there is new data
    if (this.props.isLoading && !prevProps.isLoading) {
      this.calculateTotal()
    }
  }

  calculateTotal() {
    const { getLastQueryRequest, token } = this.props
    const queryRequest = getLastQueryRequest!()
    queryRequest.partMask = SynapseConstants.BUNDLE_MASK_QUERY_COUNT

    this.setState({
      isLoading: true,
    })
    SynapseClient.getQueryTableResults(queryRequest, token)
      .then(data => {
        this.setState({
          total: data.queryCount!,
          isLoading: false,
        })
      })
      .catch(err => {
        console.error('err ', err)
        this.setState({
          isLoading: false,
        })
      })
  }

  render() {
    const { style, unitDescription, frontText } = this.props
    const { total, isLoading } = this.state
    return (
      <p
        style={style}
        className="SRC-boldText SRC-text-title SRC-centerContent"
      >
        {frontText} {total} {unitDescription}{' '}
        {isLoading && (
          <span style={{ marginLeft: '2px' }} className={'spinner'} />
        )}
      </p>
    )
  }
}
