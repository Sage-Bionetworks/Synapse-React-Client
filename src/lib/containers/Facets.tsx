import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import * as React from 'react'
import {
  FacetColumnResultValueCount,
  FacetColumnResultValues,
  FacetColumnResult
} from '../utils/jsonResponses/Table/FacetColumnResult'
import { QueryBundleRequest } from '../utils/jsonResponses/Table/QueryBundleRequest'
import { getColorPallette } from './ColorGradient'
import { QueryWrapperChildProps, FacetSelection } from './QueryWrapper'

export const SELECT_SINGLE_FACET = 'SELECT_SINGLE_FACET'
import { SELECT_ALL,  } from './SynapseTable'
import { getIsValueSelected, readFacetValues } from '../utils/modules/facetUtils'

// Add all icons to the library so you can use it in your page
library.add(faTimes)
library.add(faPlus)

type CheckboxGroupProps = {
  isAllFilterSelected: boolean
  rgbIndex: number
  facetColumnResult: FacetColumnResultValues
  applyChanges: (
    ref: React.RefObject<HTMLSpanElement>,
    facetValue: string,
    selector: string,
  ) =>
  (
    _event: React.MouseEvent<HTMLSpanElement>
  ) => void
  showAllFacets: boolean
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
    rgbIndex,
    isAllFilterSelected
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

    const isSelected = isAllFilterSelected ? true : getIsValueSelected({
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
    // @ts-ignore
    const icon = isSelected ? 'times' : 'plus'

    children.push(
      <label
        style={style}
        className="SRC-facets SRC-primary-background-color-hover SRC-nested-color"
        key={key}
      >
        <span className="SRC-facets-text">
          {' '}
          &nbsp;&nbsp; {displayValue} ({count}){' '}
        </span>
        <input
          // @ts-ignore
          onChange={props.applyChanges(ref, value , SELECT_SINGLE_FACET)}
          checked={isSelected}
          type="checkbox"
          value={value}
          className="SRC-hidden SRC-facet-checkboxes"
        />
        <span>&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;</span>
      </label>
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
    this.applyChanges = this.applyChanges.bind(this)
    this.state = {
      showAllFacets: false
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
    //  find the facetcolumn result according to the input filter
    const facetColumnResult = this.props.data!.facets.
      find((el: FacetColumnResult) => el.columnName === this.props.filter && el.facetType === 'enumeration')!

    return (
      <CheckboxGroup
        isAllFilterSelected={this.props.isAllFilterSelectedForFacet![this.props.filter!]}
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
    selector :string,
  ) =>
  (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault()
    if (!this.state.showAllFacets) {
      this.setState({
        showAllFacets: true
      })
    }

    const { filter = '', isAllFilterSelectedForFacet = {} } = this.props

    const lastFacetSelection = {
      facetValue,
      selector,
      columnName: filter,
    } as FacetSelection
    console.log('setting lastfacetsleeciotn = ', lastFacetSelection)
    isAllFilterSelectedForFacet[filter] = selector === SELECT_ALL

    this.props.updateParentState!({
      lastFacetSelection,
      isAllFilterSelectedForFacet
    })

    // read input and fetch data
    const htmlCheckboxes = ref.current!.querySelectorAll('.SRC-facet-checkboxes')
    // queryRequest is a deep clone
    const queryRequest: QueryBundleRequest = this.props.getLastQueryRequest!()
    const { newQueryRequest } = readFacetValues({
      htmlCheckboxes,
      queryRequest,
      selector,
      filter,
      value: facetValue,
    })

    queryRequest.query.offset = 0
    this.props.executeQueryRequest!(newQueryRequest)
  }

  public showAllFacets(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    this.setState({
      showAllFacets: true
    })
  }

  public showButtons(showAllFacets: boolean, curFacetsLength: number, ref: React.RefObject<HTMLDivElement>) {
    if (showAllFacets) {
      // this is hidden if there are > 5 facets, wait for user to make
      // an action for this to appear
      return (
        <React.Fragment>
          <a
            href={''}
            className="SRC-primary-text-color SRC-no-text-decor"
            onClick={this.applyChanges(ref, '', SELECT_ALL)}
          >
            {' '}
            Select All{' '}
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
    const ref: React.RefObject<HTMLDivElement> = React.createRef()
    return (
      <div className="container-fluid SRC-syn-border-spacing ">
        <div className="col-xs">
          <form>
            <div ref={ref} className="SRC-marginFive form-group">
              {this.showFacetFilter()}
              <span className="SRC-inlineBlock">
                {this.showButtons(showAllFacets, facetColumnResultValues.facetValues.length, ref)}
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export { Facets, CheckboxGroup }
