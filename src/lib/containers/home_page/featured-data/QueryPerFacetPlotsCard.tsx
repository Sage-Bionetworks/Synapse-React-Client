import * as React from 'react'
import { SynapseConstants } from '../../../utils'
import { parseEntityIdFromSqlStatement } from '../../../utils/functions/sqlFunctions'
import { QueryBundleRequest } from '../../../utils/synapseTypes'
import { ErrorBanner } from '../../ErrorBanner'
import { QueryWrapper, QueryWrapperContextConsumer } from '../../QueryWrapper'
import FacetPlotsCard from './FacetPlotsCard'

export type QueryPerFacetPlotsCardProps = {
  title?: string
  description?: string
  rgbIndex?: number
  facetsToPlot?: string[]
  facetAliases?: Record<string, string>
  selectFacetColumnName: string
  selectFacetColumnValue: string
  sql?: string
  detailsPagePath: string
}
export function getQueryRequest(
  sql: string,
  selectFacetColumnName: string,
  selectFacetColumnValue: string,
): QueryBundleRequest {
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
      limit: 25,
      selectedFacets: [
        {
          columnName: selectFacetColumnName,
          facetValues: [selectFacetColumnValue],
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        },
      ],
    },
  }
}
const QueryPerFacetPlotsCard: React.FunctionComponent<QueryPerFacetPlotsCardProps> =
  props => {
    const {
      title,
      description,
      sql,
      facetsToPlot,
      rgbIndex,
      selectFacetColumnName,
      selectFacetColumnValue,
      detailsPagePath,
      ...rest
    } = props
    const initQueryRequest: QueryBundleRequest = getQueryRequest(
      sql!,
      selectFacetColumnName,
      selectFacetColumnValue,
    )
    return (
      <div className="QueryPerFacetPlotsCard">
        <QueryWrapper {...rest} initQueryRequest={initQueryRequest}>
          <QueryWrapperContextConsumer>
            {queryWrapperContext => {
              if (queryWrapperContext === undefined) {
                throw new Error(
                  'No queryWrapperContext found when using QueryWraperContextConsumer',
                )
              }
              return <ErrorBanner error={queryWrapperContext.error} />
            }}
          </QueryWrapperContextConsumer>
          <FacetPlotsCard
            title={title}
            description={description}
            facetsToPlot={facetsToPlot}
            rgbIndex={rgbIndex}
            detailsPagePath={detailsPagePath}
          />
        </QueryWrapper>
      </div>
    )
  }

export default QueryPerFacetPlotsCard
