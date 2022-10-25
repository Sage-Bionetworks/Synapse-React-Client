import React, { useCallback } from 'react'
import { QueryContextType, useQueryContext } from '../../QueryContext'
import {
  ColumnMultiValueFunctionQueryFilter,
  ColumnSingleValueQueryFilter,
  isColumnMultiValueFunctionQueryFilter,
  isColumnSingleValueQueryFilter,
  isTextMatchesQueryFilter,
  QueryFilter,
  TextMatchesQueryFilter,
} from '../../../utils/synapseTypes/Table/QueryFilter'
import SelectionCriteriaPill, {
  FacetWithSelection,
  SelectionCriteriaPillProps,
} from './SelectionCriteriaPill'
import { SynapseConstants } from '../../../utils'
import {
  ColumnModel,
  ColumnType,
  EntityHeader,
  FacetColumnRequest,
  FacetColumnResultRange,
  FacetColumnResultValues,
  isFacetColumnRangeRequest,
  isFacetColumnValuesRequest,
  UserProfile,
} from '../../../utils/synapseTypes'
import {
  getStoredEntityHeaders,
  getStoredUserProfiles,
} from '../../../utils/functions/getDataFromFromStorage'
import {
  QueryVisualizationContextType,
  useQueryVisualizationContext,
} from '../../QueryVisualizationWrapper'

const getDisplayValueForEntityColumn = (
  entityHeaders: EntityHeader[],
  facetValue: string,
): string => {
  const entity = entityHeaders.find(item => item.id === facetValue)
  return entity?.name ?? facetValue
}

const getDisplayValueUserIdColumn = (
  userProfiles: UserProfile[],
  facetValue: string,
): string => {
  const userProfile = userProfiles.find(item => item.ownerId === facetValue)
  return userProfile?.userName || facetValue
}
// const transformEnumFacetsForSelectionDisplay = useCallback(
//   (
//     facets: FacetColumnResultValues[],
//     columnModels: ColumnModel[],
//   ): FacetWithSelection[] => {
//     const lookUpEntityHeaders = getStoredEntityHeaders()
//     const lookUpUserProfiles = getStoredUserProfiles()
//     const filteredEnumWithSelectedValuesOnly: FacetWithSelection[] = []
//     facets.forEach(facet => {
//       const columnModel = columnModels.find(
//         model => model.name === facet.columnName,
//       )
//       facet.facetValues.forEach(facetValue => {
//         if (facetValue.isSelected) {
//           let displayValue = facetValue.value
//           if (
//             columnModel?.columnType === ColumnType.ENTITYID ||
//             columnModel?.columnType === ColumnType.ENTITYID_LIST
//           ) {
//             displayValue = getDisplayValueForEntityColumn(
//               lookUpEntityHeaders,
//               facetValue.value,
//             )
//           } else if (
//             columnModel?.columnType === ColumnType.USERID ||
//             columnModel?.columnType === ColumnType.USERID_LIST
//           ) {
//             displayValue = getDisplayValueUserIdColumn(
//               lookUpUserProfiles,
//               facetValue.value,
//             )
//           }
//
//           filteredEnumWithSelectedValuesOnly.push({
//             facet,
//             displayValue,
//             selectedValue: facetValue,
//           })
//         }
//       })
//     })
//     return filteredEnumWithSelectedValuesOnly
//   },
//   [],
// )

function getPillPropsFromColumnQueryFilter(
  queryFilter:
    | ColumnSingleValueQueryFilter
    | ColumnMultiValueFunctionQueryFilter,
  queryContext: QueryContextType,
): SelectionCriteriaPillProps[] {
  // ColumnSingleValueQueryFilter and ColumnMultiValueQueryFilter both allow for a list of values
  // We want to render 1 pill per value, so we expand
  return queryFilter.values.map(value => {
    let filterValue = value

    if (value?.startsWith('%') && value?.endsWith('%')) {
      // strip '%' wildcard character when using a LIKE condition
      filterValue = filterValue.substring(1, filterValue.length - 1)
    }
    const text = `${queryFilter.columnName}: ${filterValue}`
    return {
      key: `queryFilter-${queryFilter.concreteType}-${queryFilter.columnName}-${value}`,
      innerText: text,
      tooltipText: text,
      onRemoveFilter: () => {
        queryContext.removeValueFromQueryFilter(queryFilter, value)
      },
    }
  })
}

