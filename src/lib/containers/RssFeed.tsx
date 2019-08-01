import * as React from 'react'
import reactNativeRssParser from 'react-native-rss-parser'

type RssState = {
  rssFeed: any,
  isLoadingError: boolean
}

export type RssFeedProps = {
  url: string
}

export default class RssFeed extends React.Component<RssFeedProps, RssState> {
  constructor(props: RssFeedProps) {
    super(props)
    this.state = { rssFeed: {}, isLoadingError: false }
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

  public onClickReadMore = (itemId: string) => (event: React.SyntheticEvent<HTMLAnchorElement>) => {
    let feedItemContentDiv = document.getElementById(itemId)
    if (feedItemContentDiv) {
      for (var i = 0; i < feedItemContentDiv.children.length; i++) {
          let child = feedItemContentDiv.children[i]
          child.classList.remove('hidden')
        }
    }
    event.currentTarget.classList.add('hidden')
  }

  render() {
    return (
      <ul className="srcRssFeed">
        {
          this.state.rssFeed.items &&
          this.state.rssFeed.items.map((item: any) => {
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
            return (
              <li key={item.id} className="srcRssFeedItem">
                <div className="srcRssFeedItemContent">
                  <div id={item.id} dangerouslySetInnerHTML={{ __html: parsedHtml.documentElement.innerHTML }}></div>
                  {
                    moreElement &&
                    <a className='SRC-floatRight SRC-hand-cursor' onClick={this.onClickReadMore(item.id)}>Read more</a>
                  }
                </div>
              </li>
            )
          })
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
