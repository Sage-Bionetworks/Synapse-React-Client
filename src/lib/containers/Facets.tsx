import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import {
  getIsValueSelected,
  readFacetValues,
} from '../utils/functions/facetUtils'
import {
  FacetColumnResultValues,
  QueryBundleRequest,
} from '../utils/synapseTypes/'
import { getColorPallette } from './ColorGradient'
import { FacetSelection, QueryWrapperChildProps } from './QueryWrapper'
import { SELECT_ALL } from './table/SynapseTableConstants'
import TotalQueryResults from './TotalQueryResults'
library.add(faPlus)

export const SELECT_SINGLE_FACET = 'SELECT_SINGLE_FACET'

type CheckboxGroupProps = {
  isAllFilterSelected: boolean
  rgbIndex: number
  facetColumnResult: FacetColumnResultValues
  applyChanges: (
    ref: React.RefObject<HTMLSpanElement>,
    facetValue: string,
    selector: string,
    index: number,
  ) => (_event: React.MouseEvent<HTMLSpanElement>) => void
  showAllFacets: boolean
  lastFacetSelection: FacetSelection
  isLoading: boolean
}

export const FACET_SELECTED_CLASS = 'FACET_SELECTED_CLASS'
export const FACET_NOT_SELECTED_CLASS = 'FACET_NOT_SELECTED_CLASS'

/**
 * Checkbox group represents one column's set of checkbox filters
 *
 * @class CheckboxGroup
 * @extends {React.Component}
 */
const CheckboxGroup: React.FunctionComponent<CheckboxGroupProps> = (
  props: CheckboxGroupProps,
) => {
  const {
    facetColumnResult,
    showAllFacets,
    lastFacetSelection,
    isLoading,
    rgbIndex,
    isAllFilterSelected,
  } = props
  const children: any = []
  const ref: React.RefObject<HTMLSpanElement> = React.createRef()
  // Note: this actually sorts the data when it appears in the
  // table as it stands currently, this may change depending on
  // if that arrangment is no longer desired
  facetColumnResult.facetValues.sort((a: any, b: any) => {
    return b.count - a.count
  })
  const { colorPalette, textColors } = getColorPallette(
    rgbIndex,
    facetColumnResult.facetValues.length,
  )
  facetColumnResult.facetValues.forEach(
    (facetColumnResultValues, index: number) => {
      const key =
        facetColumnResult.columnName +
        facetColumnResultValues.value +
        facetColumnResultValues.count
      const textColor = textColors[index]
      const curColor = colorPalette[index]
      let style: any = {}

      const isSelected = isAllFilterSelected
        ? true
        : getIsValueSelected({
            isLoading,
            lastFacetSelection,
            columnName: facetColumnResult.columnName,
            curFacetSelection: facetColumnResultValues,
          })

      if (isSelected) {
        style = {
          background: curColor,
        }
      } else {
        style = {
          background: '#C4C4C4',
        }
      }
      // we add this class for testability
      const backgroundClass = isSelected
        ? FACET_SELECTED_CLASS
        : FACET_NOT_SELECTED_CLASS
      style.color = textColor
      const { value, count } = facetColumnResultValues
      const displayValue =
        value === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET'
          ? 'unannotated'
          : value

      children.push(
        <label
          style={style}
          className="SRC-facets SRC-primary-background-color-hover "
          key={key}
        >
          <span className="SRC-facets-text">
            {displayValue} ({count})
          </span>
          <input
            // @ts-ignore
            onChange={props.applyChanges(
              ref,
              value,
              SELECT_SINGLE_FACET,
              index,
            )}
            checked={isSelected}
            type="checkbox"
            value={value}
            className={`SRC-hidden SRC-facet-checkboxes ${backgroundClass}`}
          />
        </label>,
      )
    },
  )
  // By default only show 5 facets unless the user has clicked a facet, in which case
  // showAllFacets will be true.
  const childrenView = showAllFacets ? children : children.slice(0, 5)
  return (
    // need a span so that we can have a ref attachable
    <span ref={ref}>{childrenView}</span>
  )
}

type FacetsState = {
  showAllFacets: boolean
}

