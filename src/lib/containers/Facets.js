import React from 'react'
import * as SynapseConstants from 'lib/utils/SynapseConstants'
import { getFullQueryTableResults } from 'lib/utils/SynapseClient'
import PropTypes from 'prop-types'
const uuidv4 = require('uuid/v4');
let cloneDeep = require('lodash.clonedeep');


export default class Facets extends React.Component {

    constructor() {
        super()
        this.makeBundleQueryRequest = this.makeBundleQueryRequest.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            selectedFacets: {}
        }
    }

    componentDidMount() {
        this.makeBundleQueryRequest()
    }

    async makeBundleQueryRequest() {
        const {token, sql} = this.props

        // step 1: get init query with maxRowsPerPage calculated
        let queryRequest = {
            concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
            query: {
                isConsistent: true,
                offset: 0,
                sql,
                limit: 25
            }
        };

        let data = await getFullQueryTableResults(queryRequest, token, false)

        let selectedFacets = {}
        data.facets.forEach(
            (element) => {
                if (element.facetType === "enumeration") {
                    let selection = new Set()
                    element.facetValues.forEach(
                        facetValue => {
                            if (facetValue.isSelected) {
                                selection.add(facetValue.value)
                            }
                        }
                    )
                    if (selection.length > 0) {
                        selectedFacets[element.columnName] = {
                            columnName: element.columnName,
                            facetValues: selection,
                            concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest"
                        }
                    }
                }
            }
        )
        this.setState({
            isLoaded: true,
            data,
            selectedFacets
        })
    }

    showFacetFilter() {
        // iterate through the loaded data and write out the appropriate checkboxes,
        // filling in the state of the checkboxes according to the current selection
        if (this.state && this.state.isLoaded) {
            let structuredRender = []
            this.state.data.facets.forEach(
                (element) => {
                    if (element.facetType === "enumeration") {
                        let children = []
                        element.facetValues.forEach(
                            facetValue => {
                                let key = uuidv4()
                                let checked = false
                                let chosen = this.state.selectedFacets[element.columnName]
                                if (chosen && chosen.facetValues.has(facetValue.value)) {
                                    checked = true
                                }
                                children.push(
                                    <div key={key}>
                                        <input checked={checked} onChange={this.handleClick({name: element.columnName, value: facetValue.value, isSelected: checked})} id={key} type="checkbox"/>
                                        <label htmlFor={key}>{facetValue.value + ` (${facetValue.count})`}</label>
                                    </div>
                                )
                            }
                        )
                        let name = <strong> {element.columnName} </strong>
                        let formatted = (<div key={uuidv4()}>
                                            {name}
                                            {children.map(child => {return child})}
                                        </div>)
                        structuredRender.push(formatted)
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
    }

    // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
    handleClick = (dict) => (event) => {
        let selectedFacets = cloneDeep(this.state.selectedFacets)  // deep copy

        // if there is no entry for this column name into the selection of facets
        if (!selectedFacets.hasOwnProperty(dict.name)) {
            let newEntry = {
                name: dict.name,
                facetValues: new Set()
            }
            selectedFacets[dict.name] = newEntry
        }

        // grab the facet values assoicated for this column
        let specificFacet = selectedFacets[dict.name]
        // if its not selected then we add as having been chosen, otherwise we 
        // have to delete it
        if (!dict.isSelected) {
            specificFacet.facetValues.add(dict.value)
        } else {
            specificFacet.facetValues.delete(dict.value)
        }

        selectedFacets[dict.name] = specificFacet
        this.setState({
            selectedFacets: selectedFacets
        })
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
                        </form>
                    </div>
                    <div className="col-xs-6">
                        {this.state.selectedFacets  && Object.keys(this.state.selectedFacets).map(
                            key => {
                                let string = Array.from(this.state.selectedFacets[key].facetValues).join(", ")
                                return <p key={uuidv4()}> {key} : {string} </p>
                            }
                        )}
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