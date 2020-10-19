import * as React from 'react'
import Parser from 'rss-parser'
import moment from 'moment'
import subscribePlus from '../assets/icons/subscribe_plus.svg'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { LockedFacet } from './QueryWrapper'

let rssParser = new Parser()
type RssState = {
  rssFeed: any
  isLoadingError: boolean
  itemId2MoreItem: {}
  isShowingSubscribeUI: boolean
  allItemsUrl?: string
}

export type RssFeedCardsProps = {
  url: string
  lockedFacet?: LockedFacet // optional tag to filter by, typically set by using this component on a DetailsPage
  itemsToShow: number
  allowCategories?: string[]
  mailChimpListName?: string
  mailChimpUrl?: string
  viewAllNewsButtonText?: string
}
export default class RssFeedCards extends React.Component<RssFeedCardsProps, RssState> {
  // only update the state if this component is mounted
  _isMounted = false
  
  constructor(props: RssFeedCardsProps) {
    super(props)
    this.state = {
      rssFeed: {},
      isLoadingError: false,
      itemId2MoreItem: {},
      isShowingSubscribeUI: false,
    }
  }
  
  componentDidMount() {
    this._isMounted = true
    const { url, lockedFacet } = this.props
    const lockedFacetValue = lockedFacet?.value
    const tagPath = lockedFacetValue ? `/tag/${lockedFacetValue.replace(' ', '-')}` : ''
    const allItems = `${url}${tagPath}`
    const feedUrl = `${allItems}/feed/`
    fetch(feedUrl)
      .then(response => response.text())
      .then(responseData => rssParser.parseString(responseData))
      .then(rss => {
        if (this._isMounted) {
          this.setState({ rssFeed: rss,
          allItemsUrl: allItems })
        }
      })
      .catch(err => {
        if (this._isMounted) {
          this.setState({ isLoadingError: true })
        }
      })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  public onClickSubscribe = () => {
    this.setState({ isShowingSubscribeUI: true })
  }

  render() {
    const { viewAllNewsButtonText } = this.props
    return (
      <>        
        {this.props.mailChimpUrl && (
          <div className="RssFeedSubscribe text-center">
            {!this.state.isShowingSubscribeUI && (
              <a className="RssFeedSubscribeToNewsLink" onClick={this.onClickSubscribe}>
                <img src={subscribePlus} alt="Subscribe to News" />
                Subscribe to News
              </a>
            )}
            {this.state.isShowingSubscribeUI && (
                <div className="MailchimpSubscribeContainer">
                  <img src={subscribePlus} alt="Subscribe to News" />
                  <p>
                    Subscribe to receive the {this.props.mailChimpListName} by e-mail,
                    which provides information and updates related to the
                    Portal. You can opt out at any time by using the unsubscribe
                    link within the e-mail. We will not share your information
                    with any third parties or use it for any other purposes.
                  </p>
                  <div className="SRC-marginBottomTop">
                    <MailchimpSubscribe url={this.props.mailChimpUrl} />
                  </div>
                </div>
            )}
          </div>
        )}
        <div className="RssFeed">
          <div className="RssFeedItems">
          {this.state.rssFeed.items &&
            this.state.rssFeed.items.map((item: any, index: any) => {
              // The other is to hide the large number of items in a particular feed (usually a max of 10 are returned).  See state.isShowingMoreItems
              let isItemVisible: boolean =
                index < this.props.itemsToShow

              return (
                <div
                  key={item.guid}
                  className={`RssFeedItem ${isItemVisible ? '' : 'hidden'}`}
                >
                  <div>
                    <div className="RssFeedItemCategories">
                      {item['categories'].map((categoryName: string,) => {
                        // are we allowed to show this category/tag?
                        const categoryNameLowerCase = categoryName.toLowerCase()
                        const allowCategories = this.props.allowCategories
                        if (allowCategories?.findIndex(item => categoryNameLowerCase === item.toLowerCase()) === -1)
                          return <></>
                        // else
                        return <a 
                          href={`${this.state.rssFeed.link}/?tag=${categoryName.replace(' ', '-')}`}
                          className="SRC-no-underline-on-hover"
                          target="_blank" rel="noopener noreferrer">
                            <div key={`${item.guid}_${categoryName}`} className="RssFeedItemCategory">{categoryName}</div>
                        </a>
                      })}
                    </div>
                    <p className="RssFeedItemDate">
                      {moment(item['isoDate']).format('MMMM YYYY')}
                    </p>
                    <p className="RssFeedItemTitle">{item['title']}</p>
                    <div className="RssFeedItemDescription"
                    >{item['contentSnippet'].replace(/\[...\]|\[…\]/gm, '…')}</div>
                    <a className="RssFeedItemLink" href={item['link']} target="_blank">Continue reading</a>
                  </div>
                </div>
              )
            })}
          </div>
          {this.state.rssFeed.items &&
            this.state.rssFeed.items.length > this.props.itemsToShow && this.state.allItemsUrl && (
              <div className="RssFeedViewAllNewsButtonContainer">
                <a className="homepage-button-link" href={this.state.allItemsUrl} target="_blank" rel="noopener noreferrer">
                    { viewAllNewsButtonText ?? 'VIEW ALL NEWS' }
                </a>
              </div>
            )}
          {this.state.isLoadingError && (
            <div>Unable to load feed: {this.props.url}</div>
          )}
        </div>
      </>
    )
  }
}
