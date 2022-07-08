import { cloneDeep } from 'lodash-es'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Button } from 'react-bootstrap'
import { SkeletonInlineBlock } from '../assets/skeletons/SkeletonInlineBlock'
import {
  getStoredEntityHeaders,
  getStoredUserProfiles,
} from '../utils/functions/getDataFromFromStorage'
import {
  ColumnModel,
  ColumnType,
  EntityHeader,
  FacetColumnRequest,
  FacetColumnResult,
  FacetColumnResultRange,
  FacetColumnResultValues,
  QueryBundleRequest,
  UserProfile,
} from '../utils/synapseTypes'
import {
  isColumnMultiValueFunctionQueryFilter,
  isColumnSingleValueQueryFilter,
  isTextMatchesQueryFilter,
  QueryFilter,
  TextMatchesQueryFilter,
} from '../utils/synapseTypes/Table/QueryFilter'
import { useQueryVisualizationContext } from './QueryVisualizationWrapper'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
} from './QueryWrapper'
import { useQueryContext } from './QueryContext'
import SelectionCriteriaPill, {
  FacetWithSelection,
  SelectionCriteriaPillProps,
} from './widgets/facet-nav/SelectionCriteriaPill'
import {
  applyChangesToRangeColumn,
  applyChangesToValuesColumn,
} from './widgets/query-filter/QueryFilter'
import { RadioValuesEnum } from './widgets/query-filter/RangeFacetFilter'

export type TotalQueryResultsProps = {
  style?: React.CSSProperties
  frontText: string
  endText?: string
  applyChanges?: (newFacets: FacetColumnRequest[]) => void
  showNotch?: boolean
}

// This is a stateful component so that during load the component can hold onto the previous
// total instead of showing 0 results for the intermittent loading state.

