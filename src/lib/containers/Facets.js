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

    async makeBundleQueryRequest() {
        const {token, sql } = this.props

        // step 1: get init query with maxRowsPerPage calculated
        let queryRequest = {
            concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
            query: {
                isConsistent: true,
                offset: 0,
                sql: sql,
                limit:25
            }
        };

        let data = await getFullQueryTableResults(queryRequest, token, false)
        this.setState(
            {
                isLoaded: true,
                data
            }    
        )
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
                                let key = uuidv4()
                                children.push(
                                    <div key={key}>
                                        <input id={key} type="checkbox"/>
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

    handleClick(event) {
        event.preventDefault()
        console.log('event clicked was ', event)
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form>
                            <div onClick={this.handleClick} className="form-group">
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