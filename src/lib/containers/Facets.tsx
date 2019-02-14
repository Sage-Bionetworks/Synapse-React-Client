import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { FacetColumnResult, FacetColumnResultValues } from '../utils/jsonResponses/Table/FacetColumnResult'
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest'
import { getColorPallette } from './ColorGradient'
import { QueryWrapperChildProps } from './QueryWrapper'
import { cloneDeep } from '../utils/modules/'

export const SELECT_ALL = 'select all'
export const DESELECT_ALL = 'deselect all'

// Add all icons to the library so you can use it in your page
library.add(faTimes)
library.add(faPlus)

type CheckboxGroupProps = {
  rgbIndex: number
  isChecked: any
  facetColumnResult: FacetColumnResult
  clickHandler: any
  showAllFacets: boolean
  hasLoadedPastInitQuery: boolean
  lastFacetValueSelected: string
  isLoading: boolean
}

type Info = {
  index: number
  value: string
  lastFacetValueSelected: string
}

/**
 * Checkbox group represents one column's set of checkbox filters
 *
 * @class CheckboxGroup
 * @extends {React.Component}
 */
const CheckboxGroup: React.SFC<CheckboxGroupProps> = (props) => {

  const { facetColumnResult, showAllFacets } = props
  const children: any = []

  facetColumnResult.facetValues.sort((a: any, b: any) => {
    return b.count - a.count
  })

  const { colorPalette, textColors } = getColorPallette(props.rgbIndex, facetColumnResult.facetValues.length)
  facetColumnResult.facetValues.forEach((facetValue: any, index: number) => {

    const key = facetColumnResult.columnName + facetValue.value + facetValue.count
    const textColor = textColors[index]
    const curColor = colorPalette[index]
    let style: any = {}
    let isChecked = !props.hasLoadedPastInitQuery || facetValue.isSelected
    if (props.isLoading && props.lastFacetValueSelected === key) {
      isChecked = !isChecked
    }
    if (isChecked) {
      style = {
        background: curColor
      }
    } else {
      style = {
        background: '#C4C4C4'
      }
    }
    style.color = textColor
    const { value } = facetValue
    facetValue.displayValue = value === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET' ? 'unannotated' : value
    const icon = isChecked ? 'times' : 'plus'

    children.push(
      <span
        style={style}
        className="SRC-facets SRC-primary-background-color-hover SRC-nested-color"
        key={key}
        onClick={
          props.clickHandler(
            {
              index,
              value: facetValue.value,
              columnName: facetColumnResult.columnName,
              lastFacetValueSelected: key
            })
        }
      >
        <span className="SRC-facets-text">
          {' '}
          &nbsp;&nbsp; {facetValue.displayValue} ({facetValue.count}){' '}
        </span>
        <span>&nbsp;&nbsp;</span>
        <FontAwesomeIcon className="SRC-facets-icon" icon={icon} />
        <span>&nbsp;&nbsp;</span>
      </span>
    )
  })
  // By default only show 5 facets unless the user has clicked a facet, in which case
  // showAllFacets will be true.
  const childrenView = children.map((child: any, index: number) => !showAllFacets && index > 4 ? false : child)
  return (
    <React.Fragment>
        {childrenView}
    </React.Fragment>
  )
}

type FacetsState = {
  showAllFacets: boolean
}

class Facets extends React.Component<QueryWrapperChildProps, FacetsState> {

