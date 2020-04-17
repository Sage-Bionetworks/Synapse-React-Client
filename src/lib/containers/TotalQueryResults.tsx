import * as React from 'react'
import {
  QueryBundleRequest,
  FacetColumnResultRange,
  FacetColumnResultValues,
  EntityHeader,
  UserProfile,
  FacetColumnResult,
  ColumnModel,
} from '../utils/synapseTypes'
import { SynapseClient, SynapseConstants } from '../'
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
  //getLastQueryRequest: (() => QueryBundleRequest) | undefined
  lastQueryRequest: QueryBundleRequest
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
  applyChanges = () => '',
}) => {
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedFacets, setSelectedFacets] = useState<FacetWithSelection[]>([])

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

  const getStoredEntityHeaders = (): EntityHeader[] => {
    try {
      const lookUpEntityHeaders: EntityHeader[] = JSON.parse(
        localStorage.getItem(SynapseConstants.ENTITY_HEADER_STORAGE_KEY) || '',
      )
      return lookUpEntityHeaders
    } catch (e) {
      return []
    }
  }

  const getStoredUserProfiles = (): UserProfile[] => {
    try {
      const lookUpUserIds: UserProfile[] = JSON.parse(
        localStorage.getItem(SynapseConstants.USER_PROFILE_STORAGE_KEY) || '',
      )
      return lookUpUserIds
    } catch (e) {
      return []
    }
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
    let filteredEnumWithSelectedValuesOnly: FacetWithSelection[] = []
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
      if (!parentLoading) {
        setIsLoading(true)
        SynapseClient.getQueryTableResults(cloneLastQueryRequest, token)
          .then((data) => {
            setTotal(data.queryCount!)
            const rangeFacetsWithSelections = getRangeFacetsWithSelections(
              data.facets!,
            )
            const enumFacetsWithSelections = getEnumFacetsWithSelections(
              data.facets!,
            )
            const rangeFacetsForDisplay = rangeFacetsWithSelections.map(
              facet => ({ facet: facet }),
            )
            const enumFacetsForDisplay = transformEnumFacetsForSelectionDisplay(
              enumFacetsWithSelections,
              data.columnModels!,
            )

            setSelectedFacets([
              ...rangeFacetsForDisplay,
              ...enumFacetsForDisplay,
            ])
          })
          .catch((err) => {
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
        {selectedFacets.map((facet, index) => (
          <SelectionCriteriaPill
            facet={facet}
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
