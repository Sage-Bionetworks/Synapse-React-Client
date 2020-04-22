import * as React from 'react'
import {
  QueryBundleRequest,
  FacetColumnResultRange,
  FacetColumnResultValues,
  EntityHeader,
  UserProfile,
  FacetColumnResult,
  ColumnModel,
  FacetColumnRequest,
} from '../utils/synapseTypes'
import { SynapseClient, SynapseConstants } from '../'
import {
  getStoredEntityHeaders,
  getStoredUserProfiles,
} from '../utils/functions/getDataFromFromStorage'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { cloneDeep } from 'lodash-es'
import SelectionCriteriaPill, {
  FacetWithSelection,
} from '../containers/widgets/facet-nav/SelectionCriteriaPill'
import {
  applyChangesToValuesColumn,
  applyChangesToRangeColumn,
} from '../containers/widgets/query-filter/QueryFilter'
import { RadioValuesEnum } from '../containers/widgets/query-filter/RangeFacetFilter'
import { useState, FunctionComponent } from 'react'

export type TotalQueryResultsProps = {
  isLoading: boolean
  style?: React.CSSProperties
  lastQueryRequest: QueryBundleRequest
  executeQueryRequest?: (param: QueryBundleRequest) => void
  token: string | undefined
  unitDescription: string
  frontText: string
  applyChanges?: Function
}

// This is a stateful component so that during load the component can hold onto the previous
// total instead of showing 0 results for the intermittent loading state.

const TotalQueryResults: FunctionComponent<TotalQueryResultsProps> = ({
  style,
  unitDescription,
  frontText,
  lastQueryRequest,
  token,
  isLoading: parentLoading,
  executeQueryRequest,
}) => {
  const [total, setTotal] = useState<number | undefined>(undefined) // undefined to start
  const [isLoading, setIsLoading] = useState(false)
  const [facetsWithSelection, setFacetsWithSelection] = useState<
    FacetWithSelection[]
  >([])

  const applyChanges = (facets: FacetColumnRequest[]) => {
    const queryRequest: QueryBundleRequest = cloneDeep(lastQueryRequest)
    queryRequest.query.selectedFacets = facets
    executeQueryRequest!(queryRequest)
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
    return entity?.name || facetValue
  }

  const getDisplayValueUserIdColumn = (
    userProfiles: UserProfile[],
    facetValue: string,
  ): string => {
    const userProfile = userProfiles.find(item => item.ownerId === facetValue)
    return userProfile?.userName || facetValue
  }

  const transformEnumFacetsForSelectionDisplay = (
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
          if (columnModel?.columnType === 'ENTITYID') {
            displayValue = getDisplayValueForEntityColumn(
              lookUpEntityHeaders,
              facetValue.value,
            )
          } else if (columnModel?.columnType === 'USERID') {
            displayValue = getDisplayValueUserIdColumn(
              lookUpUserProfiles,
              facetValue.value,
            )
          }

          filteredEnumWithSelectedValuesOnly.push({
            facet: facet,
            selectedValue: facetValue,
            displayValue: displayValue,
          })
        }
      })
    })
    return filteredEnumWithSelectedValuesOnly
  }

  useDeepCompareEffect(() => {
    const calculateTotal = async () => {
      const cloneLastQueryRequest = cloneDeep(lastQueryRequest)
      cloneLastQueryRequest.partMask =
        SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
        SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
        SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS
      if (parentLoading || total === undefined) {
        setIsLoading(true)
        SynapseClient.getQueryTableResults(cloneLastQueryRequest, token)
          .then(data => {
            setTotal(data.queryCount!)
            const rangeFacetsWithSelections = getRangeFacetsWithSelections(
              data.facets!,
            )
            const enumFacetsWithSelections = getEnumFacetsWithSelections(
              data.facets!,
            )
            const rangeFacetsForDisplay = rangeFacetsWithSelections.map(
              facet => ({ facet }),
            )
            const enumFacetsForDisplay = transformEnumFacetsForSelectionDisplay(
              enumFacetsWithSelections,
              data.columnModels!,
            )

            setFacetsWithSelection([
              ...rangeFacetsForDisplay,
              ...enumFacetsForDisplay,
            ])
          })
          .catch(err => {
            console.error('err ', err)
          })
          .finally(() => {
            setIsLoading(false)
          })
      }
    }
    calculateTotal()
  }, [parentLoading, token, lastQueryRequest])

  const removeSelection = ({ facet, selectedValue }: FacetWithSelection) => {
    console.log(facet)
    console.log(selectedValue)
    if (facet.facetType === 'enumeration') {
      applyChangesToValuesColumn(
        lastQueryRequest,
        facet as FacetColumnResultValues,
        applyChanges!,
        selectedValue?.value,
        false,
      )
    } else {
      applyChangesToRangeColumn(
        lastQueryRequest,
        facet as FacetColumnResultRange,
        applyChanges!,
        [RadioValuesEnum.ANY, RadioValuesEnum.ANY],
      )
    }
  }

  return (
    <div className="TotalQueryResults" style={style}>
      <span className="SRC-boldText SRC-text-title SRC-centerContent">
        {frontText} {total} {unitDescription}{' '}
      </span>
      <div className="TotalQueryResults__selections">
        {facetsWithSelection.map((selectedFacet, index) => (
          <SelectionCriteriaPill
            key={
              selectedFacet.selectedValue?.value ?? selectedFacet.displayValue
            }
            facetWithSelection={selectedFacet}
            index={index}
            onRemove={removeSelection}
          ></SelectionCriteriaPill>
        ))}
      </div>
      {isLoading && (
        <span style={{ marginLeft: '2px' }} className={'spinner'} />
      )}
    </div>
  )
}

export default TotalQueryResults
