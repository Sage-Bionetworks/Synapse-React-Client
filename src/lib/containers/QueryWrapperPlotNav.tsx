import * as React from 'react'
import { QueryWrapperProps } from './QueryWrapper'
import QueryWrapper from './QueryWrapper'
import FacetsPlotNav, { FacetsPlotNavProps } from './FacetsPlotNav'
import { SynapseTableProps } from './table/SynapseTable'
import SynapseTable from './table/SynapseTable'
import { insertConditionsFromSearchParams, SQLOperator } from '../utils/functions/sqlFunctions'

type SearchParams = {
  searchParams?: {
    facetValue: string
  }
}
type Operator = {
  sqlOperator: SQLOperator
}
export type QueryWrapperPlotNavProps = QueryWrapperProps & Partial<FacetsPlotNavProps> & Partial<SynapseTableProps> & SearchParams & Operator

const QueryWrapperPlotNav: React.FunctionComponent<QueryWrapperPlotNavProps> = (props) => {
  const {
    title,
    synapseId,
    searchParams,
    initQueryRequest,
    sqlOperator,
    facetsToPlot,
    ...rest
  } = props
  if (searchParams) {
    let sqlUsed = initQueryRequest.query.sql
    if (searchParams) {
      sqlUsed = insertConditionsFromSearchParams(searchParams, initQueryRequest.query.sql, sqlOperator)
    }
    initQueryRequest.query.sql = sqlUsed
  }
  return (
    <QueryWrapper
      {...rest}
      initQueryRequest={initQueryRequest}
    >
      {
        <FacetsPlotNav
          loadingScreen={props.loadingScreen}
          facetsToPlot={facetsToPlot}
        />
      }
      {
        synapseId && title ?
        <SynapseTable
          loadingScreen={props.loadingScreen}
          synapseId={synapseId}
          title={title}
        />
        :
        <></>
      }
    </QueryWrapper>
  )
}

export default QueryWrapperPlotNav
