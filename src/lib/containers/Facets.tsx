import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { FacetColumnResult, FacetColumnResultValues } from '../utils/jsonResponses/Table/FacetColumnResult'
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest'
import { getColorPallette } from './ColorGradient'
import { QueryWrapperChildProps } from './QueryWrapper'

const cloneDeep = require('lodash.clonedeep')
const SELECT_ALL = 'select all'
const DESELECT_ALL = 'deselect all'

// Add all icons to the library so you can use it in your page
library.add(faTimes)
library.add(faPlus)

type CheckboxGroupProps = {
  rgbIndex: number
  isChecked: any
  element: any
  clickHandler: any
  showAllFacets: boolean
}

type Info = {
  index: number
  value: string
}

/**
 * Checkbox group represents one column's set of checkbox filters
 *
 * @class CheckboxGroup
 * @extends {React.Component}
 */
const CheckboxGroup: React.SFC<CheckboxGroupProps> = (props) => {

  const { element, showAllFacets } = props
  const children: any = []

  element.facetValues.sort((a: any, b: any) => {
    return b.count - a.count
  })
  const { colorPalette, textColors } = getColorPallette(props.rgbIndex, element.facetValues.length)
  element.facetValues.forEach((facetValue: any, index: any) => {

    const uniqueId = `${element.columnName} ${facetValue.value} ${facetValue.count}`
    const textColor = textColors[index]
    const curColor = colorPalette[index]
    let style: any = {}
    const isChecked = props.isChecked[index] === undefined || props.isChecked[index]
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
        key={uniqueId}
        onClick={props.clickHandler({ index, value: facetValue.value, columnName: element.columnName })}
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
  selectedFacets: {},
  isChecked: boolean []
  boxCount: number,
  showAllFacets: boolean
}

class Facets extends React.Component<QueryWrapperChildProps, FacetsState> {

  constructor(props: QueryWrapperChildProps) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      boxCount: 0,
      isChecked: [],
            // we store the selected facets by column name for ease of use,
            // this has to be later converted when making the api call
      selectedFacets: {},
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
    // iterate through the loaded data and write out the appropriate checkboxes,
    // filling in the state of the checkboxes according to the current selection
    const structuredRender: JSX.Element[] = this.props.data!.facets.map((element: FacetColumnResult) => {
      // display the data -- currently we only support enumerations
      if (element.columnName === this.props.filter && element.facetType === 'enumeration') {
        return (
          <CheckboxGroup
            showAllFacets={this.state.showAllFacets}
            rgbIndex={this.props.rgbIndex!}
            key={element.columnName}
            element={element}
            isChecked={this.props.isChecked}
            clickHandler={this.handleClick}
          />
        )
      }
            // throw away.
      return (<span key={element.columnName}/>)
    })
    return (
      <React.Fragment>
        {structuredRender}
      </React.Fragment>
    )
  }

  /**
   * Handle checkbox click event
   */
  public handleClick = (dict: Info) => (event: React.MouseEvent<HTMLSpanElement>) => {
    if (!this.state.showAllFacets) {
      this.setState({
        showAllFacets: true
      })
    }
    // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
    const queryRequest: QueryBundleRequest = this.props.getLastQueryRequest!()
    const { selectedFacets } = queryRequest.query
    // grab the facet values assoicated for this column
    const specificFacet = selectedFacets![0]
    // if its not selected then we add as having been chosen, otherwise we
    // have to delete it
    if (specificFacet.facetValues.indexOf(dict.value) === -1) {
      specificFacet.facetValues.push(dict.value)
    } else {
      // remove value
      specificFacet.facetValues.splice(specificFacet.facetValues.indexOf(dict.value), 1)
    }
    const { isChecked } = cloneDeep(this.props)
    const isCheckedValue = isChecked[dict.index]
    isChecked[dict.index] = isCheckedValue === undefined ? false : !isChecked[dict.index]

    queryRequest.query.selectedFacets = selectedFacets
    queryRequest.query.offset = 0
    this.props.updateParentState!({ isChecked })
    this.props.executeQueryRequest!(queryRequest)
  }

  /**
   * Handle select all or deselect all event, selection group specifies which
   * option was chosen
   *
   * @memberof Facets
   */
  public updateSelection = (selectionGroup: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const { isChecked } = cloneDeep(this.props)
    const queryRequest = this.props.getLastQueryRequest!() as QueryBundleRequest
    const { selectedFacets } = queryRequest.query

    // we go through and set all facets as selected or deselected per the button
    // clicked that initiated this function call
    for (let i = 0; i < 100; i += 1) {
      if (selectionGroup === SELECT_ALL) {
        isChecked[i] = true
      } else {
        isChecked[i] = false
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
      // if the user chose to deselect all facets then we zero out the facet selection
      const facetColumnResultValues = selectedFacets!.filter(
        (value) => {
          return value.columnName === this.props.filter
        }
      )[0] as FacetColumnResultValues
      facetColumnResultValues.facetValues = []
      console.log('selected facets = ', selectedFacets)
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
      <a href={''} className="SRC-primary-text-color SRC-no-text-decor" onClick={this.showAllFacets}>
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

    // tslint:disable-next-line
    const curFacetsIndex = facets.findIndex((facet) => facet.columnName === filter && facet.facetType === "enumeration")
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
