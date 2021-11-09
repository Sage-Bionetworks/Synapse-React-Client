import * as React from 'react'
import { cloneDeep } from 'lodash'
import { insertConditionsFromSearchParams, parseEntityIdFromSqlStatement, SQLOperator } from '../../utils/functions/sqlFunctions'
import StackedBarChart, { StackedBarChartProps } from '../StackedBarChart'
import SynapseTable, { SynapseTableProps } from './SynapseTable'
import { QueryBundleRequest } from '../../utils/synapseTypes'
import { SynapseConstants } from '../../utils'
import QueryWrapper from '../QueryWrapper'

type SearchParams = {
  searchParams?: {
    facetValue: string
  }
}
export type Operator = {
  sqlOperator?: SQLOperator
}

export type QueryCount = {
  showQueryCount?: boolean
}

type OwnProps = {
  sql: string
  rgbIndex: number
  unitDescription?: string
  facetAliases?: Record<string, string>,
  facet?: string
}

export type StandaloneQueryWrapperProps = Partial<StackedBarChartProps> &
  Partial<SynapseTableProps> &
  SearchParams &
  Operator &
  OwnProps

const generateInitQueryRequest = (sql: string): QueryBundleRequest => {
  return cloneDeep({
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    entityId: parseEntityIdFromSqlStatement(sql!),
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: {
      sql,
      limit: 25,
      offset: 0,
    },
  })
}
const StandaloneQueryWrapper: React.FunctionComponent<StandaloneQueryWrapperProps> = (
  props,
) => {
  const {
    link,
    linkText,
    title,
    searchParams,
    sqlOperator,    
    showAccessColumn,
    sql,
    ...rest
  } = props

  let derivedQueryRequestFromSearchParams = generateInitQueryRequest(sql)

  if (searchParams) {
    derivedQueryRequestFromSearchParams.query.sql = insertConditionsFromSearchParams(
      derivedQueryRequestFromSearchParams.query.sql,
      searchParams,
      sqlOperator,
    )
  }
  return (
    <QueryWrapper
      {...rest}
      initQueryRequest={derivedQueryRequestFromSearchParams}
    >
      {queryWrapperChildProps => {
        return (
          <>
            {link && linkText ? (
              <StackedBarChart
                {...queryWrapperChildProps}
                link={link}
                linkText={linkText}
              />
            ) : (
              <React.Fragment />
            )}
            {title ? (
              <SynapseTable
                {...queryWrapperChildProps}
                showAccessColumn={showAccessColumn}
                title={title}
              />
            ) : (
              <React.Fragment />
            )}
          </>
      )}}
    </QueryWrapper>
  )
}

export default StandaloneQueryWrapper
