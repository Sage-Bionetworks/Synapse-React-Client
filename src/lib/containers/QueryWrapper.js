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
        console.log("query requested")
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
            console.log("%ccalled get query", "background: purple")
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
        console.log("%cre-render from wrapper", "background: cyan")
        return (
            <div> 
                {React.Children.map(this.props.children, child =>{
                    return React.cloneElement(child, {updateQueryRequest: this.makeQueryRequest, data: this.state.data, sql: this.props.sql,
                    })
                })} 
            </div>
        )
    }
}