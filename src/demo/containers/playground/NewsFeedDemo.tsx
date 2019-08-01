import * as React from 'react'
import RssFeed from '../../../lib/containers/RssFeed'
import TwitterFeed from '../../../lib/containers/TwitterFeed'
export const NewsFeedDemo:React.SFC = () => {
  return (
    <div className="container">
      <RssFeed
        url={'https://portalnewsdev.wpengine.com/?feed=rss2&cat=2'}
      />
      <TwitterFeed
        href={'https://twitter.com/TwitterDev/lists/national-parks?ref_src=twsrc%5Etfw'}
      />
    </div>
  )
}
