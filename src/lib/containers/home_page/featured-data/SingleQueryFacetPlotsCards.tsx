import * as React from 'react'
import { QueryWrapper, QueryContextConsumer } from '../../QueryWrapper'
import { parseEntityIdFromSqlStatement } from '../../../utils/functions/sqlFunctions'
import { SynapseConstants } from '../../../utils'
import { QueryBundleRequest } from '../../../utils/synapseTypes'
import { ErrorBanner } from '../../ErrorBanner'
import FacetPlotsCard from './FacetPlotsCard'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper'

export type SingleQueryFacetPlotsCardsProps = {
  rgbIndex?: number
  facetsToPlot?: string[]
  facetAliases?: Record<string, string>
  sql?: string
}
export function getQueryRequest(sql: string): QueryBundleRequest {
  const entityId = parseEntityIdFromSqlStatement(sql)
  return {
    entityId,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql,
      offset: 0,
      limit: 1,
    },
  }
}
const SingleQueryFacetPlotsCards: React.FunctionComponent<SingleQueryFacetPlotsCardsProps> =
  props => {
    const { sql, facetsToPlot, rgbIndex, facetAliases } = props
    const initQueryRequest: QueryBundleRequest = getQueryRequest(sql!)
    return (
      <div className="SingleQueryFacetPlotsCards">
        <QueryWrapper initQueryRequest={initQueryRequest}>
          <QueryVisualizationWrapper
            rgbIndex={rgbIndex}
            facetAliases={facetAliases}
          >
            <QueryContextConsumer>
              {queryContext => {
                if (queryContext === undefined) {
                  throw new Error(
                    'No queryContext found when using QueryWraperContextConsumer',
                  )
                }
                return <ErrorBanner error={queryContext.error} />
              }}
            </QueryContextConsumer>
            {facetsToPlot?.map(facetName => {
              return (
                <FacetPlotsCard
                  key={`FacetPlotCard-${facetName}`}
                  facetsToPlot={[facetName]}
                />
              )
            })}
          </QueryVisualizationWrapper>
        </QueryWrapper>
      </div>
    )
  }

export default SingleQueryFacetPlotsCards
