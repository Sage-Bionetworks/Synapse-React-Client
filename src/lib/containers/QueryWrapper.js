import React from 'react'
import * as SynapseClient from 'lib/utils/SynapseClient'
const cloneDeep = require('lodash.clonedeep')
const INIT_REQUEST = "init request"

// takes in a token and SQL string and initQueryRequest
export default class QueryWrapper extends React.Component {

    constructor(){
        super()
        this.state = {
            data: []
        }
        this.getLastQueryRequest = this.getLastQueryRequest.bind(this)
        this.executeQueryRequest = this.executeQueryRequest.bind(this)
    }

    componentDidMount() {
        this.executeQueryRequest(INIT_REQUEST)
    }

    getLastQueryRequest() {
        return cloneDeep(this.state.lastQueryRequest)
    }

    executeQueryRequest(queryRequest) {
        if (queryRequest === INIT_REQUEST) {
            SynapseClient.getQueryTableResults(this.props.initQueryRequest, this.props.token).then(
                data => {
                    this.setState({
                        data,
                        lastQueryRequest: cloneDeep(this.props.initQueryRequest)
                    })
                }
            )   
        } else {
            SynapseClient.getQueryTableResults(queryRequest, this.props.token).then(
                data => {
                    this.setState({
                        data,
                        lastQueryRequest: queryRequest
                    })
                }
            )
        }
    }
    
    render () {
        return (
            <div> 
                {React.Children.map(this.props.children, child =>{
                    return React.cloneElement(child, {showBy: this.props.showBy, executeQueryRequest: this.executeQueryRequest, getLastQueryRequest: this.getLastQueryRequest, data: this.state.data})
                })} 
            </div>
        )
    }
}