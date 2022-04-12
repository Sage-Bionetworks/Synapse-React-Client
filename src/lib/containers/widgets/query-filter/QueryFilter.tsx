import * as React from 'react'
import { isSingleNotSetValue } from '../../../utils/functions/queryUtils'
import { QueryBundleRequest } from '../../../utils/synapseTypes'
import {
  FacetColumnRangeRequest,
  FacetColumnRequest,
  FacetColumnValuesRequest,
} from '../../../utils/synapseTypes/Table/FacetColumnRequest'
import {
  FacetColumnResult,
  FacetColumnResultRange,
  FacetColumnResultValues,
} from '../../../utils/synapseTypes/Table/FacetColumnResult'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
  useQueryContext,
} from '../../QueryWrapper'
import { EnumFacetFilter } from './EnumFacetFilter'
import { RangeFacetFilter } from './RangeFacetFilter'

export type QueryFilterProps = {
  facetsToFilter?: string[]
}

const convertFacetToFacetColumnValuesRequest = (
  facet: FacetColumnResultValues,
): FacetColumnValuesRequest => ({
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
  columnName: facet.columnName,
  facetValues: facet.facetValues
    .filter(facet => facet.isSelected === true)
    .map(facet => facet.value),
})

const convertFacetColumnRangeRequest = (
  facet: FacetColumnResultRange,
): FacetColumnRangeRequest => {
  let result = {
    concreteType:
      'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
    columnName: facet.columnName, // The name of the faceted column
  }

  if (facet.columnMin) {
    result = { ...result, ...{ min: facet.columnMin, max: facet.columnMax } }
  }
  return result
}

const patchRequestFacets = (
  changedFacet: FacetColumnRequest,
  lastRequest?: QueryBundleRequest,
): FacetColumnRequest[] => {
  const selections = lastRequest?.query?.selectedFacets ?? []
  const changedFacetIndex = selections.findIndex(
    facet => facet.columnName === changedFacet.columnName,
  )

  const isEmptyValuesFacet =
    changedFacet.concreteType ===
      'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest' &&
    (!changedFacet.facetValues || !changedFacet.facetValues.length)
  if (changedFacetIndex > -1) {
    if (isEmptyValuesFacet) {
      selections.splice(changedFacetIndex, 1)
    } else {
      selections[changedFacetIndex] = changedFacet
    }
  } else {
    selections.push(changedFacet)
  }
  return selections
}

export function applyChangesToValuesColumn(
  lastRequest: QueryBundleRequest | undefined,
  facet: FacetColumnResultValues,
  onChangeFn: (result: FacetColumnRequest[]) => void,
  facetName?: string,
  checked: boolean = false,
) {
  if (facetName) {
    facet.facetValues.forEach(facetValue => {
      if (facetValue.value === facetName) {
        facetValue.isSelected = checked
      }
    })
  } else {
    // else clear all
    facet.facetValues.forEach(facet => {
      facet.isSelected = false
    })
  }

  const changedFacet = convertFacetToFacetColumnValuesRequest(facet)
  const result = patchRequestFacets(changedFacet, lastRequest)
  onChangeFn(result)
}

// This handles multiple checkbox selection with delay refresh
export const applyMultipleChangesToValuesColumn = (
  lastRequest: QueryBundleRequest | undefined,
  facet: FacetColumnResultValues,
  onChangeFn: (result: FacetColumnRequest[]) => void,
  facetNameMap?: Record<string, string>,
) => {
  const facetNames = (facetNameMap && Object.keys(facetNameMap)) || []
  if (facetNames.length) {
    facet.facetValues.forEach(facetValue => {
      if (facetNames.includes(facetValue.value)) {
        facetValue.isSelected = facetNameMap
          ? !!facetNameMap[facetValue.value]
          : false
      }
    })
  }
  const changedFacet = convertFacetToFacetColumnValuesRequest(facet)
  const result = patchRequestFacets(changedFacet, lastRequest)
  onChangeFn(result)
}

//rangeChanges
export const applyChangesToRangeColumn = (
  lastRequest: QueryBundleRequest | undefined,
  facet: FacetColumnResultRange,
  onChangeFn: (result: FacetColumnRequest[]) => void,
  values: string[],
) => {
  facet.columnMin = values[0]
  facet.columnMax = values[1]
  const changedFacet = convertFacetColumnRangeRequest(facet)
  const result = patchRequestFacets(changedFacet, lastRequest)
  onChangeFn(result)
}

export const QueryFilter: React.FunctionComponent<QueryFilterProps> = ({
  facetsToFilter,
}): JSX.Element => {
  const { data, isLoadingNewBundle, getLastQueryRequest, executeQueryRequest } =
    useQueryContext()

  const { facetAliases, topLevelControlsState } = useQueryVisualizationContext()

  if (!data) {
    return <></>
  }
  const { showFacetFilter } = topLevelControlsState
  const columnModels = data.selectColumns
  let facets = data.facets as FacetColumnResult[]
  if (facetsToFilter) {
    facets = facets.filter(facet => {
      return facetsToFilter.includes(facet.columnName)
    })
  }
  const lastRequest = getLastQueryRequest()

  const applyChanges = (facets: FacetColumnRequest[]) => {
    const queryRequest: QueryBundleRequest = getLastQueryRequest()
    queryRequest.query.selectedFacets = facets
    queryRequest.query.offset = 0
    executeQueryRequest(queryRequest)
  }

  return (
    <div
      className={`QueryFilter ${
        showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      }`}
    >
      <h4 className="QueryFilter__title">Filter By</h4>
      {isLoadingNewBundle && <div>Loading...</div>}
      {!isLoadingNewBundle &&
        facets.map((facet, index) => {
          const columnModel = columnModels!.find(
            model => model.name === facet.columnName,
          )
          const shouldStartCollapsed = index > 2
          if (isSingleNotSetValue(facet)) {
            return
          }
          return (
            <div className="QueryFilter__facet" key={facet.columnName}>
              {facet.facetType === 'enumeration' && columnModel && (
                <EnumFacetFilter
                  containerAs="Collapsible"
                  collapsed={shouldStartCollapsed}
                  facetValues={facet.facetValues}
                  columnModel={columnModel}
                  facetAliases={facetAliases}
                  onChange={(facetNamesMap: Record<string, string>) =>
                    applyMultipleChangesToValuesColumn(
                      lastRequest,
                      facet,
                      applyChanges,
                      facetNamesMap,
                    )
                  }
                  onClear={() =>
                    applyChangesToValuesColumn(lastRequest, facet, applyChanges)
                  }
                ></EnumFacetFilter>
              )}
              {facet.facetType === 'range' && columnModel && (
                <RangeFacetFilter
                  facetResult={facet}
                  columnModel={columnModel}
                  facetAliases={facetAliases}
                  collapsed={shouldStartCollapsed}
                  onChange={(values: string[]) =>
                    applyChangesToRangeColumn(
                      lastRequest,
                      facet,
                      applyChanges,
                      values,
                    )
                  }
                ></RangeFacetFilter>
              )}
            </div>
          )
        })}
    </div>
  )
}
