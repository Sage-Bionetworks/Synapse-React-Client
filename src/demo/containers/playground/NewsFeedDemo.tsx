import * as React from 'react'
import RssFeed from '../../../lib/containers/RssFeed'
import TwitterFeed from '../../../lib/containers/TwitterFeed'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

export const NewsFeedDemo:React.SFC = () => {
  return (
    <div className="container">
      <RssFeed
        url={'https://portalnewsdev.wpengine.com/?feed=rss2&cat=2'}
      />
      <div className="SRC-mailchimpSubscribeContainer">
        <p>Sign up to receive the AD Knowledge Portal's quarterly newsletter</p>
        <label>Email Address</label>
        <MailchimpSubscribe
          url={'https://sagebase.us7.list-manage.com/subscribe/post?u=b146de537186191a9d2110f3a&amp;id=96b614587a'}
        />
      </div>
      <TwitterFeed
        href={'https://twitter.com/TwitterDev/lists/national-parks?ref_src=twsrc%5Etfw'}
      />
    </div>
  )
}


