import * as React from 'react'
import RssFeed from './RssFeed'
import TwitterFeed from './TwitterFeed'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { KeyValue } from 'lib/utils/functions/sqlFunctions'
import _ from 'lodash'

type MenuState = {
  menuIndex: number
}

export type MenuConfig = {
  feedName: string
  feedDescription: string
  feedUrl: string
  feedKeyValue?: KeyValue
  defaultItemsToShow: number
  mailChimpListName?: string
  mailChimpUrl?: string
  twitterFeedUrl?: string
}
export type NewsFeedMenuProps = {
  menuConfig: MenuConfig[]
  searchParams?: KeyValue
  routeToNewsFeed?: string // if set, news feed nav bar links are hardcoded to this route, with query params set to the selected menu config key/value
}

export default class NewsFeedMenu extends React.Component<
  NewsFeedMenuProps,
  MenuState
> {
  constructor(props: NewsFeedMenuProps) {
    super(props)
    let initMenuIndex = 0
    if (props.searchParams) {
      // do the search params match a menu config?
      props.menuConfig.forEach((config, index) => {
        if (_.isEqual(props.searchParams, config.feedKeyValue)) {
          initMenuIndex = index
        }
      })
    }
    // See here - https://stackoverflow.com/questions/40063468/react-component-initialize-state-from-props/47341539#47341539
    this.state = {
      menuIndex: initMenuIndex,
    }
    this.switchFeed = this.switchFeed.bind(this)
  }

  /**
   * Handle user clicking menu item, event isn't used so we denote it as an _
   *
   * @memberof Menu
   */
  public switchFeed = (menuIndex: number) => (
    _: React.SyntheticEvent<HTMLDivElement>,
  ) => {
    // there's an odd bug where clicking a menu item twice will select the first tab,
    // this is a fix for that, but this shouldn't be necessary
    if (this.state.menuIndex !== menuIndex) {
      const { routeToNewsFeed } = this.props
      if (routeToNewsFeed) {
        // Update the URL!
        // The route has been given, so instead of switching the feed, change the page to surface the feed key/value in the url
        const urlParams = new URLSearchParams(window.location.search)
        Object.getOwnPropertyNames(this.props.menuConfig[menuIndex].feedKeyValue).forEach(key => {
          urlParams.set(key, this.props.menuConfig[menuIndex]!.feedKeyValue![key]);  
        })
        window.location.href = `${routeToNewsFeed}?${urlParams + ''}`
      } else {
        // Update the state
        this.setState({ menuIndex })
      }
    }
  }

  public render() {
    const menuDropdown = this.renderMenu()
    const { menuConfig } = this.props
    const {
      feedName,
      feedDescription,
      feedUrl,
      feedKeyValue,
      defaultItemsToShow,
      mailChimpUrl,
      twitterFeedUrl,
      mailChimpListName,
    } = menuConfig[this.state.menuIndex]
    let modifiedFeedUrl = feedUrl
    if (feedKeyValue) {
      Object.getOwnPropertyNames(feedKeyValue).forEach(key => {
        modifiedFeedUrl = `${modifiedFeedUrl}&${key}=${feedKeyValue[key]}`
      });
    }
    return (
      <div className="row">
        <div className="col-xs-2 SRC-menuLayout SRC-menuPadding">
          {menuDropdown}
        </div>
        <div className="col-xs-10">
          {
            <>
              {mailChimpUrl && (
                <div className="SRC-mailchimpSubscribeContainer">
                  <h4>Subscribe</h4>
                  <p className="SRC-marginBottomTop">
                    Subscribe to receive the {mailChimpListName} by e-mail,
                    which provides information and updates related to the
                    Portal. You can opt out at any time by using the unsubscribe
                    link within the e-mail. We will not share your information
                    with any third parties or use it for any other purposes.
                  </p>
                  <div className="SRC-marginBottomTop">
                    <MailchimpSubscribe url={mailChimpUrl} />
                  </div>
                </div>
              )}
              <h3 className="srcRssFeed">{feedName}</h3>
              <p>{feedDescription}</p>
              <RssFeed
                key={modifiedFeedUrl}
                url={modifiedFeedUrl}
                defaultItemsToShow={defaultItemsToShow}
              />
            </>
          }
          {twitterFeedUrl && <TwitterFeed href={twitterFeedUrl} />}
        </div>
      </div>
    )
  }

  private renderMenu() {
    const { menuConfig } = this.props
    return menuConfig.map((config: MenuConfig, index: number) => {
      const isSelected: boolean = index === this.state.menuIndex
      const style: any = {}
      let selectedStyling: string = ''
      if (isSelected) {
        selectedStyling =
          'SRC-pointed SRC-whiteText SRC-primary-background-color SRC-pointed-triangle-right SRC-primary-background-color-border-left'
      } else {
        selectedStyling = 'SRC-blackText SRC-light-background'
      }
      return (
        <div
          key={config.feedName}
          className={`SRC-hand-cursor SRC-menu-button-base SRC-gap SRC-hoverWhiteText SRC-primary-background-color-hover ${selectedStyling}`}
          onClick={this.switchFeed(index)}
          role="button"
          tabIndex={0}
          style={style}
        >
          {config.feedName}
        </div>
      )
    })
  }
}
