
import React from 'react'

export default class StackedRow extends React.Component {

    componentDidMount() {
        this.props.data.facets.forEach(
            element => {
                console.log("data updated")
            }
        )
    }

    render () {
        return (<div>
            I am a div
        </div>)
    }
}