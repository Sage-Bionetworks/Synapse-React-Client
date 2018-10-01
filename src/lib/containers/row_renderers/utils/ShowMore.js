import React from 'react'

const CUTOFF = 100

export default class ShoreMore extends React.Component {

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
        let showButton = false
        if (summary && !this.state.showMore && summary.length >= CUTOFF) {
            summary = summary.split(".")
            summary = summary.slice(0, summary.length / 2) // remove text after last sentence
            summary = summary.join(".") + "."  // add back period to the end
            showButton = true
        }
        return (
            <React.Fragment>
                <p>
                    {summary}
                    {!this.state.showMore && showButton && <a className="SRC-magentaText" onClick={this.toggleShowMore}> Show More </a>}
                </p>
            </React.Fragment>
        )
    }
}