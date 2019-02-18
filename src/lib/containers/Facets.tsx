import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import {
  FacetColumnResultValueCount,
  FacetColumnResultValues,
  FacetColumnResult
} from '../utils/jsonResponses/Table/FacetColumnResult'
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest'
import { getColorPallette } from './ColorGradient'
import { QueryWrapperChildProps, FacetSelection } from './QueryWrapper'
import { cloneDeep } from '../utils/modules/'

import { SELECT_ALL, DESELECT_ALL } from './SynapseTable'
import { getIsValueSelected, getIsCheckedArray } from '../utils/modules/facetUtils'

// Add all icons to the library so you can use it in your page
library.add(faTimes)
library.add(faPlus)

type CheckboxGroupProps = {
  rgbIndex: number
  isChecked: any
  facetColumnResult: FacetColumnResultValues
  handleClick: (ref: React.RefObject<HTMLSpanElement>, selector: string) =>
    (_event: React.MouseEvent<HTMLSpanElement>) => void
  showAllFacets: boolean
  hasLoadedPastInitQuery: boolean
  lastFacetSelection: FacetSelection
  isLoading: boolean
}

/**
 * Checkbox group represents one column's set of checkbox filters
 *
 * @class CheckboxGroup
 * @extends {React.Component}
 */
const CheckboxGroup: React.SFC<CheckboxGroupProps> = (props) => {

  const {
    facetColumnResult,
    showAllFacets,
    lastFacetSelection,
    isLoading,
    hasLoadedPastInitQuery,
    rgbIndex
  } = props
  const children: any = []
  const ref: React.RefObject<HTMLSpanElement> = React.createRef()
  // Note: this actually sorts the data when it appears in the
  // table as it stands currently, this may change depending on
  // if that arrangment is no longer desired
  facetColumnResult.facetValues.sort((a: any, b: any) => {
    return b.count - a.count
  })
  const { colorPalette, textColors } = getColorPallette(rgbIndex, facetColumnResult.facetValues.length)
  facetColumnResult.facetValues.forEach((facetColumnResultValues: FacetColumnResultValueCount, index: number) => {

    const key = facetColumnResult.columnName + facetColumnResultValues.value + facetColumnResultValues.count
    const textColor = textColors[index]
    const curColor = colorPalette[index]
    let style: any = {}

    const isSelected = getIsValueSelected({
      hasLoadedPastInitQuery,
      isLoading,
      lastFacetSelection,
      columnName: facetColumnResult.columnName,
      curFacetSelection: {
        isSelected: facetColumnResultValues.isSelected,
        facetValue: facetColumnResultValues.value
      }
    })

    if (isSelected) {
      style = {
        background: curColor
      }
    } else {
      style = {
        background: '#C4C4C4'
      }
    }
    style.color = textColor
    const { value, count } = facetColumnResultValues
    const displayValue = value === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET' ? 'unannotated' : value
    const icon = isSelected ? 'times' : 'plus'

    children.push(
      <span
        style={style}
        className="SRC-facets SRC-primary-background-color-hover SRC-nested-color"
        key={key}
        onClick={props.handleClick(ref, '')}
      >
        <span className="SRC-facets-text">
          {' '}
          &nbsp;&nbsp; {displayValue} ({count}){' '}
        </span>
        <input type="checkbox" value={value} className="SRC-hidden SRC-facet-checkboxes" />
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
    <span ref={ref}>
      {childrenView}
    </span>
  )
}

type FacetsState = {
  showAllFacets: boolean
}

class Facets extends React.Component<QueryWrapperChildProps, FacetsState> {

  constructor(props: QueryWrapperChildProps) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
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
        handleClick={this.handleClick}
        isLoading={this.props.isLoading!}
        lastFacetSelection={this.props.lastFacetSelection!}
      />
    )
  }

  /**
   * Handle checkbox click event
   */
  public handleClick = (ref: React.RefObject<HTMLSpanElement>, facetValue: string, selector :string) =>
  (_event: React.MouseEvent<HTMLSpanElement>) => {
    if (!this.state.showAllFacets) {
      this.setState({
        showAllFacets: true
      })
    }

    const facetValues: string[] = []
    // read over the checkboxes for this facet selection and see what was selected.
    for (let i = 0; i < ref.current!.children.length; i += 1) {
      const curElement = ref.current!.children[i] as HTMLLIElement
      const label = curElement.children[0] as HTMLLabelElement
      const checkbox = label.children[1] as HTMLInputElement
      if (checkbox.value === facetValue) {
        if (checkbox.checked) {
          // if it was checked coming in then we want it checked coming out
          checkbox.checked = false
        } else {
          // otherwise we swap it
          checkbox.checked = true
        }
      }
      if (selector) {
        checkbox.checked = selector === SELECT_ALL
      }
      const isSelected = checkbox.checked
      if (isSelected) {
        facetValues.push(checkbox.value)
      }
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
    let { isChecked } = cloneDeep(this.props)
    isChecked = getIsCheckedArray({
      isChecked,
      indexOfFacetValue: dict.index,
      facetValue: dict.value,
      selector: ''
    })

    const lastFacetSelection = {
      columnName: dict.columnName,
      facetValue: dict.value,
      selector: ''
    } as FacetSelection

    queryRequest.query.selectedFacets = selectedFacets
    queryRequest.query.offset = 0
    this.props.updateParentState!({
      isChecked,
      lastFacetSelection
    })
    this.props.executeQueryRequest!(queryRequest)
  }

  /**
   * Handle SELECT_ALL or DESELECT_ALL event, selection group specifies which
   * option was chosen
   *
   * @memberof Facets
   */
  public updateSelection = (selector: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    // update ischecked to keep the barchart in sync
    let { isChecked } = cloneDeep(this.props)
    isChecked = getIsCheckedArray({
      isChecked,
      selector,
      facetValue: '',
      indexOfFacetValue: -1
    })

    const lastFacetSelection = {
      selector,
      columnName: this.props.filter,
      facetValue: ''
    } as FacetSelection

    // we update the parent state with isChecked so that the barchart will reflect
    // in the graph slices on or off
    this.props.updateParentState!({ isChecked, lastFacetSelection })
    if (selector === SELECT_ALL) {
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
