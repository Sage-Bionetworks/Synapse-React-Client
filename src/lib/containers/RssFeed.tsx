import * as React from 'react'
import { library, IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Parser from 'rss-parser'
library.add(faLongArrowAltUp)
library.add(faLongArrowAltDown)
let rssParser = new Parser()
type RssState = {
  rssFeed: any
  isLoadingError: boolean
  isShowingMoreItems: boolean
  itemId2MoreItem: {}
}

export type RssFeedProps = {
  url: string
  defaultItemsToShow: number
  showMoreElements: boolean
}

const parser = new DOMParser()

/**
 * Deprecated, use RssFeedCards instead
 */
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
  public onToggleReadMore = (itemId: string) => (
    event: React.SyntheticEvent<HTMLButtonElement>,
  ) => {
    let feedItemContentDiv = document.getElementById(itemId)
    if (!this.state.itemId2MoreItem[itemId]) {
      this.state.itemId2MoreItem[itemId] = {
        text: 'View full post',
        icon: 'long-arrow-alt-down',
      }
    }
    const isShow: boolean = this.state.itemId2MoreItem[itemId].text.includes(
      'View full post',
    )
    if (feedItemContentDiv) {
      let foundMoreItem: boolean = false
      // hide or show the elements after the More element
      for (let i = 0; i < feedItemContentDiv.children.length; i++) {
        // skip over children until we find the id that starts with 'more-'
        let child = feedItemContentDiv.children[i]
        if (foundMoreItem) {
          if (isShow) {
            child.classList.remove('hidden')
          } else {
            child.classList.add('hidden')
          }
        } else {
          foundMoreItem = child.id.includes('more-')
        }
      }
    }
    // toggle, by updating text and icon
    const newText: string = isShow ? 'Hide' : 'View full post'
    const newIcon: IconProp = isShow
      ? 'long-arrow-alt-up'
      : 'long-arrow-alt-down'
    this.state.itemId2MoreItem[itemId] = {
      text: newText,
      icon: newIcon,
    }
    this.setState({ itemId2MoreItem: this.state.itemId2MoreItem })
  }

  public onClickShowMoreItems = () => (
    event: React.SyntheticEvent<HTMLButtonElement>,
  ) => {
    this.setState({ isShowingMoreItems: true })
  }

  render() {
    return (
      <ul className="srcRssFeed">
        {this.state.rssFeed.items &&
          this.state.rssFeed.items.map((item: any, index: any) => {
            // There are 2 "more" buttons here.  One is to hide long article content.  See moreElement and onClickReadMore()
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
                  child.classList.add('hidden')
                }
                if (child === moreElement) {
                  foundMoreElement = true
                }
              }
            }
            let isItemVisible: boolean =
              index < this.props.defaultItemsToShow ||
              this.state.isShowingMoreItems

            let showMoreText: string = 'View full post'
            let showMoreIcon: IconProp = 'long-arrow-alt-down'
            if (this.state.itemId2MoreItem[item.guid]) {
              showMoreText = this.state.itemId2MoreItem[item.guid].text
              showMoreIcon = this.state.itemId2MoreItem[item.guid].icon
            }
            return (
              <li
                key={item.guid}
                className={`srcRssFeedItem ${isItemVisible ? '' : 'hidden'}`}
              >
                <div className="srcRssFeedItemContent">
                  <div
                    id={item.guid}
                    dangerouslySetInnerHTML={{
                      __html: parsedHtml.documentElement.innerHTML,
                    }}
                  ></div>
                  {moreElement && (
                    <div className="clearfix">
                      <button
                        style={{
                          textAlign: 'left',
                          margin: 0,
                          padding: '0px 50px 25px 35px',
                        }}
                        className="SRC-primary-text-color SRC-basicButton SRC-floatRight"
                        onClick={this.onToggleReadMore(item.guid)}
                      >
                        {showMoreText}
                        <FontAwesomeIcon
                          key={`${item.guid}${index}`}
                          style={{ marginLeft: '5px' }}
                          icon={showMoreIcon}
                        />
                      </button>
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        {this.state.rssFeed.items &&
          this.state.rssFeed.items.length > this.props.defaultItemsToShow &&
          !this.state.isShowingMoreItems && (
            <div className="clearfix">
              <button
                className="btn SRC-grayBackground SRC-roundBorder SRC-floatRight"
                onClick={this.onClickShowMoreItems()}
              >
                View All
              </button>
            </div>
          )}
        {this.state.isLoadingError && (
          <div>Unable to load feed: {this.props.url}</div>
        )}
      </ul>
    )
  }
}