function getPillPropsFromTextMatchesQueryFilter(
  queryFilter: TextMatchesQueryFilter,
  queryContext: QueryContextType,
): SelectionCriteriaPillProps {
  return {
    key: `queryFilter-${queryFilter.concreteType}-${queryFilter.searchExpression}`,
    innerText: queryFilter.searchExpression,
    tooltipText: `Text matches: "${queryFilter.searchExpression}"`,
    onRemoveFilter: () => {
      queryContext.removeQueryFilter(queryFilter)
    },
  }
}

function getPillPropsFromQueryFilter(
  queryFilter: QueryFilter,
  queryContext: QueryContextType,
): SelectionCriteriaPillProps[] {
  console.log('lockedColumn', queryContext.lockedColumn)
  if (
    isColumnSingleValueQueryFilter(queryFilter) ||
    isColumnMultiValueFunctionQueryFilter(queryFilter)
  ) {
    if (queryFilter.columnName === queryContext.lockedColumn?.columnName) {
      return []
    }
    return getPillPropsFromColumnQueryFilter(queryFilter, queryContext)
  } else if (isTextMatchesQueryFilter(queryFilter)) {
    return [getPillPropsFromTextMatchesQueryFilter(queryFilter, queryContext)]
  } else {
    console.log('Unknown query filter type', queryFilter.concreteType)
    return []
  }
}

function getPillPropsFromFacet(
  selectedFacet: FacetColumnRequest,
  queryContext: QueryContextType,
  queryVisualizationContext: QueryVisualizationContextType,
): SelectionCriteriaPillProps[] {
  if (selectedFacet.columnName === queryContext.lockedColumn?.columnName) {
    return []
  }
  const { getColumnDisplayName } = queryVisualizationContext
  if (isFacetColumnValuesRequest(selectedFacet)) {
    return selectedFacet.facetValues.map(facetValue => {
      const innerText =
        facetValue === SynapseConstants.VALUE_NOT_SET
          ? SynapseConstants.FRIENDLY_VALUE_NOT_SET
          : facetValue
      return {
        key: `facet-${selectedFacet.concreteType}-${selectedFacet.columnName}-${facetValue}`,
        innerText: innerText,
        tooltipText: `${getColumnDisplayName(
          selectedFacet.columnName,
        )}: ${innerText}`,
        onRemoveFilter: () => {
          queryContext.removeValueFromSelectedFacet(selectedFacet, facetValue)
        },
      }
    })
  } else if (isFacetColumnRangeRequest(selectedFacet)) {
    const innerText = `${selectedFacet.min} - ${selectedFacet.max}`
    return [
      {
        key: `facet-${selectedFacet.concreteType}-${selectedFacet.columnName}-${selectedFacet.min}-${selectedFacet.max}`,
        innerText: innerText,
        tooltipText: `${getColumnDisplayName(
          selectedFacet.columnName,
        )}: ${innerText}`,
        onRemoveFilter: () => {
          queryContext.removeSelectedFacet(selectedFacet)
        },
      },
    ]
  } else {
    console.log(
      'Unknown facet type',
      (selectedFacet as unknown as FacetColumnRequest).concreteType,
    )
    return []
  }
}

function SelectionCriteriaPills() {
  // TODO: The facet should be the display value, not column name
  // TODO: Filter out locked columns
  const queryContext = useQueryContext()
  const queryVisualizationContext = useQueryVisualizationContext()
  const { getLastQueryRequest } = queryContext
  const lastQueryRequest = getLastQueryRequest()

  const queryFilterPillProps = (
    lastQueryRequest.query?.additionalFilters ?? []
  ).flatMap(qf => getPillPropsFromQueryFilter(qf, queryContext))

  const facetPillProps = (lastQueryRequest.query.selectedFacets ?? []).flatMap(
    facet =>
      getPillPropsFromFacet(facet, queryContext, queryVisualizationContext),
  )

  const allPills = [...queryFilterPillProps, ...facetPillProps]

  return (
    <>
      {allPills.map(pillProps => {
        // Encode the key because the facet may include an illegal character
        const key = encodeURIComponent(pillProps.key)
        return <SelectionCriteriaPill {...pillProps} key={key} />
      })}
    </>
  )
}

export default SelectionCriteriaPills
