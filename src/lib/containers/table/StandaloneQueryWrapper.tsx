import React from 'react'
import { cloneDeep } from 'lodash-es'
import {
  generateQueryFilterFromSearchParams,
  parseEntityIdFromSqlStatement,
  SQLOperator,
} from '../../utils/functions/sqlFunctions'
import SynapseTable, { SynapseTableProps } from './SynapseTable'
import { QueryBundleRequest } from '../../utils/synapseTypes'
import { SynapseConstants } from '../../utils'
import { QueryWrapper } from '../QueryWrapper'
import { QueryContextConsumer } from '../QueryContext'
import TopLevelControls, { TopLevelControlsProps } from './TopLevelControls'
import FullTextSearch from '../FullTextSearch'
import SearchV2, { SearchV2Props } from '../SearchV2'
import { useGetEntity } from '../../utils/hooks/SynapseAPI/entity/useEntity'
import TotalQueryResults from '../TotalQueryResults'
import SqlEditor from '../SqlEditor'
import { useSynapseContext } from '../../utils/SynapseContext'
import {
  QueryVisualizationContextConsumer,
  QueryVisualizationWrapper,
  QueryVisualizationWrapperProps,
} from '../QueryVisualizationWrapper'
import { isTable } from '../../utils/functions/EntityTypeUtils'
import LastUpdatedOn from '../query_wrapper_plot_nav/LastUpdatedOn'

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
  showTopLevelControls?: boolean
  searchConfiguration?: Omit<
    SearchV2Props,
    'queryContext' | 'queryVisualizationContext'
  >
} & Omit<TopLevelControlsProps, 'entityId'> &
  Pick<
    QueryVisualizationWrapperProps,
    | 'rgbIndex'
    | 'unitDescription'
    | 'columnAliases'
    | 'noContentPlaceholderType'
    | 'showLastUpdatedOn'
  >

export type StandaloneQueryWrapperProps = Partial<
  Omit<
    SynapseTableProps,
    'synapseContext' | 'queryContext' | 'queryVisualizationContext'
  >
> &
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
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
      SynapseConstants.BUNDLE_MASK_LAST_UPDATED_ON,
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
 * This component was initially implemented on the portal side. It renders a SynapseTable if a title is provided.
 * If showTopLevelControls is set to true, then the SynapseTable will also include the TopLevelControls (search, export table, column selection).
 */
const StandaloneQueryWrapper: React.FunctionComponent<
  StandaloneQueryWrapperProps
> = (props: StandaloneQueryWrapperProps) => {
  const {
    title,
    searchParams,
    sqlOperator,
    showAccessColumn,
    sql,
    hideDownload,
    hideQueryCount,
    name,
    showTopLevelControls = false,
    searchConfiguration,
    unitDescription = 'Results',
    rgbIndex,
    showLastUpdatedOn,
    ...rest
  } = props

  const derivedQueryRequestFromSearchParams = generateInitQueryRequest(sql)

  if (searchParams) {
    const queryFiltersToAdd = generateQueryFilterFromSearchParams(
      searchParams,
      sqlOperator,
    )
    if (queryFiltersToAdd) {
      if (
        derivedQueryRequestFromSearchParams.query.additionalFilters ===
        undefined
      ) {
        derivedQueryRequestFromSearchParams.query.additionalFilters = []
      }
      derivedQueryRequestFromSearchParams.query.additionalFilters.push(
        ...queryFiltersToAdd,
      )
    }
  }

  const synapseContext = useSynapseContext()
  const entityId = parseEntityIdFromSqlStatement(sql)
  const { data: entity } = useGetEntity(entityId)
  return (
    <QueryWrapper
      {...rest}
      initQueryRequest={derivedQueryRequestFromSearchParams}
    >
      <QueryVisualizationWrapper
        rgbIndex={rgbIndex}
        unitDescription={unitDescription}
        showLastUpdatedOn={showLastUpdatedOn}
        {...rest}
      >
        <QueryContextConsumer>
          {queryContext => {
            if (queryContext === undefined) {
              throw new Error(
                'No queryContext found when calling QueryContextConsumer',
              )
            }
            return (
              <QueryVisualizationContextConsumer>
                {queryVisualizationContext => {
                  if (queryVisualizationContext === undefined) {
                    throw new Error(
                      'No queryVisualizationContext found when calling QueryVisualizationContextConsumer',
                    )
                  }

                  return (
                    <>
                      {showTopLevelControls && (
                        <TopLevelControls
                          showColumnSelection={true}
                          name={name}
                          hideDownload={hideDownload}
                          hideQueryCount={hideQueryCount}
                          hideFacetFilterControl={true}
                          hideVisualizationsControl={true}
                        />
                      )}
                      {entity && isTable(entity) && entity.isSearchEnabled ? (
                        <FullTextSearch
                          helpUrl={searchConfiguration?.fullTextSearchHelpURL}
                        />
                      ) : (
                        <SearchV2
                          {...searchConfiguration}
                          queryContext={queryContext}
                          queryVisualizationContext={queryVisualizationContext}
                        />
                      )}
                      <SqlEditor />
                      {showTopLevelControls && (
                        <TotalQueryResults frontText={''} />
                      )}
                      <SynapseTable
                        synapseContext={synapseContext}
                        queryContext={queryContext}
                        queryVisualizationContext={queryVisualizationContext}
                        showAccessColumn={showAccessColumn}
                        title={title}
                        data-testid="SynapseTable"
                        {...rest}
                      />
                      <LastUpdatedOn />
                    </>
                  )
                }}
              </QueryVisualizationContextConsumer>
            )
          }}
        </QueryContextConsumer>
      </QueryVisualizationWrapper>
    </QueryWrapper>
  )
}

export default StandaloneQueryWrapper
