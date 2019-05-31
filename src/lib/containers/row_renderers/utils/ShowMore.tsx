import * as React from 'react'
const CHAR_COUNT_CUTOFF = 400

type ShowMoreState = {
  showMore: boolean
}

type ShowMoreProps = {
  onClick?: (val: any) => void
  summary?: string
}

export default class ShowMore extends React.Component<ShowMoreProps, ShowMoreState> {

  constructor(props: ShowMoreProps) {
    super(props)
    this.state = {
      showMore: false
    }
    this.toggleShowMore = this.toggleShowMore.bind(this)
  }

  public toggleShowMore(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    let { showMore } = this.state
    showMore = !showMore
    this.props.onClick!({
      showMore
    })
    this.setState({
      showMore
    })
  }

  public render() {
      // CHAR_COUNT_CUTOFF if show more is false and if its reasonably long enough
    const { summary } = this.props
    let summaryView = ''
    const meetsCharRequirenent = summary && summary.length >= CHAR_COUNT_CUTOFF
    if (!this.state.showMore && meetsCharRequirenent) {
      const summarySplit = summary!.split(' ')
            // find num words to join such that its >= char_count_cutoff
      let i = 0
      while (summaryView.length < CHAR_COUNT_CUTOFF) {
        summaryView += `${summarySplit[i]} `
        i += 1
      }
    } else if (!meetsCharRequirenent) {
      summaryView = summary!
    }
    const showMoreButton =  (
            meetsCharRequirenent &&
           (
            <a
                style={{ fontSize: '14px', cursor: 'pointer' }}
                className="SRC-primary-text-color"
                onClick={this.toggleShowMore}
            >
                ...Show More{' '}
            </a>)
        )
    return (
      <React.Fragment>
        {!this.state.showMore && summaryView}
        {this.state.showMore && summary}
        {!this.state.showMore && showMoreButton}
      </React.Fragment>
    )
  }
}
