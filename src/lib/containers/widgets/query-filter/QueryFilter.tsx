import * as React from 'react'
import { RangeFacetFilter } from './RangeFacetFilter'
import { EnumFacetFilter } from './EnumFacetFilter'

import {
  FacetColumnResultValues,
  FacetColumnResult,
  FacetColumnResultRange,
} from '../../../utils/synapseTypes/Table/FacetColumnResult'
import {
  FacetColumnValuesRequest,
  FacetColumnRangeRequest,
  FacetColumnRequest,
} from '../../../utils/synapseTypes/Table/FacetColumnRequest'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '../../../utils/synapseTypes'

export type QueryFilterProps = {
  isLoading?: boolean
  data?: QueryResultBundle
  getLastQueryRequest?: Function
  executeQueryRequest?: Function
  token?: string
  facetAliases?: {}
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
  onChangeFn: Function,
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
  onChangeFn: Function,
  facetNameMap?: {},
) => {
  const facetNames = (facetNameMap && Object.keys(facetNameMap)) || []
  if (facetNames.length) {
    facet.facetValues.forEach(facetValue => {
      if (facetNames.includes(facetValue.value)) {
        facetValue.isSelected = facetNameMap
          ? facetNameMap[facetValue.value]
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
  onChangeFn: Function,
  values: string[],
) => {
  facet.columnMin = values[0]
  facet.columnMax = values[1]
  const changedFacet = convertFacetColumnRangeRequest(facet)
  const result = patchRequestFacets(changedFacet, lastRequest)
  onChangeFn(result)
}

export const QueryFilter: React.FunctionComponent<QueryFilterProps> = ({
  data,
  isLoading = false,
  getLastQueryRequest,
  executeQueryRequest,
  token,
  facetAliases,
}: QueryFilterProps): JSX.Element => {
  if (!data) {
    return <></>
  }
  const columnModels = data.columnModels
  const facets = data.facets as FacetColumnResult[]
  const lastRequest = getLastQueryRequest ? getLastQueryRequest() : undefined

  const applyChanges = (facets: FacetColumnRequest[]) => {
    const queryRequest: QueryBundleRequest = getLastQueryRequest!()
    queryRequest.query.selectedFacets = facets
    queryRequest.query.offset = 0
    executeQueryRequest!(queryRequest)
  }

  return (
    <div className="QueryFilter">
      {isLoading && <div>Loading...</div>}
      {!isLoading &&
        facets.map((facet, index) => {
          const columnModel = columnModels!.find(
            model => model.name === facet.columnName,
          )

          const shouldStartCollapsed: boolean = index > 2;

          return (
            <div className="QueryFilter__facet" key={facet.columnName}>
              {facet.facetType === 'enumeration' && columnModel && (
                <EnumFacetFilter
                  containerAs="Collapsible"
                  collapsed={shouldStartCollapsed}
                  facetValues={(facet as FacetColumnResultValues).facetValues}
                  columnModel={columnModel!}
                  token={token}
                  facetAliases={facetAliases}
                  onChange={(facetNamesMap: {}) =>
                    applyMultipleChangesToValuesColumn(
                      lastRequest,
                      facet as FacetColumnResultValues,
                      applyChanges,
                      facetNamesMap,
                    )
                  }
                  onClear={() =>
                    applyChangesToValuesColumn(
                      lastRequest,
                      facet as FacetColumnResultValues,
                      applyChanges,
                    )
                  }
                ></EnumFacetFilter>
              )}
              {facet.facetType === 'range' && columnModel && (
                <RangeFacetFilter
                  facetResult={facet as FacetColumnResultRange}
                  columnModel={columnModel}
                  facetAliases={facetAliases}
                  collapsed={shouldStartCollapsed}
                  onChange={(values: string[]) =>
                    applyChangesToRangeColumn(
                      lastRequest,
                      facet as FacetColumnResultRange,
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
