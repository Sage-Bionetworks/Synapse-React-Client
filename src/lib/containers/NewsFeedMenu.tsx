import * as React from 'react'
import RssFeed from './RssFeed'
import TwitterFeed from './TwitterFeed'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

type MenuState = {
  menuIndex: number
}

export type MenuConfig = {
  feedName: string
  feedUrl: string
  maxItemsToShow: number
  mailChimpSignupText?: string
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
    const { feedUrl, maxItemsToShow, mailChimpUrl, twitterFeedUrl, mailChimpSignupText } = menuConfig[this.state.menuIndex]
    return (
      <React.Fragment>
        <div className="col-xs-2 SRC-menuLayout SRC-menuPadding">
          {menuDropdown}
        </div>
        <div className="col-xs-10">
          {
            <RssFeed
              key={feedUrl}
              url={feedUrl}
              maxItemsToShow={maxItemsToShow}
            />
          }
          {
            mailChimpUrl &&
            <div className="SRC-mailchimpSubscribeContainer">
              <p>{mailChimpSignupText}</p>
              <label>Email Address</label>
              <MailchimpSubscribe
                url={mailChimpUrl}
              />
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