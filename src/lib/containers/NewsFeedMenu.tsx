import * as React from 'react'
import RssFeed from './RssFeed'
import TwitterFeed from './TwitterFeed'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

type MenuState = {
  menuIndex: number
}

export type MenuConfig = {
  feedName: string
  feedDescription: string
  feedUrl: string
  defaultItemsToShow: number
  mailChimpListName?: string
  mailChimpUrl?: string
  twitterFeedUrl?: string
}
export type NewsFeedMenuProps = {
  menuConfig: MenuConfig []
}

export default class NewsFeedMenu extends React.Component<NewsFeedMenuProps, MenuState> {
  constructor(props: NewsFeedMenuProps) {
    super(props)
    // See here - https://stackoverflow.com/questions/40063468/react-component-initialize-state-from-props/47341539#47341539
    this.state = {
      menuIndex: 0
    }
    this.switchFeed = this.switchFeed.bind(this)
  }

  /**
   * Handle user clicking menu item, event isn't used so we denote it as an _
   *
   * @memberof Menu
   */
  public switchFeed = (menuIndex: number) => (_: React.SyntheticEvent<HTMLDivElement>) => {
    // there's an odd bug where clicking a menu item twice will select the first tab,
    // this is a fix for that, but this shouldn't be necessary
    if (this.state.menuIndex !== menuIndex) {
      this.setState({ menuIndex })
    }
  }

  public render() {
    const menuDropdown = this.renderMenu()
    const { menuConfig } = this.props
    const { feedName, feedDescription, feedUrl, defaultItemsToShow, mailChimpUrl, twitterFeedUrl, mailChimpListName } = menuConfig[this.state.menuIndex]

    return (
      <React.Fragment>
        <div className="col-xs-2 SRC-menuLayout SRC-menuPadding">
          {menuDropdown}
        </div>
        <div className="col-xs-10">
          {
            <React.Fragment>
              <h4 className="srcRssFeed">{feedName}</h4>
              <p>{feedDescription}</p>
              <RssFeed
                key={feedUrl}
                url={feedUrl}
                defaultItemsToShow={defaultItemsToShow}
              />
            </React.Fragment>
          }
          {
            mailChimpUrl &&
            <div className="SRC-mailchimpSubscribeContainer">
              <h4 className="SRC-marginBottomTop">Subscribe</h4>
              <p className="SRC-marginBottomTop">Subscribe to receive the {mailChimpListName} by e-mail, which provides information and updates related to the Portal. </p>
              <p className="SRC-marginBottomTop">You can opt out at any time by using the unsubscribe link within the e-mail.</p>
              <p className="SRC-marginBottomTop">We will not share your information with any third parties or use it for any other purposes.</p>
              <div className="SRC-marginBottomTop">
                <MailchimpSubscribe
                  url={mailChimpUrl}
                />
              </div>
            </div>
          }
          {
            twitterFeedUrl &&
            <TwitterFeed
              href={twitterFeedUrl}
            />
          }
        </div>
      </React.Fragment>
    )
  }

  private renderMenu() {
    const { menuConfig } = this.props
    return menuConfig.map((config: MenuConfig, index: number) => {
      const isSelected: boolean = (index === this.state.menuIndex)
      const style: any = {}
      let selectedStyling: string = ''
      if (isSelected) {
        selectedStyling = 'SRC-pointed SRC-whiteText SRC-primary-background-color SRC-pointed-triangle-right SRC-primary-background-color-border-left'
      } else {
        selectedStyling = 'SRC-blackText SRC-light-background'
      }
      return (
        <div
          key={config.feedName}
          className={`SRC-hand-cursor SRC-menu-button-base SRC-hoverWhiteText SRC-primary-background-color-hover ${selectedStyling}`}
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