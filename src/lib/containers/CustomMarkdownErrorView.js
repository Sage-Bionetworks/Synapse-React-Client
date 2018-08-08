
import React from 'react'

export class CustomMarkdownErrorView extends React.Component {

    render () {
        return (
        <div className="text-danger">
            {this.props.message}
        </div>
        )
    }
}



export default CustomMarkdownErrorView