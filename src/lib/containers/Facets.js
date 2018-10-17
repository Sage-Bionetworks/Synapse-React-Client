import React from 'react'
import PropTypes from 'prop-types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import calculateTextColor from './calculateTextColor'
import calculateGradient from './calculateGradient'

// import * as SynapseConstants from '../../lib/utils/SynapseConstants'
const cloneDeep = require("lodash.clonedeep")
const SELECT_ALL = "select all"
const DESELECT_ALL = "deselect all"

// Add all icons to the library so you can use it in your page
library.add(faTimes)
library.add(faPlus)


/**
 * Checkbox group represents one column's set of checkbox filters
 *
 * @class CheckboxGroup
 * @extends {React.Component}
 */
class CheckboxGroup extends React.Component {

    render() {
        const {element} = this.props
        let children = []

        element.facetValues.sort((a,b) => {return b.count - a.count})

        element.facetValues.forEach(
            (facetValue, index) => {
                let uniqueId = element.columnName + " " + facetValue.value + " " + facetValue.count
                // caution when using uuId's to not cause extra re-renders from this always changing
                let {newR,newG,newB} = calculateGradient(this.props.RGB, index)
                let style = {}
                const check = this.props.isChecked[index] === undefined || this.props.isChecked[index]
                if (check) {
                    style = {
                        background: `rgb(${newR},${newG},${newB})` 
                    }
                } else {
                    style = {
                        background: `#C4C4C4`
                    }
                }
                style.color = calculateTextColor(newR,newG,newB)
                if (facetValue.value === 'org.sagebionetworks.UNDEFINED_NULL_NOTSET') {
                    facetValue.displayValue = 'Not Set';
                } else {
                    facetValue.displayValue = facetValue.value;
                }
                const showTimes = check
                children.push(
                    <span style={style}  className="SRC-facets SRC-primary-background-hover" key={uniqueId} onClick={this.props.clickHandler({index, value: facetValue.value, columnName: element.columnName})} >
                        <strong> &nbsp;&nbsp; {facetValue.displayValue} </strong>  {facetValue.count}
                        <span>&nbsp;&nbsp;</span>
                        {
                            showTimes ?  <FontAwesomeIcon  icon={"times"} /> : <FontAwesomeIcon icon={"plus"} />
                        }
                        <span>&nbsp;&nbsp;</span>
                    </span>
                )
            }
        )
        return (
                    <div>
                        {children.map(child => {return child})}
                    </div>
                )
    }
}

class Facets extends React.Component {

    constructor(props) {
        super(props)
        this.recordSelections = this.recordSelections.bind(this)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            // we store the selected facets by column name for ease of use,
            // this has to be later converted when making the api call
            selectedFacets : {},
            boxCount : 0,
            isChecked :[]
        }