class Facets extends React.Component<QueryWrapperChildProps, FacetsState> {
  constructor(props: QueryWrapperChildProps) {
    super(props)
    this.applyChanges = this.applyChanges.bind(this)
    this.state = {
      showAllFacets: false,
    }
    this.showAllFacets = this.showAllFacets.bind(this)
    this.showButtons = this.showButtons.bind(this)
  }
  /**
   * Display the view of the facets
   *
   * @returns
   * @memberof Facets
   */
  public showFacetFilter() {
    if (!this.props.data!.facets) {
      throw Error(
        'Error on query request, must include facets in partmask to show facets',
      )
    }
    // Find the facetcolumn result according to the input filter
    const facetColumnResult = this.props.data!.facets!.find(
      (el) =>
        el.columnName === this.props.facet && el.facetType === 'enumeration',
    ) as FacetColumnResultValues
    if (!facetColumnResult) {
      throw Error('Error no matching facet found given specified facet')
    }

    return (
      <CheckboxGroup
        isAllFilterSelected={
          this.props.isAllFilterSelectedForFacet![this.props.facet!]
        }
        showAllFacets={this.state.showAllFacets}
        rgbIndex={this.props.rgbIndex!}
        key={facetColumnResult.columnName}
        facetColumnResult={facetColumnResult}
        applyChanges={this.applyChanges}
        isLoading={this.props.isLoading!}
        lastFacetSelection={this.props.lastFacetSelection!}
      />
    )
  }

  /**
   * Handle checkbox click event
   */
  public applyChanges = (
    ref: React.RefObject<HTMLSpanElement>,
    facetValue: string,
    selector: string,
    index: number,
  ) => (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault()
    if (!this.state.showAllFacets) {
      this.setState({
        showAllFacets: true,
      })
    }

    const { facet = '', isAllFilterSelectedForFacet = {} } = this.props

    const lastFacetSelection = {
      facetValue,
      selector,
      columnName: facet,
    } as FacetSelection
    isAllFilterSelectedForFacet[facet] = selector === SELECT_ALL
    this.props.updateParentState!({
      lastFacetSelection,
      isAllFilterSelectedForFacet,
      chartSelectionIndex: index,
    })

    // read input and fetch data
    const htmlCheckboxes = Array.from(
      ref.current!.querySelectorAll('.SRC-facet-checkboxes'),
    ) as HTMLInputElement[]
    // queryRequest is a deep clone
    const queryRequest: QueryBundleRequest = this.props.getLastQueryRequest!()
    const { newQueryRequest } = readFacetValues({
      htmlCheckboxes,
      queryRequest,
      selector,
      facet,
      value: facetValue,
    })

    queryRequest.query.offset = 0
    this.props.executeQueryRequest!(newQueryRequest)
  }

  public showAllFacets(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    this.setState({
      showAllFacets: true,
    })
  }

  public showButtons(
    curFacetsLength: number,
    ref: React.RefObject<HTMLDivElement>,
  ) {
    if (this.state.showAllFacets || curFacetsLength <= 5) {
      // this is hidden if there are > 5 facets, wait for user to make
      // an action for this to appear
      return (
        <button
          className="SRC-primary-text-color SRC-facet-select-all SRC-no-text-decor"
          onClick={this.applyChanges(ref, '', SELECT_ALL, 0)}
        >
          Select All
        </button>
      )
    }
    return (
      <button
        id="showAllFacetsButton"
        className="SRC-primary-text-color SRC-no-text-decor"
        onClick={this.showAllFacets}
      >
        Show All ({curFacetsLength})
      </button>
    )
  }

  public render() {
    if (!this.props.data) {
      return <div />
    }
    const { data, facet, unitDescription, isLoading, showBarChart } = this.props
    const { facets } = data
    if (!facets) {
      throw Error(
        'Error on query request, must include facets in partmask to show facets',
      )
    }
    const curFacetsIndex = facets.findIndex(
      (curFacet) =>
        curFacet.columnName === facet && curFacet.facetType === 'enumeration',
    )
    // cast is necessary because filter returns an array of arrays
    const facetColumnResultValues = facets[
      curFacetsIndex
    ] as FacetColumnResultValues

    if (!facetColumnResultValues) {
      return <div />
    }
    const ref: React.RefObject<HTMLDivElement> = React.createRef()
    return (
      <div className="SRC-syn-border-spacing">
        {!showBarChart && (
          <TotalQueryResults
            lastQueryRequest = {this.props.getLastQueryRequest!()}
            token={this.props.token}
            unitDescription={unitDescription!}
            frontText={'Displaying'}
            isLoading={isLoading!}
          />
        )}
        <form>
          <div ref={ref} className="SRC-marginFive form-group">
            {this.showFacetFilter()}
            {this.showButtons(facetColumnResultValues.facetValues.length, ref)}
          </div>
        </form>
      </div>
    )
  }
}

export { Facets, CheckboxGroup }
