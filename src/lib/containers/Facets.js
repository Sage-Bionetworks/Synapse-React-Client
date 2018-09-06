import React from 'react'
import * as SynapseConstants from 'lib/utils/SynapseConstants'
import { getFullQueryTableResults } from 'lib/utils/SynapseClient'
import PropTypes from 'prop-types'

export default class Facets extends React.Component {

    constructor() {
        super()
        this.makeBundleQueryRequest = this.makeBundleQueryRequest.bind(this)
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
            console.log('facets data is ', this.state.data)
            return this.state.data.facets.map(
                (element, index) => {
                    if (element.facetType === "enumeration") {
                        return <input key={index} type="checkbox" text="click me"/>
                    }
                }
            )
        }
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p> facets below </p>
                    </div>
                    <div className="col">
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