        this.updateStateAndMakeQuery = this.updateStateAndMakeQuery.bind(this)
        this.updateSelection = this.updateSelection.bind(this)
    }

    /**
     * Record's selection choice
     *
     * @param {*} options either SELECT_ALL or DESELECT_ALL, specifies if either of those options
     * were selected
     * @returns
     * @memberof Facets
     */
    recordSelections(options) {
        // this code must change-- currently isn't being updated correctly
        let facets = {}
        this.props.data.facets.forEach(
            (element) => {
                if (element.columnName === this.props.filter && element.facetType === "enumeration") {
                    let selection = []
                    element.facetValues.forEach(
                        facetValue => {
                            if ((facetValue.isSelected || options === SELECT_ALL) && options !== DESELECT_ALL) {
                                selection.push(facetValue.value)
                            }
                        }
                    )
                    if (selection.length > 0) {
                        facets[element.columnName] = {
                            columnName: element.columnName,
                            facetValues: selection,
                            concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"
                        }
                    }
                }
            }
        )
        return facets
    }


    /**
     * Display the view of the facets
     *
     * @returns
     * @memberof Facets
     */
    showFacetFilter() {
        // iterate through the loaded data and write out the appropriate checkboxes,
        // filling in the state of the checkboxes according to the current selection
        if (this.props.data.length === 0) {
            return
        }
        let structuredRender = []
        // read in the most up to date data
        let selectedFacets = this.recordSelections()
        // display the data -- currently we only support enumerations
        this.props.data.facets.forEach(
            (element) => {
                if (element.columnName === this.props.filter && element.facetType === "enumeration") {
                    let group = <CheckboxGroup 
                                    RGB={this.props.RGB}
                                    filter={this.props.filter}
                                    key={element.columnName}
                                    selectedFacets={selectedFacets}
                                    element={element}
                                    clickHandler={this.handleClick}
                                    isChecked={this.props.isChecked}
                                    >
                                </CheckboxGroup>
                    structuredRender.push(group)
                }
            }
        )

        return (<div>
                    {
                        structuredRender.map(
                            element => {
                                return element
                            }
                        )
                    }
                </div>)
    }

    
    /**
     * Handle checkbox click event
     */
    handleClick = (dict) => (event) => {
        // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9

        let queryRequest = this.props.getLastQueryRequest()
        let {selectedFacets} = queryRequest.query
        
        // grab the facet values assoicated for this column
        let specificFacet = selectedFacets[0]
        // if its not selected then we add as having been chosen, otherwise we 
        // have to delete it
        if (specificFacet.facetValues.indexOf(dict.value) === -1) {
            specificFacet.facetValues.push(dict.value)
        } else {
            // remove value
            specificFacet.facetValues.splice(specificFacet.facetValues.indexOf(dict.value), 1)
        }

        let {isChecked} = cloneDeep(this.props)
        if (isChecked[dict.index] === undefined) {
            isChecked[dict.index] = false
        } else {
            isChecked[dict.index] = !isChecked[dict.index]
        }

        queryRequest.query.selectedFacets = selectedFacets;
        this.props.updateParentState({isChecked})
        this.props.executeQueryRequest(queryRequest, false);
    }

    /**
     * Handle select all or deselect all event, selection group specifies which
     * option was chosen
     *
     * @memberof Facets
     */
    updateSelection = (selectionGroup) => (event) => {
        event.preventDefault()
        let {isChecked} = cloneDeep(this.props)
        let queryRequest = cloneDeep(this.props.getLastQueryRequest());
        if (selectionGroup === SELECT_ALL) {
            for(let i = 0; i < 100; i++) {
                isChecked[i] = true
            }
            this.props.updateParentFilter(this.props.filter)
            this.props.updateParentState({isChecked})
            this.props.executeQueryRequest(null, true);
        } else {
            for(let i = 0; i < 100; i++) {
                isChecked[i] = false
            }
            // hack to make deselct all work
            queryRequest.query.selectedFacets[0].facetValues = []
            this.props.updateParentState({isChecked, showNothing: true, lastQueryRequest: queryRequest})
        }
    }

    /**
     * Update the state with selected facets and call props to update data
     *
     * @param {*} selectedFacets
     * @memberof Facets
     */
    updateStateAndMakeQuery(selectedFacets, isChecked ) {
        // have to reformat the selected facets to format for the api call
        let selectedFacetsFormatted = Object.keys(selectedFacets).map(
            key => {
                return selectedFacets[key]
            }
        )
        let queryRequest = this.props.getLastQueryRequest();
        queryRequest.query.selectedFacets = selectedFacetsFormatted;
        this.props.executeQueryRequest(queryRequest, isChecked);
    }
    
    render () {
        return (
            <div className="container-fluid SRC-syn-border-spacing ">
                <div className="col-xs">
                    <form>
                        <div className="form-group">
                            {/* populate the page with checkboxes */}
                            {this.showFacetFilter()}
                        </div>
                        <div className="form-group">
                            <p>
                                <a href={""} className="SRC-primary-text-color SRC-no-text-decor" onClick={this.updateSelection(SELECT_ALL)}>    Select All  </a>
                                <a href={""} className="SRC-primary-text-color SRC-no-text-decor" onClick={this.updateSelection(DESELECT_ALL)}>  Deselect All  </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Facets.propTypes = {
    makeQueryRequest: PropTypes.bool,
}

Facets.defaultProps = {
    makeQueryRequest: true
}

export {Facets, CheckboxGroup}