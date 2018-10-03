import React from 'react'
import PropTypes from 'prop-types'
const cloneDeep = require("lodash.clonedeep")
const uuidv4 = require("uuid/v4")
const SELECT_ALL = "select all"
const DESELECT_ALL = "deselect all"


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

        element.facetValues.forEach(
            (facetValue, index) => {
                let uniqueId = element.columnName + " " + facetValue.value + " " + facetValue.count
                // caution when using uuId's to not cause extra re-renders from this always changing
                let uuId = uuidv4()
                children.push(
                    <span className="SRC_facets" key={uniqueId}>
                        <input value={1} checked={this.props.isChecked[index]} onClick={this.props.clickHandler({index, selectedFacets: selectedFacets, value: facetValue.value, columnName: element.columnName})} id={uuId} type="checkbox"/>
                        <label htmlFor={uuId}> <strong> {facetValue.value} </strong>  {facetValue.count}</label>
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


    componentDidMount() {
        let {data} = this.props
        let facetCount = 0
        // line below is for when testing doesn't mock
        // the entire object
        let filteredData = data.facets && data.facets.filter(
            (value) => {
                return value.columnName === this.props.filter
            }
        )
        if (filteredData && filteredData[0]) {
            facetCount = filteredData[0].facetValues.length
        }
        this.setState({
            isChecked: Array(facetCount).fill(false)
        })
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
                                    filter={this.props.filter}
                                    key={element.columnName}
                                    selectedFacets={selectedFacets}
                                    element={element}
                                    clickHandler={this.handleClick}
                                    isChecked={this.state.isChecked}
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

        let {isChecked} = cloneDeep(this.state)
        isChecked[dict.index] = !isChecked[dict.index]

        this.setState({
            boxCount,
            isChecked
        })

        this.updateStateAndMakeQuery(selectedFacets);
    }

    /**
     * Handle select all or deselect all event, selection group specifies which
     * option was chosen
     *
     * @memberof Facets
     */
    updateSelection = (selectionGroup) => (event) => {
        event.preventDefault()
        if (selectionGroup === SELECT_ALL) {
            this.setState({boxCount: this.props.facetCount, isChecked: Array(this.props.facetCount).fill(true)})
        } else {
            this.setState({boxCount: 0, isChecked: Array(this.props.facetCount).fill(false)})
        }
        let selectedFacets  = this.recordSelections(selectionGroup)
        this.updateStateAndMakeQuery(selectedFacets);
    }

    /**
     * Update the state with selected facets and call props to update data
     *
     * @param {*} selectedFacets
     * @memberof Facets
     */
    updateStateAndMakeQuery(selectedFacets) {
        this.setState({ selectedFacets });
        // have to reformat the selected facets to format for the api call
        let selectedFacetsFormatted = Object.keys(selectedFacets).map(
            key => {
                return selectedFacets[key]
            }
        )
        let queryRequest = this.props.getLastQueryRequest();
        queryRequest.query.selectedFacets = selectedFacetsFormatted;
        this.props.executeQueryRequest(queryRequest);
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