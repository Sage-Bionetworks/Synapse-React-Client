import React from 'react'
import {STUDY, DATASET, FUNDER, PUBLICATION, TOOL} from '../utils/SynapseConstants'
import {Study, Tool, Publication, Dataset, Funder } from './row_renderers'
import PropTypes from 'prop-types'

// Instead of giving each of the Study/Tool/etc components the same
// props we make a simple container that does
const RowContainer = ({children, data, limit,...rest}) => {
    return (
        data.queryResult.queryResults.rows.map(
            (rowData, index) => {
                if (index < limit) {
                    return <React.Fragment key={rowData.rowId}>
                        {
                            React.Children.map(children, child => {
                                return React.cloneElement(child, {data: rowData.values, ...rest})
                            })
                        }
                    </React.Fragment>
                } else {
                     return false
                }
            }
        )
    )
}

class SynapseRow extends React.Component {

    constructor(props){ 
        super(props)
        this.renderChild = this.renderChild.bind(this)
    }

    renderChild () {
        const {type} = this.props
        switch(type) {
            case STUDY:
                return <Study/>
            case DATASET:
                return <Dataset/>
            case FUNDER:
                return <Funder/>
            case PUBLICATION:
                return <Publication/>
            case TOOL:
                return <Tool/>
            default:
                return // this should never happen
        }

    }

    render () {
        const {data, limit} = this.props
        
        if (data.length === 0) {
            return (<div className="container"> Login to see this resource </div>)
        }

        let schema = {}
        data.queryResult.queryResults.headers.forEach(
            (element, index) => {
                schema[element.name] = index
        });

        return (<RowContainer limit={limit} data={data} schema={schema}>
                    {this.renderChild()}
                </RowContainer>)
    }
}

SynapseRow.propTypes = {
    type: PropTypes.string.isRequired,
}

SynapseRow.defaultProps = {
    type: PropTypes.string.isRequired,
    limit: Infinity
}

export default SynapseRow