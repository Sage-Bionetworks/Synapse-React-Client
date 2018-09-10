import React from 'react'
import PropTypes from 'prop-types'
import * as SynapseConstants from 'lib/utils/SynapseConstants';
const uuidv4 = require('uuid/v4');
let cloneDeep = require('lodash.clonedeep');

export default class Facets extends React.Component {

    constructor(props) {
        super(props)
        this.recordSelections = this.recordSelections.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            selectedFacets: {}
        }
    }

    componentDidMount() {
        if (!this.props.isLoading) {
            this.recordSelections()
        }
    }

    componentDidUpdate() {
        if (!this.props.isLoading) {
            this.recordSelections()
        }
    }

    recordSelections() {
        let selectedFacets = {}
        this.props.data.facets.forEach(
            (element) => {
                if (element.facetType === "enumeration") {
                    let selection = []
                    element.facetValues.forEach(
                        facetValue => {
                            if (facetValue.isSelected) {
                                selection.push(facetValue.value)
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
    }

    showFacetFilter() {
        // iterate through the loaded data and write out the appropriate checkboxes,
        // filling in the state of the checkboxes according to the current selection
        if (this.props.data.length === 0) {
            return
        }
        let structuredRender = []
        this.props.data.facets.forEach(
            (element) => {
                if (element.facetType === "enumeration") {
                    let children = []
                    element.facetValues.forEach(
                        facetValue => {
                            let key = uuidv4()
                            let checked = false
                            let chosen = this.state.selectedFacets[element.columnName]
                            if (chosen && chosen.facetValues.indexOf(facetValue.value) !== -1) {
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

    // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
    handleClick = (dict) => (event) => {
        let selectedFacets = cloneDeep(this.state.selectedFacets)  // deep copy

        // if there is no entry for this column name into the selection of facets
        if (!selectedFacets.hasOwnProperty(dict.name)) {
            let newEntry = {
                columnName: dict.name,
                concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
                facetValues: []
            }
            selectedFacets[dict.name] = newEntry
        }

        // grab the facet values assoicated for this column
        let specificFacet = selectedFacets[dict.name]
        // if its not selected then we add as having been chosen, otherwise we 
        // have to delete it
        if (!dict.isSelected) {
            specificFacet.facetValues.push(dict.value)
        } else {
            // remove value
            specificFacet.facetValues.splice(specificFacet.facetValues.indexOf(dict.value), 1)
        }
        
        this.setState({
            selectedFacets,
            facetDataIsFetching:  true
        })

        let {sql} = this.props

        let selectedFacetsFormatted = Object.keys(selectedFacets).map(
            key => {
                return selectedFacets[key]
            }
        )

        let queryRequest = {
            concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
            partMask: SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS | SynapseConstants.BUNDLE_MASK_QUERY_FACETS,
            query: {
                isConsistent: true,
                sql,
                limit: 1,
                selectedFacets: selectedFacetsFormatted
            },
        };

        this.props.updateQueryRequest(queryRequest)
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
                        <h5><strong> Current selection </strong> </h5>
                        {this.state.selectedFacets  && Object.keys(this.state.selectedFacets).map(
                            key => {
                                let string = Array.from(this.state.selectedFacets[key].facetValues).join(", ")
                                return <p key={uuidv4()}> {key} : {string} </p>
                            }
                        )}
                        <h5><strong> Results</strong> </h5>
                        {JSON.stringify(this.props.data)}
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