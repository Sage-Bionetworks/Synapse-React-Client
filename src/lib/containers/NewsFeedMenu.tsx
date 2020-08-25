
import * as React from 'react'
import RssFeed from './RssFeed'
import TwitterFeed from './TwitterFeed'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { KeyValue } from '../utils/functions/sqlFunctions'
import { isEqual } from 'lodash-es'
import { Link } from 'react-router-dom'

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
  routeToNewsFeed: string // news feed nav bar links are hardcoded to this route, with query params set to the selected menu config key/value
}

/**
 * Deprecated, use RssFeedCards instead
 */
export default class NewsFeedMenu extends React.Component<
  NewsFeedMenuProps,
  {}
> {
  constructor(props: NewsFeedMenuProps) {
    super(props)
    this.getMenuIndex = this.getMenuIndex.bind(this)
  }

  public render() {
    const menuIndex = this.getMenuIndex()
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
    } = menuConfig[menuIndex]
    let modifiedFeedUrl = feedUrl
    if (feedKeyValue) {
      Object.getOwnPropertyNames(feedKeyValue).forEach(key => {
        modifiedFeedUrl = `${modifiedFeedUrl}&${key}=${feedKeyValue[key]}`
      })
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
                showMoreElements={true}
              />
            </>
          }
          {twitterFeedUrl && <TwitterFeed href={twitterFeedUrl} />}
        </div>
      </div>
    )
  }

  getMenuIndex = () => {
    let menuIndex = 0
    if (this.props.searchParams) {
      // do the search params match a menu config?
      this.props.menuConfig.forEach((config, index) => {
        if (
          config.feedKeyValue &&
          isEqual(this.props.searchParams, config.feedKeyValue)
        ) {
          menuIndex = index
        }
      })
    }
    return menuIndex
  }

  private renderMenu() {
    const menuIndex = this.getMenuIndex()
    const { menuConfig, routeToNewsFeed } = this.props
    return menuConfig.map((config: MenuConfig, index: number) => {
      const isSelected: boolean = index === menuIndex
      const style: any = {}
      let selectedStyling: string = ''
      if (isSelected) {
        selectedStyling =
          'SRC-pointed SRC-whiteText SRC-primary-background-color SRC-pointed-triangle-right SRC-primary-background-color-border-left'
      } else {
        selectedStyling = 'SRC-blackText SRC-light-background'
      }
      const urlParams = new URLSearchParams(window.location.search)
      if (config.feedKeyValue) {
        Object.getOwnPropertyNames(config.feedKeyValue).forEach(key => {
          urlParams.set(key, config.feedKeyValue![key])
        })
      }
      return (
        <Link
          key={config.feedName}
          className={`SRC-hand-cursor SRC-menu-button-base SRC-gap SRC-hoverWhiteText SRC-primary-background-color-hover SRC-no-underline-on-hover ${selectedStyling}`}
          role="button"
          tabIndex={0}
          style={style}
          to={{
            pathname: routeToNewsFeed,
            search: urlParams + '',
          }}
        >
          {config.feedName}
        </Link>
      )
    })
  }
}