const TotalQueryResults: FunctionComponent<TotalQueryResultsProps> = ({
  style,
  frontText,
  endText = '',
  showNotch = false,
}) => {
  const {
    data,
    isLoadingNewBundle,
    getLastQueryRequest,
    executeQueryRequest,
    getInitQueryRequest,
    error,
  } = useQueryContext()

  const { topLevelControlsState, unitDescription } =
    useQueryVisualizationContext()

  const total = data?.queryCount
  const [facetsWithSelection, setFacetsWithSelection] = useState<
    FacetWithSelection[]
  >([])

  const applyChanges = (facets: FacetColumnRequest[]) => {
    const queryRequest: QueryBundleRequest = cloneDeep(getLastQueryRequest())
    queryRequest.query.selectedFacets = facets
    queryRequest.query.offset = 0
    executeQueryRequest(queryRequest)
  }

  const getEnumFacetsWithSelections = (
    facets: FacetColumnResult[],
  ): FacetColumnResultValues[] => {
    const enumFacets = facets.filter(
      facet => facet.facetType === 'enumeration',
    ) as FacetColumnResultValues[]
    const enumFacetsWithSelections = enumFacets.filter(
      facet =>
        facet.facetValues.filter(value => value.isSelected === true).length > 0,
    )
    return enumFacetsWithSelections
  }

  const getRangeFacetsWithSelections = (
    facets: FacetColumnResult[],
  ): FacetColumnResultRange[] => {
    const rangeFacets = facets.filter(
      facet => facet.facetType === 'range',
    ) as FacetColumnResultRange[]
    const rangeFacetsWithSelections = rangeFacets.filter(
      facet => facet.selectedMax || facet.selectedMin,
    )
    return rangeFacetsWithSelections
  }

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

  const transformEnumFacetsForSelectionDisplay = useCallback(
    (
      facets: FacetColumnResultValues[],
      columnModels: ColumnModel[],
    ): FacetWithSelection[] => {
      const lookUpEntityHeaders = getStoredEntityHeaders()
      const lookUpUserProfiles = getStoredUserProfiles()
      const filteredEnumWithSelectedValuesOnly: FacetWithSelection[] = []
      facets.forEach(facet => {
        const columnModel = columnModels.find(
          model => model.name === facet.columnName,
        )
        facet.facetValues.forEach(facetValue => {
          if (facetValue.isSelected) {
            let displayValue = facetValue.value
            if (
              columnModel?.columnType === ColumnType.ENTITYID ||
              columnModel?.columnType === ColumnType.ENTITYID_LIST
            ) {
              displayValue = getDisplayValueForEntityColumn(
                lookUpEntityHeaders,
                facetValue.value,
              )
            } else if (
              columnModel?.columnType === ColumnType.USERID ||
              columnModel?.columnType === ColumnType.USERID_LIST
            ) {
              displayValue = getDisplayValueUserIdColumn(
                lookUpUserProfiles,
                facetValue.value,
              )
            }

            filteredEnumWithSelectedValuesOnly.push({
              facet,
              displayValue,
              selectedValue: facetValue,
            })
          }
        })
      })
      return filteredEnumWithSelectedValuesOnly
    },
    [],
  )

  useEffect(() => {
    if (data) {
      const rangeFacetsWithSelections = getRangeFacetsWithSelections(
        data.facets!,
      )
      const enumFacetsWithSelections = getEnumFacetsWithSelections(data.facets!)
      const rangeFacetsForDisplay = rangeFacetsWithSelections.map(facet => ({
        facet,
      }))
      const enumFacetsForDisplay = transformEnumFacetsForSelectionDisplay(
        enumFacetsWithSelections,
        data.columnModels!,
      )

      setFacetsWithSelection([
        ...rangeFacetsForDisplay,
        ...enumFacetsForDisplay,
      ])
    }
  }, [data, transformEnumFacetsForSelectionDisplay])

  const removeFacetSelection = (facetWithSelection: FacetWithSelection) => {
    const { facet, selectedValue } = facetWithSelection
    if (facet.facetType === 'enumeration') {
      applyChangesToValuesColumn(
        getLastQueryRequest(),
        facet,
        applyChanges,
        selectedValue?.value,
        false,
      )
    } else {
      applyChangesToRangeColumn(getLastQueryRequest(), facet, applyChanges, [
        RadioValuesEnum.ANY,
        RadioValuesEnum.ANY,
      ])
    }
  }

  const removeColumnSearchQuerySelection = (
    columnName: string,
    value: string,
  ) => {
    const cloneLastQueryRequest = cloneDeep(getLastQueryRequest())
    if (!cloneLastQueryRequest.query.additionalFilters) {
      return
    }
    cloneLastQueryRequest.query.additionalFilters =
      cloneLastQueryRequest.query.additionalFilters?.reduce(function (
        filtered: QueryFilter[],
        el: QueryFilter,
      ) {
        if (
          isColumnSingleValueQueryFilter(el) ||
          isColumnMultiValueFunctionQueryFilter(el)
        ) {
          // For column-specific QueryFilters, filter out matching values on the matching column
          const newElement = {
            columnName: el.columnName,
            values:
              el.columnName === columnName
                ? el.values.filter(el => el !== value)
                : el.values,
            operator: isColumnSingleValueQueryFilter(el)
              ? el.operator
              : undefined,
            function: isColumnMultiValueFunctionQueryFilter(el)
              ? el.function
              : undefined,
            concreteType: el.concreteType,
          }

          // Drop this QueryFilter if it has no more values
          if (newElement.values.length > 0) {
            filtered.push(newElement)
          }
        } else {
          // Don't alter/drop non-column-specific QueryFilters
          filtered.push(el)
        }
        return filtered
      },
      [])

    executeQueryRequest(cloneLastQueryRequest)
  }

  const removeTextMatchesQueryFilter = (
    queryFilter: TextMatchesQueryFilter,
  ) => {
    const cloneLastQueryRequest = cloneDeep(getLastQueryRequest())
    if (!cloneLastQueryRequest.query.additionalFilters) {
      return
    }
    cloneLastQueryRequest.query.additionalFilters =
      cloneLastQueryRequest.query.additionalFilters.filter(
        el =>
          !(
            isTextMatchesQueryFilter(el) &&
            el.searchExpression === queryFilter.searchExpression
          ),
      )
    executeQueryRequest(cloneLastQueryRequest)
  }

  const clearAll = () => {
    const initQueryRequest = cloneDeep(getInitQueryRequest())
    initQueryRequest.query.additionalFilters = []
    executeQueryRequest(initQueryRequest)
  }

  const searchSelectionCriteriaPillProps:
    | (SelectionCriteriaPillProps & {
        key: string
      })[]
    | undefined = getLastQueryRequest().query.additionalFilters?.reduce(
    (
      pillProps: (SelectionCriteriaPillProps & {
        key: string
      })[],
      el: QueryFilter,
    ) => {
      if (isTextMatchesQueryFilter(el)) {
        pillProps.push({
          key: `fulltextsearch-${el.searchExpression}`,
          filter: {
            value: el.searchExpression,
          },
          onRemove: () => removeTextMatchesQueryFilter(el),
        })
      } else if (
        isColumnSingleValueQueryFilter(el) ||
        isColumnMultiValueFunctionQueryFilter(el)
      ) {
        const { columnName } = el
        el.values.forEach(value => {
          pillProps.push({
            key: `columnsearch-${value}`,
            filter: {
              columnName,
              value,
            },
            onRemove: () =>
              removeColumnSearchQuerySelection(el.columnName, value),
          })
        })
      } else {
        console.warn('Encountered unexpected QueryFilter: ', el)
      }
      return pillProps
    },
    [],
  )
  const showFacetFilter = topLevelControlsState?.showFacetFilter
  if (error) {
    return <></>
  }
  return (
    <div
      className={`TotalQueryResults ${showNotch ? 'notch-down' : ''} ${
        showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      }`}
      style={style}
    >
      {isLoadingNewBundle ? (
        <SkeletonInlineBlock width={100} />
      ) : (
        <>
          <span className="SRC-boldText SRC-text-title SRC-centerContent">
            {frontText} {total?.toLocaleString()} {unitDescription} {endText}
          </span>
          <div className="TotalQueryResults__selections">
            {searchSelectionCriteriaPillProps &&
              searchSelectionCriteriaPillProps.map(props => (
                <SelectionCriteriaPill {...props} key={props.key} />
              ))}
            {facetsWithSelection.map((selectedFacet, index) => (
              <SelectionCriteriaPill
                key={`facets-${
                  selectedFacet.selectedValue?.value ??
                  selectedFacet.displayValue ??
                  index
                }`}
                facetWithSelection={selectedFacet}
                onRemove={() => removeFacetSelection(selectedFacet)}
              />
            ))}
          </div>
          {(facetsWithSelection.length > 0 ||
            (searchSelectionCriteriaPillProps &&
              searchSelectionCriteriaPillProps.length > 0)) && (
            <Button
              onClick={clearAll}
              variant="light"
              className="TotalQueryResults__clearall"
            >
              Clear All
            </Button>
          )}
        </>
      )}
    </div>
  )
}

export default TotalQueryResults
