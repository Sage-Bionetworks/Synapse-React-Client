import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faLongArrowAltUp)
library.add(faLongArrowAltDown)
let Parser = require('rss-parser')
let rssParser = new Parser()

type RssState = {
  rssFeed: any,
  isLoadingError: boolean,
  isShowingMoreItems: boolean,
  itemId2Icon:{}
}

export type RssFeedProps = {
  url: string,
  defaultItemsToShow: number
}

const parser = new DOMParser()

export default class RssFeed extends React.Component<RssFeedProps, RssState> {
  constructor(props: RssFeedProps) {
    super(props)
    this.state = { rssFeed: {}, isLoadingError: false, isShowingMoreItems: false, itemId2Icon: {} }
  }

  componentDidMount() {

    const {
      url
    } = this.props
    fetch(url)
      .then(response => response.text())
      .then(responseData => rssParser.parseString(responseData))
      .then(rss => this.setState({ rssFeed: rss }))
      .catch(err => this.setState({ isLoadingError: true }))
  }

  public onToggleReadMore = (itemId: string) => (event: React.SyntheticEvent<HTMLButtonElement>) => {
    let feedItemContentDiv = document.getElementById(itemId)
    let button:HTMLButtonElement = event.currentTarget
    let isShow:boolean = button.innerText.includes('More')
    if (feedItemContentDiv) {
      let foundMoreItem:boolean = false
      for (let i = 0; i < feedItemContentDiv.children.length; i++) {
          // TODO: skip over children until we find the id that starts with 'more-'
          // TODO: add icon!
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
    
    if (isShow) {
      button.firstChild!.textContent = 'Show Less'
      this.state.itemId2Icon[itemId] = 'long-arrow-alt-up'
    } else  {
      button.firstChild!.textContent = 'Show More'
      this.state.itemId2Icon[itemId] = 'long-arrow-alt-down'
    }
    this.setState({ itemId2Icon: this.state.itemId2Icon })
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
            let parsedHtml = parser.parseFromString(item['content:encoded'], 'text/html')
            let bodyElement = parsedHtml.querySelector('body')
            let moreElement = parsedHtml.querySelector('[id^="more-"]')
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
            let isItemVisible: boolean = index < this.props.defaultItemsToShow || this.state.isShowingMoreItems
            
            if (!this.state.itemId2Icon[item.guid]) {
              this.state.itemId2Icon[item.guid] = 'long-arrow-alt-down'
            }
            return (
              <li key={item.guid} className={`srcRssFeedItem ${isItemVisible ? '' : 'hidden'}`}>
                <div className="srcRssFeedItemContent">
                  <div id={item.guid} dangerouslySetInnerHTML={{ __html: parsedHtml.documentElement.innerHTML }}></div>
                  {
                    moreElement &&
                    <div className="clearfix">
                      <button
                        style={{ textAlign: 'left', margin: 0, padding: '0px 0px 25px 35px' }}
                        className="SRC-primary-text-color SRC-basicButton"
                        onClick={this.onToggleReadMore(item.guid)}
                      >
                        Show More
                        <FontAwesomeIcon key={`${item.guid}${index}`}
                          style={{ marginLeft: '5px' }}
                          icon={this.state.itemId2Icon[item.guid]}
                        />
                      </button>
                    </div>
                  }
                </div>
              </li>
            )
          })
        }
        {
          this.state.rssFeed.items &&
          this.state.rssFeed.items.length > this.props.defaultItemsToShow &&
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
