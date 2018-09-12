import React from 'react'
import PropTypes from 'prop-types'
import * as SynapseConstants from 'lib/utils/SynapseConstants';
const uuidv4 = require('uuid/v4');

class CheckboxGroup extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillUnmount() {
        console.log("%c unmouning checkbox ", "background: cyan")
    }

    render() {
        console.log("%cfacets being rendered", "background: green")
        const {element} = this.props
        let children = []
        let selectedFacets = this.props.selectedFacets
        element.facetValues.forEach(
            facetValue => {
                let key = uuidv4()
                children.push(
                    <div key={key}>
                        <input defaultChecked={facetValue.isSelected} onClick={this.props.clickHandler({selectedFacets: selectedFacets, value: facetValue.value, columnName: element.columnName})} id={key} type="checkbox"/>
                        <label htmlFor={key}>{facetValue.value + ` (${facetValue.count})`}</label>
                    </div>
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
                            concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest"
                        }
                    }
                }
            }
        )
        return selectedFacets
    }

    showFacetFilter() {
        console.log("%cdoing a re-render", "background: blue")
        // iterate through the loaded data and write out the appropriate checkboxes,
        // filling in the state of the checkboxes according to the current selection
        if (this.props.data.length === 0) {
            return
        }
        let structuredRender = []
        let selectedFacets = this.recordSelections()  // deep copy

        this.props.data.facets.forEach(
            (element) => {
                if (element.facetType === "enumeration") {
                    let group = <CheckboxGroup key={uuidv4()} selectedFacets={selectedFacets} element={element} clickHandler={this.handleClick}></CheckboxGroup>
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
        let selectedFacets = dict.selectedFacets
        // if there is no entry for this column name into the selection of facets
        console.log("dict is ", dict)
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
        if (!dict.isSelected) {
            specificFacet.facetValues.push(dict.value)
        } else {
            // remove value
            specificFacet.facetValues.splice(specificFacet.facetValues.indexOf(dict.value), 1)
        }

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