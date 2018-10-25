import React from 'react'

const CHAR_COUNT_CUTOFF = 400

export default class ShowMore extends React.Component {

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
        // CHAR_COUNT_CUTOFF if show more is false and if its reasonably long enough
        let {summary} = this.props
        let summaryView = ""
        if (!this.state.showMore && summary && summary.length >= CHAR_COUNT_CUTOFF) {
            summary = summary.split(" ")
            // find num words to join such that its >= char_count_cutoff
            let i = 0
            while (summaryView.length < CHAR_COUNT_CUTOFF) {
                summaryView += summary[i] + " "
                i++
            }
        } else if (summary && summary.length < CHAR_COUNT_CUTOFF) {
            summaryView = summary
        }
        return (
            <React.Fragment>
                {!this.state.showMore && summaryView}
                {this.state.showMore && summary}
                {!this.state.showMore && <a className="SRC-primary-text-color" onClick={this.toggleShowMore}>...Show More </a>}
            </React.Fragment>
        )
    }
}