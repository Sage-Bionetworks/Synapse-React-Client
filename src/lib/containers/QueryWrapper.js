import React from 'react'
import * as SynapseClient from 'lib/utils/SynapseClient'

let INIT_REQUEST = "init request"

// takes in a token and SQL string and initQueryRequest
export default class QueryWrapper extends React.Component {

    constructor(){
        super()
        this.state = {
            data: [],
            isLoading: true
        }
        this.makeQueryRequest = this.makeQueryRequest.bind(this)
    }

    componentDidMount() {
        this.makeQueryRequest(INIT_REQUEST)
    }

    makeQueryRequest(queryRequest) {
        this.setState({isLoading: true})
        if (queryRequest === INIT_REQUEST) {
            SynapseClient.getQueryTableResults(this.props.initQueryRequest, this.props.token).then(
                data => {
                    this.setState({
                        data,
                        isLoading: false
                    })
                }
            )   
        } else {
            SynapseClient.getQueryTableResults(queryRequest, this.props.token).then(
                data => {
                    this.setState({
                        data,
                        isLoading: false
                    })
                }
            )
        }
    }

    render () {
        return (
            <div> 
                {React.Children.map(this.props.children, child =>{
                    return React.cloneElement(child, {updateQueryRequest: this.makeQueryRequest, data: this.state.data, sql: this.props.sql,
                    isLoading: this.state.isLoading})
                })} 
            </div>
        )
    }
}