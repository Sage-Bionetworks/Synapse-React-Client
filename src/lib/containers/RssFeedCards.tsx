import * as React from 'react'
import Parser from 'rss-parser'
import moment from 'moment'
import subscribePlus from '../assets/icons/subscribe_plus.svg'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

let rssParser = new Parser()
type RssState = {
  rssFeed: any
  isLoadingError: boolean
  isShowingMoreItems: boolean
  itemId2MoreItem: {}
  isShowingSubscribeUI: boolean
}

export type RssFeedProps = {
  url: string
  defaultItemsToShow: number
  showMoreElements: boolean
  mailChimpListName?: string
  mailChimpUrl?: string
}
const parser = new DOMParser()
export default class RssFeed extends React.Component<RssFeedProps, RssState> {
  // only update the state if this component is mounted
  _isMounted = false
  
  constructor(props: RssFeedProps) {
    super(props)
    this.state = {
      rssFeed: {},
      isLoadingError: false,
      isShowingMoreItems: false,
      itemId2MoreItem: {},
      isShowingSubscribeUI: false,
    }
  }
  
  componentDidMount() {
    this._isMounted = true
    const { url } = this.props
    fetch(url)
      .then(response => response.text())
      .then(responseData => rssParser.parseString(responseData))
      .then(rss => {
        if (this._isMounted) {
          this.setState({ rssFeed: rss })
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

  public onClickShowMoreItems = () => (
    event: React.SyntheticEvent<HTMLButtonElement>,
  ) => {
    this.setState({ isShowingMoreItems: true })
  }


  public onClickSubscribe = () => {
    this.setState({ isShowingSubscribeUI: true })
  }

  render() {
    return (
      <>
        <h3 className="RssFeedWhatsNew text-center">What's New?</h3>
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
              let parsedHtml = parser.parseFromString(
                item['content:encoded'],
                'text/html',
              )
              let bodyElement = parsedHtml.querySelector('body')
              let moreElement = this.props.showMoreElements && parsedHtml.querySelector('[id^="more-"]')
              if (moreElement && bodyElement) {
                let foundMoreElement = false
                const children = bodyElement.children
                
                for (let i = 0; i < children.length; i++) {
                  let child = children[i]
                  if (foundMoreElement) {
                    child.innerHTML=''
                  }
                  if (child === moreElement) {
                    foundMoreElement = true
                  }
                }
              }
              let isItemVisible: boolean =
                index < this.props.defaultItemsToShow ||
                this.state.isShowingMoreItems

              return (
                <div
                  key={item.guid}
                  className={`RssFeedItem ${isItemVisible ? '' : 'hidden'}`}
                >
                  <div>
                    <div className="RssFeedItemCategories">
                    {item['categories'].map((categoryName: any, index: any) => {
                      return <div key={`${item.guid}_${categoryName}`} className="RssFeedItemCategory">{categoryName}</div>
                    })}
                    </div>
                    <p className="RssFeedItemDate">
                      {moment(item['isoDate']).format('MMMM YYYY')}
                    </p>
                    <p className="RssFeedItemTitle">{item['title']}</p>
                    <div className="RssFeedItemDescription"
                    >{parsedHtml.documentElement.innerText}</div>
                    <a className="RssFeedItemLink" href={item['link']} target="_blank">Continue reading</a>
                  </div>
                </div>
              )
            })}
          </div>
          {this.state.rssFeed.items &&
            this.state.rssFeed.items.length > this.props.defaultItemsToShow &&
            !this.state.isShowingMoreItems && (
              <div className="RssFeedViewAllNewsButtonContainer">
                <button
                  className="btn homepage-button"
                  onClick={this.onClickShowMoreItems()}
                >
                  VIEW ALL NEWS
                </button>
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
