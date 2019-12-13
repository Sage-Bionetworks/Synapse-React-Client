import * as React from 'react'
import { QueryResultBundle } from '../utils/jsonResponses/Table/QueryResultBundle'
import { FacetColumnResultValues} from '../utils/jsonResponses/Table/FacetColumnResult'

export type TotalQueryResultsProps = {
  data?: QueryResultBundle

  facet?: string
  isLoading: boolean
  style?: React.CSSProperties
  unitDescription: string
  frontText: string
}

type State = {
  total: number
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
    }
  }

  componentDidMount() {
    this.calculateTotal()
  }

  componentDidUpdate(prevProps: TotalQueryResultsProps) {
    // check that its done loading
    if (!this.props.isLoading && prevProps.isLoading) {
      this.calculateTotal()
    }
  }

  calculateTotal() {
    const { data, facet } = this.props
    let { total } = this.state
    if (data) {
      if (facet) {
        const { facets = [] } = data
        const curFacetsIndex = (facets).findIndex(
          el => el.facetType === 'enumeration' && el.columnName === facet,
        )
        // calculate the values chosen
        const curFacets = facets[curFacetsIndex] as FacetColumnResultValues
        // edge case -- if they are all false then they are considered all true..
        // sum up the counts of data
        let anyTrue = false
        let totalAllFalseCase = 0
        let totalStandardCase = 0

        if (curFacets) {
          for (const key of curFacets.facetValues) {
            anyTrue = anyTrue || key.isSelected
            totalAllFalseCase += key.count
            totalStandardCase += key.isSelected ? key.count : 0
          }
        }
        total = anyTrue ? totalStandardCase : totalAllFalseCase
        if (data.queryResult.queryResults.rows.length === 0) {
          // we override the statements above if there are zero results because the current UI
          // would be showing zero results
          total = 0
        }
      } else {
        if (data.queryCount === undefined) {
          throw Error(
            'Failed to specify either a facet or query count in part mask',
          )
        }
        total = data.queryCount
      }
    }
    this.setState({
      total,
    })
  }

  render() {
    const { isLoading, style, unitDescription, frontText } = this.props
    const { total } = this.state
    const loader = <span style={{ marginLeft: '2px' }} className={'spinner'} />
    return (
      <p
        style={style}
        className="SRC-boldText SRC-text-title SRC-centerContent"
      >
        {frontText} {total} {unitDescription} {isLoading && loader}
      </p>
    )
  }
}
