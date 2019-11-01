import * as React from 'react'
import { shallow } from 'enzyme'
import NewsFeedMenu, {
  NewsFeedMenuProps,
} from '../../../lib/containers/NewsFeedMenu'
import RssFeed from '../../../lib/containers/RssFeed'
import TwitterFeed from '../../../lib/containers/TwitterFeed'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const createShallowComponent = (props: NewsFeedMenuProps) => {
  const wrapper = shallow<NewsFeedMenu>(<NewsFeedMenu {...props} />)
  const instance = wrapper.instance()
  return { wrapper, instance }
}

describe('it renders with basic functionality', () => {
  const feedName: string = 'feed1'
  const feedUrl: string = 'https://portalnewsstg.wpengine.com/?feed=rss2&cat=4'
  const defaultItemsToShow: number = 3
  const props: NewsFeedMenuProps = {
    menuConfig: [{ feedName, feedUrl, defaultItemsToShow }],
  }

  it('renders without crashing', () => {
    const wrapper = createShallowComponent(props)
    expect(wrapper).toBeDefined()
  })

  it('renders with a MailChimp signup', async () => {
    const mailChimpSignupText: string = 'Sign up now!'
    const mailChimpUrl: string =
      'https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&amp;id=96b614587a'
    const propsWithMailChimpSignup: NewsFeedMenuProps = {
      menuConfig: [
        {
          feedName,
          feedUrl,
          defaultItemsToShow,
          mailChimpSignupText,
          mailChimpUrl,
        },
      ],
    }
    const { wrapper } = await createShallowComponent(propsWithMailChimpSignup)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(RssFeed)).toHaveLength(1)
    expect(wrapper.find(MailchimpSubscribe)).toHaveLength(1)
    expect(wrapper.find(TwitterFeed)).toHaveLength(0)
  })

  it('renders with a Twitter feed', async () => {
    const twitterFeedUrl: string =
      'https://twitter.com/AMPADPortal?ref_src=twsrc%5Etfw'
    const propsWithMailChimpSignup: NewsFeedMenuProps = {
      menuConfig: [
        {
          feedName,
          feedUrl,
          defaultItemsToShow,
          twitterFeedUrl,
        },
      ],
    }
    const { wrapper } = await createShallowComponent(propsWithMailChimpSignup)
    expect(wrapper).toBeDefined()
    expect(wrapper.find(RssFeed)).toHaveLength(1)
    expect(wrapper.find(MailchimpSubscribe)).toHaveLength(0)
    expect(wrapper.find(TwitterFeed)).toHaveLength(1)
  })
})
