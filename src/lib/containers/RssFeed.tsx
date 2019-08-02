import * as React from 'react'
import reactNativeRssParser from 'react-native-rss-parser'

type RssState = {
  rssFeed: any,
  isLoadingError: boolean,
  isShowingMoreItems: boolean
}

export type RssFeedProps = {
  url: string,
  maxItemsToShow: number
}

export default class RssFeed extends React.Component<RssFeedProps, RssState> {
  constructor(props: RssFeedProps) {
    super(props)
    this.state = { rssFeed: {}, isLoadingError: false, isShowingMoreItems: false }
  }

  componentDidMount() {
    const {
      url
    } = this.props
    fetch(url)
      .then(response => response.text())
      .then(responseData => reactNativeRssParser.parse(responseData))
      .then(rss => this.setState({ rssFeed: rss }))
      .catch(err => this.setState({ isLoadingError: true }))
  }

  public onClickReadMore = (itemId: string) => (event: React.SyntheticEvent<HTMLButtonElement>) => {
    let feedItemContentDiv = document.getElementById(itemId)
    if (feedItemContentDiv) {
      for (var i = 0; i < feedItemContentDiv.children.length; i++) {
          let child = feedItemContentDiv.children[i]
          child.classList.remove('hidden')
        }
    }
    event.currentTarget.classList.add('hidden')
  }

  public onClickShowMoreItems = () => (event: React.SyntheticEvent<HTMLButtonElement>) => {
    this.setState({isShowingMoreItems: true})
  }

  render() {
    return (
      <ul className="srcRssFeed">
        {
          this.state.rssFeed.items &&
          this.state.rssFeed.items.map((item: any, index: any) => {
            // There are 2 "more" buttons here.  One is to hide long article content.  See moreElement and onClickReadMore()
            // The other is to hide the large number of items in a particular feed (usually a max of 10 are returned).  See state.isShowingMoreItems
            let parser = new DOMParser()
            let parsedHtml = parser.parseFromString(item.content, 'text/html')
            let bodyElement = parsedHtml.querySelector('body')
            let moreElement = parsedHtml.querySelector('[id^="more-"]')
            if (moreElement && bodyElement) {
              let foundMoreElement = false
              var children = bodyElement.children
              for (var i = 0; i < children.length; i++) {
                let child = children[i]
                if (foundMoreElement) {
                  child.classList.add('hidden')
                }
                if (child === moreElement) {
                  foundMoreElement = true
                }
              }
            }
            let isItemVisible: boolean = index < this.props.maxItemsToShow || this.state.isShowingMoreItems
            return (
              <li key={item.id} className={`srcRssFeedItem ${isItemVisible ? '' : 'hidden'}`}>
                <div className="srcRssFeedItemContent">
                  <div id={item.id} dangerouslySetInnerHTML={{ __html: parsedHtml.documentElement.innerHTML }}></div>
                  {
                    moreElement &&
                    <div className="clearfix">
                      <button className="btn SRC-grayBackground SRC-roundBorder SRC-floatRight" onClick={this.onClickReadMore(item.id)}>View More</button>
                    </div>
                  }
                </div>
              </li>
            )
          })
        }
        {
          this.state.rssFeed.items &&
          this.state.rssFeed.items.length > this.props.maxItemsToShow &&
          !this.state.isShowingMoreItems &&
          <div className="clearfix">
            <button className="btn SRC-grayBackground SRC-roundBorder SRC-floatRight" onClick={this.onClickShowMoreItems()}>View All</button>
          </div>
        }
        {
          this.state.isLoadingError &&
          <div>
            Unable to load feed: {this.props.url}
          </div>
        }
      </ul>
    )
  }
}
