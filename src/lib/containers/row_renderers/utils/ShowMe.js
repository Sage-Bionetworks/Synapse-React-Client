import React from 'react'

const CUTOFF = 250

export default class ShowMe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showMore: false
        }
        this.toggleShowMore = this.toggleShowMore.bind(this)
    }

    toggleShowMore(event) {
        event.preventDefault()
        let {showMore} = this.state
        showMore = !showMore
        this.props.onClick({
            showMore
        })
        this.setState({
            showMore
        })
    }
    
    render () {
        // cutoff if show more is false and if its reasonably long enough
        let {summary} = this.props
        if (!this.state.showMore && summary.length >= CUTOFF) {
            summary = summary.substring(0,CUTOFF).split(".")
            summary = summary.slice(0, summary.length - 1) // remove text after last sentence
            summary = summary.join(".") + "."  // add back period to the end
        }
        return (
            <React.Fragment>
                {summary}
                {!this.state.showMore && <a className="SRC-magentaText" onClick={this.toggleShowMore}> Show More </a>}
            </React.Fragment>
        )
    }
}