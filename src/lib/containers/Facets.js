import React from 'react'
import * as SynapseConstants from 'lib/utils/SynapseConstants'
import { getFullQueryTableResults } from 'lib/utils/SynapseClient'
import PropTypes from 'prop-types'
const uuidv4 = require('uuid/v4');

export default class Facets extends React.Component {

    constructor() {
        super()
        this.makeBundleQueryRequest = this.makeBundleQueryRequest.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.makeBundleQueryRequest()
    }

    async makeBundleQueryRequest(facets=null) {
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

        let selectedColumns = []

        let structuredRender = []
        data.facets.forEach(
            (element) => {
                if (element.facetType === "enumeration") {
                    let children = []
                    let selection = new Set()
                    element.facetValues.forEach(
                        facetValue => {
                            let key = uuidv4()
                            if (facetValue.isSelected) {
                                selection.add(facetValue.value)
                            }
                            children.push(
                                <div key={key}>
                                    <input id={key} type="checkbox"/>
                                    <label htmlFor={key}>{facetValue.value + ` (${facetValue.count})`}</label>
                                </div>
                            )
                        }
                    )
                    if (selection.length > 0) {
                        selectedColumns.push({
                            columnName: element.columnName,
                            facetValues: selection,
                            concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest"
                        })
                    }
                    let name = <strong> {element.columnName} </strong>
                    let formatted = (<div key={uuidv4()}>
                                        {name}
                                        {children.map(child => {return child})}
                                    </div>)
                    structuredRender.push(formatted)
                }
            }
        )
        console.log("selected columns ", selectedColumns)
        this.setState({
            isLoaded: true,
            data,
            selectedColumns
        })



    }

    showFacetFilter() {
        if (this.state && this.state.isLoaded) {
            let structuredRender = []
            this.state.data.facets.forEach(
                (element) => {
                    if (element.facetType === "enumeration") {
                        let children = []
                        element.facetValues.forEach(
                            facetValue => {
                                console.log('facet value ', facetValue)
                                let key = uuidv4()
                                children.push(
                                    <div key={key}>
                                        <input onClick={this.handleClick({name: element.columnName, value: facetValue.value})} id={key} type="checkbox"/>
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
        // be careful not to modify state-- deep copy of everything
        let selectedColumns = {}
        
        this.state.selectedColumns.forEach(
            value => {
                if (value.name === dict.name) {
                    selectedColumns = value
                }
            }
        )

        if (selectedColumns === {}) {
            selectedColumns.name = dict.name
            
        } else {
            let specificColumn = selectedColumns[dict.columnName]
            let {facetValues, ...rest} = specificColumn
            let updatedFacetValues = (new Set(facetValues)).add(dict.value)
            specificColumn = {
                updatedFacetValues,
                ...rest,
            }
            this.setState({
                selectedColumns: {
                    ...selectedColumns,
                    specificColumn
                }
            })
        }

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
                        <p>
                            {this.state ? this.state.fetchedRequest ? "": "": "" }
                        </p>
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