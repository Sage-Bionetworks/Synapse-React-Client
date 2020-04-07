import * as React from 'react'
import { QueryWrapperProps } from './QueryWrapper'
import QueryWrapper from './QueryWrapper'
import FacetsPlotNav, { FacetsPlotNavProps } from './FacetsPlotNav'
import { SynapseTableProps } from './table/SynapseTable'
//@ts-ignore
import SynapseTable from './table/SynapseTable'
import SynapseTableComponent from './table/SynapseTableHook'
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
  Partial<FacetsPlotNavProps> &
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
      {
        <FacetsPlotNav
          loadingScreen={loadingScreen}
          facetsToPlot={facetsToPlot}
        />
      }
      {title ? (
        <SynapseTableComponent
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
