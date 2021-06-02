import * as React from 'react'
import QueryWrapper from '../../QueryWrapper'
import { parseEntityIdFromSqlStatement } from '../../../utils/functions/sqlFunctions'
import { SynapseConstants } from '../../../utils'
import { QueryBundleRequest } from '../../../utils/synapseTypes'
import { ErrorBanner } from '../../ErrorBanner'
import FacetPlotsCard from './FacetPlotsCard'
import { SynapseContextConsumer } from '../../../utils/SynapseContext'

export type SingleQueryFacetPlotsCardsProps = {
  rgbIndex?: number
  facetsToPlot?: string[]
  facetAliases?: {}
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
const SingleQueryFacetPlotsCards: React.FunctionComponent<SingleQueryFacetPlotsCardsProps> = props => {
  const { sql, facetsToPlot, rgbIndex, ...rest } = props
  const initQueryRequest: QueryBundleRequest = getQueryRequest(sql!)
  return (
    <div className="SingleQueryFacetPlotsCards">
      <SynapseContextConsumer>
        {context => (
          <QueryWrapper
            {...rest}
            token={context?.accessToken}
            initQueryRequest={initQueryRequest}
          >
            <ErrorBanner />
            {facetsToPlot?.map(facetName => {
              return (
                <FacetPlotsCard
                  key={`FacetPlotCard-${facetName}`}
                  facetsToPlot={[facetName]}
                  rgbIndex={rgbIndex}
                />
              )
            })}
          </QueryWrapper>
        )}
      </SynapseContextConsumer>
    </div>
  )
}

export default SingleQueryFacetPlotsCards
