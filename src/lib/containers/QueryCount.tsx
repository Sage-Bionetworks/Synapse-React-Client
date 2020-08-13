import { SynapseConstants, SynapseClient } from '../utils/'
import * as React from 'react'
import {
  QueryBundleRequest,
  FacetColumnValuesRequest,
} from '../utils/synapseTypes/'

export type QueryCountProps = {
  sql: string
  selectedFacets?: FacetColumnValuesRequest[]
  entityId: string
  parens?: boolean
  name: string
  token?: string
}

type QueryCountState = {
  storedSqlQueryCount: {}
  // maps sql string to true/false, true if already made a request for this sql's query count
  // false or undefined if not
  isCalculatingQueryCountForSql: {}
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
    this.state = {
      storedSqlQueryCount: {},
      isCalculatingQueryCountForSql: {},
    }
    this.calculateRowCount = this.calculateRowCount.bind(this)
  }

  componentDidMount() {
    this.calculateRowCount()
  }

  componentDidUpdate() {
    this.calculateRowCount()
  }

  calculateRowCount() {
    const { sql, token, entityId, selectedFacets } = this.props
    if (
      this.state.isCalculatingQueryCountForSql[sql] ||
      this.state.storedSqlQueryCount[sql]
    ) {
      // its either in progress or its already been calculated
      return
    }
    const request: QueryBundleRequest = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      query: {
        sql,
        selectedFacets,
      },
      entityId,
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
    }
    const { isCalculatingQueryCountForSql, storedSqlQueryCount } = this.state
    isCalculatingQueryCountForSql[sql] = true
    this.setState({
      isCalculatingQueryCountForSql,
    })
    SynapseClient.getQueryTableResults(request, token).then(data => {
      storedSqlQueryCount[sql] = data!.queryCount
      this.setState({
        storedSqlQueryCount,
      })
    })
  }

  render() {
    const { sql, name, parens = true } = this.props
    const count = this.state.storedSqlQueryCount[sql]
    const localCount = count?.toLocaleString()
    /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Using_toLocaleString */
    return (
      <React.Fragment>
        {name} {count && (parens ? `(${localCount})` : localCount)}
      </React.Fragment>
    )
  }
}
