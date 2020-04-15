import * as React from 'react'
import { QueryWrapperProps } from './QueryWrapper'
import QueryWrapper from './QueryWrapper'
//import FacetsPlotNav, { FacetsPlotNavProps } from './FacetsPlotNav'

import FacetNav, {FacetNavOwnProps} from './widgets/facet-nav/FacetNav'
import { SynapseTableProps } from './table/SynapseTable'
import SynapseTable from './table/SynapseTable'
import {
  insertConditionsFromSearchParams,
  SQLOperator,
} from '../utils/functions/sqlFunctions'

type SearchParams = {
  searchParams?: {
    facetValue: string
  }
}
type Operator = {
  sqlOperator: SQLOperator
}
export type QueryWrapperPlotNavProps = QueryWrapperProps &
  Partial<FacetNavOwnProps> &
  Partial<SynapseTableProps> &
  SearchParams &
  Operator

const QueryWrapperPlotNav: React.FunctionComponent<QueryWrapperPlotNavProps> = props => {
  const {
    title,
    searchParams,
    initQueryRequest,
    sqlOperator,
    facetsToPlot,
    enableLeftFacetFilter,
    loadingScreen,
    ...rest
  } = props
  if (searchParams) {
    let sqlUsed = initQueryRequest.query.sql
    if (searchParams) {
      sqlUsed = insertConditionsFromSearchParams(
        searchParams,
        initQueryRequest.query.sql,
        sqlOperator,
      )
    }
    initQueryRequest.query.sql = sqlUsed
  }
  return (
    <QueryWrapper {...rest} initQueryRequest={initQueryRequest}>
      {<FacetNav applyChanges={() => ''} loadingScreen={loadingScreen}  />}

      {
        /*<FacetsPlotNav
          loadingScreen={loadingScreen}
          facetsToPlot={facetsToPlot}
        />*/
      }
      {title ? (
        <SynapseTable
          loadingScreen={loadingScreen}
          title={title}
          enableLeftFacetFilter={enableLeftFacetFilter}
        />
      ) : (
        <></>
      )}
    </QueryWrapper>
  )
}

export default QueryWrapperPlotNav
