import React from 'react'
import PropTypes from 'prop-types'
const cloneDeep = require("lodash.clonedeep")
const uuidv4 = require("uuid/v4")
const SELECT_ALL = "select all"
const DESELECT_ALL = "deselect all"

class CheckboxGroup extends React.Component {

    render() {
        const {element} = this.props
        let children = []
        let selectedFacets = this.props.selectedFacets
        element.facetValues.forEach(
            facetValue => {
                let uniqueId = element.columnName + " " + facetValue.value + " " + facetValue.count
                let uuId = uuidv4()
                children.push(
                    <span style={{padding: "2px", borderStyle: "solid", borderWidth: "1px", margin: "2px"}} key={uniqueId}>
                        <input defaultChecked={facetValue.isSelected} onClick={this.props.clickHandler({selectedFacets: selectedFacets, value: facetValue.value, columnName: element.columnName})} id={uuId} type="checkbox"/>
                        <label htmlFor={uuId}>{facetValue.value + ` (${facetValue.count})`}</label>
                    </span>
                )
            }
        )
        let name = <strong> {element.columnName} </strong>
        return (
                    <div>
                        {name}
                        {children.map(child => {return child})}
                    </div>
                )
    }
}

export default class Facets extends React.Component {

    constructor(props) {
        super(props)
        this.recordSelections = this.recordSelections.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            selectedFacets: {}
        }
        this.updateStateAndMakeQuery = this.updateStateAndMakeQuery.bind(this)
        this.updateSelection = this.updateSelection.bind(this)
    }

    recordSelections(options) {
        let facets = {}
        this.props.data.facets.forEach(
            (element) => {
                if (element.facetType === "enumeration" && element.columnName === "createdBy") {
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

    showFacetFilter() {
        // iterate through the loaded data and write out the appropriate checkboxes,
        // filling in the state of the checkboxes according to the current selection
        if (this.props.data.length === 0) {
            return
        }
        let structuredRender = []
        let selectedFacets = this.recordSelections()

        this.props.data.facets.forEach(
            (element) => {
                if (element.facetType === "enumeration") {
                    let group = <CheckboxGroup key={element.columnName} selectedFacets={selectedFacets} element={element} clickHandler={this.handleClick}></CheckboxGroup>
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

    // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
    handleClick = (dict) => (event) => {
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

        // grab the facet values assoicated for this column
        let specificFacet = selectedFacets[dict.columnName]
        // if its not selected then we add as having been chosen, otherwise we 
        // have to delete it
        if (specificFacet.facetValues.indexOf(dict.value) === -1) {
            specificFacet.facetValues.push(dict.value)
        } else {
            // remove value
            specificFacet.facetValues.splice(specificFacet.facetValues.indexOf(dict.value), 1)
        }

        this.updateStateAndMakeQuery(selectedFacets);
    }

    updateSelection = (selectionGroup) => (event) => {
        event.preventDefault()
        let selectedFacets  = this.recordSelections(selectionGroup)
        this.updateStateAndMakeQuery(selectedFacets);
    }

    updateStateAndMakeQuery(selectedFacets) {
        this.setState({ selectedFacets });
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
            <div className="container">
                <div className="row">
                    <div className="col-xs-6">
                        <form>
                            <div className="form-group">
                                {this.showFacetFilter()}
                            </div>
                            <div className="form-group">
                                <a href={""} onClick={this.updateSelection(SELECT_ALL)}>   <u>  Select All </u> </a>
                                |
                                <a href={""} onClick={this.updateSelection(DESELECT_ALL)}> <u>  Unselect All </u> </a>
                            </div>
                        </form>
                    </div>
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