  constructor(props: QueryWrapperChildProps) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
    this.state = {
      showAllFacets: false
    }
    this.showAllFacets = this.showAllFacets.bind(this)
    this.updateSelection = this.updateSelection.bind(this)
    this.showButtons = this.showButtons.bind(this)
  }
  /**
   * Display the view of the facets
   *
   * @returns
   * @memberof Facets
   */
  public showFacetFilter() {
    //  find the facetcolumn result according to the input filter
    const facetColumnResult = this.props.data!.facets.
      find((el: FacetColumnResult) => el.columnName === this.props.filter && el.facetType === 'enumeration')!

    return (
      <CheckboxGroup
        hasLoadedPastInitQuery={this.props.hasLoadedPastInitQuery!}
        showAllFacets={this.state.showAllFacets}
        rgbIndex={this.props.rgbIndex!}
        key={facetColumnResult.columnName}
        facetColumnResult={facetColumnResult}
        isChecked={this.props.isChecked}
        clickHandler={this.clickHandler}
        isLoading={this.props.isLoading!}
        lastFacetValueSelected={this.props.lastFacetValueSelected!}
      />
    )
  }

  /**
   * Handle checkbox click event
   */
  public clickHandler = (dict: Info) => (_event: React.MouseEvent<HTMLSpanElement>) => {
    if (!this.state.showAllFacets) {
      this.setState({
        showAllFacets: true
      })
    }
    // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
    const queryRequest: QueryBundleRequest = this.props.getLastQueryRequest!()
    const { selectedFacets } = queryRequest.query
    // grab the facet values associated for this column
    const specificFacet = selectedFacets!.find(el => el.columnName === this.props.filter)!
    // if its not selected then we add as having been chosen, otherwise we
    // have to delete it
    if (specificFacet.facetValues.indexOf(dict.value) === -1) {
      specificFacet.facetValues.push(dict.value)
    } else {
      // remove value
      specificFacet.facetValues.splice(specificFacet.facetValues.indexOf(dict.value), 1)
    }
    // update ischecked to keep the barchart in sync
    const { isChecked } = cloneDeep(this.props)
    const isCheckedValue = isChecked![dict.index]
    // if its undefined then it hasn't been seen before, in which case its considered 'true'
    // so we set the value to false
    isChecked![dict.index] = isCheckedValue === undefined ? false : !isChecked![dict.index]

    queryRequest.query.selectedFacets = selectedFacets
    queryRequest.query.offset = 0
    this.props.updateParentState!({
      isChecked,
      lastFacetValueSelected: dict.lastFacetValueSelected
    })
    this.props.executeQueryRequest!(queryRequest)
  }

  /**
   * Handle SELECT_ALL or DESELECT_ALL event, selection group specifies which
   * option was chosen
   *
   * @memberof Facets
   */
  public updateSelection = (selectionGroup: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const { isChecked } = cloneDeep(this.props)
    const lengthOfFacets = this.props.data!.facets!.find(el => el.columnName === this.props.filter)!.facetValues.length
    // we go through and set all facets as selected or deselected per the button
    // clicked that initiated this function call
    for (let i = 0; i < lengthOfFacets; i += 1) {
      if (selectionGroup === SELECT_ALL) {
        isChecked![i] = true
      } else {
        isChecked![i] = false
      }
    }
    // we update the parent state with isChecked so that the barchart will reflect
    // in the graph slices on or off
    this.props.updateParentState!({ isChecked })
    if (selectionGroup === SELECT_ALL) {
      // if the user chose to select all facets then we can have the parent component
      // run the first query it was given
      this.props.executeInitialQueryRequest!()
    } else {
      const queryRequest = this.props.getLastQueryRequest!() as QueryBundleRequest
      const { selectedFacets } = queryRequest.query
      // if the user chose to deselect all facets then we zero out the facet selection
      const facetColumnResultValues = selectedFacets!.find(value => (value.columnName === this.props.filter))
      facetColumnResultValues!.facetValues = []
      this.props.executeQueryRequest!(queryRequest)
    }

  }

  public showAllFacets(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    this.setState({
      showAllFacets: true
    })
  }

  public showButtons(showAllFacets: boolean, curFacetsLength: number) {
    if (showAllFacets) {
      // this is hidden if there are > 5 facets, wait for user to make
      // an action for this to appear
      return (
        <React.Fragment>
          <a
            href={''}
            className="SRC-primary-text-color SRC-no-text-decor"
            onClick={this.updateSelection(SELECT_ALL)}
          >
            {' '}
            Select All{' '}
          </a>
          <span className="SRC-facets-divider">
            |
          </span>
          <a
            href={''}
            className="SRC-primary-text-color SRC-no-text-decor"
            onClick={this.updateSelection(DESELECT_ALL)}
          >
            {' '}
            Deselect All{' '}
          </a>
        </React.Fragment>
      )
    }

    return (
      <a
        href={''}
        id="showAllFacetsButton"
        className="SRC-primary-text-color SRC-no-text-decor"
        onClick={this.showAllFacets}
      >
        {' '}
        Show All ({curFacetsLength}){' '}
      </a>
    )
  }

  public render() {
    if (this.props.data === undefined) {
      return (<div/>)
    }
    let { showAllFacets } = this.state
    const { data, filter } = this.props
    const { facets } = data

    const curFacetsIndex = facets.findIndex(facet => facet.columnName === filter && facet.facetType === 'enumeration')
    // cast is necessary because filter returns an array of arrays
    const facetColumnResultValues = facets[curFacetsIndex] as FacetColumnResultValues

    if (!facetColumnResultValues) {
      return (<div/>)
    }

    if (facetColumnResultValues.facetValues.length < 5) {
      // override
      showAllFacets = true
    }

    return (
      <div className="container-fluid SRC-syn-border-spacing ">
        <div className="col-xs">
          <form>
            <div className="SRC-marginFive form-group">
              {this.showFacetFilter()}
              <span className="SRC-inlineBlock">
                {this.showButtons(showAllFacets, facetColumnResultValues.facetValues.length)}
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export { Facets, CheckboxGroup }
