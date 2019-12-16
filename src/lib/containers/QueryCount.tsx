import { SynapseConstants, SynapseClient } from '../utils/'
import * as React from 'react'
import { QueryBundleRequest } from '../utils/synapseTypes/Table/QueryBundleRequest'

export type QueryCountProps = {
  sql: string
  entityId: string
  name: string
  token?: string
}

type QueryCountState = {
  [index: string]: number
}

/**
 * QueryCount shows a query count
 *
 * @export
 * @class QueryCount
 * @extends {React.Component<QueryCountProps, QueryCountState>}
 */
export default class QueryCount extends React.Component<
  QueryCountProps,
  QueryCountState
> {
  constructor(props: QueryCountProps) {
    super(props)
    this.state = {}
    this.calculateRowCount = this.calculateRowCount.bind(this)
  }

  componentDidMount() {
    this.calculateRowCount()
  }

  componentDidUpdate() {
    this.calculateRowCount()
  }

  calculateRowCount() {
    const { sql, token, entityId } = this.props
    if (this.state[sql]) {
      return
    }
    const request: QueryBundleRequest = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      query: {
        sql,
      },
      entityId,
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
    }
    SynapseClient.getQueryTableResults(request, token).then(data => {
      this.setState({ [sql]: data.queryCount! })
    })
  }

  render() {
    const { sql, name } = this.props
    const count = this.state[sql]
    /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Using_toLocaleString */
    return (
      <React.Fragment>
        {' '}
        {name} ({count && count.toLocaleString()}){' '}
      </React.Fragment>
    )
  }
}
