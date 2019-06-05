import * as React from 'react'
import rssParser from 'rss-parser'

type RssState = {
  rssFeed: rssParser.Output
}

export type RssFeedProps = {
  url: string
}

export default class RssFeed extends React.Component<RssFeedProps, RssState> {

  constructor(props: RssFeedProps) {
    super(props)
    this.state = { rssFeed: {} }
  }

  componentDidMount() {
    const {
      url
    } = this.props
    const parser = new rssParser()
    parser.parseURL(url)
      .then(feed => this.setState({ rssFeed: feed }))
    // TODO : error handling (rss feed unavailable, show something?
  }

  render() {
    return (
      <ul className="srcRssFeed">
        {
          this.state.rssFeed.items &&
          this.state.rssFeed.items.map((item: rssParser.Item) => {
            return (
              // TODO : style!
              <li key={item.guid} className="srcRssFeedItem">
                <a className="srcRssFeedItemTitle" href={item.link}>
                  {item.title}
                </a>
                <p className="srcRssFeedItemContent">{item.content}</p>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
