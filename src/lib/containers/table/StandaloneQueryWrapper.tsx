import * as React from 'react'
import { cloneDeep } from 'lodash'
import { insertConditionsFromSearchParams, parseEntityIdFromSqlStatement, SQLOperator } from '../../utils/functions/sqlFunctions'
import StackedBarChart, { StackedBarChartProps } from '../StackedBarChart'
import SynapseTable, { SynapseTableProps } from './SynapseTable'
import { isTableEntity, QueryBundleRequest } from '../../utils/synapseTypes'
import { SynapseConstants } from '../../utils'
import QueryWrapper from '../QueryWrapper'
import TopLevelControls, { TopLevelControlsProps } from './TopLevelControls'
import FullTextSearch from '../FullTextSearch'
import SearchV2, { SearchV2Props } from '../SearchV2'
import { useGetEntity } from '../../utils/hooks/SynapseAPI/useEntity'
import TotalQueryResults from '../TotalQueryResults'

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
  facet?: string,
  showTopLevelControls?: boolean
  searchConfiguration?: SearchV2Props
} & Omit<TopLevelControlsProps, 'entityId'>

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
    entityId: parseEntityIdFromSqlStatement(sql),
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: {
      sql,
      limit: 25,
      offset: 0,
    },
  })
}
/**
 * This component was initially implemented on the portal side. It renders a StackedBarChart if link and linkText are provided, and renders a SynapseTable if a title is provided.
 * If showTopLevelControls is set to true, then the SynapseTable will also include the TopLevelControls (search, export table, column selection).
 */
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
    hideDownload,
    name,
    showTopLevelControls = false,
    searchConfiguration,
    ...rest
  } = props

  const derivedQueryRequestFromSearchParams = generateInitQueryRequest(sql)

  if (searchParams) {
    derivedQueryRequestFromSearchParams.query.sql = insertConditionsFromSearchParams(
      derivedQueryRequestFromSearchParams.query.sql,
      searchParams,
      sqlOperator,
    )
  }
  const entityId = parseEntityIdFromSqlStatement(sql)
  const { data: entity } = useGetEntity(entityId)
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
              <>
                {showTopLevelControls && <TopLevelControls
                  {...queryWrapperChildProps}
                  showColumnSelection={true}
                  name={name}
                  entityId={entityId}
                  sql={derivedQueryRequestFromSearchParams.query.sql}
                  hideDownload={hideDownload}
                  hideFacetFilterControl={true}
                  hideVisualizationsControl={true}
                />}
                {entity &&
                  isTableEntity(entity) &&
                  entity.isSearchEnabled ? (
                  <FullTextSearch {...queryWrapperChildProps} />
                ) : (
                  <SearchV2
                    {...queryWrapperChildProps}
                    {...searchConfiguration}
                  />
                )}
                {showTopLevelControls && <TotalQueryResults
                  isLoading={queryWrapperChildProps.isLoading!}
                  executeQueryRequest={queryWrapperChildProps.executeQueryRequest}
                  lastQueryRequest={queryWrapperChildProps.getLastQueryRequest?.()!}
                  getInitQueryRequest={queryWrapperChildProps.getInitQueryRequest}
                  unitDescription={'Results'}
                  frontText={''}
                  showNotch={false}
                  topLevelControlsState={queryWrapperChildProps.topLevelControlsState}
                />}
                <SynapseTable
                  {...queryWrapperChildProps}
                  showAccessColumn={showAccessColumn}
                  title={title}
                  data-testid='SynapseTable'
                />
              </>
            ) : (
              <React.Fragment />
            )}
          </>
        )
      }}
    </QueryWrapper>
  )
}

export default StandaloneQueryWrapper
