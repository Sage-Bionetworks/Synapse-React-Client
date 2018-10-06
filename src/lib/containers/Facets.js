import React from 'react'
import PropTypes from 'prop-types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
const cloneDeep = require("lodash.clonedeep")
const uuidv4 = require("uuid/v4")
const SELECT_ALL = "select all"
const DESELECT_ALL = "deselect all"

// Add all icons to the library so you can use it in your page
library.add(faTimesCircle)


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
        let selectedFacets = this.props.selectedFacets

        element.facetValues.sort((a,b) => {return b.count - a.count})

        element.facetValues.forEach(
            (facetValue, index) => {
                let uniqueId = element.columnName + " " + facetValue.value + " " + facetValue.count
                // caution when using uuId's to not cause extra re-renders from this always changing
                let newR = this.props.R * (1.3 - (1.0 / index))
                let newG = this.props.G * (1.3 - (1.0 / index))
                let newB = this.props.B * (1.3 - (1.0 / index))
                let style = {}
                if (this.props.isChecked[index] === false) {
                    style = {
                        background: `#C4C4C4`
                    }
                } else {
                    style = {
                        background: `rgb(${newR},${newG},${newB})` 
                    }
                }

                children.push(
                    <span style={style}  className="SRC_facets" key={uniqueId} onClick={this.props.clickHandler({index, selectedFacets: selectedFacets, value: facetValue.value, columnName: element.columnName})} >
                        <strong> {facetValue.value} </strong>  {facetValue.count}
                        <FontAwesomeIcon icon={"times-circle"} />
                    </span>
                )
            }
        )
        let name = <strong> Filter by {this.props.filter} Type </strong>
        return (
                    <div>
                        <p> {name} </p>
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
                                    R={this.props.R}
                                    G={this.props.G}
                                    B={this.props.B}
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

        let selectedFacets = cloneDeep(this.state.selectedFacets)
        // if there is no entry for this column name into the selection of facets
        if (!selectedFacets.hasOwnProperty(dict.columnName)) {
            let newEntry = {
                columnName: dict.columnName,
                concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
                facetValues: []
            }
            selectedFacets[dict.columnName] = newEntry
        }

        let {boxCount} = this.state

        // grab the facet values assoicated for this column
        let specificFacet = selectedFacets[dict.columnName]
        // if its not selected then we add as having been chosen, otherwise we 
        // have to delete it
        if (specificFacet.facetValues.indexOf(dict.value) === -1) {
            specificFacet.facetValues.push(dict.value)
            boxCount++
        } else {
            // remove value
            specificFacet.facetValues.splice(specificFacet.facetValues.indexOf(dict.value), 1)
            boxCount--
        }

        let {isChecked} = cloneDeep(this.props)
        isChecked[dict.index] = !isChecked[dict.index]
        this.setState({
            boxCount
        })

        this.updateStateAndMakeQuery(selectedFacets, isChecked);
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
        if (selectionGroup === SELECT_ALL) {
            for(let i = 0; i < 100; i++) {
                isChecked[i] = true
            }
            this.setState({boxCount: 100})
        } else {
            for(let i = 0; i < 100; i++) {
                isChecked[i] = false
            }
            this.setState({boxCount: 0})
        }
        let selectedFacets  = this.recordSelections(selectionGroup)
        this.updateStateAndMakeQuery(selectedFacets, isChecked);
    }

    /**
     * Update the state with selected facets and call props to update data
     *
     * @param {*} selectedFacets
     * @memberof Facets
     */
    updateStateAndMakeQuery(selectedFacets, isChecked ) {
        this.setState({ selectedFacets });
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
            <div className="container SRC-syn-lightbackground SRC-syn-border-spacing ">
                <div className="col-xs">
                    <form>
                        <div className="form-group">
                            {/* populate the page with checkboxes */}
                            {this.showFacetFilter()}
                        </div>
                        <div className="form-group">
                            <p>
                                <strong> {this.state.boxCount} {this.props.filter}s selected.  </strong>
                                <a href={""} onClick={this.updateSelection(SELECT_ALL)}>   <u>  Select All </u> </a>
                                |
                                <a href={""} onClick={this.updateSelection(DESELECT_ALL)}> <u>  Unselect All </u> </a>
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