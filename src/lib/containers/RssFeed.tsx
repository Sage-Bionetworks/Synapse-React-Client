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

  render() {
    return (
      <ul className="srcRssFeed">
        {
          this.state.rssFeed.items &&
          this.state.rssFeed.items.map((item: any) => {
            return (
              <li key={item.id} className="srcRssFeedItem">
                <a className="srcRssFeedItemTitle" href={item.links[0].url}>
                  {item.title}
                </a>
                <div className="srcRssFeedItemContent" dangerouslySetInnerHTML={{ __html: item.content }} />
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
