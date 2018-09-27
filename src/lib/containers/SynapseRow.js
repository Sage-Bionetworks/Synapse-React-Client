import React from 'react'
import * as SynapseClient from 'lib/utils/SynapseClient'
import {STUDY, DATASET, FUNDER, PUBLICATION, TOOL} from '../utils/SynapseConstants'
import {Study, Tool, Publication, Dataset, Funder } from './row_renderers'
import PropTypes from 'prop-types'

// Instead of giving each of the Study/Tool/etc components the same
// props we make a simple container that does
const RowContainer = ({children, data, ...rest}) => {
    console.log('row data ', data)
    return (
        data.queryResult.queryResults.rows.map(
            rowData => {
                return <React.Fragment key={rowData.rowId}>
                    {
                        React.Children.map(children, child => {
                            return React.cloneElement(child, {data: rowData.values}, rest)
                        })
                    }
                </React.Fragment>
            }
        )
    )
}

export default class SynapseRow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            hasLoaded: false
        }
        this.renderChild = this.renderChild.bind(this)
    }

    componentDidMount() { 
        SynapseClient.getQueryTableResults(this.props.query, this.props.token).then(
            data => {
                console.log("data is ", data)
                this.setState({
                    hasLoaded: true,
                    data
                })
            }
        ).catch(err => {
            console.log("Error on rendering SynapseRow ", err)
        })
    }

    renderChild () {
        switch(this.props.type) {
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

        if (!this.state.hasLoaded) {
            // loading the data
            return <div>loading</div>
        }

        return (
            <RowContainer data={this.state.data} icon={"icon"}>
                {this.renderChild()}
            </RowContainer>
        )
    }
}

SynapseRow.propTypes = {
    type: PropTypes.string.isRequired,
    query: PropTypes.object.isRequired,
    token: PropTypes.string
}