import React from 'react'
import { getQueryTableResults } from 'lib/utils/SynapseClient'
import PropTypes from 'prop-types'

export default class Facets extends React.Component {

    constructor() {
        super()
    }

    componentDidMount() {

        if (this.props.makeQueryRequest) {
              // step 1: get init query with maxRowsPerPage calculated
            let queryRequest = {
                concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
                entityId: ownerId,
                query: {
                    isConsistent: false,
                    limit: 1,
                    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS | SynapseConstants.BUNDLE_MASK_QUERY_FACETS, // 9,  // get query results and max rows per page
                    offset: 0,
                    sql: sql
                }
            };
        }

    }

    async makeBundleQueryRequest() {
        const {token, sql } = this.props

        // step 1: get init query with maxRowsPerPage calculated
        let queryRequest = {
            concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
            entityId: ownerId,
            query: {
                isConsistent: false,
                partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS | SynapseConstants.BUNDLE_MASK_QUERY_FACETS, // 9,  // get query results and max rows per page
                offset: 0,
                sql: sql
            }
        };

        let data = await getQueryTableResults(queryRequest, this.props.token)
        return data.map(
            element => {
                <input type="checbox"> click me </input>
            }
        )

    }

    render () {
        return (
            <form>
                <div className="form-group">
                    <input type="text">

                    </input>
                </div>
            </form>
        )
    }
}

Facets.propTypes = {
    makeQueryRequest: PropTypes.string,
}

Facets.defaultProps = {
    makeQueryRequest: true
}